import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/store/appStore";
import Header from "../components/Header";

describe("test the header component is rendered", () => {
  it("should render the login button on to the screen", () => {
    //step to conduct the test
    //1-> render the Component
    //2-> query element
    //3-> assertion

    //1-> render the Component
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    //2-> query the element, query is need to be more descriptive
    const button = screen.getByRole("link", { name: "Login" });
    // console.log(button);

    //3-> assertion
    expect(button).toBeInTheDocument();
  });

  it("should render the cart with 0 elements", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cart = screen.getByAltText("your cart");
    expect(cart).toBeInTheDocument();
  });
});
