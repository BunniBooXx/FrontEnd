// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeaf } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Characters from './Characters';
import PlayGameFunc from './PlayGameFunc';

function App() {
  const [text, setText] = useState('');
  const [audioContent, setAudioContent] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleTTSRequest = async () => {
    try {
      const response = await axios.post('http://localhost:5000/tts', { text });
      setAudioContent(response.data.audioContent);
    } catch (error) {
      console.error('Error in TTS request:', error);
    }
  };

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    // Remove user authentication tokens or credentials
    // Set the isLoggedIn state to false
    localStorage.removeItem('authToken');
    setLoggedIn(false);
  };

  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post('your-backend-login-endpoint', credentials);
      // Assuming your backend returns a token upon successful login
      localStorage.setItem('authToken', response.data.token);
      setLoggedIn(true);
    } catch (error) {
      console.error('Error in login:', error);
    }
  };

  const handleSignup = async (credentials) => {
    try {
      const response = await axios.post('your-backend-signup-endpoint', credentials);
      // Assuming your backend returns a token upon successful signup
      localStorage.setItem('authToken', response.data.token);
      setLoggedIn(true);
    } catch (error) {
      console.error('Error in signup:', error);
    }
  };

  return (
    <Router>
      <main>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div>
          <button className="btn" onClick={handleTTSRequest}>
            <FontAwesomeIcon icon={faDeaf} size="2x" />
          </button>
          {audioContent && <audio controls src={`data:audio/wav;base64,${audioContent}`} />}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp onSignup={handleSignup} />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/play-game" element={<PlayGameFunc />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

