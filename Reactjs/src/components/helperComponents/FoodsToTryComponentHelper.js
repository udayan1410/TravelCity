import React, { Component } from "react";

class FoodsToTryComponentHelper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moduleName: "",
      selectedImages: [],
      index: 0
    };

    this.state.index = this.props.id;
  }

  render() {
    return (
      <div style={{ display: "inline" }}>
        <h4 className="moduleCount">
          {this.props.id + 1}. Restaurant Name: {this.state.moduleName}
        </h4>
        <div className="inputFieldWrapper">
          <br />
          <div className="row">
            <label className="inputFieldLabel" htmlFor="restaurantName">
              Restaurant Name :{" "}
            </label>
            <input
              id="restaurantName"
              type="text"
              placeholder="Place Name"
              className="inputField"
              onChange={this.restaurantName}
            />
          </div>

          <br />

          <div className="row">
            <label className="inputFieldLabel" htmlFor="costfortwo">
              Cost For two :{" "}
            </label>
            <input
              id="costfortwo"
              type="number"
              placeholder="Approx Cost for Two"
              className="inputField"
              onChange={this.restaurantCostForTwo}
            />
          </div>

          <br />

          <div className="row">
            <label className="inputFieldLabel" htmlFor="bestFoods">
              Best Foods :{" "}
            </label>
            <input
              id="bestFoods"
              type="text"
              placeholder="Best Foods to Try"
              className="inputField"
              onChange={this.restaurantBestFoods}
            />
          </div>

          <br />

          <div className="row">
            <label className="inputFieldLabel" htmlFor="rating">
              Rating :{" "}
            </label>
            <input
              id="rating"
              type="number"
              placeholder="Rating"
              className="inputField"
              onChange={this.restaurantRating}
            />
          </div>

          <br />

          <div className="row">
            <label className="inputFieldLabel" htmlFor="cuisine">
              Cuisine :{" "}
            </label>
            <input
              id="cuisine"
              type="text"
              placeholder="Cuisine"
              className="inputField"
              onChange={this.restaurantCuisines}
            />
          </div>

          <br />

          <div className="row">
            <label className="inputFieldLabel" htmlFor="restaurantCoord">
              Restaurant Coordinates :{" "}
            </label>
            <input
              id="restaurantCoord"
              type="text"
              placeholder="Place Coordinates"
              className="inputField"
              onChange={this.restaurantCoord}
            />
          </div>

          <br />

          <div className="row">
            <label className="inputFieldLabel" htmlFor="restaurantCoordAndroid">
              Restaurant Coordinates Android :{" "}
            </label>
            <input
              id="restaurantCoordAndroid"
              type="text"
              placeholder="Place Coordinates Android"
              className="inputField"
              onChange={this.restaurantCoordAndroid}
            />
          </div>

          <br />

          <div className="row">
            <label className="inputFieldLabel" htmlFor="timingDetails">
              Timings (24 Hour Format) :{" "}
            </label>
            <div className="TimingDetails" id="timingDetails">
              <input
                id="timingsfrom"
                type="time"
                className="inputFieldTiming"
                onChange={this.restaurantTimingsFrom}
              />
              <label className="inputFieldLabel2" htmlFor="timingsto">
                {"  "}To{" "}
              </label>
              <input
                id="timingsto"
                type="time"
                className="inputFieldTiming"
                onChange={this.restaurantTimingsTo}
              />
            </div>
          </div>
        </div>
        <br />
        <br />

        <input
          id="restaurantImages"
          type="file"
          accept="image/*"
          multiple={true}
          onChange={this.restaurantImages}
          style={{ marginLeft: "400px" }}
        />

        <hr id="halfhr" />
      </div>
    );
  }

  restaurantName = event => {
    this.setState({
      moduleName: event.target.value
    });
    this.props.method(this.state.index, event.target.value, "restaurantName");
  };

  restaurantCoord = event => {
    this.props.method(this.state.index, event.target.value, "restaurantCoord");
  };

  restaurantCoordAndroid = event => {
    this.props.method(
      this.state.index,
      event.target.value,
      "restaurantCoordAndroid"
    );
  };

  restaurantCostForTwo = event => {
    this.props.method(
      this.state.index,
      event.target.value,
      "restaurantCostForTwo"
    );
  };

  restaurantBestFoods = event => {
    this.props.method(
      this.state.index,
      event.target.value,
      "restaurantBestFoods"
    );
  };

  restaurantRating = event => {
    this.props.method(this.state.index, event.target.value, "restaurantRating");
  };

  restaurantCuisines = event => {
    this.props.method(
      this.state.index,
      event.target.value,
      "restaurantCuisines"
    );
  };
  restaurantTimingsFrom = event => {
    this.props.method(
      this.state.index,
      event.target.value,
      "restaurantTimingsFrom"
    );
  };

  restaurantTimingsTo = event => {
    this.props.method(
      this.state.index,
      event.target.value,
      "restaurantTimingsTo"
    );
  };

  restaurantImages = event => {
    this.props.method(this.state.index, event.target.files, "restaurantImages");
  };
}

export default FoodsToTryComponentHelper;
