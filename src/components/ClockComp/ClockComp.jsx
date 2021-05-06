import React, { Component } from 'react';
import Clock from './Clock';

class ClockComp extends Component {
  state = {
    showTime: false,
  };

  toggleTime = () => {
    this.setState(state => ({
      showTime: !state.showTime,
    }));
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.toggleTime}>
          Show/Hide time
        </button>
        {this.state.showTime && <Clock />}
      </>
    );
  }
}
export default ClockComp;
