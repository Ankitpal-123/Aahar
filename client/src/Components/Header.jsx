import React from "react";

const Header = () => {
  return (
    <>
      <div className=""></div>
      <div className="mx-auto sm:flex items-center justify-around">
        <div>
          <img
            src="https://gdurl.com/KE4A"
            alt="indian cusine"
            className="h-64 mx-auto sm:h-96"
          />
          <div className="flex items-center  bg-white rounded-3xl p-1 w-40 justify-between  ml-40 sm:ml-28">
            <img
              src="https://gdurl.com/q5l0"
              alt="facebook"
              className="h-8 mx-2"
            />
            <img
              src="https://gdurl.com/zsD6"
              alt="instagram"
              className="h-8 mx-2"
            />
            <img
              src="https://gdurl.com/RYFa"
              alt="twitter"
              className="h-6 mx-2"
            />
          </div>
        </div>
        <div>
          <div className="mb-10 mt-5">
            <p className="text-2xl sm:text-4xl  ml-8 text-extrabold leading-relaxed sm:max-w-screen-sm">
              जब भूख से पेट में एंठन आ जाती है माँ, तेरी रोटी बोहोत याद आती है
            </p>
            <p className="text-amber-600 mx-auto text-xl text-bold ml-44 sm:ml-96">
              -- MAGARSAHEB
            </p>
          </div>
          <div className=" p-2 grid grid-cols-2 gap-4 place-content-between border-2 border-amber-600 rounded-3xl ">
            <p className="text-xl text-amber-600 text-semi-bold ml-5">
              search{" "}
            </p>
            <img
              src="https://gdurl.com/NQXS"
              alt="search"
              className="h-6 mr-5 place-self-end "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
