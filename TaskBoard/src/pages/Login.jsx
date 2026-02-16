import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  // 🔐 If already logged in → go to board
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth) {
      navigate("/board");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "intern@demo.com" && password === "intern123") {

      if (remember) {
        localStorage.setItem("isAuth", "true");
      } else {
        sessionStorage.setItem("isAuth", "true");
      }

      navigate("/board");

    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="page-center">
      <form className="card" onSubmit={handleLogin}>

        <h2>Task Board Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ✅ REMEMBER ME */}
        <label className="remember">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          Remember me
        </label>

        <button type="submit">Login</button>

        {error && <p className="error">{error}</p>}

      </form>
    </div>
  );
}

export default Login;
