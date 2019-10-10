import React, { Component } from "react";

class Placescomponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImages: [],
      moduleName: "",
      index: 0
    };

    this.state.index = this.props.id;
  }
  //index = this.props.id;

  render() {
    return (
      <div style={{ display: "inline" }}>
        <h4 className="moduleCount">
          {this.props.id + 1}. Place Name: {this.state.moduleName}
        </h4>
        <div className="inputFieldWrapper">
          <br />

          <div className="row">
            <label className="inputFieldLabel" htmlFor="place_name">
              Place Name :{" "}
            </label>
            <input
              id="place_name"
              type="text"
              placeholder="Place Name"
              className="inputField"
              onChange={this.placeName}
            />
          </div>
          <br />

          <div className="row">
            <label className="inputFieldLabel">Place Information : </label>

            <textarea
              type="text"
              id="place_info"
              rows="16"
              cols="42"
              className="inputField"
              placeholder="Place Information"
              onChange={this.placeInfo}
            />
          </div>

          <br />
          <div className="row">
            <label className="inputFieldLabel" htmlFor="place_coord">
              Place Coordinates :{" "}
            </label>
            <input
              id="place_coord"
              type="text"
              placeholder="Place Coordinates"
              className="inputField"
              onChange={this.placeCoord}
            />
          </div>

          <br />
          <div className="row">
            <label className="inputFieldLabel" htmlFor="place_coord">
              Place Coordinates Android :{" "}
            </label>
            <input
              id="place_coord"
              type="text"
              placeholder="Place Coordinates Android"
              className="inputField"
              onChange={this.placeCoordAndroid}
            />
          </div>

          <br />
          <br />
          <div className="row">
            <label className="inputFieldLabel" htmlFor="timingDetails">
              Timings (24 Hour Format) :
            </label>
            <div className="TimingDetails" id="timingDetails">
              <input
                id="timingsfrom"
                type="time"
                placeholder="Approx Cost for Two"
                className="inputFieldTiming"
                onChange={this.placeTimingsFrom}
              />
              <label className="inputFieldLabel2" htmlFor="timingsto">
                To{" "}
              </label>
              <input
                id="timingsto"
                type="time"
                placeholder="Approx Cost for Two"
                className="inputFieldTiming"
                onChange={this.placeTimingsTo}
              />
            </div>
          </div>
        </div>

        <br />

        <label className="inputFieldLabel3" htmlFor="dropdown">
          Select Type of Place :{" "}
        </label>
        <select id="dropdown" onChange={this.placeType}>
          <option value="Select Type">Select Type</option>
          <option value="Historical Place">Historical Place</option>
          <option value="Temple">Temple</option>
          <option value="Monument">Monument</option>
          <option value="Museum">Museum</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <br />
        <br />
        <br />
        <input
          id="imageFile"
          type="file"
          accept="image/*"
          multiple={true}
          onChange={this.uploadImage}
          style={{ marginLeft: "400px" }}
        />

        <hr id="halfhr" />
      </div>
    );
  }

  placeName = event => {
    let placeName = event.target.value;
    this.setState({
      moduleName: placeName
    });
    this.props.method(this.state.index, placeName, "placeName");
  };

  placeInfo = event => {
    let placeInfo = event.target.value;
    this.props.method(this.state.index, placeInfo, "placeInfo");
  };

  placeTimingsFrom = event => {
    this.props.method(this.state.index, event.target.value, "placeTimingsFrom");
  };

  placeTimingsTo = event => {
    this.props.method(this.state.index, event.target.value, "placeTimingsTo");
  };

  uploadImage = event => {
    this.props.method(this.state.index, event.target.files, "placeImages");
  };

  placeCoord = event => {
    this.props.method(this.state.index, event.target.value, "placeCoord");
  };

  placeType = event => {
    this.props.method(this.state.index, event.target.value, "placeType");
  };

  placeCoordAndroid = event => {
    this.props.method(
      this.state.index,
      event.target.value,
      "placeCoordAndroid"
    );
  };
}
export default Placescomponent;
