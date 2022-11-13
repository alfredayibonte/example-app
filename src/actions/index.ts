import { API_CALL } from "../middlewares";
import { wordTransformer } from "../normalizers";

export const LOADING = "LOADING";
export const SUCCESS = "word/setWord";
export const FAILURE = "FAILURE";

export const getWord = () => {
  return {
    type: API_CALL,
    request: {
      url: "/word",
      states: [LOADING, SUCCESS, FAILURE],
      normalizer: wordTransformer,
    },
  };
};
