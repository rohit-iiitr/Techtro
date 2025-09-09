"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import "boxicons/css/boxicons.min.css";

export function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Page", href: "#page" },
    { name: "Feature", href: "#feature" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <img
                src="/images/logoipsum.png"
                className="w-5 h-5 text-yellow-400"
              ></img>
              <h1 className="text-2xl font-bold text-white">Techtro</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                  {(item.name === "Home" ||
                    item.name === "Page" ||
                    item.name === "Feature") && (
                    <i className="bx bx-chevron-down text-xs"></i>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="flex gap-6 items-center">
              <i className="bx bx-menu-alt-left text-3xl text-white"></i>
              <Button
                className="bg-white px-4 py-1 text-bold text-md hover
  rounded-tl-lg rounded-tr-none rounded-bl-none rounded-br-lg"
              >
                Let's Talk
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
