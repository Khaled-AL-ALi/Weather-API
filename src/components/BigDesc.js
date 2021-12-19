import React from "react";
import "./BigDesc.css";
import cloudy from "../img/weather-icons/partlycloudy.svg";

class BigDesc extends React.Component {

  render() {
    let{data}=this.props;
    return (
        <div className="BigDesc">

        <img src={cloudy} />
        <p>Overcast clouds</p>
        <p><span>temprature</span> 10° to 11°C</p>
        <p><span>Humidity</span> 78% <span>pressure</span> 1008.48</p>
        </div>
       
    );
  }
}
export default BigDesc;
