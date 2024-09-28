import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #121212;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e0e0e0;
`;

export const LoginPage = styled.div`
  background: linear-gradient(135deg, #1a1a1a, #4b0082);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e0e0e0;
  font-family: 'Poppins', sans-serif; /* Ensuring Poppins is applied here */
`;

export const Input = styled.input`
  padding: 12px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #8a2be2;
  background-color: #292929;
  color: #e0e0e0;
  outline: none;
  font-family: 'Poppins', sans-serif; /* Applying Poppins font */
  
  &:focus {
    border-color: #6a0dad;
  }
`;

export const Button = styled.button`
  background-color: #8a2be2;
  color: #e0e0e0;
  padding: 12px 20px;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  margin: 15px 0;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Poppins', sans-serif; /* Applying Poppins font */

  &:hover {
    background-color: #6a0dad;
  }
`;

export const HomeContainer = styled.div`
  color: #e0e0e0;
  text-align: center;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #8a2be2;
  }

  p {
    font-size: 1.2rem;
    color: #e0e0e0;
  }
`;

export const TrackerContainer = styled.div`
  color: #e0e0e0;
  text-align: center;
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #8a2be2;
  }

  p {
    font-size: 1.2rem;
    color: #e0e0e0;
  }
`;

