// import PropTypes from "prop-types";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
        return (
    <div>
        <h2>Please leave your feedback</h2>
        {Object.keys(options).map((item) => {
const nameItem = item.replace(item[0], item[0].toUpperCase());
return <button 
onClick = {onLeaveFeedback}
type='button'
key={item} 
name= {item}>
{nameItem}
</button>})}
        </div>)}
