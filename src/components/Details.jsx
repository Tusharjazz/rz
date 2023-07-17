import STYLES from "./Details.scss";
import Arrow from "../assets/right-arrow.png"
import {BsArrowRight} from 'react-icons/bs'

const getClassName = (className) => STYLES[className] || "UNKNOWN";

export default function Details(props) {
//   console.log(leg1, leg2);
    const {price,agent, leg1, leg2} = props
    console.log(leg1,"hskajhs")
    console.log(props, "price")
    return (
      <div className={getClassName("main")}>
        <div className={getClassName("travelTime")}>
          <div className={getClassName("left")}>
            <img
              src={`https://logos.skyscnr.com/images/airlines/favicon/${leg1.airlineId}.png`}
              alt="#"
            />
            <div className={getClassName("group")}>
              <div>
                <h4>
                  {leg1.departureTime.slice(
                    leg1.departureTime.length - 5,
                    leg1.departureTime.length
                  )}
                </h4>
                <h4>{leg1.departureAirport}</h4>
              </div>
              <img src="" alt="arrow" />
              <div>
                <h4>
                  {leg1.arrivalTime.slice(
                    leg1.arrivalTime.length - 5,
                    leg1.arrivalTime.length
                  )}
                </h4>
                <h4>{leg2.arrivalAirport}</h4>
              </div>
            </div>
          </div>
          <div className={getClassName("right")}>
                    <h4>{leg1.durationMins}</h4>
                    { console.log(leg1.stops, "string") }
            <h4>{leg1.stops ? "Direct" : `${leg1.stops} Stop`}</h4>
          </div>
        </div>

        <div className={getClassName("travelTime")}>
          <div className={getClassName("left")}>
            <img
              src={`https://logos.skyscnr.com/images/airlines/favicon/${leg2.airlineId}.png`}
              alt="#"
            />
            <div className={getClassName("group")}>
              <div>
                <h4>
                  {leg2.departureTime.slice(
                    leg2.departureTime.length - 5,
                    leg2.departureTime.length
                  )}
                </h4>
                <h4>{leg2.departureAirport}</h4>
              </div>
              <img src="" alt="arrow" />
              <div>
                <h4>
                  {leg2.arrivalTime.slice(
                    leg2.departureTime.length - 5,
                    leg2.departureTime.length
                  )}
                </h4>
                <h4>{leg2.arrivalAirport}</h4>
              </div>
            </div>
          </div>
          <div className={getClassName("right")}>
            <h4>{leg2.durationMins}</h4>
            <h4>{leg2.stops ? "direct" : "stop"}</h4>
          </div>
        </div>

        <div className={getClassName("bottom")}>
          <div className={getClassName("bottomLeft")}>
            <h2>{price}</h2>
            <p>{agent}</p>
          </div>
          <div className={getClassName("bottomRight")}>
            <button>Select</button>
          </div>
        </div>
      </div>
    );
}
