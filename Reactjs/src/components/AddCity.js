import React, { Component } from "react";
import CityComponent from "./helperComponents/Citycomponent";
import "./css/AddCity.css";
import PlacesToVisitComponent from "./helperComponents/PlacesToVisitComponent";
import FoodsToTryComponent from "./helperComponents/FoodsToTryComponent";
import ShoppingComponent from "./helperComponents/ShoppingComponent";
import axios from "axios";
import FormData from "form-data";
import { ip } from "./constants.js";

class AddCity extends Component {
  placesImagesArray = [];

  state = {
    placesArray: [],
    foodsArray: [],
    shoppingArray: [],
    cityName: "",
    imageArrayPlaces: [],
    imageArrayFood: [],
    imageArrayShopping: [],
    dataSentMessage: false
  };
  render() {
    return (
      <div>
        <p className="title">TravelCity</p>
        <div className="background">
          <CityComponent method={this.getCityName} />
          <PlacesToVisitComponent method={this.getPlacesArray} />
          <FoodsToTryComponent method={this.getFoodArray} />
          <ShoppingComponent method={this.getShoppingArray} />
          {this.state.dataSentMessage ? (
            <h4
              className="inputFieldLabel"
              style={{ textAlign: "center", display: "block" }}>
              Data Sent Successfully
            </h4>
          ) : (
            <h1> </h1>
          )}
          <div className="buttonWrapper">
            <button
              type="submit"
              value="Submit"
              className="submitButton"
              style={{ outline: "0" }}
              onClick={this.submitDataToServer}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

  getPlacesArray = (placesArray, imageArrayPlaces) => {
    this.setState({
      placesArray: placesArray,
      imageArrayPlaces: imageArrayPlaces
    });
  };

  getFoodArray = (foodsArray, imageArrayFood) => {
    this.setState({
      foodsArray: foodsArray,
      imageArrayFood: imageArrayFood
    });
  };

  getShoppingArray = (ShoppingArray, imageArrayShopping) => {
    this.setState({
      shoppingArray: ShoppingArray,
      imageArrayShopping: imageArrayShopping
    });
  };

  getCityName = cityName => {
    this.setState({
      cityName: cityName
    });
  };

  getUrl = name => {
    let url = "";
    switch (name) {
      case "Pune":
        url = "pune";
        break;

      case "Mumbai":
        url = "mumbai";
        break;

      case "Delhi":
        url = "delhi";
        break;

      default:
        url = "";
    }
    return url;
  };

  uploadImages = imageArray => {
    let imageData = new FormData();
    var url = this.getUrl(this.state.cityName);

    for (let i = 0; i < imageArray.length; i++) {
      for (let j = 0; j < imageArray[i].length; j++) {
        imageData.append("image", imageArray[i][j], imageArray[i][j].name);
      }
    }

    axios
      .post(`${ip}/addCity/${url}/uploadImages`, imageData, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${imageData._boundary}`
        }
      })
      .then(response => {
        console.log(response);
      });
  };

  submitDataToServer = () => {
    let JSONObject = {
      cityName: this.state.cityName,
      placesArray: this.state.placesArray,
      foodsArray: this.state.foodsArray,
      shoppingArray: this.state.shoppingArray
    };

    axios.post(`${ip}/addCity/sendData`, JSONObject, {}).then(response => {
      console.log(response);
    });

    this.uploadImages(this.state.imageArrayPlaces);
    this.uploadImages(this.state.imageArrayFood);
    this.uploadImages(this.state.imageArrayShopping);
    this.setState({
      dataSentMessage: true
    });
  };
}

export default AddCity;
