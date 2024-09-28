import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Input, LoginPage } from '../styles'; // Styled components

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid login credentials');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <LoginPage>
      <form onSubmit={handleLogin} style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: '#8a2be2', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>Login</h2>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
        {message && <p style={{ color: '#bb86fc', fontFamily: 'Poppins, sans-serif' }}>{message}</p>}
        <p style={{ marginTop: '20px' }}>
          Don't have an account? <Link to="/signup" style={{ color: '#bb86fc' }}>Sign Up</Link>
        </p>
      </form>
    </LoginPage>
  );
};

export default Login;
