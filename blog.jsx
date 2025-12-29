import { useState } from "react";

function ReactBlog() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment.trim() === "") return;
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Blog</h1>
      <p style={styles.text}>
        This is a responsive blog layout with real-time comment updates.
      </p>

      <div style={styles.commentBox}>
        <input
          style={styles.input}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button style={styles.button} onClick={addComment}>
          Post
        </button>
      </div>

      <ul style={styles.list}>
        {comments.map((c, i) => (
          <li key={i} style={styles.listItem}>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    color: "#555",
  },
  commentBox: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    flexWrap: "wrap",
  },
  input: {
    flex: "1",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  list: {
    marginTop: "20px",
    padding: 0,
    listStyle: "none",
  },
  listItem: {
    background: "#f4f4f4",
    padding: "10px",
    marginBottom: "8px",
    borderRadius: "5px",
  },
};

export default ReactBlog;


app.jsx

import ReactBlog from "./assets/core conpect/Helloworld/blog/blog";

function App() {
  return (
    <div>
      <ReactBlog />
    </div>
  );
}

export default App;



