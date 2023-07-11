import {FeedbackOptions} from "./FeedBack/Feedback";
import {Statistics} from "./Statictics/Statistics";

import {Component} from "react";
// import PropTypes from "prop-types";

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
<FeedbackOptions options={this.state} onLeaveFeedback={this.onHandleFeedback} />
<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
    </div>
  );
}}

export default App
