import React from "react";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";

import Header from "../Header";
import component from "@skyscanner/backpack-web/bpk-component-text";

import STYLES from "./App.scss";

import { itineraries, legs } from "./flights.json";
import Details from "../Details";

const getClassName = (className) => STYLES[className] || "UNKNOWN";

const App = () => (
  <div style={{ background: "lightGrey" }} className={getClassName("App")}>
    <Header />
    <main className={getClassName("App__main")}>
      {/* <BpkText tagName="p">here we are</BpkText> */}
      {/* TODO: Add a component to display results here */}
      {/* {console.log(itineraries)} */}
      {itineraries.map((itinerary) => {
      
       return <div>
          {/* {console.log(itinerary,"anything")} */}
          <Details
           price={itinerary.price}
           agent={itinerary.agent}
            leg1={{
              departureAirport: legs[itinerary.legs[0]].departure_airport,
              arrivalAirport: legs[itinerary.legs[0]].arrival_airport,
              departureTime: legs[itinerary.legs[0]].departure_time,
              arrivalTime: legs[itinerary.legs[0]].arrival_time,
              stops: legs[itinerary.legs[0]].stops,
              airlineName: legs[itinerary.legs[0]].airline_name,
              airlineId: legs[itinerary.legs[0]].airline_id,
              durationMins: legs[itinerary.legs[0]].duration_mins,
            }}
            leg2={{
              departureAirport: legs[itinerary.legs[1]].departure_airport,
              arrivalAirport: legs[itinerary.legs[1]].arrival_airport,
              departureTime: legs[itinerary.legs[1]].departure_time,
              arrivalTime: legs[itinerary.legs[1]].arrival_time,
              stops: legs[itinerary.legs[1]].stops,
              airlineName: legs[itinerary.legs[1]].airline_name,
              airlineId: legs[itinerary.legs[1]].airline_id,
              durationMins: legs[itinerary.legs[1]].duration_mins,
            }}
          />
        </div>
      })}
    </main>
  </div>
);

export default App;
