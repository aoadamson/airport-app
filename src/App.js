import axios from "axios";
import React, {useState} from "react";
import {IntakeForm} from "./components/IntakeForm";

const baseURL = "http://localhost:3000/airports/kaus.json";

export default function App() {
    const [post, setPost] = React.useState(null);
    const [weather, setWeather] = useState([]);

    const addWeatherHandler = (weather) => {
        setWeather((prevWeather) => {
            return [weather, ...prevWeather];
        });
    };

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;
    console.log(post)
    return (
        <div>
            <IntakeForm onSubmit={addWeatherHandler}/>
            <h1>{post.city}</h1>
            <h1>{post.airportAccess}</h1>
        </div>
    );
}