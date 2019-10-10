import React from "react";
import { Card, CardActions, Cell } from "react-mdl";
import { ip } from "../constants";
import { Route } from "react-router-dom";

export default function PlacesTabHelper(props) {
  var cityName = props.cityName;
  var places = props.cityData;
  var placeName = props.cityData.placeName;

  return (
    <Cell col={3} className="cardCell">
      <Route
        render={({ history }) => (
          <Card
            shadow={2}
            style={{
              width: "100%",
              height: "220px",
              cursor: "pointer"
            }}
            onClick={() =>
              history.push({
                pathname: `/showDetailView/${cityName}/place/${
                  places.placeName
                }`,
                state: { cityName: cityName, cityData: places }
              })
            }>
            <img
              src={`${ip}/files/${cityName}/${places.placeImages[0].name}`}
              width="100%"
              height="80%"
              alt={`${places.placeName}`}
            />

            <CardActions border>
              <p
                style={{
                  textAlign: "center",
                  color: "#9c0c1a",
                  fontSize: "17px"
                }}>
                {`${placeName}`}
              </p>
            </CardActions>
          </Card>
        )}
      />
    </Cell>
  );
}
