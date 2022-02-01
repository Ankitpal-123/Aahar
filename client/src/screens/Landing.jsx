import React from "react";
import Corausel from "../Components/Corausel";
import HDAW from "../Components/HDAW";
import Navbar from "../Components/Navbar";

const landing = () => {
  return (
    <div>
      <Navbar />
      <Corausel />
      <HDAW />
    </div>
  );
};

export default landing;
