"use client";
import Link from "next/link";

export default function PopularServices() {
  const services = [
    { icon: "💧", name: "Plumber", price: "৳500-1500/job", href: "/services/plumbers" },
    { icon: "⚡", name: "Electrician", price: "৳400-1200/job", href: "/services/electricians" },
    { icon: "🔨", name: "Carpenter", price: "৳600-2000/job", href: "/services/carpenters" },
    { icon: "🧹", name: "Cleaner", price: "৳300-800/job", href: "/services/cleaners" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Services</h2>
          <p className="text-lg text-gray-600">Book the most requested services in your area</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Link key={idx} href={service.href}>
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:border-indigo-400 cursor-pointer transition transform hover:-translate-y-1">
                <div className="text-center">
                  <span className="text-5xl mb-4 inline-block">{service.icon}</span>
                  <h3 className="font-semibold text-gray-900 text-lg">{service.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{service.price}</p>
                  <button className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
                    Explore {service.name}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
