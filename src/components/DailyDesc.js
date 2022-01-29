import React from "react";
import "./DailyDesc.css";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import clouds from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import fog from "../img/weather-icons/fog.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";

class DailyDesc extends React.Component {

      render() {
            let { data, getimg } = this.props;

            return (
                  <div className="DailyDesc">
                        {data.list && data.list.length > 0 && data.list.map((w, i) => {
                              if (i < 7)
                                    return <div>
                                          <img className="img1" src={getimg(w.weather[0].id)}></img>
                                          <p>{w.dt_txt.substring(10)}</p>
                                          <p>{w.weather[0].main}</p>
                                          <p>{parseInt(w.main.temp - 273.15)}°C</p>
                                    </div>
                        })}
                  </div>
            );
      }
}
export default DailyDesc;

