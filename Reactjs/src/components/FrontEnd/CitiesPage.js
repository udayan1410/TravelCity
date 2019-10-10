import React, { Component } from "react";
import "../css/FrontEnd.css";
import { Grid } from "react-mdl";
import axios from "axios";
import { ip } from "../constants.js";
import CityCellRender from "./CityCellRender";

class FetchImage extends Component {
  state = {
    cityNamesArray: []
  };

  componentDidMount() {
    axios.get(`${ip}/getCityNames`).then(response => {
      this.setState({ cityNamesArray: response.data });
    });
  }

  render() {
    return (
      <div>
        <p className="title">Choose City</p>
        <div className="febackground">
          <Grid>
            {this.state.cityNamesArray.map(element => (
              <React.Fragment key={element._id}>
                <CityCellRender cityNames={element.name} />
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default FetchImage;
