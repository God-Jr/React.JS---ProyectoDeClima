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
  constructor(props) {
    super(props);
    this.state = {
      city: "Buenos aires",
      data: data
    };
  }

  handleUpdateClick = () => {
    console.log("Actualizado...");
  };

  render() {
    const { city, data } = this.state;

    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
