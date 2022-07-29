import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  // const [feedbackEdit, setFeedbackEdit] = useState({
  //   item: {},
  //   edit: false,
  // });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch feedbacks
  const fetchFeedback = async () => {
    const response = await fetch(
      "http://localhost:5000/feedback?_sort=id&_oreder=desc"
    );
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  // add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  // delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(
        feedback.filter((feedback) => {
          return feedback.id !== id;
        })
      );
    }
  };

  // //update feedback
  // const updateFeedback = (id, updItem) => {
  //   setFeedback(
  //     feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
  //   );
  // };

  // // Set Item to be updated
  // const editFeedback = (item) => {
  //   console.log("edited Feedback");
  //   setFeedbackEdit({
  //     item,
  //     edit: true,
  //   });
  // };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        //feedbackEdit,
        deleteFeedback,
        addFeedback,
        // editFeedback,
        // updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
