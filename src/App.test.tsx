import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./App";

test("renders heading with correct text", () => {
  render(<App />);

  const headingElement = screen.getByText(/Test Tailwind Css/i);

  expect(headingElement).toBeInTheDocument();
});
