import React, { Component } from 'react';
import Section from './share/Section';
import Controls from './Controls';
import Stat from './Stat';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  getNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  getBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positive = (good * 100) / this.countTotalFeedback();
    return positive.toFixed(1);
  };

  render() {
    return (
      <>
        <Section title="Leave feedback">
          <Controls
            onGood={this.getGood}
            onNeutral={this.getNeutral}
            onBad={this.getBad}
          />
        </Section>
        <Section title="Statistics">
          <Stat
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            onTotal={this.countTotalFeedback()}
            onPositiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default Feedback;
