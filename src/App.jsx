import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import { Navbar } from "../src/components/Component";
import { Footer } from "../src/components/Component";
import TechnologyPage from "./pages/TechnologyPage";
import LocationPage from "./pages/LocationPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import SolutionsPage from "./pages/SolutionsPage";
import IndustriesPage from "./pages/IndustriesPage";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/register" element={<LoginRegister />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/locations" element={<LocationPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
