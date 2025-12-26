
import React, { useState } from "react";

const Poll = () => {
  const [votes, setVotes] = useState({
    Yes: 0,
    No: 0,
    Maybe: 0,
  });

  const vote = (option) => {
    setVotes({
      ...votes,
      [option]: votes[option] + 1,
    });
  };

  const totalVotes = votes.Yes + votes.No + votes.Maybe;

  return (
    <div style={styles.card}>
      <h2>📊 Classroom Poll</h2>
      <p>Do you understand today’s topic?</p>

      <button onClick={() => vote("Yes")}>Yes</button>
      <button onClick={() => vote("No")}>No</button>
      <button onClick={() => vote("Maybe")}>Maybe</button>

      <h3>Results (Live)</h3>
      <p>Yes: {votes.Yes}</p>
      <p>No: {votes.No}</p>
      <p>Maybe: {votes.Maybe}</p>

      <p><b>Total Votes:</b> {totalVotes}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
  },
};

export default Poll;

app.jsx
import React from "react";
import Poll from "./Poll";

export default function App() {
  return (
    <div style={styles.container}>
      <h1>🧑‍🏫 Real-Time Classroom Polling</h1>
      <Poll />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px",
    fontFamily: "Arial",
  },
};
