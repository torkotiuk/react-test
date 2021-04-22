import React, { Component } from 'react';

class Dropdown extends Component {
  state = { visible: false };

  // show = () => {
  //   this.setState({ visible: true });
  // };
  // hide = () => {
  //   this.setState({ visible: false });
  // };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div>
        {/* <button type="button" onClick={this.show}>
          Show
        </button>
        <button type="button" onClick={this.hide}>
          Hide
        </button>
        {this.state.visible && <div>Drop menu</div>} */}

        <button type="button" onClick={this.toggle}>
          {/* <button type="button" onMouseOver={this.toggle}> */}
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        {this.state.visible && <div>Drop menu</div>}
      </div>
    );
  }
}

export default Dropdown;
