import React from "react";
import { Contact } from "../components/ServiceCard";
import { StickyNote, CircleUser, Phone } from "lucide-react";

function Touch() {
  return (
    <div className="flex justify-center items-center mb-10 ">
      <div className="w-[80vw] md:flex  space-x-5">
        <div className="flex flex-col  flex-1">
          <div className="space-y-5">
            <h1 className="font-bold">Get In Touch</h1>
            <h1 className="text-4xl font-bold">
              We'd Love to <span className="text-amber-300">Hear</span> From You
            </h1>
            <p className="">
              Whether you have questions, feedback, or just want to say hello —
              our team is always here for you.
            </p>
          </div>
          <div className="mt-10 space-y-4 ">
            <Contact
              icons={<StickyNote />}
              adress="Our Office"
              addDescription="123 Family Lane, Suite 200
            New York, NY 10001"
            />
            <Contact
              icons={<CircleUser />}
              adress="Our Office"
              addDescription="123 Family Lane, Suite 200
            New York, NY 10001"
            />
            <Contact
              icons={<Phone />}
              adress="Our Office"
              addDescription="123 Family Lane, Suite 200
            New York, NY 10001"
            />
          </div>
        </div>
        <div className="flex  items-center flex-1 sm:mt-15 md:mt-0   box-border  rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.10)]">
          <div className="p-10">
            <div className="flex flex-col gap-y-5">
              <div><h1 className="text-3xl font-bold">Send Message</h1></div>
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-8">
                  <div className="flex flex-col flex-1">
                    <label htmlFor="" placeholder="jib">
                      First Name
                    </label>
                    <input
                      className="w-full h-8 border border-blue-500 rounded-md p-2"
                      type="text"
                      placeholder="jib"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label htmlFor="" placeholder="family">
                      Last Name
                    </label>
                    <input
                      className="w-full h-8 border border-blue-500 rounded-md p-2"
                      type="text"
                      placeholder="family"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="">email</label>
                  <input
                  className="w-full h-8 border border-blue-500 rounded-md p-2"
                    type="text"
                    name=""
                    placeholder="jibfamily@gmial.com"
                    id=""
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Service Interest</label>
                <select name="" id="" className="w-full h-8 border border-blue-500 rounded-md px-2">
                  <option>Select a service…</option>
                  <option>Home Management</option>
                  <option>Education Hub</option>
                  <option>Health & Wellness</option>
                  <option>Family Events</option>
                  <option>Financial Planning</option>
                  <option>Community Connect</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Message</label>
                <textarea className="w-full h-20 border border-blue-500 p-2" placeholder="Tell us how we can help your family…"></textarea>
              </div>
              <div>
                <button className="w-full bg-amber-400 text-white text-center tracking-1 shadow-[0_5px_24px_2px_rgba(1,2,3,0.3)] p-4 rounded-2xl font-bold">Send Message ✦</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Touch;
