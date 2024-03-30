import { Component } from "react";
import DevGroup from "./DevGroup";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="about">
        <h1 style={{ fontSize: "40px" }}>About page</h1>
        <DevGroup name="first" location="Sirkazhi" />
      </div>
    );
  }
}

export default About;

/* the output log  of this class  

 - parent constructor
 - parent render

    <starting of Batched render phase>

    - first constructor
    - first render

      - first child constructor
      - first child render
      
    - second constructor
    - second render

      - second child constructor
      - second child render
    
    - third constructor
    - third render

      - third child constructor
      - third child render
      
    <ending of Batched render phase/>


    <starting of batched commit phase>

      - first child did mount
    - first did mount

      - second child did mount
    - second did mount

      - third child did mount
    - third did mount

    <ending of batched commit phase/>
  
  - parent did mount

  
*/
