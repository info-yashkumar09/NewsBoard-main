import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("india");

  return (
    <div className="min-h-screen">
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Homepage search={search} setSearch={setSearch} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Homepage search={search} setSearch={setSearch} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
