import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import SearchContainer from './components/search_container';

//test
import {requestBenches} from './actions/bench_actions';
window.requestBenches = requestBenches;
//////////

const Root = (store) => (
  <Provider store={store}>
    <SearchContainer />
  </Provider>
);


document.addEventListener('DOMContentLoaded', () => {
  const store = window.Store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(Root(store), root);
});
