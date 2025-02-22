import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dashboard } from "./Dashboard";

test("renders heading with correct text", () => {
  render(<Dashboard />);

  const headingElement = screen.getByText(/Dashboard/i);

  expect(headingElement).toBeInTheDocument();
});
