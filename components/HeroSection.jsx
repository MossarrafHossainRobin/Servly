"use client";

import React, { useState } from "react";

export default function HeroSection({ showPage, showModal, filterWorkers }) {
  const [service, setService] = useState(""); // selected service category
  const [location, setLocation] = useState(""); // location input

  const services = [
    "Plumber",
    "Electrician",
    "Carpenter",
    "Cleaner",
    "Painter",
    "Handyman",
  ];

  const performHeroSearch = () => {
    if (!service) {
      alert("Please select a service!");
      return;
    }

    // Call the filter function from parent component
    filterWorkers(service.toLowerCase());

    // Optionally, navigate to services page
    showPage("services");
  };

  return (
    <section className="relative text-white py-24 overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-900">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300/10 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text & Search */}
          <div className="slide-in-left space-y-6">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">10,000+ Active Workers</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Find Skilled
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Workers Fast
              </span>
            </h1>

            <p className="text-lg md:text-xl max-w-xl text-blue-100">
              Connect with verified professionals across Bangladesh. Book instantly, pay securely, and get quality service guaranteed.
            </p>

            {/* Search Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border-0 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="">Select Service</option>
                  {services.map((s, idx) => (
                    <option key={idx} value={s}>
                      {s}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl border-0 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <button
                  onClick={performHeroSearch}
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <i className="fas fa-search mr-2"></i> Find Now
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={() => showPage("services")}
                className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 shadow-lg transform hover:scale-105 transition-all"
              >
                Explore Services
              </button>
              <button
                onClick={() => showModal("workerRegisterModal")}
                className="bg-white/20 border border-white/30 backdrop-blur-md text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all"
              >
                Join as Worker
              </button>
            </div>
          </div>

          {/* Right Stats (Removed Map) */}
          <div className="slide-in-right space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-2xl p-6 text-center shadow-lg bg-white/10 backdrop-blur-md">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-blue-200">Happy Customers</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center shadow-lg bg-white/10 backdrop-blur-md">
                <div className="text-3xl font-bold text-white">100K+</div>
                <div className="text-sm text-blue-200">Jobs Completed</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center shadow-lg bg-white/10 backdrop-blur-md">
                <div className="text-3xl font-bold text-white">4.9★</div>
                <div className="text-sm text-blue-200">Average Rating</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center shadow-lg bg-white/10 backdrop-blur-md">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
