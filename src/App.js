import React, { Component } from "react";

import FakeWeather from "./data/FakeWeather.json";
import "./App.css";
import BigDesc from "./components/BigDesc";
import Search from "./components/Search";
import DailyDesc from "./components/DailyDesc";
class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      city: "beirut",
      data: {}
    };
  }

  getData() {
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

  render() {

    let { city, data } = this.state;
    return (

      <div className="app">
        <Search city={city} handleChange={city => this.setState({ city })} submit={() => this.getData(this)} />
        <BigDesc />
        <DailyDesc data={data} />
      </div>
    );
  }

}
export default App;
