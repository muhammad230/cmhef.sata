import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(22, 17, 17, 0.45), rgba(0, 0, 0, 0.45)), url("/images/imagebg.jpeg")',
        minHeight: "520px",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-10 flex flex-col justify-center"
        style={{ minHeight: "520px" }}
      >
        {/* Heading */}
        <h1
          className="text-5xl font-bold mb-4 max-w-xl leading-tight"
          style={{ fontFamily: "'Segoe UI', Arial, sans-serif", fontWeight: "700" }}
        >
          Chief Minister Health Endowment Fund, Gilgit-Baltistan
        </h1>

        {/* Subtitle */}
        <p
          className="text-base mb-10 text-gray-200"
          style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}
        >
          CMHEF – Empowering Lives, Inspiring Futures
        </p>

        {/* Button */}
        <button className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 font-bold transition-all duration-200 flex items-center gap-2 w-fit tracking-wide">
          REGISTER NOW
          <FaArrowRight size={14} />
        </button>
      </div>
    </section>
  );
};

export default Hero;