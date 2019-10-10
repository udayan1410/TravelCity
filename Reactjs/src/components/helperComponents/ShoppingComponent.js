import React, { Component } from "react";
import ShoppingComponentHelper from "./ShoppingComponentHelper";

class ShoppingComponent extends Component {
  allShopHelper = [];
  imageArray = [];
  constructor(props) {
    super(props);

    this.state = {
      shoppingComponentArray: []
    };
  }

  componentDidMount() {
    //Initializing component array
    this.setState({
      shoppingComponentArray: [
        {
          id: 0,
          component: (
            <ShoppingComponentHelper id={0} method={this.updateShopArray} />
          )
        }
      ]
    });

    //Initializing array
    this.allShopHelper.push({
      id: 0,
      shopName: "",
      shopCoord: "",
      shopCoordAndroid: "",
      shopTimings: [],
      shopImages: [],
      shopType: ""
    });
  }
  render() {
    return (
      <div>
        <hr />
        <h1 className="enterDetailsText">Enter Shopping Details</h1>
        {this.state.shoppingComponentArray.map(iterator => (
          <div key={iterator.id}>{iterator.component}</div>
        ))}
        <div className="addOrRemoveElementWrapper">
          <button className="addOrRemoveElement" onClick={this.addComponent}>
            Add Shop
          </button>
        </div>
        <div className="addOrRemoveElementWrapper">
          {this.state.shoppingComponentArray.length > 1 ? (
            <button
              className="addOrRemoveElement"
              onClick={this.removeComponent}>
              Remove Shop
            </button>
          ) : null}
        </div>
      </div>
    );
  }

  addComponent = () => {
    //Setting state of food component array
    this.setState(prevState => ({
      shoppingComponentArray: [
        ...prevState.shoppingComponentArray,
        {
          id:
            prevState.shoppingComponentArray[
              prevState.shoppingComponentArray.length - 1
            ].id + 1,
          component: (
            <ShoppingComponentHelper
              id={
                this.state.shoppingComponentArray[
                  this.state.shoppingComponentArray.length - 1
                ].id + 1
              }
              method={this.updateShopArray}
            />
          )
        }
      ]
    }));

    //Add food place to array
    this.allShopHelper.push({
      id:
        this.state.shoppingComponentArray[
          this.state.shoppingComponentArray.length - 1
        ].id + 1,
      shopName: "",
      shopCoord: "",
      shopCoordAndroid: "",
      shopTimings: [],
      shopImages: [],
      shopType: ""
    });
  };

  removeComponent = () => {
    //remove element from component array
    this.setState({
      shoppingComponentArray: this.state.shoppingComponentArray.filter(
        place =>
          place !==
          this.state.shoppingComponentArray[
            this.state.shoppingComponentArray.length - 1
          ]
      )
    });

    //remove element from array
    this.allShopHelper.pop();
  };

  updateShopArray = (index, data, infoCategory) => {
    //Update all shop array
    switch (infoCategory) {
      case "shopName":
        this.allShopHelper[index].shopName = data;
        break;

      case "shopCoord":
        this.allShopHelper[index].shopCoord = data;
        break;

      case "shopCoordAndroid":
        this.allShopHelper[index].shopCoordAndroid = data;
        break;

      case "shopTimingFrom":
        this.allShopHelper[index].shopTimings[0] = { From: data };
        break;

      case "shopTimingTo":
        this.allShopHelper[index].shopTimings[1] = { To: data };
        break;

      case "shopImages":
        let imageArrayNames = [];
        this.imageArray[index] = data;
        for (let i = 0; i < data.length; i++) {
          imageArrayNames.push({ name: data[i].name });
        }
        this.allShopHelper[index].shopImages = imageArrayNames;
        break;

      case "shopType":
        this.allShopHelper[index].shopType = data;
        break;

      default:
        break;
    }

    this.props.method(this.allShopHelper, this.imageArray);
  };
}

export default ShoppingComponent;
