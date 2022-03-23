import React from "react";
import {useState} from "react";

export const IntakeForm= (props) => {
    const [airport, setAirport] = useState('');

    const submitForm = (event) => {
        // Preventing the page from reloading
        event.preventDefault();

        // Do something
        props.onSubmit(airport)
    }
    const airportChangeHandler = (event) => {
        setAirport(event.target.value);
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <input name="" id="airport" onChange={airportChangeHandler}>
                </input>
                <button type={"submit"}> check out airport </button>
            </form>
        </div>
    );
};