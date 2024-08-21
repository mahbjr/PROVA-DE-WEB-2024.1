import React, { useState } from "react";

const Questao02 = () => {
  const [mostrarFrente, setMostrarFrente] = useState(true);

  const imagemDeFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png";
  const imagemDeCostas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/137.png";

  // função para a alternar entre frente e costas do pokemon
  const alternarImagens = () => {
    setMostrarFrente(!mostrarFrente);
  };

  return (
    <div>
      <div>
        {/*Na busca do porygon*/}
        <div>
          <h2>pokemon</h2>
          <img
            src={mostrarFrente ? imagemDeFrente : imagemDeCostas}
            alt="Porygon"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
      </div>
      <br />

      {/* Botão para alternar as imagens do pokemon */}
      <button onClick={alternarImagens}>
        {mostrarFrente ? "Mostrar Costas" : "Mostrar Frente"}
      </button>
    </div>
  );
};

export default Questao02;