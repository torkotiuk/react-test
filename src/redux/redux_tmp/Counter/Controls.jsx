const Controls = ({ onIncr, onDecr }) => (
  <div>
    <button onClick={onIncr}>Increase by 1</button>
    <button onClick={onDecr}>Decrease by 1</button>
  </div>
);

export default Controls;
