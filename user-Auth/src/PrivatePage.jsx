import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const PrivatePage = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Private Page 🔐</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default PrivatePage;
