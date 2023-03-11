import stilogo from "./stilogo.png";
import Home from "./Home.js"
import Seasons from "./Seasons.js"
import Sharks from "./Sharks.js"
import Pitches from "./Pitches.js"
import styles from "./style.css"
import { Route, Routes } from "react-router-dom";

function Body() {
  return (
    <div>
      <img src={stilogo} alt="shark tank india" height="300" />
      

      <Home id = "home"/>
      <Seasons id = "seasons" />
      <Sharks  id = "sharks"/>
    </div>
  );
}

export default Body;
