//how to add heading the react way
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "welcome to react - created by react"
); //heading the js object to be rendered by react
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

//Jsx -> react element(object) -> render() -> h1
const nestedComponent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1" }, "Heading tag h1"),
    React.createElement("h2", { key: "h2" }, "Heading tag h2"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1" }, "Heading tag h1"),
    React.createElement("h2", { key: "h2" }, "Heading tag h2"),
  ]),
]);

console.log(nestedComponent);

const root = ReactDOM.createRoot(document.querySelector("#root"));
// console.log(root);
root.render(nestedComponent); //this is where the actual magic is happening
