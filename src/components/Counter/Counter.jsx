import React from 'react';
import Controls from './Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  //public property () => (for having access to "this"), NOT a class method: method(){}
  // event - a) crossBrowser event, NOT native event;
  //         b) available in sinchronous code
  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecre}
        />
        {/* <div>
          <button onClick={this.handleIncrement}>Increase by 1</button>
          <button onClick={this.handleDecrement}>Decrease by 1</button>
        </div> */}
      </div>
    );
  }
}

export default Counter;
