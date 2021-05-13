const Controls = ({ oneStep, onIncr, onDecr }) => (
  <div>
    <button onClick={onIncr}>Increase by {oneStep}</button>
    <button onClick={onDecr}>Decrease by {oneStep}</button>
  </div>
);

export default Controls;
