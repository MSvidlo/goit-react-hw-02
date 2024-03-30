import css from './Options.module.css';
import clsx from 'clsx';

const Options = ({ firstButton, secondButton, thirdButton, updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>{firstButton}</button>
      <button onClick={() => updateFeedback('neutral')}>{secondButton}</button>
      <button onClick={() => updateFeedback('bad')}>{thirdButton}</button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};
export default Options;