import React from "react";

function Button(props) {
  return (
    <button onClick={props.handleClick} className={props.className}>
      {props.children}
    </button>
  );
}

//type button으로 하면 submit 되지 않음 onclick은 focus되는 태그만
export default Button;
