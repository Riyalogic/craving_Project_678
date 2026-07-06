import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CustomerDashboard from "./pages/dashboard/CustomerDashboard";
import ContactUs from "./pages/ContactUs";


const App = () => {
  return (
    <>
      <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:userType" element={<Register />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        </Routes>
    </>
  );
};

export default App;