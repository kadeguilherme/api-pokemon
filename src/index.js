import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reducer from './reducers';
import rootSaga from './sagas';
import * as serviceWorker from './serviceWorker';



const pokemonsInitialState = [];

const initialState = {
  pokemons: pokemonsInitialState
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
