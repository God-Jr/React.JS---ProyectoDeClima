import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import { SUN } from "./../../constans/weathers";

import "./styles.css";

const data = {
  temperature: 5,
  WeatherState: SUN,
  humidity: 10,
  wind: "10 m/s"
};

class WeatherLocation extends Component {
  render() {
    return (
      <div className="weatherLocationCont">
        <Location city={"Barcelona"} />
        <WeatherData data={data} />
      </div>
    );
  }
}

export default WeatherLocation;
