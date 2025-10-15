"use client";
import React, { useState } from "react";

export default function HeroSection({ showPage, showModal }) {
  const performHeroSearch = () => {
    alert("Perform search!");
  };

  return (
    <section className="relative premium-gradient text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left slide-in-left">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 pulse-animation"></span>
              <span className="text-sm font-medium">10,000+ Active Workers</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find Skilled
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Workers Fast
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
              Connect with verified professionals across Bangladesh. Book instantly, pay securely, and get quality service guaranteed.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <select className="w-full px-4 py-3 rounded-xl border-0 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option>Select Service</option>
                    <option value="plumber">Plumber</option>
                    <option value="electrician">Electrician</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="cleaner">Cleaner</option>
                  </select>
                </div>
                <div className="flex-1">
                  <select className="w-full px-4 py-3 rounded-xl border-0 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option>Select Location</option>
                    <option value="dhaka">Dhaka</option>
                    <option value="chittagong">Chittagong</option>
                    <option value="sylhet">Sylhet</option>
                    <option value="rajshahi">Rajshahi</option>
                  </select>
                </div>
                <button onClick={performHeroSearch} className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <i className="fas fa-search mr-2"></i> Find Now
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => showPage("services")} className="bg-white text-gray-900 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <i className="fas fa-rocket mr-2"></i> Explore Services
              </button>
              <button onClick={() => showModal("workerRegisterModal")} className="glass-effect text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30">
                <i className="fas fa-user-plus mr-2"></i> Join as Worker
              </button>
            </div>
          </div>

          <div className="relative slide-in-right">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">50K+</div>
                <div className="text-sm text-blue-200">Happy Customers</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">100K+</div>
                <div className="text-sm text-blue-200">Jobs Completed</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">4.9★</div>
                <div className="text-sm text-blue-200">Average Rating</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
            </div>

            {/* Featured Worker Card */}
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                  <i className="fas fa-wrench"></i>
                </div>
                <div>
                  <div className="font-semibold">Karim Ahmed</div>
                  <div className="text-sm text-blue-200">Expert Plumber</div>
                </div>
                <div className="ml-auto">
                  <div className="status-badge status-online">Online</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-1">
                  <div className="rating-stars">★★★★★</div>
                  <span className="text-blue-200">4.8 (127 reviews)</span>
                </div>
                <div className="font-semibold">৳600/hr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
