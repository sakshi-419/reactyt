import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import LoginPage from "./LoginPage";
import PrivatePage from "./PrivatePage";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  
  return (
    <div>
      {isAuthenticated ? <PrivatePage /> : <LoginPage />}
    </div>
  );
}

export default App;
