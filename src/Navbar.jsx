// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
    const handleLogout = async () => {
        try {
          // Perform any client-side logout actions, such as removing tokens or credentials
          localStorage.removeItem('authToken'); // Assuming you store the token in localStorage
          isLoggedIn(false); // Set the isLoggedIn state to false
         
          // You can also make an API call to invalidate the server-side session if needed
          // Example: Sending a request to your backend logout endpoint
          // await axios.post('your-backend-logout-endpoint');
      
          // After performing logout actions, call the onLogout callback if provided
          if (onLogout) {
            onLogout();
          }
        } catch (error) {
          console.error('Error in logout:', error);
          // Handle errors, such as network issues or server errors, as needed
        }
      };
      

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              {isLoggedIn ? (
                <>
                  <li><Link to="/characters">Characters</Link></li>
                  <li><Link to="/play-game">Play Game</Link></li>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </>
              ) : (
                <>
                <li><Link to="/characters">Characters</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">SignUp</Link></li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center flex items-center">
          <Link to="/" className="btn btn-ghost text-xl">Yona Of The Dawn</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;





