import React, { useState } from "react";
import { useEffect } from "react";
import Button from "./Button.jsx";

function Video(props) {
  const [channelInfo, setChannelInfo] = useState("");
  const [videoInfo, setVideoInfo] = useState("");
  const channel = props.info.snippet.channelId;
  const videoID = props.info.id.videoId;
  const letters = Math.ceil(props.windowWidth / 75);
  const title = props.info.snippet.title.slice(0, letters);
  const viewCount =
    videoInfo.length && (+videoInfo[0].statistics.viewCount / 10000).toFixed(2);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `/.netlify/functions/myFunction/channels?part=snippet&id=${channel}`
      );
      const data = await response.json();

      setChannelInfo(data.items);
    };

    fetchData();
  }, [channel]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `/.netlify/functions/myFunction/videos?part=snippet&part=statistics&id=${videoID}`
      );
      const data = await response.json();
      setVideoInfo(data.items);
    };

    fetchData();
  }, [videoID]);

  return (
    <div className={props.className}>
      <div className="video-outer-box">
        <div className="video-box">
          <Button className="video-box" handleClick={props.handleClick}>
            {videoInfo.length && channelInfo.length && (
              <img
                className="thumbnail"
                src={props.info.snippet.thumbnails.medium.url}
                data-videoid={videoID}
                data-videotitle={videoInfo[0].snippet.title}
                data-view={videoInfo[0].statistics.viewCount}
                data-like={videoInfo[0].statistics.likeCount}
                data-publishdate={videoInfo[0].snippet.publishedAt}
                data-channeltitle={channelInfo[0].snippet.title}
                data-channeldescription={channelInfo[0].snippet.description}
                data-channelthumbnail={
                  channelInfo[0].snippet.thumbnails.default.url
                }
                alt="thumbnail"
              />
            )}
          </Button>
          {props.isPlaying && <div className="playing">Now playing...</div>}
        </div>
        <div className="video-describtion">
          <div className="channel-thumbnail-container">
            {channelInfo.length && (
              <img
                className="channel-thumbnail"
                alt="channel-thumbnail"
                src={channelInfo[0].snippet.thumbnails.default.url}
              ></img>
            )}
          </div>
          {channelInfo.length && (
            <div>
              <h4 className="video-title">{title + "..."}</h4>
              <p>{channelInfo[0].snippet.title}</p>
              <p>{viewCount + "m views"}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Video;
