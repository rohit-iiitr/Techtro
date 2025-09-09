"use client";

import { FC } from "react";
import { ArrowRight, MoveUpRight } from "lucide-react";

const ContactBanner: FC = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] rounded-tl-[100px] rounded-tr-none rounded-br-[100px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/cybersecurity-shield-and-digital-protection.jpg')", // replace with your image path
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Circle Button */}
        <button className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-yellow-400 text-black  shadow-lg hover:scale-105 transition">
          <MoveUpRight className="mb-0" />
          <span>Contact</span><span>Now</span>
        </button>

        {/* Text */}
        <h2 className="mt-6 text-2xl md:text-3xl font-bold">
          Let's Talk! Connect with Our <br /> Team Today.
        </h2>
      </div>
    </section>
  );
};

export default ContactBanner;
