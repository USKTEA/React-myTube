import React from "react";

function Button(props) {
  return (
    <button onClick={props.handleClick} className={props.className}>
      {props.children}
    </button>
  );
}

export default Button;
