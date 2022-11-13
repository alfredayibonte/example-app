import {
  NOTIFICATION_TYPE_FAILURE,
  NOTIFICATION_TYPE_SUCCESS,
  SHOW_NOTIFICATION,
} from "../actions/notification";
import ApiCall from "../services";

// Action key that carries API call info interpreted by this Redux middleware.
export const API_CALL = "API_CALL";

// A Redux middleware that interprets actions with API_CALL info specified.
// Performs the call and promises when such actions are dispatched.
const customMiddleware = () => (next: any) => (action: any) => {
  if (action.type !== API_CALL) {
    return next(action);
  }

  const {
    normalizer = <T>(d: any): T => d,
    states,
    method = "GET",
    data,
    url,
    alertMessages,
    headers = {
      "cache-control": "no-cache",
      "Content-Type": "application/json",
    },
  } = action.request;

  if (typeof url !== "string") {
    throw new Error("Specify a string url URL.");
  }
  if (typeof method !== "string") {
    throw new Error("Specify a string method of type GET, POST, PUT, PATCH.");
  }
  if (!normalizer) {
    throw new Error("Specify one of the exported Schemas.");
  }
  if (!Array.isArray(states) || states.length !== 3) {
    throw new Error("Expected an array of three action states.");
  }
  if (!states.every((type) => typeof type === "string")) {
    throw new Error("Expected action states to be strings.");
  }
  if (alertMessages && alertMessages.length !== 2) {
    throw new Error("Expected an array of two string message.");
  }

  const actionWith = (res: any) => {
    const newAction = { ...action, ...res };
    delete newAction[API_CALL];
    return newAction;
  };

  const [requestType, successType, failureType] = states;
  next(actionWith({ type: requestType }));

  return ApiCall({ url, method, data, headers }, normalizer).then(
    (payload) => {
      if (alertMessages && alertMessages[0]) {
        next(
          actionWith({
            type: SHOW_NOTIFICATION,
            payload: {
              type: NOTIFICATION_TYPE_SUCCESS,
              content: alertMessages[0],
              res: payload,
            },
          })
        );
      }
      return next(
        actionWith({
          payload,
          type: successType,
        })
      );
    },
    (error) => {
      if (alertMessages && alertMessages[1]) {
        next(
          actionWith({
            type: SHOW_NOTIFICATION,
            payload: {
              type: NOTIFICATION_TYPE_FAILURE,
              content: alertMessages[1],
            },
          })
        );
      }
      return next(
        actionWith({
          type: failureType,
          error: error.message || "Something went wrong",
        })
      );
    }
  );
};

export default customMiddleware;
