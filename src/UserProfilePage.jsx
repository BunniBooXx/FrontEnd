// UserProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './components/update.css';
import UserProfile from './components/UserProfile';
import UpdateForm from './components/UpdateForm';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Fetch user data from the API or wherever it comes from
    const fetchUserData = async () => {
      try {
        const authToken = localStorage.getItem('auth_token');

        const response = await fetch(`${BACKEND_URL}/get_user_data`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`, // Add your authentication token
            credentials: 'include',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch user data. Status: ${response.status}`);
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle the error, show an error message, etc.
      }
    };

    fetchUserData();
  }, []); // Run once on component mount

  const handleUpdateClick = async (formData) => {
    try {
      const authToken = localStorage.getItem('auth_token');

      const response = await fetch(`${BACKEND_URL}/update_user/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
          credentials: 'include',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user data');
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
      setEditing(false);

      console.log('User data updated successfully');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      const authToken = localStorage.getItem('auth_token');

      const response = await fetch(`${BACKEND_URL}/delete_user/${user.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      const responseData = await response.json();
      console.log(responseData.message);

      // Handle any additional logic after successful deletion, e.g., redirect to another page

    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      {user ? (
        editing ? (
          <UpdateForm user={user} onUpdate={handleUpdateClick} />
        ) : (
          <UserProfile
            user={user}
            onEditClick={handleEditClick}
            onCancelClick={handleCancelClick}
            onDeleteClick={handleDeleteClick}
            onInputChange={handleInputChange}
          />
        )
      ) : (
        <p>Loading user data...</p>
      )}
      <Link to="/update-form" className="edit-button"></Link>
    </div>
  );
};

export default UserProfilePage;




