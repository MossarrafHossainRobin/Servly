"use client";
import Link from "next/link";
import { Wrench, Droplets, Clock, Star, Phone } from "lucide-react";
import ServicePageTemplate from "../ServicePageTemplate";


export default function PlumbersPage() {
  const services = [
    { name: "Leak Detection", description: "Advanced tools to find and fix pipe or faucet leaks quickly." },
    { name: "Pipe Repairs", description: "From PVC to copper, we handle all residential and commercial pipe work." },
    { name: "Bathroom Fittings", description: "Expert installation of showers, sinks, and sanitary systems." },
    { name: "Water Heater Setup", description: "Installation and maintenance of gas and electric geysers." },
    { name: "Drain Cleaning", description: "High-pressure jet cleaning to clear clogged drains." },
  ];

  const testimonials = [
    { name: "Sadia Noor", rating: 5, feedback: "They fixed my kitchen leak in under an hour — lifesavers!" },
    { name: "Tariq Hasan", rating: 4, feedback: "Professional and punctual. Highly recommend Servly plumbers." },
  ];

  return (
    <ServicePageTemplate
      emoji="💧"
      title="Professional Plumbing Services"
      subtitle="Reliable, affordable, and expert plumbing solutions — 24/7 support."
      gradient="from-cyan-600 to-blue-700"
      accent="text-cyan-500"
      services={services}
      testimonials={testimonials}
    />
  );
}
