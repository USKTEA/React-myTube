import React from "react";

function Side(props) {
  return (
    <aside id={props.cssTag}>
      <div id="side-icon-container">
        {props.imgs.map((img) => {
          return <img className="left-side-icon" src={img} alt="icons"></img>;
        })}
      </div>
    </aside>
  );
}

export default Side;
