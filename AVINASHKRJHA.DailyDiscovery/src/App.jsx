import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme; 
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <Sidebar theme={theme} setTheme={setTheme} />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
