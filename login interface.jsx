A

import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // default role
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation / authentication simulation
    if (email === '' || password === '') {
      setError('Please enter email and password');
      return;
    }

    // Hardcoded example: all roles can login with password '1234'
    if (password === '1234') {
      setError('');
      onLogin({ email, role });
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Login</h2>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <div style={{ marginBottom: '10px' }}>
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)} style={{ marginLeft: '10px' }}>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </label>
        </div>
        <button type="submit" style={{ padding: '8px 16px' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;



import React, { useState } from 'react';
import Login from './assets/core conpect/Helloworld/login';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Conditional rendering based on role
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  let dashboard;
  switch (user.role) {
    case 'admin':
      dashboard = <h1>Welcome Admin {user.email}!</h1>;
      break;
    case 'student':
      dashboard = <h1>Welcome Student {user.email}!</h1>;
      break;
    case 'teacher':
      dashboard = <h1>Welcome Teacher {user.email}!</h1>;
      break;
    default:
      dashboard = <h1>Welcome {user.email}!</h1>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {dashboard}
      <button onClick={handleLogout} style={{ marginTop: '20px', padding: '8px 16px' }}>
        Logout
      </button>
    </div>
  );
};

export default App;




 One attachment
  •  Scanned by Gmail
Displaying Screenshot (5).png.
