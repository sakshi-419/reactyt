import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginPage;
