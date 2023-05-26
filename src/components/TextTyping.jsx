import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TextTyping() {
  const [phrase, setPhrase] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const stlyeTyping = () => {
      const text =
        "Ese día te vi tan feliz y desde ese momento mi mundo cambio...";
      let letters = "";
      let counter = -1;

      const changeText = setInterval(() => {
        if (counter === text.length - 1) {
          setTimeout(() => {
            navigate("/happy-birthey");
          }, 2000);
          console.log("se termino");
          clearInterval(changeText);
          return;
        }
        counter++;
        letters += text[counter];
        setPhrase(letters);
      }, 100);
    };

    stlyeTyping();
  }, []);

  return (
    <div className="min-h-screen bg-blue-800 flex flex-wrap items-center justify-center">
      <div className="">
        <div className="flex gap-4 justify-center">
          <img
            className="w-8 h-auto heart-day"
            src="/images/heart.png"
            alt=""
          />
          <img
            className="w-8 h-auto heart-day"
            src="/images/heart.png"
            alt=""
          />
          <img
            className="w-8 h-auto heart-day"
            src="/images/heart.png"
            alt=""
          />
          <img
            className="w-8 h-auto heart-day"
            src="/images/heart.png"
            alt=""
          />
        </div>
        <h2 className="p-4 transicion text-center text-white text-2xl">
          {phrase}
        </h2>
        <div className="flex gap-4 justify-center">
          <img
            className="w-8 h-auto heart-day"
            src="/images/heart.png"
            alt=""
          />
          <img
            className="w-8 h-auto heart-day"
            src="/images/heart.png"
            alt=""
          />
          <img
            className="w-8 h-auto heart-day"
            src="/images/heart.png"
            alt=""
          />
          <img
            className="w-8 h-auto heart-day"
            src="/images/heart.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default TextTyping;
