import axios from 'axios';

const API_URL = 'https://reqres.in/api';

// Login and get token
export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem('token', res.data.token);
    return res.data.token;
  } catch (err) {
    console.error('Error logging in:', err);
    throw err;
  }
};

// Logout user by removing token
export const logoutUser = () => {
  localStorage.removeItem('token');
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
