import React, { useState } from "react";

function TextTyping() {
  const [phrase, setPhrase] = useState("");

  const stlyeTyping = () => {
    const text = "Ese dia nos conocimos y desde ese momento mi mundo cambio...";

    let letters = "";

    let counter = -1;

    const changeText = setInterval(() => {
      if (counter === text.length - 1) {
        console.log("se termino");
        clearInterval(changeText);
        return "";
      }
      counter++;

      letters += text[counter];
      setPhrase(letters);
    }, 100);
  };

  return (
    <div className="h-screen bg-blue-800 flex flex-col items-center justify-center">
      <h2 className="text-center text-white text-2xl">{phrase}</h2>

      <button
        className="px-4 py-2 mt-4 rounded-2xl bg-blue-600 text-white"
        onClick={stlyeTyping}
      >
        Test
      </button>
    </div>
  );
}

export default TextTyping;
