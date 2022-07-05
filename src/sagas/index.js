import { put, takeEvery, takeLatest, all, select } from 'redux-saga/effects';
import {POKEMON_BASE_ENDPOINT} from '../utils/constants';


const formatPokemonInfo = (pokemon, pokemonId) => {


  const simplifiedPokemon = {
    id: pokemonId,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    base_experience: pokemon.base_experience,

  }

  return simplifiedPokemon;
}

function* fetchPokemon({pokemonId}) {
  const pokemonEndpoint = `${POKEMON_BASE_ENDPOINT}${pokemonId}`
  const statePokemons = yield select(state => state.pokemons);
  const thisPokemon = statePokemons.find(pokemon => pokemon.id === pokemonId);
  const stateHasThisPokemon = thisPokemon && !thisPokemon.loading;

  if (stateHasThisPokemon) {
    yield put({type: "POKEMON_RECEIVED", pokemon: thisPokemon});
  }

  let pokemon = yield fetch(pokemonEndpoint)
    .then(response => response.json());

  pokemon = formatPokemonInfo(pokemon, pokemonId);

  yield put({ type: "POKEMON_RECEIVED", pokemon });
}

function* pokemonActionWatcher() {
  yield takeEvery('GET_POKEMON', fetchPokemon)
}
function* pokemonLatestActionWatcher() {
  yield takeLatest('GET_POKEMON_SAGA', fetchPokemon)
}
export default function* rootSaga() {
  yield all([
    pokemonActionWatcher(),
    pokemonLatestActionWatcher()
  ]);
}