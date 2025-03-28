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
        const res = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(res.data.data);
      } catch (err) {
        console.error('Error fetching user data');
      }
    };

    fetchUserData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      navigate('/users');
    } catch (err) {
      console.error('Error updating user');
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