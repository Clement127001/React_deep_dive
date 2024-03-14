//how to add heading the react way

// //<h1>Welcome to react - created by react</h1>
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "welcome to react - created by react"
// );

// console.log(heading);

//creating the nested structure using the react.createElement()
/*
<div id="parent">

    <div id="child1">
        <h1>Heading tag h1</h1>
        <h2>Heading tag h2</h2>
    </div>

    <div id="child2">
        <h1>Heading tag h1</h1>
        <h2>Heading tag h2>/h2>
    </div>

</div>
*/

const nestedElement = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "heading 1" }, "Heading tag h1"),
    React.createElement("h2", { key: "heading2" }, "Heading tag h2"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "heading1" }, "Heading tag h1"),
    React.createElement("h2", { key: "heading2" }, "Heading tag h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(nestedElement);
