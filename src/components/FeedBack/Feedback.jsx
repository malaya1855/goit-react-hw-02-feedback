import PropTypes from 'prop-types';
import { ButtonFeedback, FieldFeedback } from 'components';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FieldFeedback>
      {Object.keys(options).map(item => {
        const nameItem = item.replace(item[0], item[0].toUpperCase());
        return (
          <ButtonFeedback
            onClick={onLeaveFeedback}
            type="button"
            key={item}
            name={item}
          >
            {nameItem}
          </ButtonFeedback>
        );
      })}
    </FieldFeedback>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({ item: PropTypes.string }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
