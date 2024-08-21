import React from "react";

const Questao01A = () => {
  const lista = [
    {a: 10, b: 3, c: 7},
    {a: 5, b: -3, c: 9},
    {a: 1, b: 9, c: 40}
  ];

  return (
    <div>
      {/* Renderizando o componente Questao01B e passando a lista como prop */}
      <Questao01B lista={lista} />
    </div>
  );
};

function Questao01B(props) {
  const lista = props.lista;

  // Função que retorna o maior valor de a, b e c
  const getMaiores = (objeto) => {
    return Math.max(objeto.a, objeto.b, objeto.c);
  }

  return (
    <div>
      <h2>Maiores valores</h2>
      <ul>
        {/* Percorre a lista e renderiza o maior valor de cada objeto em um item de lista */}
        {lista.map((objeto, index) => (
          <li key={index}>{getMaiores(objeto)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Questao01A;
