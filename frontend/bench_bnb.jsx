import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import Root from './components/root';

//test
import {requestBenches} from './actions/bench_actions';
window.requestBenches = requestBenches;
//////////


document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {session: {currentUser: window.currentUser}};
  }

  const store = window.Store = configureStore(preloadedState);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
