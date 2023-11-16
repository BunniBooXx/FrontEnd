import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    const { username, password, confirmPassword } = formData;

    if (password === confirmPassword) {
      // Perform signup logic (you might make an API call here)
      try {
        const url = `${BACKEND_URL}/auth/register`;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        };

        fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 'ok') {
              console.log('Signup successful');
              // Handle successful signup
            } else {
              console.error('Signup failed:', data.message);
              // Handle the failure, show an error message, etc.
            }
          })
          .catch((error) => {
            console.error('Error in signup request:', error);
            // Handle other errors, network issues, etc.
          });
      } catch (error) {
        console.error('Error in signup:', error);
      }
    } else {
      console.error('Passwords do not match');
      // Handle password mismatch
    }
  };

  return (
    <SignUpForm
      onInputChange={handleInputChange}
      onSubmit={handleSignup}
    />
  );
};

export default SignUpPage;

