import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TextTyping() {
  const [phrase, setPhrase] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const stlyeTyping = () => {
      const text = "Las que mandan en casa, las mujeres Arenas";
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
    <div className="bgText min-h-screen bg-blue-800 flex flex-wrap items-center justify-center">
      <h2 className="p-4 transicion text-center text-white text-2xl text-candara">
        {phrase}
      </h2>
      <img className="gif-stitch" src="/images/gif-2-unscreen.gif" alt="" />
    </div>
  );
}

export default TextTyping;
