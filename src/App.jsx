import { useCallback, useEffect, useState } from "react";

//components
import InputBar from "./components/InputBar";
import InputForm from "./components/InputForm";
import Header from "./components/Header";
import Button from "./components/Button";
import Side from "./components/Side";
import List from "./components/List";
import Stream from "./components/Stream";
import Modal from "./components/Modal";

//imgs
import bow from "./img_assets/sideBarIcon-bow.png";
import magicStick from "./img_assets/sideBarIcon-magicStick.png";
import pirate from "./img_assets/sideBarIcon-pirate.png";
import sword from "./img_assets/sideBarIcon-sword.png";
import theif from "./img_assets/sideBarIcon-theif.png";

import "./app.css";

document.cookie = "cookie1=soo; SameSite=Lax";
document.cookie = "cookie2=soo";
document.cookie = "cookie3=hoo; SameSite=None; Secure";

function App() {
  const prefix = "메이플스토리";
  const [inputs, setInputs] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [videoInfo, setVideoInfo] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [search, setSearch] = useState(prefix);
  const [clickedIcon, setClickedIcon] = useState(false);
  const icons = [sword, magicStick, theif, bow, pirate];
  const iconsText = ["sword", "magicStick", "theif", "bow", "pirate"];

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
    const option = {
      method: "GET",
      mode: "cors",
    };

    const API_KEY = process.env.REACT_APP_FIRST_SECRET;
    const url = `/search?part=snippet&maxResults=16&q=${search}&type=video&key=${API_KEY}`;

    fetch(url, option)
      .then((response) => response.json())
      .then((data) => setVideoList(data.items));

    window.addEventListener("resize", debouncedFunction(handleResize, 500));
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setVideoInfo(() => "");
    setSearch(() => prefix + inputs);
    setInputs(() => "");
  };

  const handleChange = (event) => {
    setInputs(() => event.target.value);
  };

  const debouncedHandleChange = useCallback(
    () => debouncedFunction(handleChange, 200),
    []
  );

  const handleClick = (event) => {
    setVideoInfo(() => event.target.dataset);
  };

  const handleGoPreviousPage = () => {
    setVideoInfo(() => "");
  };

  const handleSideIconClick = useCallback(
    (icon) => () => {
      setClickedIcon(() => icon);
    },
    []
  );

  return (
    <>
      {clickedIcon ? (
        <Modal
          handleClick={handleSideIconClick(false)}
          clickedIcon={clickedIcon}
        >
          <Button
            className="modal-button"
            handleClick={handleSideIconClick(false)}
          >
            Close
          </Button>
        </Modal>
      ) : null}
      <Header>
        <InputForm handleSubmit={handleSubmit}>
          <InputBar handleChange={debouncedHandleChange()}></InputBar>
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
          <Side
            cssTag="left-side"
            icons={icons}
            iconsText={iconsText}
            handleSideIconClick={handleSideIconClick}
          ></Side>
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
