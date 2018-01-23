import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  //Phase 1
  // store.dispatch = addLoggingToDispatch(store);
  //Phase 2
  // store = applyMiddlewares(store, addLoggingToDispatch);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

//Phase 1
// function addLoggingToDispatch(store) {
//   let storeSaved = store.dispatch;
//   return function (action) {
//     console.log(store.getState());
//     console.log(action);
//     storeSaved(action);
//     console.log(store.getState());
//   };
// }

//Phase 2
// const addLoggingToDispatch = store => next => action => {
//     console.log(store.getState());
//     console.log(action);
//     next(action);
//     console.log(store.getState());
// };
//
// const applyMiddlewares = (store, ...middlewares) => {
//   let dispatch = store.dispatch;
//   middlewares.forEach(middleware => {
//     dispatch = middleware(store)(dispatch);
//   });
//
//   return Object.assign({}, store, { dispatch });
// };
