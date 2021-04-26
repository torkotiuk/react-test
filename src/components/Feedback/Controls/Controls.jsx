const Controls = ({ onGood, onNeutral, onBad }) => (
  <ul>
    <li>
      <button onClick={onGood}>Good</button>
    </li>
    <li>
      <button onClick={onNeutral}>Neutral</button>
    </li>
    <li>
      <button onClick={onBad}>Bad</button>
    </li>
  </ul>
);

export default Controls;
