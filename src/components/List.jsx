import React from "react";
import Video from "./Video";

function List(props) {
  return (
    <article className="video-container">
      {props.videoList.map((item) => {
        return <Video key={item.id.videoID} className="videos" info={item} />;
      })}
    </article>
  );
}

export default List;
