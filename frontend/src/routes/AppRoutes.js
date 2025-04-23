import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import ResultPage from "../pages/ResultPage";
import Routine from "../pages/Routine";
import Products from "../pages/Products";
import About from "../pages/About";
// import NotFound from '../pages/NotFound'; // optional

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/routine" element={<Routine />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
