import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Location from "./Location";
import WeatherData from "./WeatherData";
import transformWeather from "../../services/transformWeather";
import api_waether from "../../constans/api_url";
import "./styles.css";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Buenos aires",
      data: null
    };
  }

  componentDidMount() {
    this.handleUpdateClick();
  }
  
  handleUpdateClick = () => {
    fetch(api_waether)
      .then(resolve => {
        console.log(resolve);
        return resolve.json();
      })
      .then(data => {
        const newWeather = transformWeather(data);
        console.log(newWeather);
        this.setState({
          data: newWeather
        });
      });
    console.log("Actualizado...");
  };

  render() {
    const { city, data } = this.state;

    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress />}
      </div>
    );
  }
}

export default WeatherLocation;
