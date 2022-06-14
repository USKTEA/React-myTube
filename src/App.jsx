import { useEffect, useState } from "react";
import "./app.css";
import InputBar from "./components/InputBar";
import InputForm from "./components/InputForm";
import NavBar from "./components/navBar";
import Button from "./components/Button";
import config from "./config";

function App() {
  const [inputs, setInputs] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(config);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=메이플스토리&key=${config.MY_KEY}`
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
    <NavBar>
      <InputForm handleSubmit={handleSubmit}>
        <InputBar handleChange={handleChange}></InputBar>
        <Button name="🔍"></Button>
      </InputForm>
    </NavBar>
  );
}

export default App;
