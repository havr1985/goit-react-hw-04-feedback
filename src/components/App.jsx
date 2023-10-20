import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Section/Notification/Notification";
import { Container } from "./App.styled";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addFeedBack = key =>
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%';

  };


  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
    <Container>
    <Section title='Please leave feedback'>
      <FeedbackOptions options={options} onLeaveFeedback={this.addFeedBack}/>
        </Section>
        
        <Section title='Statistic'>
          {total ? (
            <Statistics state={this.state} total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()} />) : (<Notification />)}
        </Section>
    </Container>
    
  )
}
}
