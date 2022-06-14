import React from "react";

function Button(props) {
  return <button id={props.cssTag}>{props.name}</button>;
}

export default Button;
