import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "intern@demo.com" && password === "intern123") {
      localStorage.setItem("auth", "true");
      navigate("/board");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="page-center">
      <form className="card login-card" onSubmit={handleLogin}>
        <h2>Task Board Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD FIELD */}
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassw
