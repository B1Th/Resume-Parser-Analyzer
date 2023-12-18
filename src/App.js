import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Parser from "./Parser";
import Ranking from "./Ranking";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parser" element={<Parser />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
