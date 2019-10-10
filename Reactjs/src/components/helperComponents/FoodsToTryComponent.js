import React, { Component } from "react";
import FoodsToTryComponentHelper from "./FoodsToTryComponentHelper";

class FoodsToTryComponent extends Component {
  allFoodsHelper = [];
  imageArray = [];
  constructor(props) {
    super(props);

    this.state = {
      foodsToTryComponentArray: []
    };
  }

  componentDidMount() {
    //Initializing component array
    this.setState({
      foodsToTryComponentArray: [
        {
          id: 0,
          component: (
            <FoodsToTryComponentHelper id={0} method={this.updateFoodArray} />
          )
        }
      ]
    });

    //Initializing array
    this.allFoodsHelper.push({
      id: 0,
      restaurantName: "",
      restaurantBestFoods: "",
      restaurantCoord: "",
      restaurantCoordAndroid: "",
      restaurantCostForTwo: "",
      restaurantCuisines: "",
      restaurantImages: [],
      restaurantTimings: []
    });
  }

  render() {
    return (
      <div>
        <hr />
        <h1 className="enterDetailsText">Enter Restaurant Details</h1>
        {this.state.foodsToTryComponentArray.map(iterator => (
          <div key={iterator.id}>{iterator.component}</div>
        ))}
        <div className="addOrRemoveElementWrapper">
          <button className="addOrRemoveElement" onClick={this.addComponent}>
            Add Restaurant
          </button>
        </div>
        <div className="addOrRemoveElementWrapper">
          {this.state.foodsToTryComponentArray.length > 1 ? (
            <button
              className="addOrRemoveElement"
              onClick={this.removeComponent}>
              Remove Restaurant
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  addComponent = () => {
    //Setting state of food component array
    this.setState(prevState => ({
      foodsToTryComponentArray: [
        ...prevState.foodsToTryComponentArray,
        {
          id:
            prevState.foodsToTryComponentArray[
              prevState.foodsToTryComponentArray.length - 1
            ].id + 1,
          component: (
            <FoodsToTryComponentHelper
              id={
                this.state.foodsToTryComponentArray[
                  this.state.foodsToTryComponentArray.length - 1
                ].id + 1
              }
              method={this.updateFoodArray}
            />
          )
        }
      ]
    }));

    //Add food place to array
    this.allFoodsHelper.push({
      id:
        this.state.foodsToTryComponentArray[
          this.state.foodsToTryComponentArray.length - 1
        ].id + 1,
      restaurantName: "",
      restaurantCoord: "",
      restaurantCoordAndroid: "",
      restaurantCostForTwo: "",
      restaurantBestFoods: "",
      restaurantRating: "",
      restaurantCuisines: "",
      restaurantTimings: [],
      restaurantImages: []
    });
  };

  removeComponent = () => {
    //remove element from component array
    this.setState({
      foodsToTryComponentArray: this.state.foodsToTryComponentArray.filter(
        place =>
          place !==
          this.state.foodsToTryComponentArray[
            this.state.foodsToTryComponentArray.length - 1
          ]
      )
    });

    //remove element from array
    this.allFoodsHelper.pop();
  };

  updateFoodArray = (index, data, infoCategory) => {
    //Update all food array
    switch (infoCategory) {
      case "restaurantName":
        this.allFoodsHelper[index].restaurantName = data;
        break;

      case "restaurantCoord":
        this.allFoodsHelper[index].restaurantCoord = data;
        break;

      case "restaurantCoordAndroid":
        this.allFoodsHelper[index].restaurantCoordAndroid = data;
        break;

      case "restaurantCostForTwo":
        this.allFoodsHelper[index].restaurantCostForTwo = data;
        break;

      case "restaurantBestFoods":
        this.allFoodsHelper[index].restaurantBestFoods = data;
        break;

      case "restaurantRating":
        this.allFoodsHelper[index].restaurantRating = data;
        break;

      case "restaurantCuisines":
        this.allFoodsHelper[index].restaurantCuisines = data;
        break;

      case "restaurantTimingsFrom":
        this.allFoodsHelper[index].restaurantTimings[0] = { From: data };
        break;

      case "restaurantTimingsTo":
        this.allFoodsHelper[index].restaurantTimings[1] = { To: data };
        break;

      case "restaurantImages":
        let imageArrayNames = [];
        this.imageArray[index] = data;
        for (let i = 0; i < data.length; i++) {
          imageArrayNames.push({ name: data[i].name });
        }

        this.allFoodsHelper[index].restaurantImages = imageArrayNames;
        break;

      default:
        break;
    }

    this.props.method(this.allFoodsHelper, this.imageArray);
  };
}

export default FoodsToTryComponent;
