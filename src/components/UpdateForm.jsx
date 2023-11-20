// UpdateForm.jsx
import React, { useState } from 'react';
import './update.css';

const UpdateForm = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({
    username: user.username || '',
    password: user.password || '',
    // Add other fields as needed
  });

  const handleUpdateClick = () => {
    onUpdate(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="update-form-container">
      <h2>Update Profile</h2>
      <div className="update-form">
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>
        {/* Add other input fields as needed */}
        <button onClick={handleUpdateClick} className="update-button">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;


