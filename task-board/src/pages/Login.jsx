import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const success = login(
      form.email,
      form.password,
      form.remember
    );

    if (!success) return setError("Invalid credentials");

    navigate("/board");
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Login To TaskBoard</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={e =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <div className="remember-row">
          <input
            type="checkbox"
            onChange={e =>
              setForm({ ...form, remember: e.target.checked })
            }
          />
          <label>Remember me</label>
        </div>

        <button type="submit">Login</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}
