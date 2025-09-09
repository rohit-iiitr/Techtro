"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function HeroSection() {
  const links = [
    {
      name: "Facebook",
      icon: <Facebook size={8} />,
      url: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: <Instagram size={8} />,
      url: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={8} />,
      url: "https://linkedin.com",
    },
    { name: "Twitter", icon: <Twitter size={8} />, url: "https://twitter.com" },
    { name: "YouTube", icon: <Youtube size={8} />, url: "https://youtube.com" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#181A1D]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/hugo-juteau-xh_l2eGV4B4-unsplash.jpg"
          alt="Modern office building"
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>

      {/* Side Social links */}

      <div className="absolute right-3 top-1/5 flex flex-col items-center text-gray-400 space-y-8">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            // target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-colors duration-300 group"
          >
            {/* Line above except first item */}
            {i !== 0 && (
              <span className="h-2 w-px bg-gray-600 transition-colors duration-300 group-hover:bg-yellow-400"></span>
            )}

            {/* Icon inside circle */}
            <div className="p-2 mb-2 rounded-full bg-gray-800 transition-colors duration-300 group-hover:bg-yellow-400">
              {/* Force icon color change for visibility */}
              <span className="text-white group-hover:text-black">
                {link.icon}
              </span>
            </div>

            {/* Name rotated */}
            <span className="mt-3 text-xs rotate-[90deg] transition-colors duration-300 group-hover:text-yellow-400 pointer-events-none">
              {link.name}
            </span>
          </a>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 mt-10 ms-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl text-white"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2 text-xs tracking-wider text-neutral-200 shadow-md">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <p>BEST OF YOUR GROWTH, OUR MISSION</p>
              <Sparkles className="h-4 w-6 text-blue-500" />
            </div>
            <br />
            <span className="text-white leading-tight font-bold">
              We are Provide Digital Marketing
            </span>
            <br />
            <span className="text-yellow-400 font-bold">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-md text-white/90 max-w-lg"
          >
            Choose Techtro as your digital marketing agency take your buisness
            to new heights technology platform
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-gray-800 text-violet-400 shadow-md hover:bg-gray-200">
              <i className="bx bx-up-arrow-alt bx-rotate-45 text-xl"></i>
              <span className="text-xs font-small">Explore Service</span>
            </button>

            <button className="text-white mt-4 mx-3">
              <div className="flex flex-col">
                <span className="user-rating text-xs text-gray-500 leading-none">
                  (2k) Positive user rating
                </span>
                <div className="flex items-center space-x-2 -mt-1">
                  <img
                    src="/images/google.png"
                    className="w-10 h-10"
                    alt="Google"
                  />
                  <p className="stars text-yellow-400 m-0 leading-none">
                    ★★★★☆
                  </p>
                </div>
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE (Images Section) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center mt-4"
        >
          <div className="relative w-full max-w-sm">
            {/* Image 1 */}
            <img
              src="/ai-automation-in-business-office-setting.jpg"
              alt="Team Meeting"
              className="rounded-2xl shadow-lg"
            />

            {/* Floating Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-10 -right-10 bg-white text-black rounded-xl p-4 shadow-xl w-40"
            >
              <p className="text-sm text-gray-500">Market Value</p>
              <h4 className="font-bold">$23,530.00</h4>
              <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                81%
              </span>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 -left-10 bg-white text-black rounded-xl p-4 shadow-xl w-36"
            >
              <h4 className="font-bold">85%</h4>
              <p className="text-sm text-gray-500">Sales Growth</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
