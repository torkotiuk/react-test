import React, { Component } from 'react';
import './ColorpickerStyles.css';

// class
class Colorpicker extends Component {
  state = {
    activeOptionIdx: 2,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['sets'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { label } = this.props.options[this.state.activeOptionIdx];

    return (
      <div>
        <h2>Color picker</h2>
        <p>Selected: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              key={label}
              onClick={() => this.setActiveIndex(index)}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Colorpicker;

// const styles = {
//   sets: {
//     // outline: '2px solid red',
//     margin: '10px',
//     border: 'none',
//     cursor: 'pointer',
//     height: '40px',

//     transition: 'transform 250ms linear',
//   },
//   active: {
//     border: '3px solid red',
//     transform: 'scale(1.1)',
//   },
// };

// functional
// const ColorPicker = props => {
//   return (
//     <div>
//       <h2>Color picker</h2>
//       <div>
//         {props.options.map(({ label, color }) => (
//           <span key={label} style={{ ...styles.sets, backgroundColor: color }}>
//             {color}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default ColorPicker;
