"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react"; // blue check icon

const messages = [
  "Transforming Vision into Digital Reality",
  "Your Digital Success Starts Here",
  "Fueling Your Brand's Digital Evolution",
  "Driving Growth in the Digital Age",
  "Your Digital Success Starts Here",
];

const ScrollingBanner = () => {
  return (
    <div className="bg-purple-100 mt-5 py-3 overflow-hidden">
      <motion.div
        className="flex gap-8 text-gray-900 font-medium whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20, // speed (higher = slower scroll)
          ease: "linear",
        }}
      >
        {[...messages, ...messages].map((text, index) => (
          <div key={index} className="flex items-center gap-2">
            {/* <CheckCheck  /> */}
            <BadgeCheck className="text-blue-600 w-5 h-5"/>
            <span>{text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingBanner;
