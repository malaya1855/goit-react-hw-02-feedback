import { FeedbackOptions, Statistics, Section, Notification} from "components";


import {Component} from "react";

 class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0, 
  }
onHandleFeedback = ev => {
  const {name} = ev.target;
  this.setState(prevState => ({[name]: prevState[name] + 1}))
}

countTotalFeedback = () => {
  return this.state.good + this.state.neutral + this.state.bad
}

countPositiveFeedbackPercentage = () => {
  return Math.ceil((this.state.good/this.countTotalFeedback()) * 100)
}
  render (){
  
  return (
    <div>
<Section title='Please leave your feedback'>
<FeedbackOptions options={this.state} onLeaveFeedback={this.onHandleFeedback} />
</Section>
<Section title='Feedback Statistics'>
{this.countTotalFeedback() === 0 
? <Notification message="There is no feedback"></Notification>
: <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />}

</Section>
    </div>
  );
}}

export default App
