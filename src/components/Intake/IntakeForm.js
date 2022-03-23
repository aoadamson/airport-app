import React from "react";
import {useState} from "react";
import Card from "../Card/Card";

export const IntakeForm = (props) => {
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
        <Card>
            <form onSubmit={submitForm}>
                <div>
                    <label>Airport</label>
                </div>
                <div style={{padding:".5rem"}}>
                    <input style={{textAlign: "center"}} name="" id="airport" placeholder="KDSM" onChange={airportChangeHandler}/>
                </div>
                <div>
                    <button style={{borderRadius:"5rem"}} type={"submit"}> check out airport</button>
                </div>
            </form>
        </Card>
    );
};