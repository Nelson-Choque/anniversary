import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useNavigate } from "react-router-dom";

import Day from "./components/Day.jsx";

function App() {
  const [errorMessageActive, setErrorMessageActive] = useState(false);
  const [dayActive, setDayActive] = useState(false);

  const navigate = useNavigate();

  const refDate = useRef();

  const dateAnniversary = "3/5/2023";

  const validateDate = () => {
    const date = refDate.current.value;

    if (!date) {
      setErrorMessageActive(true);
      return "";
    }

    const arrayDate = date.split("-");

    const dateFormat = new Date(
      arrayDate[0],
      arrayDate[1] - 1,
      arrayDate[2]
    ).toLocaleDateString();
    if (!(dateFormat === dateAnniversary)) {
      setErrorMessageActive(true);
      return "";
    }

    navigate("/day");
  };

  return (
    <>
      {errorMessageActive && (
        <ErrorMessage setErrorMessageActive={setErrorMessageActive} />
      )}

      <div className="bg-blue-800 h-screen">
        <div className="container">
          <div className="h-full p-4 flex flex-col items-center justify-center">
            <h2 className="text-white font-bold text-3xl text-center ">
              FECHA DE ANIVERSARIO
            </h2>
            <p className="mt-2 text-white text-center ">
              para continuar debes ingresar la fecha de nuestro aniversario 💖
            </p>
            <input
              ref={refDate}
              className=" w-full p-2 px-4 mt-4 rounded-2xl"
              type="date"
            />
            <button
              className="px-4 py-2 mt-4 rounded-2xl bg-blue-600 text-white"
              onClick={validateDate}
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>

      {dayActive && <Day />}
    </>
  );
}

function ErrorMessage({ setErrorMessageActive }) {
  const disableMessage = () => {
    setErrorMessageActive(false);
  };

  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full p-4 min-h-screen bg-blue-800">
      <div className="container">
        <div className="transicion h-full flex flex-col items-center justify-center relative">
          <div className="absolute right-0 top-0">
            <i
              className="relative bottom-2 left-2 h-8 w-8 flex justify-center items-center bg-blue-600 text-white rounded-full fa-solid fa-x"
              onClick={disableMessage}
            ></i>
          </div>
          <div className="p-4 py-16 bg-white-semi-transparent rounded-2xl ">
            <h2 className="flex justify-center heart">
              <div className="heart-item">
                <img className="w-16 h-auto" src="/images/heart.png" alt="" />
              </div>
              <div className="heart-2"></div>
              <div className="heart-particle"></div>
              <div className="heart-particle heart-particle-2"></div>
              <div className="heart-particle heart-particle-3"></div>
            </h2>
            <p className="mt-4 text-white font-semibold text-center text-2xl">
              ¿Que paso amor? olvidaste nuestro aniversario 😢
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
