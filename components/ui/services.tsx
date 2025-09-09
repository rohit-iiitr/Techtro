// Services.tsx
import React from "react";
import ServiceCard from "../services-section";

const services = [
  {
    number: "01",
    title: "Search Engine Optimization",
    items: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Creation & Optimization",
      "Link Building",
    ],
    active: true,
  },
  {
    number: "02",
    title: "Content Marketing",
    items: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Creation & Optimization",
      "Link Building",
    ],
  },
  {
    number: "03",
    title: "Influencer Marketing",
    items: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Creation & Optimization",
      "Link Building",
    ],
  },
  {
    number: "04",
    title: "Social Media Management",
    items: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Creation & Optimization",
      "Link Building",
    ],
  },
  {
    number: "05",
    title: "Web Design & Development",
    items: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Creation & Optimization",
      "Link Building",
    ],
  },
  {
    number: "06",
    title: "SEO Optimization",
    items: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Creation & Optimization",
      "Link Building",
    ],
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-[#0b0b0b] min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
