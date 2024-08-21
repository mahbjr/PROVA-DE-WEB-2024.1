import React, { useEffect, useState } from 'react';

const Questao03 = () => {
  // Cria um useState para guardar as capitais com maior e menor população
  const [capitals, setCapitals] = useState({ max: null, min: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Faz uma solicitação para a API usando fetch e espera pela resposta
        const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
        
        const data = await response.json();

        if (data.length > 0) {
          // Encontra a maior e a menor população na lista de países
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
  }, []); // O array vazio [] significa que useEffect será executado apenas uma vez, após a montagem do componente

  return (
    <div>
      <p>Capital com maior população: {capitals.max}</p>
      <p>Capital com menor população: {capitals.min}</p>
    </div>
  );
};

export default Questao03;
