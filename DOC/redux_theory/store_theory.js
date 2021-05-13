import { createStore } from 'redux';

const reducer = (state = { a: 5 }, action) => {
  console.log('action in reducer>>', action);
  return state;
};
// previous state "state = { a: 5 }" + "action" = new state ("return state")
// "state = { a: 5 }" - a: 5 -> state by default, possibly set only "{}""

const store = createStore(reducer, { a: 15 });

export default store;
