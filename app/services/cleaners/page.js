"use client";
import Link from "next/link";
import { Broom, Sparkles, Clock, Star, Phone } from "lucide-react";
import ServicePageTemplate from "../ServicePageTemplate";

export default function CleanersPage() {
  const services = [
    { name: "Deep Cleaning", description: "Comprehensive home and office cleaning packages." },
    { name: "Regular Cleaning", description: "Scheduled cleaning services to keep your space spotless." },
    { name: "Move-In/Out Cleaning", description: "Perfect for tenants or landlords during shifting." },
    { name: "Sanitization", description: "Advanced disinfection for virus and bacteria-free surfaces." },
    { name: "Carpet & Sofa Wash", description: "Professional fabric care with eco-friendly products." },
  ];

  const testimonials = [
    { name: "Fahima Rahman", rating: 5, feedback: "They left my home sparkling clean! Excellent job." },
    { name: "Raihan Uddin", rating: 4, feedback: "Polite staff and very thorough cleaning service." },
  ];

  return (
    <ServicePageTemplate
      emoji="🧹"
      title="Professional Cleaning Services"
      subtitle="We clean it all — homes, offices, and everything in between."
      gradient="from-green-500 to-emerald-700"
      accent="text-green-500"
      services={services}
      testimonials={testimonials}
    />
  );
}
