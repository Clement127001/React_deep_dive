import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import RestaurantCard, { withHighlyRated } from "../components/RestaurantCard";
import ResMockData from "../mocks/RestaurantsCardMock.json";
import ResHighlyRated from "../mocks/ResHighlyRatedMock.json";

describe("test the restaurants card component", () => {
  it("should render the component with the props", () => {
    render(
      <BrowserRouter>
        <RestaurantCard resData={ResMockData} />
      </BrowserRouter>
    );

    const actualName = "Pizza Hut";
    const name = screen.getByText(actualName);
    expect(name).toBeInTheDocument();
  });

  //rendering the higher order component is as same as rendering within the react component
  it("should render the higher order component", () => {
    const ResWithLabel = withHighlyRated(RestaurantCard);

    render(
      <BrowserRouter>
        <ResWithLabel resData={ResHighlyRated} />
      </BrowserRouter>
    );

    const highlyRatedLabel = screen.getByText("Highly Rated");

    expect(highlyRatedLabel).toBeInTheDocument();
  });
});
