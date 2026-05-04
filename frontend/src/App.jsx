import React from "react";
import Navbar from "./components/Navbar";
import Showcase from "./pages/Showcase";
import Marquee from "./pages/Marquee";
import Services from "./pages/Services";
import OurStory from "./pages/OurStory";
import Realstories from "./pages/Realstories";
import Touch from "./pages/Touch";
import Subscribe from "./pages/Subscribe";
import Footer from "./components/Footer";
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/authentication/Login";
import Sinup from "./pages/authentication/Sinup";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<RootLayout />}>
        
        {/* Home page */}
        <Route
          index
          element={
            <>
              <div id="home"><Showcase /></div>
              <Marquee />
              <div id="about"><OurStory /></div>
              <Realstories />
              <div id="contact"><Touch /></div>
              <Subscribe />
              
            </>
          }
        />

        {/* Service page */}
        <Route path="services" element={<Services />} />
      </Route>

        {/* AUTH PAGES (NO NAVBAR/FOOTER) */}
      <Route element={<AuthLayout />}>
        <Route path="sinup" element={<Sinup />} />
        <Route path="login" element={<Login />} />
      </Route>
    </>
    )
  );
  return (
     <RouterProvider router={router}/>
  );
}

export default App;
