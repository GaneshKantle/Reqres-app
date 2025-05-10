import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const loginUser = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    if (res.status === 200) {
      localStorage.setItem('token', res.data.token);
      return res.data.token;
    }
  } catch (err) {
    console.error('Login error:', err?.response?.data?.error || err.message);
    throw new Error('Login failed');
  }
};

export const logoutUser = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
