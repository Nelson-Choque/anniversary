import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Day from "./components/Day.jsx";
import Image from "./components/Image.jsx";
import TextTyping from "./components/TextTyping.jsx";
import HappyBirthey from "./components/HappyBirthey.jsx";
import Gift from "./components/Gift.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Gift /> */}
    <App />
    {/* <Day /> */}
    {/* <Image /> */}
    {/* <TextTyping /> */}
    {/* <HappyBirthey /> */}
  </React.StrictMode>
);
