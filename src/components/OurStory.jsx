import React, { useEffect } from "react";
import { Star, MoonStar } from "lucide-react";
import ServiceCard, { FloatingCard } from "./ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css"

function OurStory() {
   useEffect(() => {
    AOS.init(); // { once: true } once: true for one-time animation
    AOS.refresh(); // ensures dynamically rendered elements are registered
  }, []);

  return (
    <div className="flex justify-center mb-20 ">
      <div className="grid lg:grid-cols-2 w-[80vw]  sm:grid-cols-1 justify-items-between gap-x-20">
        <div className="bg-amber-600  rounded-2xl w-full h-100 flex justify-center items-center relative">
          <span className="text-8xl ">🏡</span>
          <FloatingCard     
          icons={<MoonStar />}
            rating="4.9 / 5 Rating"
            ratingdescription="from 8,200+ reviews"
            className='-top-5 -right-5 '
          />

          <FloatingCard 
            icons={<Star />}
            rating="Best Family App 2024"
            ratingdescription="Family Choice Awards" className="top-5 right-5"
            className='-left-5 -bottom-5 '
          />
          
        </div>
        <div className="space-x-2 mt-20 lg:mt-0 " data-aos='fade-up' data-aos-duration="300">
          <h1 className="font-bold text-amber-300   ">- Our Story</h1>
          <h1 className="text-6xl font-serif font-bold">We Believe Every Family Deserves More</h1>
          <p className="spaxe-x-4 mt-4 mb-4">JibFamily was born from a simple truth: families are the heart of society, yet they rarely have a dedicated space to find everything they need.</p>
          <ul className="list-disc list-inside space-y-2 pl-4 ">
            <li data-aos='fade-up' data-aos-duration="300" data-aos-delay='0' style={{ textIndent: '-1.3em' }}>We connect families with trusted local services and providers they can rely on.</li>
            <li data-aos='fade-up' data-aos-duration="500" data-aos-delay='100' style={{ textIndent: '-1.3em' }}>Our platform is built with privacy, safety, and warmth at its core.</li>
            <li data-aos='fade-up' data-aos-duration="700" data-aos-delay='200' style={{ textIndent: '-1.3em' }}>We celebrate diversity — every family structure is welcomed and supported.</li>
            <li data-aos='fade-up' data-aos-duration="900" data-aos-delay='300' style={{ textIndent: '-1.3em' }}>We grow with you, offering tools and community for every life stage.</li>
          </ul>
          <button className="rounded-2xl bg-amber-300 font-bold shadow-2xl p-4 text-white mt-4">Meet the Team</button>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
