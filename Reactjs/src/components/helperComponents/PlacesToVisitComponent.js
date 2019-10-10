import React, { Component } from "react";
import Placescomponent from "./PlacesComponentHelper";

class PlacesToVisitComponent extends Component {
  allPlacesHelper = [];
  imageArray = [];
  obj = [];
  constructor(props) {
    super(props);

    this.state = {
      placesToVisitComponentArray: []
    };
  }

  componentDidMount() {
    //Initialize component array
    this.setState({
      placesToVisitComponentArray: [
        {
          id: 0,
          place: <Placescomponent id={0} method={this.placesToVisitInfo} />
        }
      ]
    });
    //Initialize allplaceshelper array
    this.allPlacesHelper.push({
      id: 0,
      placeName: "",
      placeInfo: "",
      placeTimings: [],
      placeCoord: "",
      placeCoordAndroid: "",
      placeImages: [],
      placeType: ""
    });
  }

  render() {
    return (
      <div>
        <hr />
        <h1 className="enterDetailsText">Enter Places Details</h1>
        {this.state.placesToVisitComponentArray.map(iterator => (
          <div key={iterator.id}>{iterator.place}</div>
        ))}
        <div className="addOrRemoveElementWrapper">
          <button className="addOrRemoveElement" onClick={this.addComponent}>
            Add Place
          </button>
        </div>
        <div className="addOrRemoveElementWrapper">
          {this.state.placesToVisitComponentArray.length > 1 ? (
            <button
              className="addOrRemoveElement"
              onClick={this.removeComponent}>
              Remove Place
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  removeComponent = () => {
    //remove element from component array
    this.setState({
      placesToVisitComponentArray: this.state.placesToVisitComponentArray.filter(
        place =>
          place !==
          this.state.placesToVisitComponentArray[
            this.state.placesToVisitComponentArray.length - 1
          ]
      )
    });

    //remove element from array
    this.allPlacesHelper.pop();
  };

  addComponent = () => {
    //add element to component array
    this.setState(prevState => ({
      placesToVisitComponentArray: [
        ...prevState.placesToVisitComponentArray,
        {
          id:
            prevState.placesToVisitComponentArray[
              prevState.placesToVisitComponentArray.length - 1
            ].id + 1,
          place: (
            <Placescomponent
              id={
                this.state.placesToVisitComponentArray[
                  this.state.placesToVisitComponentArray.length - 1
                ].id + 1
              }
              method={this.placesToVisitInfo}
            />
          )
        }
      ]
    }));
    //add element to normal array
    this.allPlacesHelper.push({
      id:
        this.state.placesToVisitComponentArray[
          this.state.placesToVisitComponentArray.length - 1
        ].id + 1,
      placeName: "",
      placeInfo: "",
      placeTimings: [],
      placeCoord: "",
      placeCoordAndroid: "",
      placeImages: [],
      placeType: ""
    });
  };

  placesToVisitInfo = (index, data, infoCategory) => {
    //Update all places array
    switch (infoCategory) {
      case "placeName":
        this.allPlacesHelper[index].placeName = data;
        break;

      case "placeInfo":
        this.allPlacesHelper[index].placeInfo = data;
        break;

      case "placeImages":
        let imageArrayNames = [];
        this.imageArray[index] = data;
        for (let i = 0; i < data.length; i++) {
          imageArrayNames.push({ name: data[i].name });
        }
        this.allPlacesHelper[index].placeImages = imageArrayNames;
        break;

      case "placeCoord":
        this.allPlacesHelper[index].placeCoord = data;
        break;

      case "placeCoordAndroid":
        this.allPlacesHelper[index].placeCoordAndroid = data;
        break;

      case "placeTimingsFrom":
        this.allPlacesHelper[index].placeTimings[0] = { From: data };
        break;

      case "placeTimingsTo":
        this.allPlacesHelper[index].placeTimings[1] = { To: data };
        break;

      case "placeType":
        this.allPlacesHelper[index].placeType = data;
        break;

      default:
        break;
    }

    this.props.method(this.allPlacesHelper, this.imageArray);
  };
}

export default PlacesToVisitComponent;
