import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './update.css';

const UserProfile = ({ user, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Initialize form data when the user prop changes
  useEffect(() => {
    if (user) {
      setFormData({
        username: user?.username || '',
        password: user?.password || '',
      });
    }
  }, [user]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    // Reset the form data if user exists
    if (user) {
      setFormData({
        username: user.username,
        password: user.password,
      });
    }
  };

  const handleUpdateClick = () => {
    onUpdate(formData);
    setEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={`profile-container ${editing ? 'editing' : ''}`}>
      <h2>User Profile</h2>
      <div className="profile-info">
        <div>
          <label>Username:</label>
          {editing ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="input-field"
            />
          ) : (
            <span>{formData.username}</span>
          )}
        </div>
        <div>
          <label>Password:</label>
          {editing ? (
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input-field"
            />
          ) : (
            <span>{formData.password}</span>
          )}
        </div>
        {/* Add other profile information here */}
      </div>
      <div className="profile-actions">
        {editing ? (
          <>
            <button onClick={handleUpdateClick} className="save-button">
              Save
            </button>
            <button onClick={handleCancelClick} className="cancel-button">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEditClick} className="edit-button">
              Edit
            </button>
            <Link to="/update-form" className="edit-button"></Link>
            <button onClick={handleDeleteClick} className="delete-button">
              Delete Account
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;


