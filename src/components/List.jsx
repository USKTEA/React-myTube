import React from "react";
import Video from "./Video";

function List(props) {
  const filteredVideoList = props.videoList.filter((item) => {
    return item.id.videoId !== props.videoid;
  });

  const firstVideo = props.videoList.find(
    (item) => item.id.videoId === props.videoid
  );

  return props.className === "video-container" ? (
    <div className={props.className}>
      {props.videoList.map((item) => {
        return (
          <Video
            handleClick={props.handleClick}
            className="videos"
            key={item.etag}
            windowWidth={props.windowWidth}
            info={item}
          />
        );
      })}
    </div>
  ) : (
    <div className={props.className}>
      <Video
        isPlaying={true}
        handleClick={props.handleClick}
        className="stream-videoList-video"
        key={props.videoid}
        windowWidth={props.windowWidth}
        info={firstVideo}
      />
      {filteredVideoList.map((item) => {
        return (
          <Video
            handleClick={props.hanldePlayListClick}
            className="stream-videoList-video"
            key={item.id.videoId}
            windowWidth={props.windowWidth}
            info={item}
          />
        );
      })}
    </div>
  );
}

export default List;
