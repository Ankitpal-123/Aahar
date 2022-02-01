import React from "react";

const Corausel = () => {
  return (
    <>
      <div className="flex justify-between max-w-screen-lg ml-40 mt-10">
        <div className="mx-10 mt-10">
          <p className="text-3xl font-bold text-amber-600">FAMOUS PICKS</p>
          <p className="max-w-2xl test-xl mb-1 ">
            The Dishes that trends this week in आहार
          </p>
          <div className="border-dashed h-1 border-white border-2 w-96"></div>
          <button class="rounded-3xl bg-amber-600 h-19 w-32 text-xl text-white font-semi-bold mt-3">
            LOGIN
          </button>
        </div>

        <div className="">
          <div className="flex">
            <div className="card  justify-center border-black border-2 ">
              <div className="rounded-lg m-w-sm ">
                <img
                  src="https://gdurl.com/zqD2"
                  alt="matarpanir"
                  className="h-44 "
                />
              </div>
              <div className="p-6">
                <p>Mattar Paneer</p>
              </div>
            </div>
            <div className="card justify-center border-black border-2">
              <div className="rounded-lg m-w-sm">
                <img
                  src="https://gdurl.com/Xa2U"
                  alt="pav-bhaji"
                  className="h-44"
                />
              </div>
              <div className="p-6">
                <p>Pav Baji</p>
              </div>
            </div>
            <div className="card justify-center border-black border-2">
              <div className="rounded-lg m-w-sm">
                <img
                  src="https://gdurl.com/7Uf7P"
                  alt="biryani"
                  className="h-44"
                />
                <div className="p-6">
                  <p>Biryani</p>
                </div>
              </div>
              <div className="card justify-center border-black border-2">
                <div className="rounded-lg m-w-sm">
                  <img
                    src="https://gdurl.com/foc1"
                    alt="aloo paratha"
                    className="h-44"
                  />
                  <div className="p-6">
                    <p>Aloo Paratha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Corausel;
