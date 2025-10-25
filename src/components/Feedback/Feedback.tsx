
import { useState } from "react";
import MyButton from "../MyButton/MyButton";

const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);
  const handleDislike = () => setDislikes(dislikes + 1);
  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback-container">
      <h4>Feedback</h4>

      <div className="feedback-buttons">
        <span>{likes}</span>
        <MyButton variant="success" onClick={handleLike}>
          👍 Like
        </MyButton>

        <MyButton variant="danger" onClick={handleDislike}>
          👎 Dislike
        </MyButton>
        <span>{dislikes}</span>
      </div>

      <MyButton variant="secondary" onClick={handleReset}>
        🔁 Reset Results
      </MyButton>
    </div>
  );
};

export default Feedback;
