// src/components/UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (page) => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=${page}`, {
        headers: {
          "x-api-key": "reqres-free-v1", // Add your API key here
        },
      });
      setUsers(res.data.data);
      setTotalPages(res.data.total_pages);
    } catch (err) {
      console.error("Error fetching users:", err.response?.data || err.message);
    }
  };

  const handleDelete = (id) => {
    console.log(`Delete user with id: ${id}`);
    // Add your delete logic here
  };

  return (
    <div className="user-list">
      <h2>Users List</h2>
      <div className="user-cards">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.first_name} />
            <h3>
              {user.first_name} {user.last_name}
            </h3>

            <button
              onClick={() => navigate(`/edit/${user.id}`)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid #aaa",
                cursor: "pointer",
              }}
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(user.id)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid #aaa",
                backgroundColor: "biege",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default UserList;
