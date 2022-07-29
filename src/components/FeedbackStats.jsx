import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  const avg = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, " ");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Avrage rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

export default FeedbackStats;
