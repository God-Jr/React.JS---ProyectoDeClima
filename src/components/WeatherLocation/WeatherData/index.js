import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherExtraInfo from "./WeatherExtraInfo";
// import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "../constans/weathers";
import { SUN } from "../../../constans/weathers";

import './styles.css'

function WeatherData() {
  return (
    <div className="weatherDataCont">
      <WeatherTemperature temperature={20} weatherState={SUN} />
      <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
  );
}

export default WeatherData;
