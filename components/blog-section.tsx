"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogPosts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt:
        "Explore how artificial intelligence is revolutionizing business processes and what it means for the future of work.",
      author: "John Smith",
      date: "March 15, 2024",
      category: "Artificial Intelligence",
      image: "/ai-automation-in-business-office-setting.jpg",
      readTime: "5 min read",
    },
    {
      title: "Cloud Migration Practices for 2024",
      excerpt:
        "A comprehensive guide to successfully migrating your infrastructure to the cloud with minimal downtime and maximum efficiency.",
      author: "Sarah Wilson",
      date: "March 12, 2024",
      category: "Cloud Computing",
      image: "/cloud-computing-servers-and-data-migration.jpg",
      readTime: "8 min read",
    },
    {
      title: "Cybersecurity Trends Every Business Should Know",
      excerpt:
        "Stay ahead of cyber threats with these emerging security trends and best practices for protecting your digital assets.",
      author: "Mike Johnson",
      date: "March 10, 2024",
      category: "Cybersecurity",
      image: "/cybersecurity-shield-and-digital-protection.jpg",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
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
              <h2 className="text-2xl font-bold">OUR BLOG & NEWS</h2>
            </div>
            <p className="text-sm text-muted-foreground mt-4 max-w-3xl">
              Experience Excellence Techtro your leading digital solutions
              provider. We are a leading digital agency.
            </p>
          </div>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white overflow-hidden hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 group cursor-pointer rounded-tl-none rounded-tr-4xl rounded-bl-4xl rounded-br-none">
                {/* Image with Category */}
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <CardContent className="-mt-2">
                  {/* Author & Date */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </div>

                  {/* Title + Arrow Button */}
                  <div className="w-full -ms-5 ">
                    <CardHeader className="">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-yellow-400 transition-colors">
                        {post.title}
                      </h3>
                    </CardHeader>
                    </div>
                    <div className="flex justify-end mb-4">
                    <Button
                      variant="default"
                      size="icon"
                      className="ml-2 rounded-full group-hover:bg-yellow-400 border-2 border-solid transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    
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
