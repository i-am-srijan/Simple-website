import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";

function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [active, setActive] = useState("signup");
  return (
    <div className="flex justify-center relative">
     
      <div className="flex items-center justify-between w-[80vw] mt-2 p-10">
        <div className="group cursor-pointer">
          <span className="font-bold text-2xl text-yellow-400 group-hover:text-gray-700">
            Jib
          </span>
          <span className="text-2xl text-gray-700 group-hover:text-yellow-400">
            Family
          </span>
        </div>

        {/* hamberber menu */}
        <button
          className="lg:hidden hover:text-white "
          onClick={() => setMobileMenuIsOpen((prev) => !prev)}
        >
          {mobileMenuIsOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <div className="hidden lg:flex bg-sky-200 p-2 pl-10 rounded-2xl space-x-8  text-gray-900">
          <a href="#home" className="hover:text-taupe-700 hover:font-bold">
            Home
          </a>
          <a href="#about" className="hover:text-taupe-700 hover:font-bold">
            About
          </a>
          <a href="/" className="hover:text-taupe-700 hover:font-bold">
            Contact
          </a>
          <a href="/" className="hover:text-taupe-700 hover:font-bold">
            Service
          </a>
          <div className="flex items-center bg-amber-50 rounded-2xl px-3 hover:scale-100">
            <Search className="w-4 h-4 text-gray-400 " />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 outline-none bg-transparent hover:text-taupe-700 hover:font-bold"
            />
          </div>
        </div>
        {mobileMenuIsOpen && (
          <div className=" absolute top-full left-0 w-full lg:hidden flex justify-center mt-2 z-50">
            <div className="flex flex-col space-y-4 bg-white w-[80vw] p-6 rounded-2xl shadow-lg">
              <a
                href="/"
                onClick={() => setMobileMenuIsOpen(false)}
                className="hover:bg-sky-500"
              >
                Home
              </a>
              <a
                href="/"
                onClick={() => setMobileMenuIsOpen(false)}
                className="hover:bg-sky-500"
              >
                About
              </a>
              <a
                href="/"
                onClick={() => setMobileMenuIsOpen(false)}
                className="hover:bg-sky-500"
              >
                Contact
              </a>
              <a
                href="/"
                onClick={() => setMobileMenuIsOpen(false)}
                className="hover:bg-sky-500"
              >
                Service
              </a>

              <div className="flex bg-sky-200 font-bold rounded-2xl overflow-hidden mt-2">
                <button
                  onClick={() => setActive("signup")}
                  className={`flex-1 p-2 text-center transition ${
                    active === "signup"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-orange-600"
                  }`}
                >
                  SignUp
                </button>
                <button
                  onClick={() => setActive("login")}
                  className={`flex-1 p-2 text-center transition ${
                    active === "login"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Login
                </button>
              </div>

              <div className="flex items-center border rounded-full px-3 py-2 w-full">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 w-full outline-none"
                />
              </div>
            </div>
          </div>
        )}
        <div className="hidden lg:flex bg-sky-200 font-bold rounded-2xl border-amber-300 sm:hidden">
          <button
            onClick={() => setActive("signup")}
            className={`items-center text-orange-600 bg-gray-200 p-2 px-4 rounded-l-2xl ${
              active === "signup"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-orange-600"
            }`}
          >
            SignUP
          </button>

          <button
            onClick={() => setActive("login")}
            className={`items-center bg-white-200 p-2 px-4 rounded-r-2xl ${
              active === "login"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
