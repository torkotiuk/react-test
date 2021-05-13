import { connect } from 'react-redux';
import Controls from './Controls';
import * as actions from '../../redux/actions';

const Counter = ({ valueCCC, onIncrement, onDecrement }) => {
  return (
    <div>
      <span>{valueCCC}</span>
      <Controls onIncr={onIncrement} onDecr={onDecrement} />
    </div>
  );
};

// --- === --- // 2 - DELIVERING METHODS TO STATE // --- === ---
// 2. a) getting actions, firtsly import actions
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment(5)),
    onDecrement: () => dispatch(actions.increment(5)),
  };
};
// --- === --- // --- === --- // --- === --- // --- === ---

// =+=+=+ 1 - GETTING STATE OF ALL APPLICATION =+=+=+
// 1. a) mapStateToProps -> getting state of all application
const mapStateToProps = state => {
  return {
    valueCCC: state.counterValue,
  };
};

// 1. b) and give them to Counter component "connect(mapStateToProps)",
// in state of the components we can see it in props.valueCCC
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// =+=+=+ =+=+=+ =+=+=+ =+=+=+ =+=+=+ =+=+=+ =+=+=+ =+=+=+

// ==== theory =====
// === explain the "connect()(Counter)" - Web 9 - min 40-42
// const sum = x => y => x + y;
// // or the same
// const sum2 = x => {
//   return y => {
//     return x + y;
//   };
// };
// console.log(sum(10)(10));
// console.log(sum2(10)(10));
// ===== ===== ===== =====

// state moved to redux, so we don't need a class anymore'
// class Counter extends React.Component {
//   static defaultProps = {
//     initialValue: 0,
//   };
//   static propTypes = {
//     //
//   };
//   state = {
//     value: this.props.initialValue,
//   };
//   //public property () => (for having access to "this"), NOT a class method: method(){}
//   // event - a) crossBrowser event, NOT native event;
//   //         b) available in sinchronous code
//   handleIncrement = () => {
//     this.setState(prevState => ({ value: prevState.value + 1 }));
//   };
//   handleDecrement = () => {
//     this.setState(prevState => ({ value: prevState.value - 1 }));
//   };
//   render() {
//     return (
//       <div>
//         <span>{this.state.value}</span>
//         {/* v1 - with separate component */}
//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecre}
//         />
//         {/* v2 - without separate component */}
//         {/* <div>
//           <button onClick={this.handleIncrement}>Increase by 1</button>
//           <button onClick={this.handleDecrement}>Decrease by 1</button>
//         </div> */}
//       </div>
//     );
//   }
// }
