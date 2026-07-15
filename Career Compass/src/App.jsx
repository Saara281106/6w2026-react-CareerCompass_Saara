import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Student/Layout/Layout";
import Home from "./Components/Student/Pages/Home";
import About from "./Components/Student/Pages/About";
import Team from "./Components/Student/Pages/Team";
import Contact from "./Components/Student/Pages/Contact";
import Services from "./Components/Student/Pages/Services";
import Mentorship from "./Components/Student/Pages/Mentorship";
import AdminLayout from "./Components/Admin/Layout/AdminLayout";
import AddCareerPath from "./Components/Admin/CareerPath/AddCareerPath";
import AdminDashboard from "./Components/Admin/Dashboard/AdminDashboard";
import AddMentorshipSession from "./Components/Admin/MentorshipSession/AddMentorshipSession";
import ManageCareerPath from "./Components/Admin/CareerPath/ManageCareerPath";
import ManageMentorshipSession from "./Components/Admin/MentorshipSession/ManageMentorshipSession";
import ManageResources from "./Components/Admin/Resources/ManageResources";
import AddResources from "./Components/Admin/Resources/AddResources";
import ViewBooking from "./Components/Admin/Booking/ViewBooking";
import Profile from "./Components/Admin/Profile/profile";
import Register from "./auth/Register";
import { ToastContainer } from "react-toastify";
import Login from "./auth/Login";

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
            <Route path="/mentorship" element={<Mentorship/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Route>
          {/* Student Routes Ends */}

          {/* Admin Panel Starts */}
          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<AdminDashboard/>} />
            <Route path="carrerpath/manage" element={<ManageCareerPath/>} />
            <Route path="carrerpath/add" element={<AddCareerPath/>} />
            <Route path="manageMentorshipSession" element={<ManageMentorshipSession/>} />
            <Route path="addMentorshipSession" element={<AddMentorshipSession/>} />
            <Route path="manageResource" element={<ManageResources/>} />
            <Route path="addResource" element={<AddResources/>} />
            <Route path="viewBooking" element={<ViewBooking/>} />
            <Route path="profile" element={<Profile/>} />
          </Route>
          {/* Admin Panel Ends */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
