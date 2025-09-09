"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies and best practices for optimal performance and user experience.",
      features: ["React & Next.js", "Full-stack Solutions", "API Integration"],
    },
    {
      number: "02",
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "React Native", "Flutter"],
    },
    {
      number: "03",
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.",
      features: ["AWS & Azure", "DevOps", "Microservices"],
    },
    {
      number: "04",
      title: "Data Analytics",
      description:
        "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: [
        "Business Intelligence",
        "Machine Learning",
        "Data Visualization",
      ],
    },
    {
      number: "05",
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Compliance", "Risk Assessment"],
    },
    {
      number: "06",
      title: "Digital Transformation",
      description:
        "End-to-end digital transformation services to modernize your business processes and drive growth.",
      features: [
        "Process Automation",
        "Legacy Modernization",
        "Change Management",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-start mx-5 px-5">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">✦</span>
              <h2 className="text-3xl text-white font-bold">
                INNOVATION SOLUTIONS
              </h2>
            </div>
            <br />
            <div className="flex items-start gap-40">
              <p className="text-sm text-white/80 ms-5 mt-2">
                Our comprehensive suite of digital marketing services is
                designed to elevate your brand's visibility.
              </p>

              <Button className="bg-white text-black px-4 py-2 rounded-tl-lg rounded-tr-none rounded-bl-none rounded-br-lg flex items-center font-semibold hover:bg-yellow-400">
                View all services
                <ArrowRight className="ml-2 h-4 w-4 text-black" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative h-full bg-black/20 border border-white/10 text-white rounded-tl-4xl rounded-tr-none rounded-bl-none rounded-br-4xl overflow-hidden group transition-all duration-500">
                {/* Radial glow inside card (only on hover) */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
                                bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.25)_0%,transparent_60%)] filter blur-2xl"
                ></div>

                <CardHeader className="relative z-10 top-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors text-white font-bold">
                    {service.number}
                  </div>

                  <CardTitle className="text-xl font-bold group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-white/80 group-hover:text-yellow-300 leading-relaxed transition-colors">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 flex flex-col justify-between h-full">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-white/70 group-hover:text-white"
                      >
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-end mt-4">
                    <ArrowRight className="text-white h-5 w-5 group-hover:text-yellow-300 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
