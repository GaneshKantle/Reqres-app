import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

const Users = () => {
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
          "x-api-key": "reqres-free-v1",
        },
      });
      setUsers(res.data.data);
      setTotalPages(res.data.total_pages);
    } catch (err) {
      console.error("Error fetching users:", err.response?.data || err.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      // Make the DELETE request (mocking deletion)
      const res = await axios.delete(`https://reqres.in/api/users/${id}`);

      // If res.status === 204, the deletion was successful
      if (res.status === 204) {
        console.log(`User with ID ${id} deleted successfully.`);

        // Remove the user from local state
        setUsers(users.filter((user) => user.id !== id));
      } else {
        console.error("Unexpected response status:", res.status);
      }
    } catch (err) {
      // If deletion fails, log error
      console.error("Error deleting user:", err.response?.data || err.message);

      // If the API does not support deletion, simulate it by removing user locally
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="users-container">
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          backgroundColor: "#fef5e0",
          border: "1px solid #ccc",
          padding: "9px",
          borderRadius: "10px",
          fontSize: "20px",
        }}
      >
        Users List <br />{" "}
        <span style={{ fontSize: "18px", color: "#aaa", fontStyle: "italic" }}>
          Fetched through Reqres API
        </span>
      </h2>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.first_name} />
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                padding: "4px",
                borderRadius: "10px",
                
              }}
            >
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
                onClick={() => deleteUser(user.id)}
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
          </div>
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default Users;
