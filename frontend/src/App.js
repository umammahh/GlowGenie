import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
