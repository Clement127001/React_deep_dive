import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../components/About";

describe("About Page test cases", () => {
  it("should render heading to the screen", () => {
    render(<About />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load the button to the screen", () => {
    render(<About />);
    const button = screen.getByText("Contact Me");
    expect(button).toBeInTheDocument();
  });

  it("should the image", () => {
    render(<About />);
    const image = screen.getByAltText("developer");
    expect(image).toBeInTheDocument();
  });
});
