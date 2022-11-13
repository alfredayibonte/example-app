import reducer, { setWord, WordState } from "./word";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    definition: "",
    pronunciation: "",
    word: "",
  });
});

test("should handle a todo being added to an empty list", () => {
  const previousState: WordState = {
    definition: "",
    pronunciation: "",
    word: "",
  };

  const definition = "Name of a person";
  const pronunciation = "John Doe";
  const word = "John Doe";

  expect(
    reducer(
      previousState,
      setWord({
        definition,
        pronunciation,
        word,
      })
    )
  ).toEqual({
    definition,
    pronunciation,
    word,
  });
});
