//how to add heading the react way
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "welcome to react - created by react"
); //heading the js object to be rendered by react
// console.log(heading);
const root = ReactDOM.createRoot(document.querySelector("#root"));
// console.log(root);
root.render(heading); //this is where the actual magic is happening
