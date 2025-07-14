'use client';

import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import TestimonialsSection from "./components/TestimonialsSection";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TechStackSection />
      <TestimonialsSection />
      <StatsSection />
    </>
  );
}
