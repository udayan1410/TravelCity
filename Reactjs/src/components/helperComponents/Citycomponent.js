import React from "react";

export default function citycomponent(props) {
  let cityName = event => {
    props.method(event.target.value);
  };

  return (
    <div>
      <h1 className="enterDetailsText">Enter City Details</h1>
      <div
        style={{
          color: "#ff4133",
          fontSize: "20px",
          fontFamily: "Segoe UI",
          display: "inline"
        }}>
        <label htmlFor="cityInput" style={{ marginLeft: "300px" }}>
          City Name :{" "}
        </label>
        <input
          type="text"
          onChange={cityName}
          placeholder={"City Name"}
          style={{
            height: "30px",
            marginLeft: "50px"
          }}
        />
        <br />
      </div>
      <br />
    </div>
  );
}
