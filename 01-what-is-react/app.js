// import React from "react";
// import ReactDOM from "react-dom/client";

// //creating the react element using JSX(html or more like xml syntax)

// //JSX -> transpiled by babel -> React.createElement() -> ReactElement -> render -> html element
// const heading = (
//   <h1 id="heading" className="header">
//     Welcome to react with jsx
//   </h1>
// );

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(heading);

// const Component = () => {
//   return (
//     <div>
//       <h1>This is called as babel</h1>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<Component />);

// import { jsx as _jsx } from "react/jsx-runtime";
// const Component = () => {
//   return /*#__PURE__*/ _jsx("div", {
//     children: /*#__PURE__*/ _jsx("h1", {
//       children: "This is called as babel",
//     }),
//   });
// };
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(/*#__PURE__*/ _jsx("Component", {}));
// import { jsx as _jsx } from "react/jsx-runtime";
// const Component = () => {
//   return /*#__PURE__*/ _jsx("div", {
//     id: "heading-container",
//     children: /*#__PURE__*/ _jsx("h1", {
//       id: "heading",
//       children: "This is the work done by babel, but I am transpiling myself",
//     }),
//   });
// };

// console.log("This is done before calling the component, am I right");

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(/*#__PURE__*/ _jsx(Component, {}));

import React from "react";
import ReactDOM from "react-dom/client";

//working with functional component
function Title() {
  return <h1>Title component</h1>;
}

//component composition
function MainComponent() {
  return (
    <div className="container">
      <Title />
      <p>This is component composition</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MainComponent />);
