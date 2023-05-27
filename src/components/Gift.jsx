import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Gift() {
  const navigate = useNavigate();
  const refHead = useRef();
  const refClue = useRef();
  const refBody = useRef();

  const openBox = () => {
    refHead.current.classList.toggle("box-head-active");
    refClue.current.classList.toggle("clue-active");
    refBody.current.classList.toggle("box-body-active");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-800 ">
      <div className="transicion box relative" onClick={openBox}>
        <div ref={refHead} className="head relative box-head">
          <div className="w-52 h-10 bg-box-primary relative z-40 rounded-lg box-shadow"></div>
          <div className="absolute-v-50 w-10 h-full bg-box-secundary z-50 "></div>
          <div className="box-decoration-left w-10 h-20 bg-box-secundary z-20 rounded-lg"></div>
          <div className="box-decoration-right w-10 h-20 bg-box-secundary z-20 rounded-lg"></div>
        </div>

        <div ref={refBody} className="box-body flex justify-center">
          <div className="w-40 h-40 bg-box-primary relative rounded-b-xl">
            <div className="absolute-v-50 w-10 h-full bg-box-secundary "></div>
            <div className="absolute-h-50 w-full h-10 bg-box-secundary "></div>
          </div>
        </div>
        <img
          ref={refClue}
          className="clue"
          src="/images/pista-2.png"
          alt="pista 1"
        />
      </div>

      <p className="text-white text-center my-4 font-semibold">
        Presiona la caja para ver la pista de la sorpresa
      </p>
      <button
        className="px-4 py-2 mt-4 rounded-2xl  bg-blue-500 font-semibold uppercase text-white"
        onClick={() => navigate("/happy-birthey")}
      >
        Regresar
      </button>
    </div>
  );
}

export default Gift;
