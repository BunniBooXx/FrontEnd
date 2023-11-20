// api.js
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const makeAuthenticatedRequest = async (url, method, data = null) => {
  const authToken = localStorage.getItem('auth_token');

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`,
  };

  const options = {
    method,
    headers,
    credentials: 'include', // Include credentials in the request
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${BACKEND_URL}/${url}`, options);

  if (!response.ok) {
    throw new Error(`Request failed with status: ${response.status}`);
  }

  return response.json();
};

export default makeAuthenticatedRequest;
