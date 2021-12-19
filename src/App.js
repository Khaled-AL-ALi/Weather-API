import React, { Component } from "react";

import FakeWeather from "./data/FakeWeather.json";
import "./App.css";
import BigDesc from "./components/BigDesc";
import Search from "./components/Search";
import DailyDesc from "./components/DailyDesc";
class App extends Component {
 

  constructor(props) {
    super(props);
    this.state = {name: "khaled"};
  }
 

  handleInputChange = value => {this.setState({ name: value });};

  render() {
    
    return (

      <div className="app">
            <div><Search /></div>   
            <div><BigDesc /></div>
            <div><DailyDesc data={FakeWeather}/></div>
           
      </div>
    );
  }
  
}
export default App;
