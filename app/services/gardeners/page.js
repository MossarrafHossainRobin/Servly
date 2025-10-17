"use client";
import Link from "next/link";
import { Leaf, Scissors, Sun, Star, Phone } from "lucide-react";
import ServicePageTemplate from "../ServicePageTemplate";
export default function GardenersPage() {
  const services = [
    { name: "Lawn Mowing", description: "Keep your lawn trimmed and beautiful all year round." },
    { name: "Tree Trimming", description: "Maintain tree health with proper pruning and care." },
    { name: "Landscape Design", description: "Custom garden layouts with seasonal flowers." },
    { name: "Fertilization & Pest Control", description: "Eco-friendly methods to keep your plants healthy." },
    { name: "Irrigation Systems", description: "Smart watering systems for efficient gardening." },
  ];

  const testimonials = [
    { name: "Nasrin Jahan", rating: 5, feedback: "My garden has never looked this good!" },
    { name: "Farid Alam", rating: 4, feedback: "Professional work and quick turnaround." },
  ];

  return (
    <ServicePageTemplate
      emoji="🌳"
      title="Expert Gardening & Landscaping"
      subtitle="From trimming to designing — we make your green dreams grow."
      gradient="from-lime-600 to-green-800"
      accent="text-lime-500"
      services={services}
      testimonials={testimonials}
    />
  );
}
