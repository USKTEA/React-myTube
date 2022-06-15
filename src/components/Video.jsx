import React, { useState } from "react";
import { useEffect } from "react";
import config from "../config.js";

function Video(props) {
  const [channelInfo, setChannelInfo] = useState("");
  const [videoInfo, setVideoInfo] = useState("");
  const channel = props.info.snippet.channelId;
  const videoID = props.info.id.videoId;
  const title = props.info.snippet.title.slice(0, 13);
  const viewCount = videoInfo.length
    ? (+videoInfo[0].statistics.viewCount / 10000).toFixed(2)
    : null;

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channel}&key=${config.MY_KEY2}`
    )
      .then((response) => response.json())
      .then((data) => setChannelInfo(data.items));
  }, []);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoID}&key=${config.MY_KEY2}`
    )
      .then((response) => response.json())
      .then((data) => setVideoInfo(data.items));
  }, []);

  return (
    <div className={props.className}>
      <div className="video-outer-box">
        <div className="video-box">
          <img
            className="thumbnail"
            src={props.info.snippet.thumbnails.medium.url}
            alt="img"
          ></img>
        </div>
        <div className="video-describtion">
          <div className="channel-thumbnail-container">
            {channelInfo.length ? (
              <img
                className="channel-thumbnail"
                alt="channel-thumbnail"
                src={channelInfo[0].snippet.thumbnails.default.url}
              ></img>
            ) : null}
          </div>
          {videoInfo.length ? (
            <div>
              <h4 className="video-title">{title + " (...)"}</h4>
              <p>{channelInfo[0].snippet.title}</p>
              <p>{viewCount + " views"}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Video;
