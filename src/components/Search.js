import React from "react";
import "./Search.css";
class Search extends React.Component {

  render() {
    return (
      <div className="NAV">
      <input type="text" onChange={this.handlechange} />
      <input type="submit" value="Find Weather"/>
      <div>{this.props.name}</div>
      </div> 
    );
  }
  handlechange = (e) => {
    console.log(e.target.value)
  }
  
}
export default Search;
