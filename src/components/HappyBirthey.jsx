import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HappyBirthey() {
  const navigate = useNavigate();

  const [date, setDate] = useState({
    dias: "",
    horas: "",
    minutos: "",
    segundos: "",
  });

  const finalDate = new Date("05/30/2023");

  const updateTime = () => {
    const actualTime = new Date();

    const diferenciaEnMilisegundos = finalDate - actualTime;

    // Obtener la diferencia en días
    const diasRestantes = Math.floor(
      diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)
    );
    const horasRestantes = Math.floor(
      (diferenciaEnMilisegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutosRestantes = Math.floor(
      (diferenciaEnMilisegundos % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundosRestantes = Math.floor(
      (diferenciaEnMilisegundos % (1000 * 60)) / 1000
    );
    setDate({
      ...date,
      dias: diasRestantes,
      horas: horasRestantes,
      minutos: minutosRestantes,
      segundos: segundosRestantes,
    });
  };

  useEffect(() => {
    updateTime();
  }, []);

  setInterval(updateTime, 1000);

  const changeScreen = () => navigate("/gift");

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-800 overflow-hidden">
      <div className="transicion h-full flex flex-col justify-center items-center p-4">
        <h2 className="text-2xl text-white text-center font-bold">
          Tú Cumpleaños
        </h2>
        <p className="text-white">Falta poco para el gran dia 💖</p>

        <section className="flex flex-wrap gap-4 justify-center mt-4">
          <CardDate date={date.dias} name="dias" />
          <CardDate date={date.horas} name="minutos" />
          <CardDate date={date.minutos} name="segundos" />
          <CardDate date={date.segundos} name="segundos" />
        </section>
        <button
          className="block mx-auto px-4 py-2 my-4 rounded-2xl bg-blue-600 text-white"
          onClick={changeScreen}
        >
          Ver pista
        </button>
      </div>
    </div>
  );
}

function CardDate({ date, name }) {
  return (
    <article>
      <div className="w-32 h-48 flex items-center justify-center bg-white-semi-transparent rounded-2xl text-white text-5xl">
        {date}
      </div>

      <div className="text-center text-white mt-2 capitalize">{name}</div>
    </article>
  );
}

export default HappyBirthey;
