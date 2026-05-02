import React from "react";
import { Link } from "react-router-dom";
import { Minus } from 'lucide-react'


function Login() {
  const primarybtn =
    "w-full bg-blue-500 hover:border-blue-500 hover:border hover:text-black hover:bg-white rounded py-2 px-4 text-white";
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-blue-400">
        <div className="bg-white shadow-md shadow-black/10 hover:shadow-xl hover:scale-101 transition duration-300  w-full sm:w-[90%] md:w-[60%] lg:w-[35%] mx-10 rounded-md flex flex-col items-center justify-center">
          <div className=" flex flex-col items-center w-full p-5">
            <h1 className="font-bold text-2xl">LogIn</h1>
            <div className="flex flex-col text-center w-full  mt-4">
              <input
                type="email"
                className="border border-blue-400 rounded px-4  mb-4 py-2"
                placeholder="email"
              />
              <input
                type="password"
                className="border border-blue-400 rounded px-4 py-2"
                placeholder="Create Password"
              />
              <Link to="/" className="p-2 text-blue-600 hover:text-blue-400">
                Forget Password?
              </Link>
            </div>
            <button className={primarybtn}>LogIn</button>
            <h1>
              Dont have an account?
              <a href="" className="text-blue-800 ml-2">
                LogIn
              </a>
            </h1>

            <span className="py-2">Or</span>
            <button className={primarybtn}>Login with Facebook</button>
            <button className="w-full border border-blue-500 text-black/60 hover:bg-blue-500 hover:text-white  mt-2 rounded py-2 px-4">
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

export default Login;
