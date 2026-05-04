import React, { useEffect } from "react";
import { SuccessStory } from "../components/ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Realstories = () => {
  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-[80vw] bg-amber-300 text-white p-10 mb-10">
        <div>
          <h1
            className="font-bold text-amber-900 mb-4"
            data-aos="flip-up"
            data-aos-duration="300"
          >
            Families Love Us
          </h1>
          <h1
            className="text-5xl font-serif font-bold text-shadow-2xs"
            data-aos="fade-down"
          >
            Real Stories, Real <span className="text-amber-900">Impact</span>
          </h1>
        </div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-4   ">
          <SuccessStory
            data-aos-duration="100"
            data-aos-delay="100"
            successDescription="JibFamily transformed how we manage our home. Everything from finding a great tutor to booking a plumber is now seamless and stress-free"
            className="bg-white"
            successName="Sarah M."
            adress="Mother of 3 · New York"
          />

          <SuccessStory
            data-aos-duration="200"
            data-aos-delay="200"
            successDescription="The community events feature brought our neighborhood together in ways I never imagined. Our kids now have lifelong friends."
            className="bg-black"
            successName="James T."
            adress="Father of 2 · Chicago"
          />

          <SuccessStory
            data-aos-duration="300"
            data-aos-delay="300"
            successDescription="The community events As a single parent, I was overwhelmed. JibFamily gave me a support system I didn't know I needed. It feels like a village. brought our neighborhood together in ways I never imagined. Our kids now have lifelong friends."
            className="bg-sky-50"
            successName="Priya K."
            adress="Single Parent · Austin"
          />
        </div>
      </div>
    </div>
  );
};

export default Realstories;
