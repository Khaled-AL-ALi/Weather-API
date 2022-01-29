import React, { Component } from "react";
import "./App.css";
import BigDesc from "./components/BigDesc";
import Search from "./components/Search";
import DailyDesc from "./components/DailyDesc";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "beirut",
      data: {}
    };
  }

  async getData() {
    let { city } = this.state;
    if (city == "") { alert("Enter a city") }
    else {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=` + city + `&appid=0ed52a0b218abf1606457fb3ca161bce`)
        .then(res => {
          let data = res.json();
          return data;
        })
        .then(data => this.setState({ data }))
        .catch(e => console.log('ERROR', e))
    }
  }
  componentDidMount() {
    this.getData();
  }

  getImage = (id) => {
    switch (true) {
      case (id < 300): return storm;
      case (id > 299 && id < 500): return drizzle;
      case (id > 499 && id < 600): return rain;
      case (id > 599 && id < 700): return snow;
      case (id > 699 && id < 800): return fog;
      case (id === 800): return clear;
      case (id === 801): return partlycloudy;
      case (id > 800 && id < 806): return mostlycloudy;
      default: return storm;
    }
  }

  render() {
    let { city, data } = this.state;
    return (
      <div className="app">
        <Search city={city} handleChange={city => this.setState({ city })} submit={() => this.getData(this)} />
        <BigDesc data={data} getimg={this.getImage} />
        <DailyDesc data={data} getimg={this.getImage} />
      </div>
    );
  }
}
export default App;
