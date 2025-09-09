"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Lightbulb, Code2, Rocket, CheckCircle } from "lucide-react";

export function MethodologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Search,
      title: "Discovery & Research",
      description:
        "We start by understanding your business goals, target audience, and technical requirements through comprehensive research and analysis.",
      color: "bg-violet-400",
    },
    {
      icon: Lightbulb,
      title: "Strategy Development",
      description:
        "Our team develops a detailed project roadmap with clear milestones, timelines, and deliverables tailored to your specific needs.",
      color: "bg-blue-300",
    },
    {
      icon: Code2,
      title: "Design & Development",
      description:
        "We create intuitive designs and develop robust solutions using cutting-edge technologies and industry best practices.",
      color: "bg-lime-400",
    },
    {
      icon: Rocket,
      title: "Launching & QA",
      description:
        "Rigorous testing ensures quality and performance before we launch your solution and provide comprehensive support.",
      color: "bg-orange-400 ",
    },
  ];

  return (
    <section id="methodology" className="pt-20 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-[60%] bg-purple-100" />
      <div className="absolute top-[60%] left-0 w-full h-[40%] bg-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-bold">
            <span className="text-yellow-500 text-lg px-2">✦</span>
            OUR METHODLOGY
          </h2>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto text-pretty">
            Experience Excellence Techtro your leading digital solutions
            provider. We are a leading
            <br /> digital agency.
          </p>
          <div className="flex items-center justify-center mt-5">
      <div className="bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center w-32 h-32 shadow-md">
        <span className="text-center text-sm leading-tight">
          TECHTRO <br /> APPROACH
        </span>
      </div>
    </div>
        </motion.div>

        <div className="relative">
         
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10 ms-[110px]">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-${step.color} flex items-center justify-center`}
              >
                <Card
                  className={`h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group ${step.color} ms-[50px] rounded-tl-4xl rounded-tr-none rounded-bl-none rounded-br-4xl`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-10 h-8 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-lg font-bold text-foreground mb-2 text-center">
                      {step.title}
                    </div>
                    
                  </CardContent>
                </Card>

              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-16">
        {/* Image Card */}
        <div className="flex justify-center">
          <div className="relative rounded-3xl overflow-hidden shadow-lg w-full md:w-3/4">
            <img
              src="/ai-automation-in-business-office-setting.jpg" // replace with your image path
              alt="Team working"
              width={1200}
              height={600}
              className="w-full h-[500px] object-cover"
            />
            {/* Play button overlay */}
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white/80 rounded-full px-3 py-4 font-semibold text-black shadow-md">
                PLAY
              </span>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="bg-purple-100 p-6 rounded-2xl text-center shadow-sm">
            <h2 className="text-2xl font-bold">1k</h2>
            <p className="text-gray-600">Award</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-2xl text-center shadow-sm">
            <h2 className="text-2xl font-bold">7+</h2>
            <p className="text-gray-600">Year of experience</p>
          </div>
          <div className="bg-green-100 p-6 rounded-2xl text-center shadow-sm">
            <h2 className="text-2xl font-bold">780+</h2>
            <p className="text-gray-600">Project done</p>
          </div>
          <div className="bg-red-100 p-6 rounded-2xl text-center shadow-sm">
            <h2 className="text-2xl font-bold">670+</h2>
            <p className="text-gray-600">Happy Client</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
