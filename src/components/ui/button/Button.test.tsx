import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  test("should render with default label", () => {
    render(<Button />);

    const buttonElement = screen.getByText(/Button/i);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Button");
  });

  test("should render with custom label", () => {
    const customLabel = "Submit";
    render(<Button label={customLabel} />);

    const buttonElement = screen.getByText(/Submit/i);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(customLabel);
  });

  test("should trigger onClick event when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);

    const buttonElement = screen.getByText(/Button/i);

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
