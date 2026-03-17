import React from "react";

function Subscribe() {
  return (
    <div className="flex justify-center mt-10  text-center  text-white">
      <div className="w-[80vw] bg-amber-500 p-10   flex flex-col items-center justify-center">
        <h1 className="text-[3rem] font-serif font-extrabold tracking-1">Stay in the Family Loop</h1>
        <p>Get tips, events, and exclusive offers delivered to your inbox.</p>
        <div className="flex w-full justify-center gap-x-2 mt-4">
          <input type="text" className=" w-1/2 rounded-2xl p-2 bg-amber-50 text-black justify-self-center h-10 border border-blue-300 shadow-olive-400" placeholder="Enter Your email Adress" name="" id="" />
          <button className="bg-amber-950 hover:bg-amber-900 hover:text-shadow-white text-white px-6 border border-blue-300  shadow-2xl items-center text-center rounded-2xl p-2">Subscribe </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
