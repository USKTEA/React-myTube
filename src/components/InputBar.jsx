import React from 'react';

function InputBar(props) {
  return (
    <input id="search-bar" type="text" onChange={props.handleChange} placeholder="Search..."></input>
  );
}

export default InputBar;