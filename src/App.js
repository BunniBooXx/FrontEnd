// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeaf } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import UserProfilePage from './UserProfilePage';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Characters from './Characters';
import PlayGameFunc from './PlayGameFunc';
import PlayGamePage from './components/PlayGame';

function App() {
  const [text, setText] = useState('');
  const [audioContent, setAudioContent] = useState('');






  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleTTSRequest = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/tts?text=the weather is nice today');
      setAudioContent(response.data.audioContent);
      const ctx = new AudioContext();
      let audio;
      fetch("http://127.0.0.1:5000/static/yona.mp3")
        .then(data => data.arrayBuffer())
        .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
        .then(decodedAudio => {
          audio = decodedAudio;
          const playSound = ctx.createBufferSource();
          playSound.buffer = audio; 
          console.log(playSound)
          playSound.connect(ctx.destination)
          playSound.start(ctx.currentTime);
        }); 
        

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
     // const response = await axios.post('/auth/login', credentials);
      // rest of the code
    } catch (error) {
      console.error('Error in login:', error);
    }
  };
  
  const handleSignup = async (credentials) => {
    try {
      const response = await axios.post('/auth/register', credentials);
      // rest of the code
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
          <Route path="/play-game" element={<PlayGameFunc onPlay = {PlayGamePage}/>} />
          <Route path="/user-profile" element={<UserProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

