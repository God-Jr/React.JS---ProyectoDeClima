import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css'

class WeatherLocation extends Component {
    render() {
        return (
          <div className="weatherLocationCont">
            <Location city={"Barcelona"} />
            <WeatherData />
          </div>
        );
    }
}

export default WeatherLocation;
