"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  feedback: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kristin Watson",
    role: "Senior Director",
    image: "/professional-woman-founder-headshot.jpg",
    feedback:
      "It’s a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently. It’s a pleasure working.",
  },
  {
    id: 2,
    name: "Devon Lane",
    role: "Senior Director",
    image: "/professional-man-vp-headshot.jpg",
    feedback:
      "It’s a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently. It’s a pleasure working.",
  },
  {
    id: 3,
    name: "Kristin Watson",
    role: "Senior Director",
    image: "/professional-woman-founder-headshot.jpg",
    feedback:
      "It’s a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently. It’s a pleasure working.",
  },
  {
    id: 4,
    name: "Devon Lane",
    role: "Senior Director",
    image: "/professional-man-vp-headshot.jpg",
    feedback:
      "It’s a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently. It’s a pleasure working.",
  },
  {
    id: 5,
    name: "Kristin Watson",
    role: "Senior Director",
    image: "/professional-woman-founder-headshot.jpg",
    feedback:
      "It’s a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently. It’s a pleasure working.",
  },
  {
    id: 6,
    name: "Devon Lane",
    role: "Senior Director",
    image: "/professional-man-vp-headshot.jpg",
    feedback:
      "It’s a pleasure working with Bunker. They understood our new brand positioning guidelines and translated them beautifully and consistently. It’s a pleasure working.",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-lg">✦</span>
            <h2 className="text-2xl font-bold">FEEDBACK OUR CLIENTS</h2>
          </div>

          <div className="flex flex-wrap items-center justify-between w-full gap-4 mt-3">
            <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
              At our digital marketing agency, we pride ourselves on our
              systematic approach to achieving your business objectives.
            </p>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={prevSlide}
                className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-yellow-400 shadow-md rounded-full p-2 hover:bg-yellow-500"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative w-full">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="min-w-[400px] max-w-[320px] flex-shrink-0 rounded-2xl bg-white p-6 shadow-md"
              >
                <div className="flex justify-start items-center mb-4">
                  <span className="font-bold text-xl">VOIO</span>
                  <span className="ml-1 text-sm text-gray-700 font-semibold">
                    DIGITAL AGENCY
                  </span>
                </div>
                <p className="text-gray-600 text-left mb-6">{t.feedback}</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
