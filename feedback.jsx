import React, { useState } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      name,
      message,
    };

    setFeedbacks([...feedbacks, newFeedback]);
    setName("");
    setMessage("");
  };

  return (
    <div style={styles.card}>
      <h2>📝 Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

        <textarea
          placeholder="Your Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      <h3>📢 Submitted Feedback</h3>

      {feedbacks.length === 0 && <p>No feedback yet</p>}

      {feedbacks.map((item, index) => (
        <div key={index} style={styles.feedbackBox}>
          <strong>{item.name}</strong>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    width: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "8px",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "8px",
    cursor: "pointer",
  },
  feedbackBox: {
    border: "1px solid #ddd",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
  },
};

export default FeedbackForm;

app.jsx


import React from "react";
import FeedbackForm from "./core concept/helloworld/feedback";

export default function App() {
  return (
    <div style={styles.container}>
      <h1>Feedback System</h1>
      <FeedbackForm />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
    fontFamily: "Arial",
  },
};



