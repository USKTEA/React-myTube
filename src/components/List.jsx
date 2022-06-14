import React from "react";
import Video from "./Video";

function List(props) {
  return (
    <article className="video-container">
      {props.videoList.map((item) => {
        return (
          <Video className="videos" info={item}/>
        );
      })}
    </article>
  );
}

export default List;
