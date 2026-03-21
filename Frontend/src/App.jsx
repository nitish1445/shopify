import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";
import CustomerDashboard from "./pages/CustomerDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/shop-now" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/customer-dasboard" element={<CustomerDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
