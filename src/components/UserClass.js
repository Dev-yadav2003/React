import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "userName",
        location: "userLocation",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/Dev-yadav2003");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
        <h4>Contact: dev@yadav</h4>
      </div>
    );
  }
}

export default UserClass;
