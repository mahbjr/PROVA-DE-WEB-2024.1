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
  const [capitals, setCapitals] = useState({ max: null, min: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtém os dados da Promise
        const data = await fetchDataFromPromise();

        if (data.length > 0) {
          const maxPopulation = Math.max(...data.map(country => country.population));
          const minPopulation = Math.min(...data.map(country => country.population));

          const maxCapital = data.find(country => country.population === maxPopulation); //maior população
          
          const minCapital = data.find(country => country.population === minPopulation); //menor população

          setCapitals({
            max: maxCapital.capital[0],
            min: minCapital.capital[0],
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <p>Capital com maior população: {capitals.max}</p>
      <p>Capital com menor população: {capitals.min}</p>
    </div>
  );
};

export default Questao04;
