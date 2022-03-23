import React from 'react';
import Card from "../Card/Card";

export const ReadWeather = (props) => {
    try {
        //stole these equations from the internet
        let cToFahr = props.weatherInfo.report.conditions.tempC * 9 / 5 + 32;
        let ktsToMph = props.weatherInfo.report.conditions.wind.speedKts / 1.150779
        function degToCompass(num) {
            let val = Math.floor((num / 22.5) + 0.5);
            let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
            return arr[(val % 16)];
        }
        return (
            <Card>
                <h1>Weather Report</h1>
                <p>Temperature(F): {cToFahr}</p>
                <p>Relative Humidity: {props.weatherInfo.report.conditions.relativeHumidity}%</p>
                <p>Coverage</p>
                <Card>
                    <p style={{backgroundColor: "lightgrey", border: "5rem"}}>Coverage: {props.weatherInfo.report.conditions.cloudLayers[0].coverage}</p>
                    <p style={{backgroundColor: "lightgrey", border: "5rem"}}>Altitude(Ft): {props.weatherInfo.report.conditions.cloudLayers[0].altitudeFt}</p>
                    <p style={{backgroundColor: "lightgrey", border: "5rem"}}>A ceiling?: {props.weatherInfo.report.conditions.cloudLayers[0].ceiling.toString()}</p>
                </Card>
                <p>Visibility: {props.weatherInfo.report.conditions.visibility.distanceSm} SM</p>
                <p>Windspeed: {ktsToMph} MPH</p>
                <p>Wind direction(cardinal): {degToCompass(props.weatherInfo.report.conditions.wind.direction)}</p>
            </Card>
        );
    } catch (e) {
        return <p></p>
    }
}