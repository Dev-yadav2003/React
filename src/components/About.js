import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  render() {
    return (
      <div className="about-app">
        <h1>About Us</h1>
        <h4>Welcome to Foodish!</h4>
        <p>
          At Foodish, we are passionate about bringing delicious food to your
          doorstep, ensuring that your cravings are satisfied with just a few
          taps. Our mission is to connect food lovers with their favorite
          restaurants, offering a seamless and enjoyable food delivery
          experience.
        </p>

        <UserClass
          name={"devendra"}
          location={"Delhi"}
        />
      </div>
    );
  }
}

export default About;
