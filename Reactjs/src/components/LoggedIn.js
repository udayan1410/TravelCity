import React, { Component } from "react";
import { Redirect } from "react-router";

class LoggedIn extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.location.state);

    this.state = {
      username: this.props.location.state.name,
      password: this.props.location.state.password
    };
  }

  render() {
    if (this.state.username !== "admin" && this.state.password !== "admin") {
      return <Redirect to="/loginFailed" />;
    }
    return <Redirect to="/showCities" />;
  }
}

export default LoggedIn;
