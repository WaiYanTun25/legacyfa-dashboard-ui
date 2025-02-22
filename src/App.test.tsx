import { render, screen } from "@testing-library/react";
import { App } from "./App";
import "@testing-library/jest-dom";

test("renders heading with correct text and styles", () => {
  render(<App />);

  const headingElement = screen.getByText(/Test Tailwind Css/i);

  expect(headingElement).toBeInTheDocument();
});
