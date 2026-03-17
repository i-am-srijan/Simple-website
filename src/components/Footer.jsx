import React from "react";
import { FooterC } from "./ServiceCard";
import { Facebook, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center-safe w-full">
      <div className="w-[80vw] px-10 flex py-10 flex-col lg:grid lg:grid-cols-2 bg-amber-900 space-y-5 text-white">
        <div className="">
          <h1 className="text-2xl font-serif">
            Jib<span className="text-yellow-400">Family</span>
          </h1>
          <p>
            A platform built with love for families everywhere. We believe every
            family deserves to thrive.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="text-left gap-x-10 grid grid-cols-1  md:grid-cols-2  gap-y-10   lg:grid-cols-3  ">
            <FooterC
              hname="Company"
              name1="About Us"
              name2="Our Team"
              name3="Careers"
            />
            <FooterC
              hname="Services"
              name1="Home Management"
              name2="Education Hub"
            />
            <FooterC
              hname="Support"
              name1="Help Center"
              name2="Privacy Policy"
            />
          </div>
        </div>
        {/* <hr className="text-white border-2 " /> */}

      </div>
        <div div className="sm:flex text-center box-border">
          <div className="sm:flex justify-between items-center  p-5 px-10  w-[80vw]  ">
            <div >
              <h1 className="text-black ">© 2025 JibFamily. All rights reserved.</h1>
            </div>
            <div className="flex space-x-2 justify-center mt-2 sm:mt-0">
              <div className="w-10 h-10 bg-amber-300 text-white rounded-full flex flex-col items-center justify-center">
                <Twitter className="" />
              </div>
              <div className="w-10 h-10 bg-amber-300 text-white rounded-full flex flex-col items-center justify-center">
                <Facebook className="" />
              </div>
              <div className="w-10 h-10 bg-amber-300 text-white rounded-full flex flex-col items-center justify-center">
                <Linkedin className="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
