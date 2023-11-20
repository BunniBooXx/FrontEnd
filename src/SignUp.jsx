import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [flashMessage, setFlashMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: null });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = 'Username is required.';
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required.';
    }

    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm Password is required.';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    return errors;
  };

  const handleSignup = async () => {
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const url = `${BACKEND_URL}/auth/register`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      };

      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful');
        setFlashMessage({ type: 'success', message: 'Signup successful!' });
        // Handle successful signup
      } else {
        console.error('Signup failed:', data.message);
        setFlashMessage({ type: 'error', message: data.message });
        // Handle the failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Error in signup request:', error);
      setFlashMessage({ type: 'error', message: 'An error occurred. Please try again later.' });
      // Handle other errors, network issues, etc.
    }
  };

  return (
    <SignUpForm
      formData={formData}
      formErrors={formErrors}
      onInputChange={handleInputChange}
      onSubmit={handleSignup}
      flashMessage={flashMessage}
    />
  );
};

export default SignUpPage;



