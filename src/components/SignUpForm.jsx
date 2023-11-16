import React from 'react';

const SignUpForm = ({ onInputChange, onSubmit }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #ffb6c1, #add8e6)',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
      }}>
        <h1 className="text-3xl font-semibold mb-6 text-center">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border rounded-md"
              onChange={onInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md"
              onChange={onInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-2 border rounded-md"
              onChange={onInputChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={onSubmit}
              className="bg-blue-500 text-white px-6 py-2 rounded-md"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
