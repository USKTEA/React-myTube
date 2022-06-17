import { useEffect, useState } from "react";

//components
import InputBar from "./components/InputBar";
import InputForm from "./components/InputForm";
import Header from "./components/Header";
import Button from "./components/Button";
import Side from "./components/Side";
import List from "./components/List";

//imgs
import bow from "./img_assets/sideBarIcon-bow.png";
import magicStric from "./img_assets/sideBarIcon-magicStick.png";
import pirate from "./img_assets/sideBarIcon-pirate.png";
import sword from "./img_assets/sideBarIcon-sword.png";
import theif from "./img_assets/sideBarIcon-theif.png";

import "./app.css";

import config from "./config.js";
import Stream from "./components/Stream";

function App() {
  const [inputs, setInputs] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [videoInfo, setVideoInfo] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const icons = [sword, magicStric, theif, bow, pirate];

  const handleResize = () => {
    setWindowWidth(() => window.innerWidth);
  };

  const debouncedHandleResize = (func, delay) => {
    let timer = null;

    return () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => func(), delay);
    };
  };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&q=메이플&key=${config.MY_KEY2}`
    )
      .then((response) => response.json())
      .then((data) => setVideoList(data.items));

    window.addEventListener("resize", debouncedHandleResize(handleResize, 500));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setInputs(() => event.target.value);
  };

  const handleClick = (event) => {
    setVideoInfo(() => event.target.dataset);
  };

  const handleGoPreviousPage = () => {
    setVideoInfo(() => "");
  };

  return (
    <>
      <Header>
        <InputForm handleSubmit={handleSubmit}>
          <InputBar handleChange={handleChange}></InputBar>
          <Button>🔍</Button>
        </InputForm>
      </Header>
      {videoInfo ? (
        <Stream
          videoInfo={videoInfo}
          handleClick={handleGoPreviousPage}
          handlePlayListClick={handleClick}
          videoList={videoList}
          windowWidth={windowWidth}
        />
      ) : (
        <>
          <Side cssTag="left-side" icons={icons}></Side>
          <List
            handleClick={handleClick}
            videoList={videoList}
            windowWidth={windowWidth}
            className="video-container"
          ></List>
        </>
      )}
    </>
  );
}

export default App;
