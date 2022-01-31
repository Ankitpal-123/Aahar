import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-around">
        <div>
          <img
            src="https://gdurl.com/KE4A"
            alt="indian cusine"
            className="h-96"
          />
          <div className="flex items-center bg-amber-500 rounded-lg p-1 w-40 justify-between ml-28">
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
          <div className="mb-10">
            <p className="text-4xl text-extrabold leading-relaxed max-w-screen-sm">
              जब भूख से पेट में एंठन आ जाती है माँ, तेरी रोटी बोहोत याद आती है
            </p>
            <p className="text-amber-600 text-xl text-bold ml-96">
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
