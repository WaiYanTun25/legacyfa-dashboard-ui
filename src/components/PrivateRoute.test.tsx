import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "@components/PrivateRoute";
import "@testing-library/jest-dom";
import { useAuth } from "@src/hooks/useAuth";

jest.mock("@src/hooks/useAuth");

const mockAuthContext = {
  isAuthenticated: false,
  login: jest.fn(),
  logout: jest.fn(),
  userData: null,
};

(useAuth as jest.Mock).mockReturnValue(mockAuthContext);

describe("PrivateRoute", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the private content when the user is authenticated", () => {
    (useAuth as jest.Mock).mockReturnValue({
      ...mockAuthContext,
      isAuthenticated: true,
    });

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<div>Private Content</div>} />
          </Route>
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Private Content")).toBeInTheDocument();
    expect(screen.queryByText("Login Page")).not.toBeInTheDocument();
  });

  it("should redirect to login page when the user is not authenticated", () => {
    (useAuth as jest.Mock).mockReturnValue({
      ...mockAuthContext,
      isAuthenticated: false,
    });

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<div>Private Content</div>} />
          </Route>
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>,
    );
  });
});
