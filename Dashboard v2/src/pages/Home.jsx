import React, { useEffect } from "react";
import { Navbar } from "../components/home/Navbar";
import { Hero } from "../components/home/Hero";
import { Content } from "../components/home/Content";
import { Footer } from "../components/home/Footer";

export const Home = () => {
  useEffect(() => {
    document.title = "Beranda | Pusat Mutu Kinerja";
  }, []);

  return (
    <div className="bg-[#F1F4F5] font-['Poppins'] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};
