import React from 'react';
import './Search.css';
class Search extends React.Component {

  render() {

    let { handleChange, submit } = this.props

    return (
      <div className='NAV'>
        <input type='text' id='city' onChange={(e) => handleChange(e.target.value)} />
        <input type='button' value='Find Weather' onClick={submit} />
      </div>
    );
  }

}
export default Search;
