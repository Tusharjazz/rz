import STYLES from "./Details.scss";

import { ImArrowRight2 } from "react-icons/im";

const getClassName = (className) => STYLES[className] || "UNKNOWN";
const minutesToHours = (minutes) => {
  const hours = minutes / 60;
  const remainingMinutes = minutes % 60;
  return Math.floor(hours) + "h " + remainingMinutes;
};
export default function Details(props) {
  const { price, agent, leg1, leg2 } = props;
  return (
    <div className={getClassName("main")}>
      <div className={getClassName("leg")}>
        <div className={getClassName("left")}>
          <img
            src={`https://logos.skyscnr.com/images/airlines/favicon/${leg1.airlineId}.png`}
            alt="#"
            className={getClassName("airlineIcon")}
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
            <ImArrowRight2 />
            <div>
              <h4>
                {leg1.arrivalTime.slice(
                  leg1.arrivalTime.length - 5,
                  leg1.arrivalTime.length
                )}
              </h4>
              <h4>{leg1.arrivalAirport}</h4>
            </div>
          </div>
        </div>
        <div className={getClassName("right")}>
          <h4>{minutesToHours(leg1.durationMins)}</h4>
          <h4
            className={leg1.stops ? getClassName("stop") : getClassName("direct")}
          >
            {leg1.stops ? `${leg1.stops} Stop` : "Direct"}
          </h4>
        </div>
      </div>

      <div className={getClassName("leg")}>
        <div className={getClassName("left")}>
          <img
            src={`https://logos.skyscnr.com/images/airlines/favicon/${leg2.airlineId}.png`}
            alt="#"
            className={getClassName("airlineIcon")}
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
            <ImArrowRight2 />
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
          <h4>{minutesToHours(leg2.durationMins)}</h4>
          <h4
            className={leg2.stops ? getClassName("stop") : getClassName("direct")}
          >
            {leg2.stops ? `${leg2.stops} Stop` : "Direct"}
          </h4>
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
