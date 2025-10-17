"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  const categories = [
    { name: "Electricians", icon: "⚡", description: "Wiring, repairs, installations & lighting.", link: "/services/electricians" },
    { name: "Plumbers", icon: "💧", description: "Leaks, pipe repairs, and fixture installation.", link: "/services/plumbers" },
    { name: "Carpenters", icon: "🔨", description: "Custom furniture, repair, and woodworking.", link: "/services/carpenters" },
    {
      name: "Appliance-Repair",
      icon: "🔧",
      description: "Washing machine, fridge, oven, AC & smart appliance services.",
      link: "/services/appliance-repair",
      subLinks: [
        { name: "Washing Machine Repair", href: "/services/appliance-repair/washing-machine-repair" },
        { name: "Refrigerator Service", href: "/services/appliance-repair/refrigerator-service" },
        { name: "Microwave & Oven Fix", href: "/services/appliance-repair/microwave-oven-fix" },
        { name: "Air Conditioner Repair", href: "/services/appliance-repair/air-conditioner-repair" },
        { name: "Smart Appliance Setup", href: "/services/appliance-repair/smart-appliance-setup" },
      ],
    },
    { name: "Cleaners", icon: "🧹", description: "Deep cleaning, regular service, and janitorial.", link: "/services/cleaners" },
    { name: "Gardeners", icon: "🌳", description: "Landscaping, trimming, and lawn care.", link: "/services/gardeners" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-indigo-800">
            Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">Right Talent</span> for Any Job
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            From emergency repairs to complex renovations, connect with certified local professionals in minutes. Guaranteed quality service.
          </p>
          <div className="mt-8">
            <button className="px-10 py-3 rounded-xl text-lg font-bold text-gray-900 shadow-xl transition-transform transform hover:scale-[1.02] bg-yellow-400">
              Post Your Job Request
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Popular Service Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] border-t-4 border-indigo-200 hover:border-indigo-600 cursor-pointer"
            >
              <div className="text-5xl mb-4 p-3 inline-block rounded-lg bg-yellow-400 text-gray-900">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-indigo-800">{cat.name}</h3>
              <p className="text-gray-600 text-base">{cat.description}</p>

              {/* If Appliance-Repair, show sublinks */}
              {cat.subLinks ? (
                <div className="mt-4 space-y-2">
                  {cat.subLinks.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.href}
                      className="block text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      {sub.name} →
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href={cat.link}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Explore Talent <span className="ml-1">→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <StatBlock count="15K+" label="Jobs Completed" />
            <StatBlock count="5K+" label="Vetted Professionals" />
            <StatBlock count="4.9/5" label="Average Rating" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const StatBlock = ({ count, label }) => (
  <div className="p-4">
    <p className="text-5xl font-extrabold mb-2 text-yellow-400">{count}</p>
    <p className="text-xl font-medium text-gray-200 uppercase tracking-wider">{label}</p>
  </div>
);

export default ServicesPage;
