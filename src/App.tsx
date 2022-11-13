import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWord } from "./actions";
import "./App.css";
import { Card } from "./components";
import { WordState } from "./types";

function App() {
  const dispatch = useDispatch();

  const data = useSelector<{ word: WordState }>((state) => state.word);

  useEffect(() => {
    dispatch(getWord());
  }, []);

  return (
    <div data-testid="app" className="App">
      <Card data={data as WordState} />
    </div>
  );
}

export default App;
