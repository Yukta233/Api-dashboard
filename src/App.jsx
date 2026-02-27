import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all pages from pages folder
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import News from "./pages/News";
import Products from "./pages/Products";
import Cocktail from "./pages/Cocktail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />          {/* Home page */}
        <Route path="/weather" element={<Weather />} />
        <Route path="/news" element={<News />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cocktail" element={<Cocktail />} />
      </Routes>
    </Router>
  );
}

export default App;