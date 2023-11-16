import React, { useState } from 'react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const LoginForm = ({ onLogin }) => {
  const checkCredentials = async (username, password) => {
    try {
      const url = `${BACKEND_URL}/auth/login`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      };

      const res = await fetch(url, options);
      const data = await res.json();

      if (res.status === 200) {
        // Login successful
        console.log('Login successful');
        onLogin(data.user); // Assuming onLogin is a prop callback to handle successful login
      } else {
        // Login failed
        console.error('Login failed:', data.message);
        // Handle the failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Error in login request:', error);
      // Handle other errors, network issues, etc.
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    checkCredentials(username, password);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="flex items-center justify-between">
            <button 
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md"
            >
              Login
            </button>
            <a href="#" className="text-pink-500">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

