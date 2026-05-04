// import React from "react";
// import { Contact } from "../components/ServiceCard";
// import { StickyNote, CircleUser, Phone } from "lucide-react";

// function Touch() {
//   return (
//     <div className="flex justify-center items-center mb-10 ">
//       <div className="w-[80vw] md:flex  space-x-5">
//         <div className="flex flex-col  flex-1">
//           <div className="space-y-5">
//             <h1 className="font-bold">Get In Touch</h1>
//             <h1 className="text-4xl font-bold">
//               We'd Love to <span className="text-amber-300">Hear</span> From You
//             </h1>
//             <p className="">
//               Whether you have questions, feedback, or just want to say hello —
//               our team is always here for you.
//             </p>
//           </div>
//           <div className="mt-10 space-y-4 ">
//             <Contact
//               icons={<StickyNote />}
//               adress="Our Office"
//               addDescription="123 Family Lane, Suite 200
//             New York, NY 10001"
//             />
//             <Contact
//               icons={<CircleUser />}
//               adress="Our Office"
//               addDescription="123 Family Lane, Suite 200
//             New York, NY 10001"
//             />
//             <Contact
//               icons={<Phone />}
//               adress="Our Office"
//               addDescription="123 Family Lane, Suite 200
//             New York, NY 10001"
//             />
//           </div>
//         </div>
//         <div className="flex  items-center flex-1 sm:mt-15 md:mt-0   box-border  rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.10)]">
//           <div className="p-10">
//             <div className="flex flex-col gap-y-5">
//               <div><h1 className="text-3xl font-bold">Send Message</h1></div>
//               <div className="flex flex-col gap-y-2">
//                 <div className="flex gap-8">
//                   <div className="flex flex-col flex-1">
//                     <label htmlFor="" placeholder="jib">
//                       First Name
//                     </label>
//                     <input
//                       className="w-full h-8 border border-blue-500 rounded-md p-2"
//                       type="text"
//                       placeholder="jib"
//                     />
//                   </div>
//                   <div className="flex flex-col flex-1">
//                     <label htmlFor="" placeholder="family">
//                       Last Name
//                     </label>
//                     <input
//                       className="w-full h-8 border border-blue-500 rounded-md p-2"
//                       type="text"
//                       placeholder="family"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="">email</label>
//                   <input
//                   className="w-full h-8 border border-blue-500 rounded-md p-2"
//                     type="text"
//                     name=""
//                     placeholder="jibfamily@gmial.com"
//                     id=""
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="">Service Interest</label>
//                 <select name="" id="" className="w-full h-8 border border-blue-500 rounded-md px-2">
//                   <option>Select a service…</option>
//                   <option>Home Management</option>
//                   <option>Education Hub</option>
//                   <option>Health & Wellness</option>
//                   <option>Family Events</option>
//                   <option>Financial Planning</option>
//                   <option>Community Connect</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="">Message</label>
//                 <textarea className="w-full h-20 border border-blue-500 p-2" placeholder="Tell us how we can help your family…"></textarea>
//               </div>
//               <div>
//                 <button className="w-full bg-amber-400 text-white text-center tracking-1 shadow-[0_5px_24px_2px_rgba(1,2,3,0.3)] p-4 rounded-2xl font-bold">Send Message ✦</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Touch;
// ---------------------------------------------------------------------------

import React, { useState } from "react";
import { Contact } from "../components/ServiceCard";
import { StickyNote, CircleUser, Phone } from "lucide-react";

function Touch() {
  // ✅ State (stores form data)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Submit function (connects to Django)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      service_interest: service,
      message: message,
    };

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);

      // alert("Message sent successfully!");
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

      // ✅ Clear form
      setFirstName("");
      setLastName("");
      setEmail("");
      setService("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Error sending message");
    }
  };

  return (
    <div className="flex justify-center items-center mb-10">
      <div className="w-[80vw] md:flex space-x-5">
        {/* LEFT SIDE */}
        <div className="flex flex-col flex-1">
          <div className="space-y-5">
            <h1 className="font-bold">Get In Touch</h1>
            <h1 className="text-4xl font-bold">
              We'd Love to <span className="text-amber-300">Hear</span> From You
            </h1>
            <p>
              Whether you have questions, feedback, or just want to say hello —
              our team is always here for you.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <Contact
              icons={<StickyNote />}
              adress="Our Office"
              addDescription="123 Family Lane, Suite 200 New York, NY 10001"
            />
            <Contact
              icons={<CircleUser />}
              adress="Our Office"
              addDescription="123 Family Lane, Suite 200 New York, NY 10001"
            />
            <Contact
              icons={<Phone />}
              adress="Our Office"
              addDescription="123 Family Lane, Suite 200 New York, NY 10001"
            />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex items-center flex-1 sm:mt-15 md:mt-0 box-border rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.10)]">
          {/* ✅ FORM START */}
          <form className="p-10 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-5">
              <h1 className="text-3xl font-bold">Send Message</h1>

              {/* First + Last */}
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-8">
                  <div className="flex flex-col flex-1">
                    <label>First Name</label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full h-8 border border-blue-500 rounded-md p-2"
                      type="text"
                      placeholder="jib"
                      required
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <label>Last Name</label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full h-8 border border-blue-500 rounded-md p-2"
                      type="text"
                      placeholder="family"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label>Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-8 border border-blue-500 rounded-md p-2"
                    type="email"
                    placeholder="jibfamily@gmail.com"
                    required
                  />
                </div>
              </div>

              {/* Service */}
              <div className="flex flex-col">
                <label>Service Interest</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full h-8 border border-blue-500 rounded-md px-2"
                  required
                >
                  <option value="">Select a service…</option>
                  <option>Home Management</option>
                  <option>Education Hub</option>
                  <option>Health & Wellness</option>
                  <option>Family Events</option>
                  <option>Financial Planning</option>
                  <option>Community Connect</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-20 border border-blue-500 p-2"
                  placeholder="Tell us how we can help your family…"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-600 text-white p-4 rounded-2xl font-bold"
              >
                Send Message ✦
              </button>
            </div>
          </form>
          {/* ✅ FORM END */}
        </div>
      </div>
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50">
          ✅ Message sent successfully!
        </div>
      )}
    </div>
  );
}

export default Touch;
