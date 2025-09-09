"use client";

import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactBanner = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/cybersecurity-shield-and-digital-protection.jpg"
        alt="Cybersecurity Shield and Digital Protection"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Circle Button */}
        <Button
          className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-yellow-400 text-black shadow-lg hover:scale-105 transition leading-tight gap-0"
        >
          <MoveUpRight />
          <span>Contact</span>
          <span>Now</span>
        </Button>

        {/* Text */}
        <h2 className="mt-6 text-2xl md:text-3xl font-bold">
          Let's Talk! Connect with Our <br /> Team Today.
        </h2>
      </div>
    </section>
  );
};

export default ContactBanner;
