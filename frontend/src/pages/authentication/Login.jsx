import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { Minus,Eye, EyeOff } from "lucide-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

function Login() {
   const [showPassword, setShowPassword] = useState(false);

  const primarybtn =
    "w-full bg-blue-500 hover:border-blue-500 hover:border hover:text-black hover:bg-white rounded py-2 px-4 text-white";
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-blue-400">
        <div className="bg-white shadow-md shadow-black/10 hover:shadow-xl hover:scale-101 transition duration-300  w-full sm:w-[90%] md:w-[60%] lg:w-[35%] mx-10 rounded-md flex flex-col items-center justify-center">
          <div className=" flex flex-col items-center w-full p-5">
            <h1 className="font-bold text-2xl">LogIn</h1>
            <div className="flex flex-col text-center w-full  mt-4 relative">
              <input
                type="email"
                className="border border-blue-400 rounded px-4  mb-4 py-2"
                placeholder="email"
              />
              <input
                // type="password"
                type={showPassword ? "text" : "password"}
                className="border border-blue-400 rounded px-4 py-2"
                placeholder="Enter Your Password"
              />
              {/* <EyeOff className="absolute right-3 top-[48%] opacity-50" /> */}
              {showPassword ? (
                <Eye
                  onClick={() => setShowPassword(false)}
                  className="absolute right-3 top-[48%] cursor-pointer opacity-50 hover:opacity-100 transition"
                />
              ) : (
                <EyeOff
                  onClick={() => setShowPassword(true)}
                  className="absolute right-3 top-[48%] cursor-pointer opacity-50 hover:opacity-100 transition"
                />
              )}

              <Link to="/" className="p-2 text-blue-600 hover:text-blue-400">
                Forget Password?
              </Link>
            </div>
            <button className={primarybtn}>LogIn</button>
            <h1>
              Dont have an account?
              <NavLink
                to="/sinup"
                className="ml-2 text-blue-600 hover:text-blue-700"
              >
                SignUp
              </NavLink>
            </h1>

            <span className="py-2">Or</span>
            <button
              className={`${primarybtn} hover:scale-101 transition flex justify-center items-center `}
            >
              <FaFacebook className="text-white-800  mr-3" />
              Login with Facebook
            </button>
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

export default Login;
