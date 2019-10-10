import React, { Component } from "react";
import ShoppingTabHelper from "./ShoppingTabHelper";
import { ip, capitalize } from "../constants.js";
import axios from "axios";
import { Grid } from "react-mdl";

class ShoppingTab extends Component {
  target;
  constructor(props) {
    super(props);

    this.state = {
      cityName: props.cityName,
      shopsDataArray: [],
      shopsDataArrayFinal: []
    };
  }

  componentDidMount() {
    axios
      .get(`${ip}/getCityData/${capitalize(this.state.cityName)}`)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            shopsDataArray: response.data[0].shoppingArray.sort(function(a, b) {
              if (a.shopName < b.shopName) return -1;
              if (a.shopName > b.shopName) {
                return 1;
              }
              return 0;
            }),
            shopsDataArrayFinal: response.data[0].shoppingArray.sort(function(
              a,
              b
            ) {
              if (a.shopName < b.shopName) return -1;
              if (a.shopName > b.shopName) {
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
        <div className="filterTab">
          <h2 className="filterText">Filters</h2>
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
          <br />
          <br />
          <div className="FilterRadioButton">
            <input
              type="radio"
              name="shop"
              value="Street"
              className="radiobtn"
              onChange={this.change}
            />
            Street
            <br />
            <input
              type="radio"
              name="shop"
              value="Shop"
              className="radiobtn"
              onChange={this.change}
            />
            Shop
            <br />
            <input
              type="radio"
              name="shop"
              value="Mall"
              className="radiobtn"
              onChange={this.change}
            />
            Mall
            <br />
          </div>
        </div>

        {/* Main Layout     */}
        <div className="mainTabbedLayout">
          <Grid>
            {this.state.shopsDataArray.length > 0 ? (
              this.state.shopsDataArray.map(element => (
                <React.Fragment key={element.shopName}>
                  <ShoppingTabHelper
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

    let filteredArray = this.state.shopsDataArrayFinal.filter(function(
      element
    ) {
      if (element.shopType.includes(event.target.value)) return element;
      return null;
    });

    this.setState({ shopsDataArray: filteredArray });
  };

  clearFilter = () => {
    this.setState({ shopsDataArray: this.state.shopsDataArrayFinal });
    this.target.checked = false;
  };
}

export default ShoppingTab;
