import { useState /*useContext, useEffect*/ } from "react";
//import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select }) {
  // const { feedbackEdit } = useContext(FeedbackContext);

  // useEffect(() => {
  //   setSelected(feedbackEdit.item.rating);
  // }, [feedbackEdit]);

  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  const radioButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ul className="rating">
      {radioButtons.map((num, index) => (
        <li key={index}>
          <input
            type="radio"
            id={`num${num}`}
            name="rating"
            value={`${num}`}
            onChange={handleChange}
            checked={selected === num}
          />
          <label htmlFor={`num${num}`}>{`${num}`}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
