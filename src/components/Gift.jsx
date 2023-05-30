import React, { useRef } from "react";
import ReactConfetti from "react-confetti";
import { useNavigate } from "react-router-dom";

function Gift() {
  const navigate = useNavigate();
  // const refHead = useRef();
  // const refClue = useRef();
  // const refBody = useRef();

  const refLetterHead = useRef();
  const refCarte = useRef();

  // const openBox = () => {
  //   refHead.current.classList.toggle("box-head-active");
  //   refClue.current.classList.toggle("clue-active");
  //   refBody.current.classList.toggle("box-body-active");
  // };

  const openLetter = () => {
    // console.log(refLetterHead.current);
    refLetterHead.current.classList.toggle("letter-head-shadow--active");
    refCarte.current.classList.toggle("carte--active");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-800 ">
      {/* <div className="transicion box relative" onClick={openBox}>
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
          src="/images/pista-4.png"
          alt="pista"
        />
      </div> */}

      <div className="w-64 h-32 relative" onClick={openLetter}>
        <div className="w-full h-full bg-box-primary"></div>
        <div className="w-full h-full bg-box-secundary letter-head "></div>
        <div
          ref={refLetterHead}
          className="w-full h-full bg-box-primary letter-head letter-head-shadow"
        ></div>
      </div>
      <div ref={refCarte} className="carte flex justify-center">
        <div className="max-w-xl p-4 flex flex-col justify-between ">
          <img src="/images/border-love.png" alt="" />
          <div className="">
            <h2 className="font-bold text-2xl md:text-3xl ">
              Hola Amor, ¡¡Feliz cumpleaños!!
            </h2>
            <p className="mt-4">
              Quiero invitarte a una inolvidable cena junto al mar y las
              estrellas; en donde lo único que importará esa noche serás tú 🤎.
            </p>
            <p className="mt-4">
              <strong>Lugar: </strong> Playita
            </p>
            <p className="mt-4">
              <strong>Hora: </strong> 7pm
            </p>
            <strong className="block mt-4">Te estare esperando 🤎</strong>
          </div>
          <img className=" " src="/images/border-love.png" alt="" />
        </div>
      </div>

      <p className="text-white text-center my-4 font-semibold">
        Presiona la carta 🤎
      </p>
      <button
        className="px-4 py-2 mt-4 rounded-2xl  bg-blue-500 font-semibold uppercase text-white"
        onClick={() => navigate("/happy-birthey")}
      >
        Regresar
      </button>
      <ReactConfetti
        numberOfPieces={50}
        width={window.innerWidth}
        height={window.innerHeight}
      ></ReactConfetti>
    </div>
  );
}

export default Gift;
