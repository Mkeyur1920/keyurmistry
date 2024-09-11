import "./App.css";
import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    return () => {
      document.title = "Keyur's Portfolio"; // Reset the title when component unmounts
    };
  }, []);
  // Change the document title when the component is mounted
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
