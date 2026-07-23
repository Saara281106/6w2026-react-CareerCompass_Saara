import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Student/Layout/Layout";
import Home from "./Components/Student/Pages/Home";
import About from "./Components/Student/Pages/About";
import Team from "./Components/Student/Pages/Team";
import Contact from "./Components/Student/Pages/Contact";
import AdminLayout from "./Components/Admin/Layout/AdminLayout";
import AddCareerPath from "./Components/Admin/CareerPath/AddCareerPath";
import AdminDashboard from "./Components/Admin/Dashboard/AdminDashboard";
import AddMentorshipSession from "./Components/Admin/MentorshipSession/AddMentorshipSession";
import ManageCareerPath from "./Components/Admin/CareerPath/ManageCareerPath";
import ManageMentorshipSession from "./Components/Admin/MentorshipSession/ManageMentorshipSession";
import ManageResources from "./Components/Admin/Resources/ManageResources";
import AddResources from "./Components/Admin/Resources/AddResources";
import ViewBooking from "./Components/Admin/Booking/ViewBooking";
import Register from "./auth/Register";
import { ToastContainer } from "react-toastify";
import Login from "./auth/Login";
import EditCareerpath from "./Components/Admin/CareerPath/EditCareerPath";
import EditMentorshipSession from "./Components/Admin/MentorshipSession/EditMentorshipSession";
import EditResource from "./Components/Admin/Resources/EditResources";
import CareerPath from "./Components/Student/Pages/CareerPath";
import MentorshipSessions from "./Components/Student/Pages/MentorshipSessions";
import Resources from "./Components/Student/Pages/Resources";
import Profile from "./Components/Student/Pages/Profile";

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
            <Route path="/services" element={<CareerPath/>}></Route>
            <Route path="/mentorshipSession" element={<MentorshipSessions/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/resources" element={<Resources/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
          </Route>
          {/* Student Routes Ends */}

          {/* Admin Panel Starts */}
          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<AdminDashboard/>} />
            <Route path="careerpath/manage" element={<ManageCareerPath/>} />
            <Route path="careerpath/add" element={<AddCareerPath/>} />
            <Route path="careerpath/edit/:id" element={<EditCareerpath/>} />
            <Route path="mentorshipSession/manage" element={<ManageMentorshipSession/>} />
            <Route path="mentorshipSession/add" element={<AddMentorshipSession/>} />
            <Route path="mentorshipSession/edit/:id" element={<EditMentorshipSession/>} />
            <Route path="resources/manage" element={<ManageResources/>} />
            <Route path="resources/add" element={<AddResources/>} />
            <Route path="resources/edit/:id" element={<EditResource/>} />
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
