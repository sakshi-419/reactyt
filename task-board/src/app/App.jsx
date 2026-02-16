import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../auth/AuthContext";
import AppRoutes from "./Routes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
        
          <AppRoutes />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
