import React from "react";
import Corausel from "../Components/Corausel";
import HDAW from "../Components/HDAW";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const landing = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Corausel />
      <HDAW />
    </div>
  );
};

export default landing;
