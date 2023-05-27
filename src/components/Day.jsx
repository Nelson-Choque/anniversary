import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Day() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/image"), 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="h-screen bg-blue-800">
      <div className="transicion h-full flex gap-4  items-center justify-center">
        <img className="w-16 heart-day" src="/images/heart.png" alt="" />

        <h2 className=" text-white text-center text-4xl text-sans-serif">
          DIA 2
        </h2>
        <img className="w-16 heart-day" src="/images/heart.png" alt="" />
      </div>
    </div>
  );
}

export default Day;
