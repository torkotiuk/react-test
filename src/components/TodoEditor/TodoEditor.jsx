import React, { Component } from 'react';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // console.log(this.state);

    //props.onSubmit come from 'addTodo' (Content)
    this.props.onSubmit(this.state.message);
    //here we drop data to 'Content'

    this.setState({ message: '' });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>
          <button type="submit">Create</button>
        </form>
      </>
    );
  }
}

export default TodoEditor;
