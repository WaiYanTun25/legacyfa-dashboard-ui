import { render, screen } from "@testing-library/react";
import { Input } from "@components/ui";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Input Component", () => {
  test("should render input with label", () => {
    render(<Input label="Username" onChange={() => {}} placeholder="" />);

    expect(screen.getByText("Username")).toBeInTheDocument();

    const inputElement = screen.getByLabelText(/username/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("should have the correct placeholder", () => {
    render(
      <Input
        label="Username"
        placeholder="Enter your username"
        onChange={() => {}}
      />,
    );

    const inputElement = screen.getByPlaceholderText("Enter your username");
    expect(inputElement).toBeInTheDocument();
  });

  test("should trigger onChange event when typing", async () => {
    const handleChange = jest.fn();
    render(<Input label="Username" onChange={handleChange} placeholder="" />);

    const inputElement = screen.getByLabelText(/username/i);

    await userEvent.type(inputElement, "JohnDoe");

    expect(handleChange).toHaveBeenCalledTimes(7);
    expect(inputElement).toHaveValue("");
  });
});
