// Importa as bibliotecas necessárias
import React, { useEffect, useState } from 'react';

// Define o componente Questao03
const Questao03 = () => {
  // Cria um estado para armazenar as capitais com maior e menor população
  const [capitals, setCapitals] = useState({ max: null, min: null });

  // O useEffect será executado quando o componente for montado
  useEffect(() => {
    // Função assíncrona para buscar dados da API
    const fetchData = async () => {
      try {
        // Faz uma solicitação para a API usando fetch e espera pela resposta
        const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
        
        // Converte a resposta para JSON
        const data = await response.json();

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
        // Em caso de erro na solicitação, exibe o erro no console
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
export default Questao03;
