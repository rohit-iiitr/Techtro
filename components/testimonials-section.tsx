"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

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
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 sec interval

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="flex flex-col items-start mx-5 px-5 mb-10">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-lg">✦</span>
            <h2 className="text-2xl font-bold">EXPLORE OUR PROJECT</h2>
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
        <div className="relative flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className={`rounded-2xl bg-white p-6 shadow-md transition-all duration-500 ${
                  index === current
                    ? "opacity-100 scale-100"
                    : "opacity-30 scale-95"
                }`}
              >
                <div className="flex justify-start items-center mb-4">
                  <span className="font-bold text-xl">VOIO</span>
                  <span className="ml-1 text-sm text-gray-700 font-semibold">
                    DIGITAL AGENCY
                  </span>
                </div>
                <p className="text-gray-600 text-left mb-6">{t.feedback}</p>
                <div className="flex items-center gap-3">
                  <img
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
