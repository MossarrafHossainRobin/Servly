"use client";
import Link from "next/link";
import { Hammer, Layers, Ruler, Star, Phone } from "lucide-react";
import ServicePageTemplate from "../ServicePageTemplate";

export default function CarpentersPage() {
  const services = [
    { name: "Furniture Design", description: "Custom-made furniture to fit your space and style." },
    { name: "Repair & Restoration", description: "Fix broken chairs, tables, and cabinets with expert craftsmanship." },
    { name: "Wood Polishing", description: "Give your furniture a fresh, glossy finish." },
    { name: "Interior Woodwork", description: "From ceilings to cabinets — precision wooden work." },
    { name: "Outdoor Decks", description: "Durable and stylish wood decking solutions." },
  ];

  const testimonials = [
    { name: "Arif Hossain", rating: 5, feedback: "The carpenter built a custom table that’s absolutely stunning!" },
    { name: "Nabila Islam", rating: 4, feedback: "Quick service and top-notch quality. Will book again." },
  ];

  return (
    <ServicePageTemplate
      emoji="🔨"
      title="Skilled Carpenters for Every Project"
      subtitle="Custom furniture, repairs, and home interiors — built to perfection."
      gradient="from-amber-600 to-orange-700"
      accent="text-amber-500"
      services={services}
      testimonials={testimonials}
    />
  );
}
