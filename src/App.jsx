import { useCallback, useEffect, useState } from "react";

//components
import InputBar from "./components/InputBar";
import InputForm from "./components/InputForm";
import Header from "./components/Header";
import Button from "./components/Button";
import Side from "./components/Side";
import List from "./components/List";
import Stream from "./components/Stream";

//imgs
import bow from "./img_assets/sideBarIcon-bow.png";
import magicStric from "./img_assets/sideBarIcon-magicStick.png";
import pirate from "./img_assets/sideBarIcon-pirate.png";
import sword from "./img_assets/sideBarIcon-sword.png";
import theif from "./img_assets/sideBarIcon-theif.png";

import "./app.css";

import config from "./config.js";

function App() {
  const [inputs, setInputs] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [videoInfo, setVideoInfo] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [search, setSearch] = useState("메이플");
  const icons = [sword, magicStric, theif, bow, pirate];

  const handleResize = () => {
    setWindowWidth(() => window.innerWidth);
  };

  const debouncedFunction = (func, delay) => {
    let timer = null;

    return (event) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => func(event), delay);
    };
  };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&q=${search}&key=${config.MY_KEY2}`
    )
      .then((response) => response.json())
      .then((data) => setVideoList(data.items));

    window.addEventListener("resize", debouncedFunction(handleResize, 500));
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setVideoInfo(() => "");
    setSearch(() => inputs);
    setInputs(() => "");
  };

  const handleChange = (event) => {
    setInputs(() => event.target.value);
  };

  const debouncedHandleChange = useCallback(
    debouncedFunction(handleChange, 100),
    []
  );

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
          <InputBar handleChange={debouncedHandleChange}></InputBar>
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
