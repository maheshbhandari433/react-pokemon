import React, { useState } from 'react';

const Card = ({ name }) => {
  const [details, setDetails] = useState(null);

  const handleDetails = () => {
    
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data) => {
          setDetails(data);
        });
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={`https://img.pokemondb.net/artwork/${name}.jpg`} alt={name} />

      <div className='button-wrapper'>
      <button onClick={handleDetails}>Details</button>
      </div>
      {details && (
        <div>
         <img src={`https://img.pokemondb.net/artwork/${name}.jpg`} alt={name} />
          <p>Id: {details.id}</p>
          <p>Name: {details.name}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
