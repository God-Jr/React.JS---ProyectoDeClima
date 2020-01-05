import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

function WeatherData(props) {
    return (
        <div>
            <WeatherTemperature />
            <WeatherExtraInfo />
        </div>
    );
}

export default WeatherData;