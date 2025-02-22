import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "@components/PrivateRoute";
import "@testing-library/jest-dom";

const TestWrapper = ({ isAuthenticated }: { isAuthenticated: boolean }) => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<PrivateRoute isAuthenticated={isAuthenticated} />}
      >
        <Route path="/" element={<div>Private Content</div>} />
      </Route>
      <Route path="/login" element={<div>Login Page</div>} />
    </Routes>
  </BrowserRouter>
);

describe("PrivateRoute", () => {
  it("should render the private content when the user is authenticated", () => {
    render(<TestWrapper isAuthenticated={true} />);

    expect(screen.getByText("Private Content")).toBeInTheDocument();
  });

  it("should redirect to login page when the user is not authenticated", () => {
    render(<TestWrapper isAuthenticated={false} />);

    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });
});
