import React from "react";
import "./Search.css";
class Search extends React.Component {

  render() {

 

    return (
      <div className="NAV">
      <input type="text" id="city"/>
      <input type="submit" value="Find Weather" onclick={()=>this.props.handlechange(document.querySelector("city").value)}/>
      </div> 
    );
  }
  handlechange = (e) => {
    console.log(e.target.value)
  }
  
}
export default Search;
