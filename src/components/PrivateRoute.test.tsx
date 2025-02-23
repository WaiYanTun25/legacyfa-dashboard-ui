import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "@components/PrivateRoute";
import "@testing-library/jest-dom";
import { useAuth } from "@src/hooks/useAuth";

jest.mock("@src/hooks/useAuth");

const TestWrapper = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<div>Private Content</div>} />
      </Route>
      <Route path="/login" element={<div>Login Page</div>} />
    </Routes>
  </BrowserRouter>
);

describe("PrivateRoute", () => {
  it("should render the private content when the user is authenticated", () => {
    (useAuth as jest.Mock).mockReturnValue({ isAuthenticated: true });

    render(<TestWrapper />);

    expect(screen.getByText("Private Content")).toBeInTheDocument();
  });

  it("should redirect to login page when the user is not authenticated", () => {
    (useAuth as jest.Mock).mockReturnValue({ isAuthenticated: false });
    render(<TestWrapper />);

    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });
});
