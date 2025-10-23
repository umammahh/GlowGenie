import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import ResultPage from "../pages/ResultPage";
import Routine from "../pages/Routine";
import Products from "../pages/Products";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProfileSettings from "../pages/ProfileSettings";
import ProtectedRoute from "./ProtectedRoute";
// import NotFound from '../pages/NotFound'; // optional

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/quiz"
        element={
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        }
      />
      <Route
        path="/result"
        element={
          <ProtectedRoute>
            <ResultPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/routine"
        element={
          <ProtectedRoute>
            <Routine />
          </ProtectedRoute>
        }
      />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfileSettings />
          </ProtectedRoute>
        }
      />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
