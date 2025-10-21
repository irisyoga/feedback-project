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
    <div
      className="container text-center mt-5 p-4 border rounded shadow-sm bg-light"
      style={{ maxWidth: "400px" }}
    >
      <h4 className="mb-3">Feedback</h4>

      <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
        <span className="fw-bold fs-5">{likes}</span>
        <MyButton variant="success" onClick={handleLike}>
          👍 Like
        </MyButton>

        <MyButton variant="danger" onClick={handleDislike}>
          👎 Dislike
        </MyButton>
        <span className="fw-bold fs-5">{dislikes}</span>
      </div>

      <MyButton variant="secondary" onClick={handleReset}>
        🔁 Reset Results
      </MyButton>
    </div>
  );
};

export default Feedback;
