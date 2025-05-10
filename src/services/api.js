import axios from 'axios';

// Create an axios instance to centralize configuration
const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer YOUR_API_KEY' // Uncomment if needed for authorization
  }
});

// Fetch all users with pagination
export const fetchUsers = async (page) => {
  try {
    const res = await axiosInstance.get(`/users`, { params: { page } });
    return res.data;
  } catch (err) {
    console.error('Error fetching users:', err.response?.data || err.message);
    throw new Error('Unable to fetch users');
  }
};

// Fetch single user by ID
export const fetchUserById = async (id) => {
  try {
    const res = await axiosInstance.get(`/users/${id}`);
    return res.data.data;  // Extract user data
  } catch (err) {
    console.error('Error fetching user:', err.response?.data || err.message);
    throw new Error(`Unable to fetch user with ID: ${id}`);
  }
};

// Update user by ID
export const updateUser = async (id, data) => {
  try {
    const res = await axiosInstance.put(`/users/${id}`, data);
    return res.data;
  } catch (err) {
    console.error('Error updating user:', err.response?.data || err.message);
    throw new Error(`Unable to update user with ID: ${id}`);
  }
};

// Delete user by ID
export const deleteUser = async (id) => {
  try {
    const res = await axiosInstance.delete(`/users/${id}`);
    
    // Check the response status code to confirm if deletion was successful
    if (res.status === 204) {
      console.log(`User with ID: ${id} has been successfully deleted.`);
    } else {
      console.log(`Unexpected response status: ${res.status}`);
    }
  } catch (err) {
    console.error('Error deleting user:', err.response?.data || err.message);
    throw new Error(`Unable to delete user with ID: ${id}`);
  }
};
