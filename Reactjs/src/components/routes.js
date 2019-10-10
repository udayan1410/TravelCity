import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import LoggedIn from "./LoggedIn";
import LoginFailed from "./LoginFailed";
import AddCity from "./AddCity";
import CitiesPage from "./FrontEnd/CitiesPage";
import CityDetail from "./FrontEnd/CityDetail";
import PlacesView from "./DetailView/PlacesView";
import FoodView from "./DetailView/FoodView";
import ShopView from "./DetailView/ShopView";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/loginCheck" component={LoggedIn} />
    <Route path="/loginFailed" component={LoginFailed} />
    <Route path="/addCity" component={AddCity} />
    <Route path="/showCities" component={CitiesPage} />
    <Route path="/showCityDetail/:city" component={CityDetail} />
    <Route
      path="/showDetailView/:city/place/:placetype"
      component={PlacesView}
    />
    <Route
      path="/showDetailView/:city/food/:restaurantType"
      component={FoodView}
    />
    <Route path="/showDetailView/:city/shop/:shopType" component={ShopView} />
  </Switch>
);

export default Routes;
