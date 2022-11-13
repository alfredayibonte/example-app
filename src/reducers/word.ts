import { createSlice } from "@reduxjs/toolkit";

export interface WordState {
  definition: string;
  pronunciation: string;
  word: string;
}

const initialState: WordState = {
  definition: "",
  pronunciation: "",
  word: "",
};

export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    setWord: (state: WordState, action: any) => {
      const { definition, pronunciation, word } = action.payload;
      state.definition = definition;
      state.pronunciation = pronunciation;
      state.word = word;
    },
  },
});

export const { setWord } = wordSlice.actions;

export default wordSlice.reducer;
