"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollingBanner from "./scrolling-bar";
import { Button } from "./ui/button";

const HowWeDo = () => {
  return (
    <section className="relative bg-gray-100 pt-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 mx-5"
      >
        <div className="flex flex-col items-start px-5">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-lg">✦</span>
            <h2 className="text-2xl font-bold">HOW WE DO</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl mt-4 ms-6">
            At our digital marketing agency, we pride ourselves on our
            systematic approach to achieving your business objectives.
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-8 items-center mb-5">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="md:pl-6 mx-12"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-7">
            Why Our Solutions Fit Your Needs.
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our solutions are tailored to address the specific challenges and
            goals of your business, ensuring that we deliver maximum value and
            impact. With a deep understanding of your industry and target
            audience.
          </p>
          <Button className="bg-white text-black px-4 py-2 rounded-tl-lg rounded-br-lg flex items-center border-2 border-black hover:bg-yellow-400 rounded-tr-none rounded-bl-none">
            Let’s get planning →
          </Button>
        </motion.div>

        {/* Right Side Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full max-w-md rounded-tl-4xl rounded-br-4xl overflow-hidden shadow-lg bg-white"
        >
          <div className="flex flex-col">
            <Image
              src="/cloud-computing-servers-and-data-migration.jpg"
              alt="Marketing Planning"
              width={500}
              height={400}
              className="w-full h-[300px] object-cover p-3 rounded-tl-4xl rounded-br-4xl"
            />
            <h4 className="text-lg font-semibold px-4 mt-2">
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

      {/* Scrolling Banner */}
      <div className="w-full mt-10 scale-110 overflow-hidden">
        <ScrollingBanner />
      </div>
    </section>
  );
};

export default HowWeDo;
