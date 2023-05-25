import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Day from "./components/Day.jsx";
import Image from "./components/Image.jsx";
import TextTyping from "./components/TextTyping.jsx";
import HappyBirthey from "./components/HappyBirthey.jsx";
import Gift from "./components/Gift.jsx";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/day",
    element: <Day />,
  },
  {
    path: "/image",
    element: <Image />,
  },
  {
    path: "/text-typing",
    element: <TextTyping />,
  },
  {
    path: "/happy-birthey",
    element: <HappyBirthey />,
  },
  {
    path: "/gift",
    element: <Gift />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
