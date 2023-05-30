import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Image() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/text-typing"), 5000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="h-screen bg-blue-800 overflow-hidden">
      <div className="container">
        <div className="transicion h-full flex flex-col items-center justify-center p-4">
          <h2 className="text-white text-center text-2xl font-bold">
            FELIZ CUMPLEAÑOS AMOR 🤎
          </h2>
          <p className="text-white">
            Para la arquitecta más hermosa, inteligente y divertida. Para la
            chica más impredecible, tierna y loca.
          </p>
          <img
            className="mt-4 rounded-2xl w-full object-cover object-center"
            src="/images/img_final.webp"
            alt="image couple"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Image;
