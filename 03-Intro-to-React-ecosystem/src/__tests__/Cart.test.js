import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MenuContainer from "../components/MenuContainer";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/store/appStore";
import MenuData from "../mocks/MenuData.test.json";

describe("test cart flow", () => {
  it("should load the accordion on the screen", () => {
    act(() =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <MenuContainer menus={MenuData} />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeading = screen.getByText("Dry Fruit Sweets (");
    expect(accordionHeading).toBeInTheDocument();
  });

  it("should have cart item 0 when rendering for the first time", () => {
    act(() =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <MenuContainer menus={MenuData} />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeading = screen.getByText("Dry Fruit Sweets (");
    fireEvent.click(accordionHeading);

    //before adding item to the store
    const cartCount = screen.getByTestId("cartCount");
    expect(cartCount.innerHTML).toBe("0");

    const cartButton = screen.getAllByTestId("cartBtn");
    fireEvent.click(cartButton[0]);
    fireEvent.click(cartButton[1]);

    expect(cartCount.innerHTML).toBe("2");
  });

  it("should have cart with 2 items", () => {
    act(() =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <MenuContainer menus={MenuData} />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeading = screen.getByText("Dry Fruit Sweets (");
    fireEvent.click(accordionHeading);

    const cartButton = screen.getAllByTestId("cartBtn");
    fireEvent.click(cartButton[0]);
    fireEvent.click(cartButton[1]);

    const cartItems = screen.getAllByTestId("cartItem");
    expect(cartItems.length).toBe(2);
  });

  it("should clear items when clicking the clear items", () => {
    act(() =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <MenuContainer menus={MenuData} />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeading = screen.getByText("Dry Fruit Sweets (");
    fireEvent.click(accordionHeading);

    const cartButton = screen.getAllByTestId("cartBtn");
    fireEvent.click(cartButton[0]);
    fireEvent.click(cartButton[1]);

    const clearItem = screen.getByTestId("clearItems");
    fireEvent.click(clearItem);

    const noCartItems = screen.getByRole("heading", { name: "Cart is empty" });
    expect(noCartItems).toBeInTheDocument();
  });
});
