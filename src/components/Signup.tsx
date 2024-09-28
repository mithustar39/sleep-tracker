import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Input, LoginPage } from '../styles'; // Reusing styled components

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Check if response is okay
      if (!response.ok) {
        // Attempt to parse JSON if response is not OK
        const errorText = await response.text(); // Get the raw text
        throw new Error(errorText || 'This user already exists');
      }

      const data = await response.json();
      setMessage(data.message);
      navigate('/login'); // Redirect to login on successful signup
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <LoginPage>
      <form onSubmit={handleSignup} style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <h2 style={{ color: '#8a2be2', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>Sign Up</h2>
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
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit">Sign Up</Button>
        {message && <p style={{ color: '#bb86fc', fontFamily: 'Poppins, sans-serif' }}>{message}</p>}
        <p style={{ marginTop: '20px' }}>
          Already have an account? <Link to="/login" style={{ color: '#bb86fc' }}>Login</Link>
        </p>
      </form>
    </LoginPage>
  );
};

export default Signup;
