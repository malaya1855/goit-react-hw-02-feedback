// import PropTypes from "prop-types";

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => { return  <div>
    <h2>Feedback Statistics</h2>
    <ul>
    <li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    </ul>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage} %</p>
    </div>}