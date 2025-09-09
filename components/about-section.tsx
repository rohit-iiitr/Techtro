"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb, Image } from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      value: "100%",
      label: "Yearly Growth",
      bg: "bg-green-100",
      text: "text-green-800",
      iconBg: "bg-green-200",
    },
    {
      value: "100%",
      label: "Business Growth",
      bg: "bg-purple-100",
      text: "text-purple-800",
      iconBg: "bg-purple-200",
    },
    {
      value: "$2M",
      label: "Revenue Growth",
      bg: "bg-blue-100",
      text: "text-blue-800",
      iconBg: "bg-blue-200",
    },
  ];

  return (
    <section id="about" className="relative pt-20 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex justify-items-start mb-16"
        >
          <div className="flex flex-col items-start mx-5 px-5">
            <div className="flex items-center gap-2 ">
              <span className="text-yellow-500 text-lg">✦</span>
              <h2 className="text-2xl font-bold">ABOUT OUR COMPANY</h2>
            </div>
            <br />
            <p className="text-sm text-muted-foreground max-w-3xl mx-5">
              Legacy the way since 2016, our marketing agency has been helping
              our clients
              <br /> achieve amazing results.
            </p>
          </div>
        </motion.div>
        <div className="max-w-6xl relative mb-20 -mx-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/respect-people.png"
              alt="Team working together"
              className="rounded-3xl shadow-md h-[400px] w-[700px] object-cover -mx-4"
            />
          </motion.div>

          {/* Overlapping Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute bottom-[-40px] right-[-35px] bg-white p-8 rounded-tl-4xl rounded-tr-none rounded-bl-none rounded-br-4xl shadow-xl max-w-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4">
              A Legacy of Excellence in Digital Marketing Solution
            </h3>
            <p className="text-gray-600 mb-6">
              We specialize in digital marketing, combining technical excellence
              with strategic creativity to deliver tailored marketing strategies
              to help your business stand head and shoulders above the rest.
              We’ve supported businesses. We specialize in digital marketing,
              combining technical excellence with strategic.
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
                  <img
                    src="/images/google.png"
                    className="w-14 h-12"
                    alt="Google"
                  />
                  <p className="stars text-yellow-400 m-0 leading-none">
                    ★★★★☆
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <stat.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div> */}
        <div className="grid grid-cols-3 gap-0 mx-7 px-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${stat.bg} rounded-tl-3xl rounded-tr-none rounded-bl-none rounded-br-3xl shadow-xl py-8 px-1 mx-7 text-center `}
            >
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <p className="flex items-start text-gray-600 mt-8 mb-8 ms-[75px]">
          We are a digital marketing agency working Since working with{" "}
          <span className="text-yellow-500 font-medium">Techtro...</span>
        </p>
      </div>
      <div className="bg-gray-100 ">
        {/* First Badge */}
        <div className="pt-[50px] mx-[200px]">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs tracking-wider text-black shadow-md">
          <Sparkles className="h-4 w-4 text-blue-500" />
          <p>Discovered Why 27,000+ Companies Trust Us</p>
          <Sparkles className="h-4 w-6 text-blue-500" />
        </div>
        </div>

        {/* Logos in one line */}
        <div className="flex items-center gap-8 mx-[200px] mt-2 w-full">
          <img src="/images/Hyundai.png" className="w-[150px]" />
          <img src="/images/appcode.png" className="w-[150px]" />
          <img src="/images/azona.png" className="w-[150px]" />
          <img src="/images/agency.png" className="w-[150px]" />
          <img src="/images/volo-bg.png" className="w-[150px]" />
        </div>
      </div>
    </section>
  );
}
