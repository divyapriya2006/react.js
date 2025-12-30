
App.jsx
import { lBrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./react";
import Profile from "./react";
import Courses from "./react";
import Results from "./react";

function App() {
  return (
    <BrowserRouter>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
        <Link to="/courses" style={styles.link}>Courses</Link>
        <Link to="/results" style={styles.link}>Results</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  nav: {
    padding: "15px",
    background: "#1e293b",
    display: "flex",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px"
  }
};

export default App;

react.jsx

export default function Dashboard() {
  return (
    <div style={page}>
      <h1>Student Dashboard</h1>
      <p>Welcome to your dashboard</p>
    </div>
  );
}

export function Profile() {
  return (
    <div style={page}>
      <h1>Student Profile</h1>
      <p>Name: Divya</p>
      <p>Department: CSE</p>
    </div>
  );
}

export function Courses() {
  return (
    <div style={page}>
      <h1>My Courses</h1>
      <ul>
        <li>React JS</li>
        <li>Cloud Computing</li>
        <li>Cyber Security</li>
      </ul>
    </div>
  );
}

export function Results() {
  return (
    <div style={page}>
      <h1>Results</h1>
      <p>React JS: A+</p>
      <p>Cloud Computing: A</p>
    </div>
  );
}

const page = {
  padding: "30px",
  fontFamily: "Arial"
};
main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
