"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "A comprehensive e-commerce solution with advanced analytics, inventory management, and seamless payment integration.",
      image: "/modern-e-commerce-website-interface-with-shopping-.jpg",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description:
        "A patient management system with appointment scheduling, telemedicine capabilities, and secure health record storage.",
      image: "/healthcare-mobile-app-interface-with-appointment-b.jpg",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    },
    {
      title: "AI Analytics Dashboard",
      category: "Data Analytics",
      description:
        "An intelligent dashboard providing real-time insights and predictive analytics for business decision making.",
      image: "/analytics-dashboard.png",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
    },
  ];

  const projects2 = [
    {
      title: "Financial Trading Platform",
      category: "Fintech",
      description:
        "A secure trading platform with real-time market data, advanced charting, and automated trading capabilities.",
      image: "/financial-trading-platform-with-charts-and-market-.jpg",
      technologies: ["React", "WebSocket", "Redis", "PostgreSQL"],
    },
    {
      title: "IoT Monitoring System",
      category: "IoT Solutions",
      description:
        "An IoT platform for monitoring industrial equipment with predictive maintenance and alert systems.",
      image: "/iot-monitoring-dashboard-with-sensor-data-and-aler.jpg",
      technologies: ["Node.js", "MQTT", "InfluxDB", "Grafana"],
    },
  ];

  // Reusable Project Card
  const ProjectCard = ({ project, delay = 0 }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="relative group w-full h-[300px] rounded-tl-4xl rounded-br-4xl overflow-hidden shadow-lg"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[2px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4"
      >
        <h3 className="text-white text-xl font-bold drop-shadow-lg">
          {project.title}
        </h3>
        <p className="text-sm text-yellow-400 font-medium">
          {project.category}
        </p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {project.technologies.slice(0, 3).map((tech: string, idx: number) => (
            <span
              key={idx}
              className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold shadow-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="relative py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">✦</span>
              <h2 className="text-2xl font-bold">EXPLORE OUR PROJECT</h2>
            </div>
            <div className="flex items-start mx-6 justify-between mt-4 gap-10">
              <p className="text-sm text-muted-foreground max-w-3xl">
                At our digital marketing agency, we pride ourselves on our
                systematic approach to achieving your business objectives.
              </p>
              <Button className="bg-white text-black px-4 py-2 rounded-tl-lg rounded-br-lg flex items-center border-2 border-black hover:bg-yellow-400 rounded-tr-none rounded-bl-none">
                See more work
                <ArrowRight className="ml-2 h-4 w-4 text-black" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} delay={i * 0.1} />
          ))}
        </div>

        {/* Projects Grid 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 mt-8">
          {projects2.map((project, i) => (
            <ProjectCard key={i} project={project} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
