import React from "react";
import "../index.css"; // We'll add the keyframes here

const items = [
  "Family Planning",
  "Home Services",
  "Education Support",
  "Health & Wellness",
  "Community Events",
  "Financial Guidance",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-amber-100 py-2 m-20 ">
      <div className="marquee inline-block">
        {items.concat(items).map((item, index) => (
          <span
            key={index}
            className="inline-block mr-16 font-bold text-amber-700"
          >
            <span className="mr-2">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}