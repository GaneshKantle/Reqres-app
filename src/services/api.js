import axios from 'axios';

const API_URL = 'https://reqres.in/api';

// Fetch all users with pagination
export const fetchUsers = async (page) => {
  try {
    const res = await axios.get(`${API_URL}/users?page=${page}`);
    return res.data;
  } catch (err) {
    console.error('Error fetching users:', err);
    throw err;
  }
};

// Fetch single user by ID
export const fetchUserById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/users/${id}`);
    return res.data.data;
  } catch (err) {
    console.error('Error fetching user:', err);
    throw err;
  }
};

// Update user by ID
export const updateUser = async (id, data) => {
  try {
    const res = await axios.put(`${API_URL}/users/${id}`, data);
    return res.data;
  } catch (err) {
    console.error('Error updating user:', err);
    throw err;
  }
};

// Delete user by ID
export const deleteUser = async (id) => {
  try {
    await axios.delete(`${API_URL}/users/${id}`);
  } catch (err) {
    console.error('Error deleting user:', err);
    throw err;
  }
};
