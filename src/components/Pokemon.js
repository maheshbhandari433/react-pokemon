import React, { useEffect, useState } from 'react';
import Card from './Card';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <h1>Gen 1 Pokemon List</h1>
        <div className="button-wrapper">
            <input type="text" id="search" name="search" placeholder="Search pokemon..." onChange={handleSearch}/>
        </div>
        <main>
      {filteredPokemon.map((poke) => (
        <Card key={poke.name} name={poke.name} />
      ))}
      </main>
    </div>
  );
};

export default PokemonList

