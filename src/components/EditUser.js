import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ first_name: '', last_name: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`https://reqres.in/api/users/${id}`, {
          headers: {
            'x-api-key': 'reqres-free-v1'
          }
        });
        setUser(res.data.data);
      } catch (err) {
        console.error('Error fetching user data:', err.response?.data || err.message);
      }
    };
  
    fetchUserData();
  }, [id]);
  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`https://reqres.in/api/users/${id}`, user, {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      });
      console.log('Mock update successful:', res.data);
      alert('User updated but wont reflect on UI.');
      navigate('/users');
    } catch (err) {
      console.error('Error updating user:', err.response?.data || err.message);
    }
  };
  

  return (
    <form onSubmit={handleUpdate} className="edit-form">
      <h2>Edit User</h2>
      <input
        type="text"
        value={user.first_name}
        onChange={(e) => setUser({ ...user, first_name: e.target.value })}
      />
      <input
        type="text"
        value={user.last_name}
        onChange={(e) => setUser({ ...user, last_name: e.target.value })}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditUser;