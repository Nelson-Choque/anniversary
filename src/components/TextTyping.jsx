import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TextTyping() {
  const [phrase, setPhrase] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const stlyeTyping = () => {
      const text =
        "Ese dia nos conocimos y desde ese momento mi mundo cambio...";
      let letters = "";
      let counter = -1;

      const changeText = setInterval(() => {
        if (counter === text.length - 1) {
          setTimeout(() => {
            navigate("/happy-birthey");
          }, 1500);
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
    <div className="h-screen bg-blue-800 flex flex-col items-center justify-center">
      <h2 className="transicion text-center text-white text-2xl">{phrase}</h2>
    </div>
  );
}

export default TextTyping;
