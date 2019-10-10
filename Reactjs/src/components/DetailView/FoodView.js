import React from "react";
import { ip } from "../constants";
import { Gallery } from "react-gesture-gallery";

export default function FoodView(props) {
  var cityName = props.location.state.cityName;
  var restaurants = props.location.state.cityData;
  var images = restaurants.restaurantImages;
  var [index, setIndex] = React.useState(0);
  let coords = restaurants.restaurantCoord.split(" ")[1];
  var coords2 = coords.split('"')[1];

  return (
    <div>
      <p className="title">{restaurants.restaurantName}</p>
      <div className="background">
        <div>
          <Gallery
            index={index}
            onRequestChange={i => setIndex(i)}
            style={{
              width: "100%",
              height: "500px"
            }}>
            {images.map(image => (
              <img
                alt={`${ip}/files/${cityName}/${image.name}`}
                key={`${ip}/files/${cityName}/${image.name}`}
                src={`${ip}/files/${cityName}/${image.name}`}
                style={{ height: "100%", width: "100%" }}
              />
            ))}
          </Gallery>
        </div>

        <div>
          <h3 className="fullViewText" style={{ textDecoration: "underline" }}>
            {restaurants.restaurantName}
          </h3>
          <br />
          <p className="fullViewText" style={{ fontSize: "25px" }}>
            Cuisines : {restaurants.restaurantCuisines}
          </p>
          <p className="fullViewText" style={{ fontSize: "25px" }}>
            Rating : {restaurants.restaurantRating}/5
          </p>
          <p className="fullViewText" style={{ fontSize: "25px" }}>
            Cost For Two : {restaurants.restaurantCostForTwo} &#8377;
          </p>

          <p className="fullViewText" style={{ fontSize: "25px" }}>
            Best Foods to Try : {restaurants.restaurantBestFoods}
          </p>

          <br />
          {restaurants.restaurantTimings[0].From !== "00:00" ? (
            <p className="fullViewInfoText" style={{ textAlign: "center" }}>
              Timings : {restaurants.restaurantTimings[0].From} to{" "}
              {restaurants.restaurantTimings[1].To}
            </p>
          ) : null}
          <br />
          <div className="MapsClass">
            <iframe
              src={coords2}
              width="800"
              height="450"
              title={restaurants.restaurantName}
            />
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
