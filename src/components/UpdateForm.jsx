import React, { useState } from 'react';
import './update.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


const UpdateForm = ({ user, onUpdate, onDelete }) => {
  const [formData, setFormData] = useState({
    username: user.username || '',
    password: user.password || '',
    // Add other fields as needed
  });

  const handleUpdateClick = async () => {
    try {
      const authToken = localStorage.getItem('auth_token'); // Assuming the auth token is stored in local storage

      const response = await fetch(`${BACKEND_URL}/auth/update_user/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
          // Add any other headers as needed
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        onUpdate(data.data); // Assuming onUpdate is a prop callback to handle successful update
        console.log('User updated successfully');
      } else {
        console.error('Update failed:', data.message);
        // Handle the failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Error in update request:', error);
      // Handle other errors, network issues, etc.
    }
  };

  const handleDeleteClick = async () => {
    try {
      const authToken = localStorage.getItem('auth_token'); // Assuming the auth token is stored in local storage

      const response = await fetch(`${BACKEND_URL}/auth/delete_user/${user.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
          // Add any other headers as needed
        },
      });

      const data = await response.json();

      if (response.ok) {
        onDelete(); // Assuming onDelete is a prop callback to handle successful deletion
        console.log('User deleted successfully');
      } else {
        console.error('Deletion failed:', data.message);
        // Handle the failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Error in deletion request:', error);
      // Handle other errors, network issues, etc.
    }
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
        <button onClick={handleDeleteClick} className="delete-button">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default UpdateForm;





