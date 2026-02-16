import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Board from "../board/Board";
import ProtectedRoute from "../auth/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/board"
        element={
          <ProtectedRoute>
            <Board />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
