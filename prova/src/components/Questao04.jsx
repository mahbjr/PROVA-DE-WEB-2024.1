// Questao04.jsx
import React, { useEffect, useState } from 'react';

// Função que retorna uma Promise com dados simulados
const fetchDataFromPromise = () => {
  return new Promise((resolve, reject) => {
    // Dados simulados
    const data = [
      {"capital":["Dublin"],"population":4994724},
      {"capital":["Nicosia"],"population":1207361},
      {"capital":["Madrid"],"population":47351567}
    ];

    // Resolve a Promise com os dados simulados
    resolve(data);
  });
};

const Questao04 = () => {
  // Cria um estado para armazenar as capitais com maior e menor população
  const [capitals, setCapitals] = useState({ max: null, min: null });

  // O useEffect será executado quando o componente for montado
  useEffect(() => {
    // Função assíncrona para buscar dados da Promise
    const fetchData = async () => {
      try {
        // Obtém os dados da Promise
        const data = await fetchDataFromPromise();

        // Verifica se há dados disponíveis
        if (data.length > 0) {
          // Encontra a maior e a menor população na lista de países
          const maxPopulation = Math.max(...data.map(country => country.population));
          const minPopulation = Math.min(...data.map(country => country.population));

          // Encontra o objeto que possui a maior população
          const maxCapital = data.find(country => country.population === maxPopulation);
          // Encontra o objeto que possui a menor população
          const minCapital = data.find(country => country.population === minPopulation);

          // Atualiza o estado com as capitais correspondentes
          setCapitals({
            max: maxCapital.capital[0],
            min: minCapital.capital[0],
          });
        }
      } catch (error) {
        // Em caso de erro, exibe o erro no console
        console.error(error);
      }
    };

    // Chama a função fetchData
    fetchData();
  }, []); // O array vazio [] significa que useEffect será executado apenas uma vez, após a montagem do componente

  // Renderiza o componente com as capitais de maior e menor população
  return (
    <div>
      <p>Capital com maior população: {capitals.max}</p>
      <p>Capital com menor população: {capitals.min}</p>
    </div>
  );
};

// Exporta o componente para ser utilizado em outras partes do aplicativo
export default Questao04;
