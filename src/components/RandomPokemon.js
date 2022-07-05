import React, {useState} from 'react';
import {MAX_POKEMON_NUMBER} from '../utils/constants'
import PokemonCard from './PokemonCard';

function RandomPokemon() {
  const [pokemonId, setPokemonId] = useState(null)

  const chooseRandomPokemon = () => {
    let randomId = Math.round(Math.random() * MAX_POKEMON_NUMBER)
    if (randomId === 0) { randomId = 1 };

    setPokemonId(randomId);
  };

  return (
    <div className='random-pokemon-container'>
      {pokemonId && <PokemonCard pokemonId={pokemonId} useSaga />}
      <button className='get-pokemon-button' onClick={chooseRandomPokemon}>Gerar {pokemonId && 'Novo '}Pokemon!</button>
    </div>
  );
}

export default RandomPokemon;