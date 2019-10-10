import React, { Component } from "react";
import "./css/stylesheet.css";
import { Link } from "react-router-dom";

class Welcome extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div>
        <p className="title">TravelCity</p>

        <div className="Navbar">
          <p className="headerElement">Wander.</p>
          <p className="headerElement">Explore.</p>
          <p className="headerElement">Discover.</p>
        </div>
        <div className="loginForm">
          <p id="loginText">Sign In</p>
          <input
            type="text"
            className="inputFields"
            placeholder="Username"
            onChange={this.getLoginCredentials}
          />
          <input
            type="password"
            className="inputFields"
            placeholder="Password"
            onChange={this.getLoginCredentials}
          />
          <Link
            to={{
              pathname: "/loginCheck",
              state: {
                name: `${this.state.username}`,
                password: `${this.state.password}`
              }
            }}
            className="buttonEffect">
            Submit
          </Link>
        </div>
      </div>
    );
  }

  getLoginCredentials = event => {
    if (event.target.placeholder === "Username") {
      this.setState({
        username: event.target.value
      });
    } else {
      this.setState({
        password: event.target.value
      });
    }
  };
}

export default Welcome;
