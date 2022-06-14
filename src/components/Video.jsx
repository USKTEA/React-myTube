import React from "react";
import searchBarIcon from "../img_assets/searchBarIcon.png";

function Video(props) {
  return (
    <div className={props.className}>
      <div className="video-outer-box">
        <div className="video-box">
          <img className="mockImg" src={searchBarIcon} alt="img"></img>
        </div>
        <div className="video-describtion">
          <div className="channel-thumbnail-container">
            <div className="channel-thumbnail">w</div>
          </div>
          <div>
            <h4>helolfsdfdsfsdfsdfo</h4>
            <p>lolilfsdfsdfsdfi</p>
            <p>lolosdfsdsdsdfl</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
