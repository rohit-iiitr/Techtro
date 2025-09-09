"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactBanner from "./contact-banner";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", href: "#" },
    { name: "Mobile Apps", href: "#" },
    { name: "Cloud Solutions", href: "#" },
    { name: "Data Analytics", href: "#" },
    { name: "Cybersecurity", href: "#" },
  ];

  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-primary text-primary-foreground rounded-tl-[100px] overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-32 -right-56 w-[30%] h-[30%] rounded-full bg-[#4F59A8] mix-blend-screen filter blur-3xl opacity-30"></div>
      <div className="absolute -bottom-16 -left-44 w-[35%] h-[60%] rounded-full bg-[#CCF575] mix-blend-screen filter blur-3xl opacity-25 overflow-hidden"></div>
<ContactBanner />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        
        <div className="grid grid-cols-3 gap-8 mx-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/images/logoipsum.png"
                className="w-5 h-5 text-yellow-400"
                alt="Logo"
              />
              <h1 className="text-2xl font-bold text-white">Techtro</h1>
            </div>
            <p className="text-primary-foreground/30 text-sm mb-6 leading-relaxed">
              We're passionate about helping businesses thrive in the digital
              landscape. With our expertise in digital marketing strategies, we
              empower our clients to reach their goals and exceed expectations.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h4 className="text-lg font-semibold mb-4">WHO WE ARE</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/30 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h4 className="text-lg font-semibold mb-4">OUR SERVICES</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/30 hover:text-yellow-400 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col items-start"
        >
          <div className="grid md:grid-cols-3 ms-10 w-6xl">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-foreground/30">
                <Phone className="w-5 h-5 text-yellow-400 " />
                Contact Us Anytime
              </h3>
              <p className="mt-2 ">+44-2002-5432111</p>
              <p>+44-2002-5432111</p>
            </motion.div>

            {/* Email Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-foreground/30">
                <Mail className="w-5 h-5 text-yellow-400 " />
                Say Hello
              </h3>
              <p className="mt-2">infoinfo@example.com</p>
              <p>infoinfo@example.com</p>
            </motion.div>

            {/* Subscribe */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">Subscribe Now</h3>
              <form
                onSubmit={handleSubscribe}
                className="mt-4 flex items-center bg-[#1c1c1c] rounded-lg overflow-hidden"
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-transparent text-gray-300 outline-none"
                />
                <Button
                  type="submit"
                  className="bg-yellow-500 p-2 hover:bg-yellow-600 transition"
                >
                  <Send className="w-5 h-5 text-black" />
                </Button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 ms-10 mb-10"
          >
            <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-foreground/30">
              <MapPin className="w-5 h-5 text-yellow-500" />
              Office Address Locations
            </h3>
            <p className="mt-2">23 Division Park, New York, NY 10002, USA</p>
          </motion.div>

          <div className="border border-primary-foreground/20 rounded-lg p-4 mb-6 md:mb-0 w-full flex items-center justify-between">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Techtro | Designed By{" "}
              <span className="text-yellow-400">Me</span>
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
