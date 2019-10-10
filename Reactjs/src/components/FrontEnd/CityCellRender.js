import React from "react";
import { Cell } from "react-mdl";
import { ip } from "../constants.js";
import { Route } from "react-router-dom";

export default function CityCellRender(props) {
  return (
    <>
      <Cell col={6} className="grid">
        <Route
          render={({ history }) => (
            <img
              src={`${ip}/files/City Images/${props.cityNames}.jpg`}
              className="gridImage"
              alt={props.cityNames}
              onClick={() => {
                history.push({
                  pathname: `/showCityDetail/${props.cityNames}`,
                  state: { cityName: props.cityNames }
                });
              }}
            />
          )}
        />
      </Cell>
    </>
  );
}
