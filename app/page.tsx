"use client";
import '@/app/globals.css'
import About from "./components/About";
import Trainer from "./components/Trainer";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="pt-24 text-center">
        <Hero />
        <About />
        <Trainer />
        <Testimonial />
        <Footer />
  </div>
    );
};
export default HomePage;
