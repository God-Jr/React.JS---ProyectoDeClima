import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

class WeatherLocation extends Component {
    render() {
        return (
            <div>
                <Location city={"Rio de Janeiro"} />
                <WeatherData />
            </div>
        );
    }
}

export default WeatherLocation;
