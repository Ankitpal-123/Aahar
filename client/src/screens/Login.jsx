import React from "react";
import Navbar from "../Components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <img
        src="https://gdurl.com/2iZx"
        alt=""
        class="fixed object-cover bg-center bg-repeat-y brightness-50 -z-10"
      />

      <div className="flex flex-col content-center bg-orange-300 mx-auto w-80 border-4 border-red-500 rounded-3xl p-10 mt-10">
        <div className="mx-auto">
          <p className="mx-auto mt-10 text-xl text-orange-600 font-bold">
            Welcome To
          </p>
          <img
            src="https://gdurl.com/0PTl"
            alt="Aahar Logo"
            className="w-20 mx-auto"
          />
        </div>

        <div className="flex p-2 border-2 border-black w-56 mx-auto mt-32 bg-white rounded-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
            alt="Google Logo"
            className="h-6 mx-2"
          />
          <p className="mx-2">Sign In With Google</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
