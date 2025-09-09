"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollingBanner from "./scrolling-bar";

const HowWeDo = () => {
  return (
    <section className="relative bg-gray-100 pt-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex flex-col items-start mx-5 px-5 ">
          <div className="flex items-center gap-2 ">
            <span className="text-yellow-500 text-lg">✦</span>
            <h2 className="text-2xl font-bold">HOW WE DO</h2>
          </div>
          <br />
          <p className="text-sm text-muted-foreground max-w-3xl mx-5">
            At our digital marketing agency, we pride ourselves on our
            systematic approach to
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-5">
            achieving your buisness objectives.
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="mt-4 grid grid-cols-2 gap-4 items-center mb-5">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="ms-6 me-6"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 ms-5 me-5">
            Why Our Solutions Fit Your Needs.
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed ms-5 me-5">
            Our solutions are tailored to address the specific challenges and
            goals of your business, ensuring that we deliver maximum value and
            impact. With a deep understanding of your industry, target audience.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md shadow-md transition flex items-center gap-2 ms-5">
            Let’s get planning →
          </button>
        </motion.div>

        {/* Right Side Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          
          className="w-[500px] rounded-tl-4xl rounded-tr-none rounded-bl-none rounded-br-4xl overflow-hidden shadow-lg transition-shadow bg-white"
        >
          <div className="flex flex-col w-[500px] ">

            <img
              src="/cloud-computing-servers-and-data-migration.jpg"
              alt="Marketing Planning"
              className="w-full h-[400px] object-cover p-3 rounded-tl-4xl rounded-tr-none rounded-bl-none rounded-br-4xl"
            />
            
              <h4 className="text-lg font-semibold px-4 flex items-start">
                Strategic Planning & Goal Setting
              </h4>
              <p className="text-gray-600 text-sm sm:text-base p-4">
                We begin by understanding your business objectives and target
                audience to develop a comprehensive digital marketing strategy
                aligned with your goals.
              </p>
           
          </div>
        </motion.div>
      </div>
      <div className="w-full mt-5 pt-5 scale-110 mb-0 overflow-hidden">
        <ScrollingBanner/>
      </div>
      
    </section>
  );
};

export default HowWeDo;
