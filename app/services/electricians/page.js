"use client";
import Link from "next/link";
import { useState } from "react";
import { Wrench, Zap, Clock, Star, Phone } from "lucide-react";

export default function ElectriciansPage() {
  const services = [
    { name: "Wiring & Rewiring", description: "Safe and modern wiring solutions for homes and businesses." },
    { name: "Lighting Installation", description: "LED, ambient, and smart lighting setup for any environment." },
    { name: "Electrical Repairs", description: "Fixing sockets, switches, and electrical faults efficiently." },
    { name: "Appliance Setup", description: "Professional installation of TVs, fans, and electric ovens." },
    { name: "Safety Inspection", description: "Comprehensive electrical safety audits and maintenance." },
  ];

  const testimonials = [
    { name: "Ayesha Rahman", rating: 5, feedback: "Quick and professional! My entire home’s wiring was fixed in a day." },
    { name: "Tanvir Alam", rating: 4, feedback: "Affordable and reliable service. Definitely recommend Servly Electricians." },
    { name: "Mita Hasan", rating: 5, feedback: "Excellent quality work. The technician explained everything clearly!" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Certified Electricians Near You ⚡</h1>
        <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
          Reliable, safe, and fast electrical services for homes and offices — available 24/7.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-xl shadow hover:scale-[1.03] transition-transform"
          >
            Book a Service
          </Link>
          <a
            href="#services"
            className="px-8 py-3 border-2 border-yellow-400 text-yellow-300 font-semibold rounded-xl hover:bg-yellow-400 hover:text-gray-900 transition-all"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Services Offered */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Our Electrical Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-indigo-200 hover:border-indigo-600"
            >
              <div className="text-4xl mb-4 text-yellow-500"><Zap /></div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose Servly Electricians?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Feature icon={<Wrench />} title="Expert Technicians" desc="Certified professionals with 5+ years of experience." />
            <Feature icon={<Clock />} title="Fast Response" desc="Available 24/7 for emergencies and same-day service." />
            <Feature icon={<Star />} title="Quality Guaranteed" desc="High customer satisfaction with genuine spare parts." />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl">
                <p className="text-lg italic mb-4">“{t.feedback}”</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-yellow-500">
                    {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-gradient-to-r from-yellow-400 to-orange-400">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Need Emergency Electrical Help?</h2>
        <p className="text-lg text-gray-800 mb-6">Our certified electricians are just one call away — day or night!</p>
        <div className="flex justify-center gap-6">
          <a href="tel:+15551234567" className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:scale-[1.05] transition-transform">
            <Phone className="w-5 h-5" /> Call Now
          </a>
          <Link href="/contact" className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 shadow-lg">
            Send a Message
          </Link>
        </div>
      </section>
    </div>
  );
}

const Feature = ({ icon, title, desc }) => (
  <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition-all">
    <div className="text-indigo-700 text-4xl mb-3 flex justify-center">{icon}</div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

