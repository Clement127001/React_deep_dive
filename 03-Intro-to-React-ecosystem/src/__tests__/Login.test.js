import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
import Header from "../components/Header";
import Login from "../components/Login";

describe("test the login flow", () => {
  it("should login the user on to the application", () => {
    act(() =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <Login />
          </Provider>
        </BrowserRouter>
      )
    );

    //action -> login button clicked -> login details entered -> user login then , logout should visible and name is also visible

    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);

    const userForm = screen.getByTestId("userForm");

    fireEvent.submit(userForm, {
      target: {
        user: { value: "clement" },
        email: { value: "babiyonclement18@gmail.com" },
        password: { value: "clement@12" },
      },
    });

    const userName = screen.getByTestId("userName");
    expect(userName.innerHTML).toBe("clement");

    const logoutButton = screen.getByText("Logout");
    expect(logoutButton).toBeInTheDocument();
  });
});
