import React from 'react';
import ReactDOM from 'react-dom';
import ProductsList from './containers/ProductsList/ProductsList';
import Wrapper from './hoc/Wrapper/Wrapper';
import './index.css';

const app = (
  <Wrapper>
    <ProductsList />
  </Wrapper>
);

ReactDOM.render(app, document.getElementById('root'));