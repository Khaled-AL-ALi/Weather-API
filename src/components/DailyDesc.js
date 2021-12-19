import React from "react";
import "./DailyDesc.css";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/partlycloudy.svg";

class DailyDesc extends React.Component {

      render() {
            let { data } = this.props;
            console.log(data);
            return (

                  <div className="DailyDesc">

                        {data.list.map((w, i) => {
                              if (i < 7)
                                    return <div>
                                          <p>{w.dt_txt.substring(10)}</p>
                                          <img src={cloudy} />
                                          <p>{parseInt(w.main.temp- 273.15)}°C</p>
                                    </div>
                        })}


                  </div>
            );
      }
}
export default DailyDesc;

