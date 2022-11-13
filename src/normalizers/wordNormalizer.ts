import { WordState } from "../types";

export const wordTransformer = (data: WordState[]) => {
  const [word = {}] = data;
  return word;
};
