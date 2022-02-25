import React from "react";
import Corausel from "../Components/Corausel";
import Footer from "../Components/Footer";
import HDAW from "../Components/HDAW";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
// import { Routes, Route } from "react-router-dom";

const landing = () => {
  return (
    <div className="bg-orange-200 ">
      <Navbar />
      <Header />
      <Corausel />
      <HDAW />
      <Footer />
    </div>
  );
};

export default landing;
