"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image"; // ✅ Next.js Image

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      value: "100%",
      label: "Yearly Growth",
      bg: "bg-green-100",
    },
    {
      value: "100%",
      label: "Business Growth",
      bg: "bg-purple-100",
    },
    {
      value: "$2M",
      label: "Revenue Growth",
      bg: "bg-blue-100",
    },
  ];

  return (
    <section id="about" className="relative pt-20 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">✦</span>
              <h2 className="text-2xl font-bold">ABOUT OUR COMPANY</h2>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-3xl">
              Legacy the way since 2016, our marketing agency has been helping
              our clients achieve amazing results.
            </p>
          </div>
        </motion.div>

        {/* Main Image + Content */}
        <div className="max-w-6xl relative mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/respect-people.png"
              alt="Team working together"
              width={700}
              height={400}
              className="rounded-3xl shadow-md object-cover"
            />
          </motion.div>

          {/* Overlapping Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-[-40px] right-[-35px] bg-white p-8 rounded-tl-4xl rounded-br-4xl shadow-xl max-w-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              A Legacy of Excellence in Digital Marketing Solution
            </h3>
            <p className="text-gray-600 mb-6">
              We specialize in digital marketing, combining technical excellence
              with strategic creativity to deliver tailored marketing strategies
              to help your business stand head and shoulders above the rest.
              We’ve supported businesses with digital excellence and creativity.
            </p>
            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-3 rounded-lg font-medium flex items-center gap-2 transition"
              >
                About More <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Rating */}
              <div className="flex flex-col text-sm text-gray-600">
                <span>(2k) Positive user rating</span>
                <div className="flex items-center space-x-2 -mt-1">
                  <Image
                    src="/images/google.png"
                    alt="Google"
                    width={56}
                    height={48}
                  />
                  <p className="text-yellow-400 m-0 leading-none">★★★★☆</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 px-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${stat.bg} rounded-tl-3xl rounded-br-3xl shadow-xl py-8 text-center`}
            >
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-8 mb-8 px-8">
          We are a digital marketing agency working since{" "}
          <span className="text-yellow-500 font-medium">Techtro...</span>
        </p>
      </div>

      {/* Badges + Logos */}
      <div className="bg-gray-100 py-12">
        {/* First Badge */}
        <div className="flex justify-start md:justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs tracking-wider text-black shadow-md">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <p>Discovered Why 27,000+ Companies Trust Us</p>
            <Sparkles className="h-4 w-4 text-blue-500" />
          </div>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image
            src="/images/Hyundai.png"
            alt="Hyundai"
            width={150}
            height={60}
          />
          <Image
            src="/images/appcode.png"
            alt="Appcode"
            width={150}
            height={60}
          />
          <Image src="/images/azona.png" alt="Azona" width={150} height={60} />
          <Image
            src="/images/agency.png"
            alt="Agency"
            width={150}
            height={60}
          />
          <Image src="/images/volo-bg.png" alt="Volo" width={150} height={60} />
        </div>
      </div>
    </section>
  );
}
