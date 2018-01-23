import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    //Phase 3
    // applyMiddleware(addLoggingToDispatch)
    applyMiddleware(addLoggingToDispatch, bonusMiddleware)
  );
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

//Phase 3
const addLoggingToDispatch = store => next => action => {
    console.log(store.getState());
    console.log(action);
    next(action);
    console.log(store.getState());
};

//bonus
const bonusMiddleware = store => next => action => {
    console.log('bonus');
    next(action);
};

export default configureStore;
