import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantsContainer from "../components/RestaurantsContainer";
import data from "../mocks/ResList.json";
import { BrowserRouter } from "react-router-dom";

describe("test the restauratns container data flow", () => {
  it("should search the restuarants list for ice", () => {
    render(
      <BrowserRouter>
        <RestaurantsContainer data={data} />
      </BrowserRouter>
    );

    const searchButton = screen.getByRole("button", { name: "Search" });
    const serachInput = screen.getByTestId("searchInput");

    //before searching
    const resListBeforeSearching = screen.getAllByTestId("resCard");

    expect(resListBeforeSearching.length).toBe(20);

    //firing the input change event -> click search button event
    fireEvent.change(serachInput, { target: { value: "ice" } });
    fireEvent.click(searchButton);

    //after searching
    const resListAfterSearching = screen.getAllByTestId("resCard");
    expect(resListAfterSearching.length).toBe(4);
  });

  it("should filter highly rated restaurants", () => {
    render(
      <BrowserRouter>
        <RestaurantsContainer data={data} />
      </BrowserRouter>
    );

    const filterBtn = screen.getByTestId("topRated");
    //before filtering
    const beforeFiltering = screen.getAllByTestId("resCard");
    expect(beforeFiltering.length).toBe(20);

    //firing the click event on filter button
    fireEvent.click(filterBtn);

    const afterFiltering = screen.getAllByTestId("resCard");
    expect(afterFiltering.length).toBe(11);
  });
});
