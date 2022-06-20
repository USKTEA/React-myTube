import React from "react";

function Button(props) {
  const buttonIcon =
    props.className === "side-icon" && props.children.props.alt;

  return (
    <button
      onClick={
        props.className === "side-icon"
          ? props.handleSideIconClick(buttonIcon)
          : props.handleClick
      }
      className={props.className}
    >
      {props.children}
    </button>
  );
}

export default Button;
