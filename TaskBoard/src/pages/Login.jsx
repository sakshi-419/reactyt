import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useLocalStorage from "../hooks/useLocalStorage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [auth, setAuth] = useLocalStorage("auth", false);

  const navigate = useNavigate();

  // ✅ If already logged in → go to board
  useEffect(() => {
    if (auth) {
      navigate("/board");
    }
  }, [auth, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "intern@demo.com" && password === "intern123") {
      setAuth(true);
      navigate("/board");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="page-center">
      <form className="card login-card" onSubmit={handleLogin}>
        <h2>Task Board Login</h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          required
        />

        {/* PASSWORD */}
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            required
          />

          {password && (
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          )}
        </div>

        {/* BUTTON */}
        <button type="submit">Login</button>

        {/* ERROR MESSAGE */}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
