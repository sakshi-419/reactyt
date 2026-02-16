import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("auth")) || null
  );

  const login = (email, password, remember) => {
    if (email === "intern@demo.com" && password === "intern123") {
      const data = { email };
      setUser(data);
      if (remember) localStorage.setItem("auth", JSON.stringify(data));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
