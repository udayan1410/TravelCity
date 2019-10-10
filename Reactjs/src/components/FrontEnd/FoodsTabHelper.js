import React from "react";
import { Card, CardActions, Cell } from "react-mdl";
import { ip } from "../constants.js";
import { Route } from "react-router-dom";

export default function FoodsTabHelper(props) {
  var cityName = props.cityName;
  var restaurant = props.cityData;
  var restaurants = props.cityData;

  return (
    <Cell col={3} className="cardCell">
      <Route
        render={({ history }) => (
          <Card
            shadow={2}
            style={{
              width: "100%",
              height: "200px",
              cursor: "pointer"
            }}
            onClick={() =>
              history.push({
                pathname: `/showDetailView/${cityName}/food/${
                  restaurant.restaurantName
                }`,
                state: { cityName: cityName, cityData: restaurants }
              })
            }>
            <img
              src={`${ip}/files/${cityName}/${
                restaurant.restaurantImages[0].name
              }`}
              width="100%"
              height="80%"
              alt={`${restaurant.restaurantName}`}
            />
            <CardActions border>
              <p
                style={{
                  textAlign: "center",
                  color: "#9c0c1a",
                  fontSize: "17px"
                }}>
                {`${restaurant.restaurantName}`}
              </p>
            </CardActions>
          </Card>
        )}
      />
    </Cell>
  );
}
