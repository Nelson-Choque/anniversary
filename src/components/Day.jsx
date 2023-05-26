import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Day() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/image"), 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="min-h-screen bg-blue-800">
      <div className="transicion h-full flex items-center justify-center">
        <h2 className="text-white text-center text-4xl font-bold">DIA 1</h2>
      </div>
    </div>
  );
}

export default Day;
