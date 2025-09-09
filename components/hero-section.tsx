"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { Heart, ThumbsUp, Play } from "lucide-react";
import ImageCuts from "@/components/ImageCuts";



export function HeroSection() {
  const images = [
    {
      src: "/ai-automation-in-business-office-setting.jpg",
      alt: "Team Meeting",
      type: "rounded",
      percentage: 81,
      label: "Market value $23,53.00",
    },
    {
      src: "/analytics-dashboard.png",
      alt: "Sales Chart",
      type: "rect",
      percentage: 85,
      overlayIcon: <ThumbsUp className="text-blue-500" />,
      label: "Sales Growth",
    },
    {
      src: "/cloud-computing-servers-and-data-migration.jpg",
      alt: "Clients",
      type: "circle",
      badge: "3k+",
      overlayIcon: <Heart className="text-pink-500" />,
    },
    {
      src: "/cloud-infrastructure-diagram-with-servers-and-conn.jpg",
      alt: "Video",
      type: "circle",
      overlayIcon: <Play className="text-white" />,
    },
  ];

  const links = [
    {
      name: "Facebook",
      icon: <Facebook size={12} />,
      url: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: <Instagram size={12} />,
      url: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={12} />,
      url: "https://linkedin.com",
    },
    {
      name: "Twitter",
      icon: <Twitter size={12} />,
      url: "https://twitter.com",
    },
    {
      name: "YouTube",
      icon: <Youtube size={12} />,
      url: "https://youtube.com",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#181A1D]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hugo-juteau-xh_l2eGV4B4-unsplash.jpg"
          alt="Modern office building"
          fill
          priority
          className="object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Side Social links */}
      <div className="absolute right-3 top-1/5 flex flex-col items-center text-gray-400 space-y-8">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-colors duration-300 group"
          >
            {i !== 0 && (
              <span className="h-2 w-px bg-gray-600 group-hover:bg-yellow-400 transition-colors" />
            )}
            <div className="p-2 mb-2 rounded-full bg-gray-800 group-hover:bg-yellow-400 transition-colors">
              <span className="text-white group-hover:text-black">
                {link.icon}
              </span>
            </div>
            <span className="mt-3 text-xs rotate-90 group-hover:text-yellow-400 transition-colors pointer-events-none">
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
          className="space-y-6 mt-10"
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
              <Sparkles className="h-4 w-4 text-blue-500" />
            </div>
            <br />
            <span className="text-white leading-tight font-bold">
              We Provide Digital Marketing
            </span>
            <br />
            <span className="text-yellow-400 font-bold">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm text-white/90 max-w-lg"
          >
            Choose Techtro as your digital marketing agency and take your
            business to new heights with technology-driven solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-gray-800 text-violet-400 hover:bg-gray-200 transition">
              <i className="bx bx-up-arrow-alt bx-rotate-45 text-xl" />
              <span className="text-xs">Explore Service</span>
            </button>

            <div className="text-white mt-4 mx-3">
              <span className="text-xs text-gray-500">
                (2k) Positive user rating
              </span>
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/google.png"
                  width={40}
                  height={40}
                  alt="Google"
                />
                <p className="text-yellow-400">★★★★☆</p>
              </div>
            </div>
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
            <Image
              src="/ai-automation-in-business-office-setting.jpg"
              alt="Team Meeting"
              width={400}
              height={500}
              className="rounded-2xl shadow-lg"
            />

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
