import React from 'react';
import LoginForm from './components/LoginForm';

const LoginPage = ({ onLogin }) => {
  return (
    <div
      style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #ff9eb8, #aed6f1)',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("path/to/heart.avif")',
          backgroundSize: 'cover',
          filter: 'brightness(1.5) saturate(1.5)',
          zIndex: 0, // Set a higher z-index for the background
        }}
      ></div>
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '20px',
          borderRadius: '20px',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
          zIndex: 1, // Set a lower z-index for the form
        }}
      >
        <LoginForm onLogin={onLogin} />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ color: '#ff9eb8', fontSize: '14px', marginBottom: '5px' }}>
            Super Cute and Feminine!
          </p>
          <p style={{ color: '#aed6f1', fontSize: '12px' }}>Lolita Style</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

