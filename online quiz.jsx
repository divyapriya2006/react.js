import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      question: "What is React?",
      options: [
        "A JavaScript library",
        "A database",
        "A programming language",
        "An operating system",
      ],
      answer: "A JavaScript library",
    },
    {
      question: "Which hook is used for state?",
      options: ["useEffect", "useState", "useRef", "useContext"],
      answer: "useState",
    },
    {
      question: "Who developed React?",
      options: ["Google", "Microsoft", "Facebook", "Amazon"],
      answer: "Facebook",
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);

    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected("");
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={styles.container}>
      <h1>📝 Online Quiz</h1>

      {showResult ? (
        <h2>
          Your Score: {score} / {questions.length}
        </h2>
      ) : (
        <div style={styles.card}>
          <h3>
            Question {currentQ + 1} of {questions.length}
          </h3>

          <p>{questions[currentQ].question}</p>

          {questions[currentQ].options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              disabled={selected !== ""}
              style={{
                ...styles.option,
                backgroundColor:
                  selected === option
                    ? option === questions[currentQ].answer
                      ? "lightgreen"
                      : "salmon"
                    : "#eee",
              }}
            >
              {option}
            </button>
          ))}

          <br />
          <button
            onClick={nextQuestion}
            disabled={selected === ""}
            style={styles.nextBtn}
          >
            Next
          </button>

          <p>Score: {score}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    textAlign: "center",
    padding: "30px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
    borderRadius: "10px",
  },
  option: {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  nextBtn: {
    marginTop: "10px",
    padding: "8px 15px",
    cursor: "pointer",
  },
};
