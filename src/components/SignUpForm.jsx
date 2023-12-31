import React, { useState } from 'react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SignUpForm = ({ formData, formErrors, onInputChange, onSubmit, flashMessage }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Assuming you have a backend endpoint for signup
      const url = `${BACKEND_URL}/auth/register`;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };

      const res = await fetch(url, options);
      const data = await res.json();

      if (res.status === 201) {
        // Signup successful
        console.log('Signup successful');
        // Flash a success message or redirect, etc.
      } else {
        // Signup failed
        console.error('Signup failed:', data.message);
        // Handle the failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Error in signup request:', error);
      // Handle other errors, network issues, etc.
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #ffb6c1, #add8e6)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 className="text-3xl font-semibold mb-6 text-center">Sign Up</h1>
        {flashMessage && (
          <div className={`mb-4 ${flashMessage.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
            {flashMessage.message}
          </div>
        )}
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className={`w-full px-4 py-2 border rounded-md ${formErrors.username ? 'border-red-500' : ''}`}
              value={formData.username}
              onChange={onInputChange}
            />
            {formErrors.username && (
              <div className="text-red-500">{formErrors.username}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className={`w-full px-4 py-2 border rounded-md ${formErrors.password ? 'border-red-500' : ''}`}
              value={formData.password}
              onChange={onInputChange}
            />
            {formErrors.password && (
              <div className="text-red-500">{formErrors.password}</div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`w-full px-4 py-2 border rounded-md ${formErrors.confirmPassword ? 'border-red-500' : ''}`}
              value={formData.confirmPassword}
              onChange={onInputChange}
            />
            {formErrors.confirmPassword && (
              <div className="text-red-500">{formErrors.confirmPassword}</div>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              className={`bg-blue-500 text-white px-6 py-2 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

