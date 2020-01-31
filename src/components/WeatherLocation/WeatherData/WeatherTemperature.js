import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from "../../../constans/weathers";
import "./styles.css";

const icons = {
  [THUNDER]: "thunder",
  [CLOUD]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: " day-thunderstore",
  [DRIZZLE]: "day-showers"
};

const getWeatherIcons = weatherState => {
  const icon = icons[weatherState];

  const sizeIcon = "4x";

  if (icon) {
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
  } else {
    return (
      <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />
    );
  }
};

function WeatherTemperature({ temperature, weatherState }) {
  return (
    <div className="weatherTemperatureCont">
      {getWeatherIcons(weatherState)}

      <span className="temperature">{`${temperature}`}</span>
      <span className="temperatureType">{` C°`}</span>
    </div>
  );
}

WeatherTemperature.protoTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
