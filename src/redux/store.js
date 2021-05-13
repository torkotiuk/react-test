import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const counterInitialState = {
  value: 100,
  step: 3,
};

const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case 'counter/Increment':
      return {
        ...state,
        value: state.value + action.payload,
      };

    case 'counter/Decrement':
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

const rootReducers = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducers, composeWithDevTools());

export default store;
