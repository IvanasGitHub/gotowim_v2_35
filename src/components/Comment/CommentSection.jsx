import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentSection = ({ apiUrl }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Получение комментариев при загрузке компонента
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке комментариев:", error);
      });
  }, [apiUrl]);

  // Добавление нового комментария
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const comment = { text: newComment };

      axios
        .post(apiUrl, comment)
        .then((response) => {
          setComments([...comments, response.data]);
          setNewComment("");
        })
        .catch((error) => {
          console.error("Ошибка при добавлении комментария:", error);
        });
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Комментарии</h2>
      <div style={{ marginBottom: "20px" }}>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              style={{
                background: "#f9f9f9",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <p style={{ margin: 0 }}>{comment.text}</p>
            </div>
          ))
        ) : (
          <p>Пока нет комментариев. Будьте первым!</p>
        )}
      </div>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Напишите комментарий"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={handleAddComment}
        style={{
          padding: "10px 15px",
          background: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Добавить
      </button>
    </div>
  );
};

export default CommentSection;
