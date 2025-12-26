
import React, { useState } from "react";

const CourseEnrollment = () => {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [enrollments, setEnrollments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEnrollment = {
      studentName,
      course,
    };

    setEnrollments([...enrollments, newEnrollment]);
    setStudentName("");
    setCourse("");
  };

  return (
    <div style={styles.card}>
      <h2>📚 Course Enrollment</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
          style={styles.input}
        />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
          style={styles.input}
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="Python">Python</option>
          <option value="AWS">AWS</option>
        </select>

        <button type="submit" style={styles.button}>
          Enroll
        </button>
      </form>

      <h3>✅ Enrolled Students</h3>

      {enrollments.length === 0 && <p>No enrollments yet</p>}

      <ul>
        {enrollments.map((item, index) => (
          <li key={index}>
            <b>{item.studentName}</b> enrolled in <i>{item.course}</i>
          </li>
        ))}
      </ul>
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
  button: {
    width: "100%",
    padding: "8px",
    cursor: "pointer",
  },
};

export default CourseEnrollment;

app.jsx



import React from "react";
import CourseEnrollment from "./CourseEnrollment";

export default function App() {
  return (
    <div style={styles.container}>
      <h1>Student Course Enrollment System</h1>
      <CourseEnrollment />
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
