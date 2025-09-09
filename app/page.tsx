"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { MethodologySection } from "@/components/methodology-section"
import { ProjectsSection } from "@/components/projects-section"
import Testimonials from "@/components/testimonials-section";
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import HowWeDo from "@/components/how-do"
import ContactBanner from "@/components/contact-banner"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowWeDo/>
      <ProjectsSection />
      <MethodologySection />
      <Testimonials />
      <BlogSection />
      {/* <ContactBanner /> */}
      {/* <ContactSection /> */}
      <Footer />
    </main>
  )
}
