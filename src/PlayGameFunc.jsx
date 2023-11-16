// components/LoginPage.jsx
// components/PlayGameFunc.jsx
import React from 'react';
import PlayGamePage from './PlayGameFunc';  // Adjust the import as needed

const PlayGameFunc = ({ onPlay }) => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #ffb6c1, #89cff0)', backgroundSize: 'cover', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <PlayGamePage onplay={onPlay} />
    </div>
  );
};

export default PlayGameFunc;