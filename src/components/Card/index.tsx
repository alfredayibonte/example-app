import { WordState } from "../../types";

interface Props {
  data: WordState;
}

export const Card = ({ data }: Props) => {
  const { definition, word, pronunciation } = data;
  return (
    <div>
      <div>{word}</div>
      <div>{definition}</div>
      <div>{pronunciation}</div>
    </div>
  );
};
