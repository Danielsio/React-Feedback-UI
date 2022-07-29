import { useState, useContext /*useEffect*/ } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [messege, setMessege] = useState("");

  // useEffect(() => {
  //   if (feedbackEdit.edit === true) {
  //     setBtnDisabled(false);
  //     setText(feedbackEdit.item.text);
  //     setRating(feedbackEdit.item.rating);
  //   }
  // }, [feedbackEdit]);

  const handleChange = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessege(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessege("Text must be at Least 10 charcters");
    } else {
      setMessege(null);
      setBtnDisabled(false);
    }
    setText(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your Service with us?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {messege && <div className="messege">{messege}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
