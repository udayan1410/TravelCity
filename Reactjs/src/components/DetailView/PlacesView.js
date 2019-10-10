import React from "react";
import { ip } from "../constants";
import { Gallery } from "react-gesture-gallery";

export default function PlacesView(props) {
  var cityName = props.location.state.cityName;
  var place = props.location.state.cityData;
  var images = place.placeImages;
  var [index, setIndex] = React.useState(0);
  let coords = place.placeCoord.split(" ")[1];
  var coords2 = coords.split('"')[1];
  return (
    <div>
      <p className="title">{place.placeName}</p>
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
            {place.placeName}
          </h3>
          <br />
          <p className="fullViewInfoText">{place.placeInfo}</p>
          <br />

          {place.placeTimings[0].From !== "00:00" ? (
            <p className="fullViewInfoText" style={{ textAlign: "center" }}>
              Timings : {place.placeTimings[0].From} to{" "}
              {place.placeTimings[1].To}
            </p>
          ) : null}
          <br />
          <div className="MapsClass">
            <iframe
              src={coords2}
              width="800"
              height="450"
              title={place.placeName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
