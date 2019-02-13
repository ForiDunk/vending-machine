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
    {/* <div>Icons made by <a href="https://flat-icons.com/" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));