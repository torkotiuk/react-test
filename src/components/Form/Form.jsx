import React, { Component } from 'react';
import Section from '../share/Section';
import shortid from 'shortid';
// import classNames from 'classnames';

class Form extends Component {
  state = {
    name: '',
    nick: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = shortid.generate();

  // handleNameChange = event => {
  //   this.setState({ name: event.target.value });
  // };
  // handleNickChange = event => {
  //   this.setState({ nick: event.target.value });
  // };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // console.log(this.state);
    this.props.onSubmit(this.state);

    this.reset();
  };

  handleLicenceChange = e => {
    // console.log(e.target.checked);

    this.setState({ licence: e.target.checked });
  };

  reset = () => {
    this.setState({
      name: '',
      nick: '',
    });
  };

  render() {
    return (
      <Section title="Form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name:
            <input
              id={this.nameInputId}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Nickname:
            <input
              type="text"
              name="nick"
              value={this.state.nick}
              onChange={this.handleChange}
            />
          </label>

          <p>Your level:</p>
          <label>
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'}
            />
            Junior
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'}
            />
            Middle
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'}
            />
            Senior
          </label>
          <br />

          {/* if we use one checkbox enough 'checked',
          if we use more than one use also 'value' */}
          <label>
            <input
              type="checkbox"
              name="licence"
              checked={this.state.licence}
              onChange={this.handleLicenceChange}
            />
            Agree with the statement
          </label>
          <br />

          <button type="submit" disabled={!this.state.licence}>
            Send
          </button>
        </form>
      </Section>
    );
  }
}

export default Form;
