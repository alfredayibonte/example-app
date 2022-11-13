import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render, screen } from "@testing-library/react";
import App from "./App";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => ({ definition: "", word: "", pronunciation: "" })),
  useDispatch: () => mockDispatch,
}));

test("renders App", () => {
  (useSelector as jest.Mock).mockReturnValue({
    definition: "",
    word: "",
    pronunciation: "",
  });

  render(<App />);
  const appMainDiv = screen.getByTestId("app");
  expect(appMainDiv).toBeInTheDocument();
});
