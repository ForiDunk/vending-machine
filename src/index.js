import React from 'react';
import ReactDOM from 'react-dom';
import ProductsList from './containers/ProductsList/ProductsList';
import Wrapper from './hoc/Wrapper/Wrapper';
import Board from './containers/Board/Board';
import './index.css';
import reducer from './store/reducers/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <Wrapper>
      <ProductsList />
      <Board />
    </Wrapper>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));