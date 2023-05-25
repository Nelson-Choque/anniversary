import React from "react";

function Gift() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-800">
      <div className="box">
        <div className="head relative box-head box-head-active">
          <div className="w-52 h-10 bg-box-primary relative z-40 rounded-lg box-shadow"></div>
          <div className="absolute-v-50 w-10 h-full bg-box-secundary z-50 "></div>
          <div className="box-decoration-left w-10 h-20 bg-box-secundary z-20 rounded-lg"></div>
          <div className="box-decoration-right w-10 h-20 bg-box-secundary z-20 rounded-lg"></div>
        </div>

        <div className="body flex justify-center">
          <div className="w-40 h-40 bg-box-primary relative rounded-b-xl">
            <div className="absolute-v-50 w-10 h-full bg-box-secundary "></div>
            <div className="absolute-h-50 w-full h-10 bg-box-secundary "></div>
          </div>
        </div>
      </div>

      <p className="text-white text-center my-4 font-semibold">
        Presiona la caja para ver la pista
      </p>
    </div>
  );
}

export default Gift;
