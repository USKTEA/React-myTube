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

function App() {
  const [inputs, setInputs] = useState("");
  const [data, setData] = useState([]);
  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const icons = [sword, magicStric, theif, bow, pirate];

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=16&q=메이플&key=${config.MY_KEY2}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.items));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setInputs((prev) => event.target.value);
  };

  return (
    <>
      <Header>
        <InputForm handleSubmit={handleSubmit}>
          <InputBar handleChange={handleChange}></InputBar>
          <Button name="🔍"></Button>
        </InputForm>
      </Header>
      <Side cssTag="left-side" icons={icons}></Side>
      <List videoList={data}></List>
    </>
  );
}

export default App;
