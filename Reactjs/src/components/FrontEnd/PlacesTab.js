import React, { Component } from "react";
import "../constants";
import { capitalize } from "../constants";
import axios from "axios";
import { ip } from "../constants.js";
import PlacesTabHelper from "./PlacesTabHelper";
import { Grid } from "react-mdl";

class PlacesTab extends Component {
  target;
  constructor(props) {
    super(props);

    this.state = {
      cityName: props.cityName,
      placesDataArray: [],
      placesDataArrayfinal: []
    };
  }

  componentDidMount() {
    axios
      .get(`${ip}/getCityData/${capitalize(this.state.cityName)}`)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            placesDataArray: response.data[0].placesArray.sort(function(a, b) {
              if (a.placeName < b.placeName) return -1;
              if (a.placeName > b.placeName) {
                return 1;
              }
              return 0;
            }),
            placesDataArrayfinal: response.data[0].placesArray.sort(function(
              a,
              b
            ) {
              if (a.placeName < b.placeName) return -1;
              if (a.placeName > b.placeName) {
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
          <div className="FilterRadioButton">
            <input
              type="radio"
              name="place"
              value="Historical Place"
              className="radiobtn"
              onChange={this.change}
            />
            Historical Place
            <br />
            <input
              type="radio"
              name="place"
              value="Museum"
              className="radiobtn"
              onChange={this.change}
            />
            Museum
            <br />
            <input
              type="radio"
              name="place"
              value="Monument"
              className="radiobtn"
              onChange={this.change}
            />
            Monument
            <br />
            <input
              type="radio"
              name="place"
              value="Entertainment"
              className="radiobtn"
              onChange={this.change}
            />
            Entertainment
            <br />
            <input
              type="radio"
              name="place"
              value="Temple"
              className="radiobtn"
              onChange={this.change}
            />
            Temple
            <br />
            <br />
          </div>
        </div>

        {/* Main Layout */}
        <div className="mainTabbedLayout">
          <Grid>
            {this.state.placesDataArray.length > 0 ? (
              this.state.placesDataArray.map(element => (
                <React.Fragment key={element.placeName}>
                  <PlacesTabHelper
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
    let filteredArray = this.state.placesDataArrayfinal.filter(
      element => element.placeType === `${event.target.value}`
    );

    this.setState({ placesDataArray: filteredArray });
  };

  clearFilter = () => {
    this.setState({ placesDataArray: this.state.placesDataArrayfinal });
    this.target.checked = false;
  };
}

export default PlacesTab;
