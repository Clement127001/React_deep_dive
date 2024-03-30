//we are getting old -> legacy

import React, { useEffect, useState } from "react";

//creation of components
//1-> functional component -> new and easy to use ! never compare life cycle methods with functional component
//2 -> class based component -> old and not easy as functional component
class DevGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy_name",
        location: "Dummy_location",
      },
    };
  }

  async componentDidMount() {
    this.timer = setInterval(
      () => console.log("class based Component interval"),
      1000
    );
    // const response = await fetch("https://api.github.com/users/Clement127001");
    // const data = await response.json();

    this.setState({ userInfo: { name: "Clement", location: "Sirkazhi" } });
  }

  componentDidUpdate() {
    console.log("State updated");
  }

  componentWillUnmount() {
    console.log("the component is unmounted");
    clearInterval(this.timer);
  }

  render() {
    const { name, location } = this.state.userInfo;

    return (
      <div className="dev-container">
        <h2 className="heading">{name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default DevGroup;

// alternate functional component
// export default DevGroup = () => {
//   const [user, setUser] = useState({
//     name: "Dummy_name",
//     location: "Dummy_location",
//   });

//   const fetchUser = async () => {
//     const data = { name: "Clement", location: "Sirkazhi" };
//     setUser(data);
//   };
//   useEffect(() => {
//     // const response = await fetch("https://api.github.com/users/Clement127001");
//     // const data = await response.json();

//     const timer = setInterval(
//       () => console.log("functional componenet interval"),
//       1000
//     );
//     fetchUser();

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <div className="dev-container">
//       <h2 className="heading">{user.name}</h2>
//       <h3>Location: {user.location}</h3>
//     </div>
//   );
// };
