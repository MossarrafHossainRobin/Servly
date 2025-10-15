"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesPage from "@/components/ServicesPage";
import PopularServices from "@/components/PopularServices";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesPage />
        <PopularServices />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}

