import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Banner.css";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const Banner = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const slides = [
    {
      imageUrl: "https://i.ibb.co/pJqwVTv/tabboki.jpg",
      title: "Delicious Recipes",
      description:
        "Explore a variety of delicious recipes from around the world, perfect for any occasion.",
      button1: "Recipes",
      button2: "Add Recipes",
    },
    {
      imageUrl: "https://i.ibb.co/xXtM6B1/bibimbap.jpg",
      title: "Healthy Eating",
      description:
        "Discover healthy and nutritious meals that are easy to prepare and good for your body.",
      button1: "Recipes",
      button2: "Add Recipes",
    },
    {
      imageUrl: "https://i.ibb.co/Xbv2D4t/kimbap.jpg",
      title: "Quick Meals",
      description:
        "Find quick and easy meal ideas that are perfect for busy weeknights and on-the-go lifestyles.",
      button1: "Recipes",
      button2: "Add Recipes",
    },
  ];

  const handleGoogleSignIn = () => {
    if (user) {
      navigate("/add-recipes");
    } else {
      toast.error("please google login");
    }
  };

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper sw"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <img src={slide.imageUrl} alt={`Slide ${index}`} />
              <h1 className="absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-semibold z-10 text-nowrap">
                {slide.title}
              </h1>
              <p className="absolute top-64 left-1/2 transform -translate-x-1/2 text-white text-xl  w-2/4 text-center z-10">
                {slide.description}
              </p>

              <div className="absolute top-80 left-1/2 transform -translate-x-1/2 flex gap-3 z-10 mt-4">
                <NavLink to={"/recipes"}>
                  <button className="px-5 py-3 text-sm rounded bg-lime-300 hover:bg-lime-400">
                    {slide.button1}
                  </button>
                </NavLink>
                <NavLink>
                  <button
                    onClick={handleGoogleSignIn}
                    className="px-5 py-3 text-sm rounded bg-teal-300 hover:bg-teal-400"
                  >
                    {slide.button2}
                  </button>
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
