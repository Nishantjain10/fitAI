"use client";
import "@/app/globals.css";
import About from "./components/About";
import Trainer from "./components/Trainer";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const HomePage = () => {
  return (
    <div className="text-center  max-sm:overflow-hidden">
      <Hero />
      <About />
      <Trainer />
      <Testimonial />
      <Footer />
    </div>
  );
};
export default HomePage;
