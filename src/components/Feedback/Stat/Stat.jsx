const Stat = ({ good, neutral, bad, onTotal, onPositiveFeedback }) => {
  if (onPositiveFeedback !== 'NaN') {
    return (
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {onTotal}</li>
        <li>Positive feedback: {onPositiveFeedback}%</li>
      </ul>
    );
  }
  return <p>No feedback given</p>;
};

export default Stat;
