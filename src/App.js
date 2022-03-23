import React, {useState} from "react";
import {IntakeForm} from "./components/Intake/IntakeForm";
import axios from "axios";
import {ReadAirport} from "./components/Read/ReadAirport";
import {ReadWeather} from "./components/Read/ReadWeather";

const airportBaseURL = "http://localhost:3000/airports/";
const weatherBaseURL = "http://localhost:3000/weather/";


export default function App() {
    const [weather, setWeather] = useState([]);
    const [post, setPost] = React.useState({});
    const [post2, setPost2] = React.useState({});
    const addWeatherHandler = (weather) => {
        setWeather((prevWeather) => {
            return [weather, ...prevWeather];
        });
        axios.get(airportBaseURL + weather + ".json").then((response) => {
            setPost(response.data);
        });
        axios.get(weatherBaseURL + weather + ".json").then((response) => {
            setPost2(response.data);
        });
    }
    if (weather === []) return <IntakeForm onSubmit={addWeatherHandler}/>;
    else return (
        <div>
            <IntakeForm onSubmit={addWeatherHandler}/>
            <ReadAirport airportInfo={post}/>
            <ReadWeather weatherInfo={post2}/>
        </div>
    );
}