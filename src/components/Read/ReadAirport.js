import React from 'react';
import Card from "../Card/Card";


export const ReadAirport = (props) => {
    try {
        let Result = []
        props.airportInfo.runways.forEach(runway => Result.push(runway.ident))
        const listItems = Result.map((number) =>
            <p key={number} style={{backgroundColor: "lightgrey", border: "5rem"}}>{number}</p>
        );
        return (
            <Card>
                <h1>Airport Info</h1>
                <p>Airport Identifier: {props.airportInfo.icao}</p>
                <p>Airport Name: {props.airportInfo.name}</p>
                <label>Runways</label>
                <Card>{listItems}</Card>
                <p>Latitude: {props.airportInfo.latitude}</p>
                <p>Longitude: {props.airportInfo.longitude}</p>
            </Card>
        );
    }
    catch (e){
        return <div/>
    }
}
