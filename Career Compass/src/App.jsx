import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Student/Layout/Layout";
import Home from "./Components/Student/Pages/Home";
import About from "./Components/Student/Pages/About";
import Team from "./Components/Student/Pages/Team";
import Contact from "./Components/Student/Pages/Contact";
import Services from "./Components/Student/Pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Student Routes Starts */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/team" element={<Team/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/services" element={<Services/>}></Route>

          </Route>
          {/* Student Routes Ends */}

          {/* Admin Panel Starts */}
          {/* Admin Panel Ends */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
