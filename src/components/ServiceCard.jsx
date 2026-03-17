import React, { useEffect } from "react";
import { MoveRight, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiceCard(props) {
  return (
    <div className="w-70 hover:scale-105 hover:bg-amber-100 hover:text-green-500 shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-2xl p-4 space-y-4 mt-4 mb-4">
      <span className="text-4xl bg-amber-300 rounded-2xl p-2 inline-block mt-4">
        {props.icons}
      </span>
      <h1 className="font-bold text-2xl">{props.headtitle}</h1>
      <p>{props.description}</p>
      <div className="group flex gap-x-2 items-center text-amber-300 hover:text-amber-400 cursor-pointer">
        <h1 className="">learn More</h1>
        <MoveRight />
      </div>
    </div>
  );
}

export function FloatingCard(props) {
  return (
    <div
      className={`flex items-center w-auto gap-4  bg-white p-2 text-black rounded-2xl absolute ${props.className} shadow-2xl`}
    >
      <span> {props.icons}</span>
      <div>
        <h1 className="font-bold">{props.rating}</h1>
        <p>{props.ratingdescription}</p>
      </div>
    </div>
  );
}

export function SuccessStory({
  successDescription,
  className,
  successName,
  adress,
  ...aosProps}
) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div
      className=" bg-amber-500 p-4 rounded-2xl mt-4 overflow-hidden"
      data-aos="zoom-in-up"
      {...aosProps}
    >
      <span>***</span>
      <p>{successDescription}</p>
      <div className="flex items-center gap-x-4 mt-2">
        <div className={`h-10 w-10 rounded-full ${className}`}></div>
        <div>
          <h1>{successName}</h1>
          <p>{adress}</p>
        </div>
      </div>
    </div>
  );
}

export function Contact(props) {
  return (
    <div className="flex  ">
      <div className="w-10 h-10 text-white mr-4 rounded-full flex justify-center items-center  bg-amber-400">
        {props.icons}
      </div>
      <div>
        <h1 className="md:text-sm">{props.adress}</h1>
        <p className="text-blue-500 md:text-[.75rem]">{props.addDescription}</p>
      </div>
    </div>
  );
}

export function FooterC(props) {
  return (
    <div className="flex flex-col">
      <h1 className="text-md mb-2 uppercase tracking-[2px]">{props.hname}</h1>
      <div className="flex flex-col items-start text-white/50">
        {props.name1 && (
          <button className="text-left whitespace-nowrap">{props.name1}</button>
        )}
        {props.name2 && (
          <button className="text-left whitespace-nowrap">{props.name2}</button>
        )}
        {props.name3 && (
          <button className="text-left whitespace-nowrap">{props.name3}</button>
        )}
        {props.name4 && (
          <button className="text-left whitespace-nowrap">{props.name4}</button>
        )}
        {props.name5 && (
          <button className="text-left whitespace-nowrap">{props.name5}</button>
        )}
        {props.name6 && (
          <button className="text-left whitespace-nowrap">{props.name6}</button>
        )}
        {props.name7 && (
          <button className="text-left whitespace-nowrap">{props.name7}</button>
        )}
        {props.name8 && (
          <button className="text-left whitespace-nowrap">{props.name8}</button>
        )}
        {props.name9 && (
          <button className="text-left whitespace-nowrap">{props.name9}</button>
        )}
      </div>
    </div>
  );
}
