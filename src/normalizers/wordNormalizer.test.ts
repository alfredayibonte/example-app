import { wordTransformer } from "./wordNormalizer";

test("should transform data", () => {
  const definition = "Name of a person";
  const pronunciation = "John Doe";
  const word = "John Doe";

  expect(wordTransformer([{ definition, pronunciation, word }])).toEqual({
    definition,
    pronunciation,
    word,
  });
});
