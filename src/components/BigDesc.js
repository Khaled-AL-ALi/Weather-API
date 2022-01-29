import React from "react";
import "./BigDesc.css";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import clouds from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";

class BigDesc extends React.Component {

  render() {
    let { data, getimg } = this.props;

    return (
      <div className="BigDesc">
        {data.list && data.list.length > 0 && data.list.map((w, i) => {
          if (i < 1)
            return <div>
              <img src={getimg(w.weather[0].id)}></img>
              <p>{w.weather[0].description}</p>
              <p>Temperature {parseInt(w.main.temp_min - 273.15)} To {parseInt(w.main.temp_max - 273.15)} </p>
              <p>Humidity {w.main.humidity}% Presure {w.main.pressure}</p>
            </div>
        })}
      </div>
    );
  }
}
export default BigDesc;
