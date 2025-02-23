import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dashboard } from "./Dashboard";
import { ThemeProvider } from "@services/provider/ThemeProvider";
import { AuthProvider } from "@services/provider/AuthProvider";

global.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: query === "(prefers-color-scheme: dark)",
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </AuthProvider>
);

test("renders heading with correct text", () => {
  render(<Dashboard />, { wrapper: Wrapper });

  const headingElement = screen.getByText(/Dashboard/i);

  expect(headingElement).toBeInTheDocument();
});

test("should toggle theme on button click", () => {
  render(<Dashboard />, { wrapper: Wrapper });
});
