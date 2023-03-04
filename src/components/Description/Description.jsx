import React from "react";
import "./Description.css";
function Description() {
  return (
    <div className="containerDescription">
      <div className="containerImage">
        <img src="/assets/imageDescription.png" />
      </div>
      <div className="containerText">
        <h1>¿Qué sabes de Rick and Morty?</h1>
        <p>
          Rick y Morty es una animación de ciencia ficción para adultos creada,
          producida y escrita por Justin Roiland (Hora de aventuras) y Dan
          Harmon (Community, Monster House) <br />Rick, un científico alcohólico,
          secuestra a su influenciable nieto, Morty, para vivir peligrosas
          aventuras a través de nuestro cosmos y universos paralelos.
        </p>
      </div>
    </div>
  );
}

export default Description;
