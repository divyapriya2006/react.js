

//app.jsx
import React, { useState } from 'react';
import Dashboard from './assets/core conpect/Helloworld/Student Dashboard/dash';
import Students from './assets/core conpect/Helloworld/Student Dashboard/Students';
import About from './assets/core conpect/Helloworld/Student Dashboard/About';

const App = () => {
  const [page, setPage] = useState('dashboard'); // default page

  // Function to render the selected page
  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return <Students />;
      case 'about':
        return <About />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
        <button onClick={() => setPage('dashboard')} style={navButtonStyle}>Dashboard</button>
        <button onClick={() => setPage('students')} style={navButtonStyle}>Students</button>
        <button onClick={() => setPage('about')} style={navButtonStyle}>About</button>
      </nav>

      {/* Render selected page */}
      <div style={{ padding: '20px' }}>
        {renderPage()}
      </div>
    </div>
  );
};

// Shared button style
const navButtonStyle = {
  marginRight: '10px',
  padding: '8px 16px',
  background: '#555',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default App;

//dash.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Student Management Dashboard</h1>
      <p>Use the navigation above to view student data and information.</p>
    </div>
  );
};

export default Dashboard;


student.jsx



import React, { useState } from 'react';

const Students = () => {
  const [students] = useState([
    { id: 1, name: 'Alice Johnson', age: 16, grade: '10th' },
    { id: 2, name: 'Bob Smith', age: 17, grade: '11th' },
    { id: 3, name: 'Charlie Brown', age: 15, grade: '9th' },
  ]);

  return (
    <div>
      <h2>Student List</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f4f4f4' }}>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;


//about.jsx




import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>This is a simple React-based student management dashboard.</p>
      <p>It includes navigation and displays student data in a table.</p>
    </div>
  );
};

export default About;



