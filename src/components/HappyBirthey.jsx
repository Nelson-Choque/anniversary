import React from "react";

function HappyBirthey() {
  return (
    <div className="min-h-screen bg-blue-800 overflow-hidden">
      <div className="h-full flex flex-col items-center p-4">
        <h2 className="text-2xl text-white text-center font-bold">
          Tú Cumpleaños
        </h2>
        <p className="text-white">Falta poco para el gran dia 💖</p>

        <section className="flex flex-wrap gap-4 justify-center mt-4">
          <CardDate date="05" name="dias" />
          <CardDate date="50" name="minutos" />
          <CardDate date="10" name="segundos" />
        </section>
      </div>
      <button className="block mx-auto px-4 py-2 my-4 rounded-2xl bg-blue-600 text-white">
        Ver pista
      </button>
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
