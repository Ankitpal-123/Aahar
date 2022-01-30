import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black  py-4 grid grid-cols-12 text-white h-20 mx-100">
        <div className="col-span-2">
          <img
            src="https://gdurl.com/0PTl"
            alt="aahar"
            className="h-20  ml-20 -mt-0.2  "></img>
        </div>
        <div className="flex ml-15 col-span-4 justify-between  mt-2 text-lg font-bold">
          <a href="">HOME</a>
          <p>·</p>
          <a href="">MENU</a>
          <p>·</p>
          <a href="">ORDER</a>
          <p>·</p>
          <a href="">NEAR ME</a>
          <p>·</p>
          <a href="">ABOUT</a>
        </div>
        <div className="col-span-3"></div>
        <div className="flex col-span-2 justify-between mt-2 text-lg font-bold ">
          <a href="">ADD RESTURANT</a>
          <p>·</p>
          <a href="">REGISTER</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
