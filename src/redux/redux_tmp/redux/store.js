import { createStore } from 'redux';

const initialState = {
  counterValue: 0,
};

const reducer = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case 'counter/Increment':
      return { counterValue: state.counterValue + action.payload };

    case 'counter/Decrement':
      return { counterValue: state.counterValue - action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
