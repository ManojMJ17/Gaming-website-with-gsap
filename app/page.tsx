"use client";

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Story from "@/components/Story";
import About from "@/components/About";
// import Hero from "@/components/Hero";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
