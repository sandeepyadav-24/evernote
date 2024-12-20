import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import Notes from "./components/Notes";
import Homepage from "./components/HomePage";
import Landingpage from "./components/LandingPage";

function App() {
  const token = localStorage.getItem("Authentication");
  return <div>{token ? <Homepage /> : <Landingpage />}</div>;
}

export default App;
