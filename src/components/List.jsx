import React from "react";

function List(props) {
  return (
    <div id="video-board">
      {props.videoList.map((item) => {
        return (
          <div className="video-container">
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
}

export default List;
