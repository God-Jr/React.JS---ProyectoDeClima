import React from "react";
import PropTypes from "prop-types";
import "./styles.css";


function WeatherExtraInfo({ humidity, wind }) {
  return (
    <div className="weatherExtraInfoCont">
      <span className="extraInfoText">{`Humedad: ${humidity} % - `}</span>
      <span className="extraInfoText">{`Vientos: ${wind} `}</span>
    </div>
  );
}

WeatherExtraInfo.protoType = {
    humidity: PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired,
}

export default WeatherExtraInfo;
