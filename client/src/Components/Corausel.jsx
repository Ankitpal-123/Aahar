import "./Corousel.css";
import React from "react";
import Slider from "react-slick";
// import NextArrow from "./common/carousel/nextArrow";
// import PrevArrow from "./common/carousel/prevArrow";

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

// const settings = {
//   infinite: false,
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   nextArrow : <NextArrow />,
//   prevArrow :<PrevArrow/>
// };

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
          {/* <Slider {...settings}>
            {foodList.map((food) => (
              <div className="bg-orange-300 rounded-xl min-h-fit min-w-fit">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-40 h-40 object-cover rounded-tl-xl rounded-tr-xl "
                />
                <p className="p-2 font-semibold">{food.name}</p>
              </div>
            ))}
          </Slider> */}

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
      </div>
    </>
  );
};

export default Corausel;
