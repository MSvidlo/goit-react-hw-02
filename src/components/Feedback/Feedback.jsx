
import css from './Feedback.module.css';
const Feedback = ({reviews,total}) => {
    return (
    <div>
      <p>Good: {reviews.good}</p>
      <p>Neutral: {reviews.neutral}</p>
            <p>Bad: {reviews.bad}</p>
            <p>Total:{total}</p>
    </div>
        
    )
    
};

export default Feedback;