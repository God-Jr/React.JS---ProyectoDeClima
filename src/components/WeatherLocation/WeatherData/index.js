import React from "react";
import PropTypes from "prop-types";
import WeatherTemperature from "./WeatherTemperature";
import WeatherExtraInfo from "./WeatherExtraInfo";
// import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "../constans/weathers";
// import { SUN } from "../../../constans/weathers";

import "./styles.css";

function WeatherData({ data: { temperature, weatherState, humidity, wind } }) {
  return (
    <div className="weatherDataCont">
      <WeatherTemperature
        temperature={temperature}
        weatherState={weatherState}
      />
      <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
  );
}

WeatherData.protoTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
};

export default WeatherData;
