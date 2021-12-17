import React from "react";
import "./Search.css";
class Search extends React.Component {

  render() {
    return (
      <div className="NAV">
      <input type="text"/>
      <input type="submit" value="Find Weather"/>
      </div> 
    );
  }
}
export default Search;
