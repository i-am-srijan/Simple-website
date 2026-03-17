import React from "react";
import { Sparkle, MoveRight } from "lucide-react";
import MyVideo from "../assets/video/3129595-uhd_3840_2160_30fps.mp4";



function Showcase() {
  return (
    <div className=" flex justify-center">
      <div className="w-[80vw]  flex mt-10  md:items-center ">
        <div className="flex flex-col gap-4 md:items-start md:text-left text-center items-center">
          <h3 className="flex bounceanimation p-2 px-4 delay-100 duration-100 slide-in-from-bottom bg-amber-50 rounded-2xl backdrop-blur-2xl shadow-2xl border-1 border-amber-200">
            <Sparkle className=" " />
            Your Family's New Best Friend
          </h3>
          <h1 className="text-6xl font-bold font-serif delay-200 duration-200 slide-in-from-bottom">
            Where Every <br />
            <span className="text-green-400">Family</span> Finds Its <br />
            Joy
          </h1>
          <p className="font-roboto leading-8 md:w-[60%] sm:w-full slide-in-from-bottom delay-300 duration-300">
            JibFamily brings your loved ones closer with ex periences, services,
            and connections designed to celebrate what matters most — your
            people.
          </p>
          <div className="flex gap-x-2">
            <button className="flex gap-x-2 shadow-2xl backdrop-blur-2xl items-center p-4 bg-green-400  font-bold rounded-4xl text-gray-700 buttom-hover">
              Explore Services
              <MoveRight className="bottombounce"/>
            </button>
            <button className="flex gap-x-2 shadow-2xl backdrop-blur-2xl items-center p-4 bg-green-400  font-bold rounded-4xl text-gray-700 buttom-hover">
              Our Story
            </button>
          </div>
        </div>

        <div className="md:flex justify-between bounceanimation  rounded-2xl shadow-2xl flex-col bg-amber-200 hidden">
          <div className="p-10">
            <span className="text-9xl smallhover">🏡</span>
          </div>
          <hr className="w-full border-2 border-white" />
          <div className=" grid grid-cols-3 mt-2 text-center bg-white rounded-b-2xl w-full items-end">
            <div className="py-6">
              <h2 className="text-orange-500 font-bold text-xl">12K+</h2>
              <p className="text-gray-600">Families</p>
            </div>
            <div className="py-6">
              <h2 className="text-orange-500 font-bold text-xl">98%</h2>
              <p className="text-gray-600">Happy</p>
            </div>
            <div className="py-6">
              <h2 className="text-orange-500 font-bold text-xl">50+</h2>
              <p className="text-gray-600">Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
