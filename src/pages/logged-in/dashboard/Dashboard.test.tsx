import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dashboard } from "./Dashboard";
import { ReactNode } from "react";

export const mockThemeContext = {
  theme: "light",
  setTheme: jest.fn(),
};

jest.mock("@src/hooks", () => ({
  useTheme: () => mockThemeContext,
}));

export const TestWrapper = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Dashboard", () => {
  it("renders Dashboard component with correct headings", async () => {
    render(<Dashboard />, { wrapper: TestWrapper });

    const salesHeading = await screen.findByText(/Today Sales/i);
    expect(salesHeading).toBeInTheDocument();

    const salesSubHeading = await screen.findByText(/Sales Summary/i);
    expect(salesSubHeading).toBeInTheDocument();
  });
});
