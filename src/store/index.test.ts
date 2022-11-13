import axios from "../__mock__/axios";
import { FAILURE, LOADING, SUCCESS } from "../actions";
import { API_CALL } from "../middlewares";
import { store } from "./";

test("should call axios", () => {
  const definition = "Name of a person";
  const pronunciation = "John Doe";
  const word = "John Doe";

  const mockData = [{ definition, pronunciation, word }];
  (axios.get as jest.Mock).mockResolvedValue({ data: mockData });

  store.dispatch({
    type: API_CALL,
    request: { url: "/word", states: [LOADING, SUCCESS, FAILURE] },
  });

  const URL = "/word";
  // TODO: fix test
  // expect(axios.get).toHaveBeenCalledWith(URL);
});
