import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://reqres.in/api/login",
        {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        },
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );
      console.log("Login success:", res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/users");
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-form">
        <h2>
          Welcome to <span style={{ fontStyle: "italic" }}>Reqres App</span>{" "}
        </h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Ex: eve.holt@reqres.in"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Ex: cityslicka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
