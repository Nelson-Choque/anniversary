import React from "react";

function Image() {
  return (
    <div className="h-screen bg-blue-800">
      <div className="h-full flex flex-col items-center justify-center p-4">
        <h2 className="text-white text-center text-2xl font-bold">
          ¿Recuerdas esto?
        </h2>
        <img
          className="mt-4 rounded-2xl w-full max-h-50-full object-cover object-center"
          src="/images/couple-2.jpg"
          alt="image couple"
        />
      </div>
    </div>
  );
}

export default Image;
