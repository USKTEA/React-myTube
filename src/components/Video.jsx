import React, { useState } from "react";
import { useEffect } from "react";
import config from "../config.js";
import Button from "./Button.jsx";

function Video(props) {
  const [channelInfo, setChannelInfo] = useState("");
  const [videoInfo, setVideoInfo] = useState("");
  const channel = props.info.snippet.channelId;
  const videoID = props.info.id.videoId;
  const letters = Math.ceil(props.windowWidth / 75);
  const title = props.info.snippet.title.slice(0, letters);
  const viewCount = videoInfo.length
    ? (+videoInfo[0].statistics.viewCount / 10000).toFixed(2)
    : null;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channel}&key=${config.MY_KEY3}`
      );
      const data = await response.json();

      setChannelInfo(data.items);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoID}&key=${config.MY_KEY3}`
      );
      const data = await response.json();

      setVideoInfo(data.items);
    };

    fetchData();
  }, [channelInfo]);

  return (
    <div className={props.className}>
      <div className="video-outer-box">
        <div className="video-box">
          <Button className="video-box" handleClick={props.handleClick}>
            <img
              className="thumbnail"
              src={props.info.snippet.thumbnails.medium.url}
              data-videoid={videoID}
              alt="thumbnail"
            ></img>
          </Button>
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
          {channelInfo.length ? (
            <div>
              <h4 className="video-title">{title + "..."}</h4>
              <p>{channelInfo[0].snippet.title}</p>
              <p>{viewCount + "m views"}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Video;
