import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaGoogle} from "react-icons/fa";
import { EyeOff } from 'lucide-react';

function Sinup() {
  const primarybtn =
    "w-full bg-blue-500 hover:border-blue-500 hover:border hover:text-black hover:bg-white rounded py-2 px-4 text-white";
  return (
    <>
      <div className="flex flex-col justify-center p-10  items-center h-screen bg-blue-400">
        <div className="bg-white shadow-md m-10 shadow-black/10 hover:shadow-xl hover:scale-101 transition duration-300  w-full sm:w-[90%] md:w-[60%] lg:w-[35%] rounded-md flex flex-col items-center justify-center">
          <div className=" flex flex-col items-center w-full p-5">
            <h1 className="font-bold text-2xl">SignUp</h1>
            <div className="flex flex-col w-full space-y-2 mb-2 mt-4 relative">
              <input
                type="email"
                className="border border-blue-400 rounded px-4 py-2"
                placeholder="email"
              />
              <input
                type="password"
                className="border border-blue-400 rounded px-4 py-2"
                placeholder="Create Password"
              />
              <input
                type="password"
                className="border border-blue-400 rounded px-4 py-2"
                placeholder="Confirm Password"   
              />
              <EyeOff className="absolute right-3 top-[73%] opacity-50" />
            </div>
            <button className={primarybtn}>SignUp</button>
            <h1>
              Already have an account?
              <NavLink to='/login' className="ml-3 text-blue-500 hover:text-blue-700">Login</NavLink>
            </h1>

            <span className="py-2">Or</span>
            <button className={`${primarybtn} hover:scale-101 transition flex justify-center items-center `}>
              <FaFacebook className="text-white-800  mr-3" />
              Login with Facebook</button>
            <button className="w-full border border-blue-500 hover:scale-101 transition flex justify-center items-center text-black/60 hover:bg-blue-500 hover:text-white  mt-2 rounded py-2 px-4">
              <FaGoogle className="text-white-800  mr-3" />
              Login with Google
            </button>
            <Link to="/" className="pt-3 px-3 hover:text-blue-400">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sinup;
