import React from "react";
import ReactDOM from "react-dom/client";

//using the variable to hold the element -> need to evaluated using the expression => {}
//adding it using the jsx syntax
const heading = React.createElement(
  "h1",
  { key: "child 1", id: "child-1-element" },
  "This is the heading using react element"
);
console.log(heading);

//using the jsx to create the simple header

const heading2 = <h1>This is heading using jsx</h1>;

const Heading2 = () => <h1>This is heading using jsx</h1>;

const heading3 = React.createElement("div", {}, [
  heading,
  <Heading2 key="child 2" />,
]);

//using component to build header
const Heading = () => (
  <header>
    <h1>Heading 2</h1>
    <p>
      para <span>1</span>
    </p>
  </header>
);

console.log(<Heading />);
//using functional component -> embedding the component within another component is called  component composition
const Home = () => (
  <div>
    {/* {heading}
    {heading2}
    <Heading /> */}
    {heading3}
    <p>This is the paragraph</p>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

//ways to render a component
// root.render(<Home></Home>); =>while we are having the children within component
root.render(<Home />);
