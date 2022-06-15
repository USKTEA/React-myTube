import React from "react";
import Video from "./Video";

function List(props) {
  return (
    <article className="video-container">
      {props.videoList.map((item) => {
        return (
          <Video
            handleClick={props.handleClick}
            className="videos"
            key={item.id.videoId}
            windowWidth={props.windowWidth}
            info={item}
          />
        );
      })}
    </article>
  );
}

export default List;
