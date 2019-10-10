import React, { Component } from "react";
import { Layout, Header, Content, Navigation } from "react-mdl";

import "../css/FrontEnd.css";
import PlacesTab from "./PlacesTab";
import FoodTab from "./FoodTab";
import ShoppingTab from "./ShoppingTab";

class CityDetail extends Component {
  loadTabbedComponent = null;
  constructor(props) {
    super(props);

    let name = window.location.href.split("/");
    let namefinal = name[name.length - 1];

    this.state = {
      cityName: namefinal,
      Tab: "PlacesTab"
    };
  }

  TabClick = tabinfo => {
    this.setState({
      Tab: tabinfo
    });
  };

  render() {
    if (this.state.Tab === "PlacesTab") {
      this.loadTabbedComponent = <PlacesTab cityName={this.state.cityName} />;
    } else if (this.state.Tab === "FoodTab") {
      this.loadTabbedComponent = <FoodTab cityName={this.state.cityName} />;
    } else if (this.state.Tab === "ShoppingTab") {
      this.loadTabbedComponent = <ShoppingTab cityName={this.state.cityName} />;
    }
    return (
      <div>
        <Layout>
          <Header
            title={this.state.cityName.toUpperCase() + " CITY"}
            className="TabbedLayout">
            <Navigation>
              <p
                className="tabbedButton"
                onClick={() => this.TabClick("PlacesTab")}>
                Places to Visit
              </p>
              <p
                className="tabbedButton"
                onClick={() => this.TabClick("FoodTab")}>
                Must Try Food
              </p>
              <p
                className="tabbedButton"
                onClick={() => this.TabClick("ShoppingTab")}>
                Shopper's Stop
              </p>
            </Navigation>
          </Header>
          <Content>{this.loadTabbedComponent}</Content>
        </Layout>
      </div>
    );
  }
}

export default CityDetail;
