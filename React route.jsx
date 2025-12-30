import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-6">
      <Link to="/" className="hover:underline">Dashboard</Link>
      <Link to="/profile" className="hover:underline">Profile</Link>
      <Link to="/courses" className="hover:underline">Courses</Link>
      <Link to="/settings" className="hover:underline">Settings</Link>
    </nav>
  );
}

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Student Dashboard</h1>
      <p>Welcome to your dashboard. View your activities here.</p>
    </div>
  );
}

function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Profile</h1>
      <p>Name: Student Name</p>
      <p>Department: Computer Science</p>
    </div>
  );
}

function Courses() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Courses</h1>
      <ul className="list-disc pl-6">
        <li>Data Structures</li>
        <li>Web Development</li>
        <li>Machine Learning</li>
      </ul>
    </div>
  );
}

function Settings() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Settings</h1>
      <p>Manage your account settings here.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

