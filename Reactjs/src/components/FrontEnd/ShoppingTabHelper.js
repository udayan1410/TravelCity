import React from "react";
import { Card, CardActions, Cell } from "react-mdl";
import { ip } from "../constants.js";
import { Route } from "react-router-dom";

export default function ShoppingTabHelper(props) {
  var cityName = props.cityName;
  var shops = props.cityData;

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
                pathname: `/showDetailView/${cityName}/shop/${shops.shopName}`,
                state: { cityName: cityName, cityData: shops }
              })
            }>
            <img
              src={`${ip}/files/${cityName}/${shops.shopImages[0].name}`}
              width="100%"
              height="80%"
              alt={`${shops.shopName}`}
            />
            <CardActions border>
              <p
                style={{
                  textAlign: "center",
                  color: "#9c0c1a",
                  fontSize: "17px"
                }}>
                {`${shops.shopName}`}
              </p>
            </CardActions>
          </Card>
        )}
      />
    </Cell>
  );
}
