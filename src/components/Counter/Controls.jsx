const Controls = ({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increase by 1</button>
    <button onClick={onDecrement}>Decrease by 1</button>
  </div>
);

export default Controls;
