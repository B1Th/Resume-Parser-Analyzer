import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import ResumeForm from "./ResumeForm";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Services />
      <ResumeForm />
      <Footer />
    </div>
  );
};

export default App;
