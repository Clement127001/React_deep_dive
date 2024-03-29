//we are getting old -> legacy

import React from "react";

//creation of components
//1-> functional component -> new and easy to use
//2 -> class based component -> old and not easy as functional component
class DevGroup extends React.Component {
  //for getting the props via constructor
  constructor(props) {
    super(props); //here we are passing to the parent to ensure the props are intialized properly and accessed via this.props
  }

  //render method helps to create the jsx
  render() {
    const { name, location } = this.props;

    // useEffect(() => {
    //   console.log("Am I called");
    // }, []); this will throws an error, but why? -> because hooks can only be used with functional component
    function printName() {
      console.log("I am called");
    }
    return (
      <div className="dev-container">
        <h2 className="heading" onClick={printName}>
          {name}
        </h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default DevGroup;
