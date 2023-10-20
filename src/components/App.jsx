import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Section/Notification/Notification";
import { Container } from "./App.styled";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedBack = key => {
    if (key === 'good') return setGood(good + 1);
    if (key === 'neutral') return setNeutral(neutral + 1);
    if (key === 'bad') return setBad(bad + 1);
  };
    

  const countTotalFeedback = () => {
    return good + neutral + bad;
  
  };

 const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) + '%';

  };

 const total = countTotalFeedback();
    
    return (
    <Container>
    <Section title='Please leave feedback'>
      <FeedbackOptions  onLeaveFeedback={addFeedBack}/>
        </Section>
        
        <Section title='Statistic'>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()} />) : (<Notification />)}
        </Section>
    </Container>
    
  )
}

