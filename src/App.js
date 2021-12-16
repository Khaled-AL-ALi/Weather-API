import React, { Component } from "react";
//import Search from "./components/Search";

//import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/partlycloudy.svg";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "khaled"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
       {/* <SayHi />
        <SayHello color="black" name={this.state.name} />
       <Search handleInput={this.handleInputChange} />*/}

     <div className="NAV">
            <input type="text"/>
            <input type="submit" value="Find Weather"/>
     </div>
     <div className="BigDesc">
            <img src={cloudy} />
            <p>Overcast clouds</p>
            <p><span>temprature</span> 10° to 11°C</p>
            <p><span>Humidity</span> 78% <span>pressure</span> 1008.48</p>
     </div>
     <div className="DailyDesc">
              <div>
                    <p>03:00 </p>
                    <img src={cloudy} />
                    <p>8°C</p>
              </div>
              <div>
                    <p>06:00 </p>
                    <img src={cloudy}  />
                    <p>9°C</p>
              </div>
              <div>
                    <p>09:00 </p>
                    <img src={clear}  />
                    <p>14°C</p>
              </div>
              <div>
                    <p>12:00 </p>
                    <img src={clear}  />
                    <p>17°C</p>
              </div>
              <div>
                    <p>15:00 </p>
                    <img src={clear} />
                    <p>18°C</p>
              </div>
              <div>
                    <p>18:00 </p>
                    <img src={clear}  />
                    <p>16°C</p>
              </div>
              <div>
                    <p>21:00 </p>
                    <img src={cloudy}  />
                    <p>13°C</p>
              </div>


     </div>




      </div>
    );
  }
}

export default App;
