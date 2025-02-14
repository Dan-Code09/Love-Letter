import React, { useState } from "react";

import { BsArrowThroughHeartFill } from "react-icons/bs";

interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = ({ name }) => {
  const [showCard, setShowCard] = useState<boolean>(false);

  const handleClick = () => {
    setShowCard(true);
  };

  return (
    <div className="card-container">
      <button onClick={handleClick} className="show-button">
        ¡Mostrar mi carta!
      </button>

      {showCard && (
        <div className="card">
          <div className="letter">
            <h2>
              <BsArrowThroughHeartFill size={20} /> {name}{" "}
              <BsArrowThroughHeartFill size={20} />
            </h2>
            <p>
              <strong>Querida {name}</strong>
              <br />
              Eres la luz en mi universo, la partícula errante en mi ser,
              colapsando en un dulce beso, en un estado que no quiero perder.
              Como ondas que se entrelazan, sin importar la inmensidad, nuestros
              destinos se abrazan, desafiando la causalidad. Tus ojos, como
              fotones danzantes, iluminan mi realidad, y en cada instante
              inconstante, se funden con mi eternidad. Porque en este espacio
              infinito, donde el tiempo es solo ilusión, te encuentro en cada
              parámetro escrito, en cada ecuación de mi corazón. Y si el cosmos
              dicta lo imposible, si las leyes se quiebran sin más, mi amor, la
              ciencia lo dice: estamos ligados, en un solo haz. <br />
              ( 𝑖 𝛾 𝜇 ∂ 𝜇 − ) 𝑚 𝜓 = 0 (iγ μ ∂ μ ​ −m)ψ=0
              <br />
              <strong>¡I LOVE YOU!</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
