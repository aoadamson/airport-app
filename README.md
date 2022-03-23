 # ForeFlight Interview
The ForeFlight development team would like to get a better picture of your coding and problem solving skills. Please build a program that implements the specification below. Some guidelines to keep in mind:
 
* You may use any open source / public libraries that you like.
* Your future peers will be reviewing your submission so write it appropriately.
 
## Specification
### Input:
  - One or more airport identifiers: `kaus`, `50r`, `egll`, `khou` . 
 
### Output:
 
 A web page with the following:
 - The airport identifier (icao)
 - The airport name
 - The available runways
 - The lat/long of the airport
 - A current weather report that contains the following
    - Temp (F)
    - Relative humidity (%)
    - Summary of cloud coverage (text string)
        - This is the greatest amount of coverage listed if any
    - Visibility (Statute Miles)
    - Wind Speed (MPH)
    - Wind Direction (cardinal directions to secondary-intercardinal precision)
 
#### Data Sources
The data sources for this exercise can be accessed while the development server is running. 
- `Airport` data can be obtained at: http://localhost:3000/airports/<airport_identifier>.json . 
    - Ex. http://localhost:3000/airports/kaus.json
- `Weather Conditions` can be obtained at:  http://localhost:3000/weather/<airport_identifier>.json
    - Ex. http://localhost:3000/weather/kaus.json

# Austin's README

I completed the exercise with one problem still lingering.
I am messing up the hook and can't find it while debugging.
I would love to pair during next round of the interview on what I messed up on.
Also feel free to submit a code review/pull request if it's something obvious!

## Libraries used:
* [React Testing Library](https://testing-library.com/)
* [Axios for reaching api](https://axios-http.com/docs/intro)

## Run the app locally

1. `npm install`
2. `npm start`

## Test the app locally

`npm test` or run it in your IDE