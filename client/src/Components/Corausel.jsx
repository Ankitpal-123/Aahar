import "./Corousel.css";
import React from "react";

const foodList = [
  {
    image: "https://gdurl.com/zqD2",
    name: "Mattar Paneer",
  },
  {
    image: "https://gdurl.com/Xa2U",
    name: "Pav Bhaji",
  },
  {
    image: "https://gdurl.com/7Uf7P",
    name: "Biryani",
  },
  {
    image: "https://gdurl.com/foc1",
    name: "Aloo Paratha",
  },
  {
    image: "https://gdurl.com/zqD2",
    name: "Mattar Paneer",
  },
  {
    image: "https://gdurl.com/Xa2U",
    name: "Pav Bhaji",
  },
  {
    image: "https://gdurl.com/7Uf7P",
    name: "Biryani",
  },
  {
    image: "https://gdurl.com/foc1",
    name: "Aloo Paratha",
  },
  {
    image: "https://gdurl.com/zqD2",
    name: "Mattar Paneer",
  },
  {
    image: "https://gdurl.com/Xa2U",
    name: "Pav Bhaji",
  },
  {
    image: "https://gdurl.com/7Uf7P",
    name: "Biryani",
  },
  {
    image: "https://gdurl.com/foc1",
    name: "Aloo Paratha",
  },
];

const Corausel = () => {
  return (
    <>
      <div className="flex justify-between max-w-screen-lg ml-40 mt-10 mr-20">
        <div className="mx-10 mt-10">
          <p className="text-3xl font-bold text-amber-600">FAMOUS PICKS</p>
          <p className="max-w-2xl test-xl mb-1 ">
            The Dishes that trends this week in आहार
          </p>
          <div className="border-dashed h-1 border-white border-2 w-96"></div>
          <button className="rounded-3xl bg-amber-600 h-19 w-32 text-xl text-white font-semi-bold mt-3">
            LOGIN
          </button>
        </div>

        <div className="w-1/2 ">
          {/* slider */}
          <div className="flex space-x-2 scroll-bar overflow-hidden hover:overflow-x-scroll">
            {foodList.map((food) => {
              return (
                <div className="bg-orange-300 rounded-xl min-h-fit min-w-fit">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-40 h-40 object-cover rounded-tl-xl rounded-tr-xl "
                  />
                  <p className="p-2 font-semibold">{food.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/*  
        <div className=" ">
          <div className="flex gap-2 ">
            <div className="card  justify-center   ">
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
            <div className="card justify-center ">
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
            <div className="card justify-center">
              <div className="rounded-lg m-w-sm">
                <img src="https://gdurl.com/7Uf7P" alt="" className="h-44" />
              </div>
              <div className="p-6">
                <p>pavbwcb</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Corausel;
