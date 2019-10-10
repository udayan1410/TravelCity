import React, { Component } from "react";

class ShoppingComponentHelper extends Component {
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
          {this.props.id + 1}. Shopping Place Name: {this.state.moduleName}
        </h4>
        <div className="inputFieldWrapper">
          <br />
          <div className="row">
            <label className="inputFieldLabel" htmlFor="shopName">
              Shopping Place Name :{" "}
            </label>
            <input
              id="shopName"
              type="text"
              placeholder="Shopping Place Name"
              className="inputField"
              onChange={this.shopName}
            />
          </div>

          <br />

          <div className="row">
            <label className="inputFieldLabel" htmlFor="shopCoord">
              Shopping Coordinates :{" "}
            </label>
            <input
              id="shopCoord"
              type="text"
              placeholder="Shopping Coordinates"
              className="inputField"
              onChange={this.shopCoord}
            />
          </div>

          <br />

          <div className="row">
            <label className="inputFieldLabel" htmlFor="shopCoordAndroid">
              Shopping Coordinates Android :{" "}
            </label>
            <input
              id="shopCoordAndroid"
              type="text"
              placeholder="Shopping Coordinates Android"
              className="inputField"
              onChange={this.shopCoordAndroid}
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
                placeholder="Shop Timings"
                className="inputFieldTiming"
                onChange={this.shopTimingFrom}
              />
              <label className="inputFieldLabel2" htmlFor="timingsto">
                {"  "}To{" "}
              </label>
              <input
                id="timingsto"
                type="time"
                placeholder="Shop Timings"
                className="inputFieldTiming"
                onChange={this.shopTimingTo}
              />
            </div>
          </div>
        </div>
        <br />
        <label className="inputFieldLabel3" htmlFor="dropdown">
          Select Type of Shop :{" "}
        </label>
        <select id="dropdown" onChange={this.shopType}>
          <option value="Select Type">Select Type</option>
          <option value="Street">Street Shop</option>
          <option value="Shop">Shop</option>
          <option value="Mall">Mall</option>
        </select>
        <br />
        <br />
        <input
          id="shopImages"
          type="file"
          accept="image/*"
          multiple={true}
          onChange={this.shopImages}
          style={{ marginLeft: "400px" }}
        />
        <hr id="halfhr" />
      </div>
    );
  }

  shopName = event => {
    this.setState({
      moduleName: event.target.value
    });
    this.props.method(this.state.index, event.target.value, "shopName");
  };

  shopCoord = event => {
    console.log(this.state.index);
    this.props.method(this.state.index, event.target.value, "shopCoord");
  };

  shopCoordAndroid = event => {
    this.props.method(this.state.index, event.target.value, "shopCoordAndroid");
  };

  shopTimingFrom = event => {
    this.props.method(this.state.index, event.target.value, "shopTimingFrom");
  };

  shopTimingTo = event => {
    this.props.method(this.state.index, event.target.value, "shopTimingTo");
  };

  shopImages = event => {
    this.props.method(this.state.index, event.target.files, "shopImages");
  };

  shopType = event => {
    this.props.method(this.state.index, event.target.value, "shopType");
  };
}

export default ShoppingComponentHelper;
