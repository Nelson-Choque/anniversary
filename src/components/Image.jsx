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
            Este momento...
          </h2>
          <img
            className="mt-4 rounded-2xl w-2/3 max-h-50-full object-cover object-center"
            src="/images/FOTO2_light.png"
            alt="image couple"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Image;
