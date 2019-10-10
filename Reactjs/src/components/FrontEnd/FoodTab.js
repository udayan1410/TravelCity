import React, { Component } from "react";
import FoodsTabHelper from "./FoodsTabHelper";
import { ip, capitalize } from "../constants.js";
import axios from "axios";
import { Grid } from "react-mdl";

class FoodTab extends Component {
  target = { checked: false };
  target2 = { checked: false };
  updatedPrice = false;
  updatedCuisine = false;

  constructor(props) {
    super(props);

    this.state = {
      cityName: props.cityName,
      foodsDataArray: [],
      foodsDataArrayFinal: []
    };
  }

  componentDidMount() {
    axios
      .get(`${ip}/getCityData/${capitalize(this.state.cityName)}`)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            foodsDataArray: response.data[0].foodsArray.sort(function(a, b) {
              if (a.restaurantName < b.restaurantName) return -1;
              if (a.restaurantName > b.restaurantName) {
                return 1;
              }
              return 0;
            }),
            foodsDataArrayFinal: response.data[0].foodsArray.sort(function(
              a,
              b
            ) {
              if (a.restaurantName < b.restaurantName) return -1;
              if (a.restaurantName > b.restaurantName) {
                return 1;
              }
              return 0;
            })
          });
        }
      });
  }

  render() {
    return (
      <div>
        {/* Filter Tab */}
        <div className="filterTabFood">
          <h2 className="filterText">Filters </h2>
          <br />
          <button
            type="submit"
            value="Clear Filter"
            className="addOrRemoveElement"
            style={{
              textAlign: "center",
              marginLeft: "30%",
              marginRight: "20%"
            }}
            onClick={this.clearFilter}>
            Clear Filters
          </button>
          <h5 className="filterText" style={{ textDecoration: "underline" }}>
            Select Price Range
          </h5>
          <div className="FilterRadioButton">
            <input
              type="radio"
              name="price"
              value="500"
              className="radiobtn"
              onChange={this.change}
            />
            100 to 500
            <br />
            <input
              type="radio"
              name="price"
              value="1000"
              className="radiobtn"
              onChange={this.change}
            />
            500 to 1000
            <br />
            <input
              type="radio"
              name="price"
              value="1500"
              className="radiobtn"
              onChange={this.change}
            />
            1000 to 1500
            <br />
            <input
              type="radio"
              name="price"
              value="1501"
              className="radiobtn"
              onChange={this.change}
            />
            1500+
            <br />
          </div>
          <div>
            <h5 className="filterText" style={{ textDecoration: "underline" }}>
              Select Cuisine
            </h5>
            <div className="foodCheckBox">
              <input
                type="radio"
                name="cuisine"
                value="Continental"
                onChange={this.checkboxChange}
                className="checkbox"
              />
              Continental
              <br />
              <input
                type="radio"
                name="cuisine"
                value="Bakery"
                onChange={this.checkboxChange}
                className="checkbox"
              />
              Bakery
              <br />
              <input
                type="radio"
                name="cuisine"
                value="Beverages"
                onChange={this.checkboxChange}
                className="checkbox"
              />
              Beverages
              <br />
              <input
                type="radio"
                name="cuisine"
                value="Street Food"
                onChange={this.checkboxChange}
                className="checkbox"
              />
              Street Food
              <br />
              <input
                type="radio"
                name="cuisine"
                value="Finger Food"
                onChange={this.checkboxChange}
                className="checkbox"
              />
              Finger Food
              <br />
              <input
                type="radio"
                name="cuisine"
                value="Asian"
                onChange={this.checkboxChange}
                className="checkbox"
              />
              Asian
              <br />
            </div>
          </div>
        </div>

        {/* Main Layout*/}
        <div className="mainTabbedLayout">
          <Grid>
            {this.state.foodsDataArray.length > 0 ? (
              this.state.foodsDataArray.map(element => (
                <React.Fragment key={element.restaurantName}>
                  <FoodsTabHelper
                    cityData={element}
                    cityName={this.state.cityName}
                  />
                </React.Fragment>
              ))
            ) : (
              <h1 className="headerElement">No Data Found</h1>
            )}
          </Grid>
        </div>
      </div>
    );
  }

  change = event => {
    this.target = event.target;
    let minVal = parseInt(event.target.value - 500);
    let maxVal = parseInt(event.target.value);

    if (maxVal === 1501) {
      maxVal = 10000;
      minVal = 1501;
    }

    let filteredArray;
    if (this.updatedCuisine) {
      filteredArray = this.state.foodsDataArray.filter(
        element =>
          element.restaurantCostForTwo > minVal &&
          element.restaurantCostForTwo < maxVal
      );
    } else {
      filteredArray = this.state.foodsDataArrayFinal.filter(
        element =>
          element.restaurantCostForTwo > minVal &&
          element.restaurantCostForTwo < maxVal
      );
    }

    this.setState({
      foodsDataArray: filteredArray
    });
    this.updatedPrice = true;
  };

  checkboxChange = event => {
    this.target2 = event.target;
    let filteredArray;
    if (this.updatedPrice) {
      filteredArray = this.state.foodsDataArray.filter(function(element) {
        if (element.restaurantCuisines.includes(event.target.value))
          return element;
        return null;
      });
    } else {
      filteredArray = this.state.foodsDataArrayFinal.filter(function(element) {
        if (element.restaurantCuisines.includes(event.target.value))
          return element;
        return null;
      });
    }

    this.setState({
      foodsDataArray: filteredArray
    });
    this.updatedCuisine = true;
  };

  clearFilter = () => {
    this.setState({
      foodsDataArray: this.state.foodsDataArrayFinal
    });

    this.target.checked = false;
    this.target2.checked = false;
    this.updatedCuisine = false;
    this.updatedPrice = false;
  };
}

export default FoodTab;
