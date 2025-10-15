import React from "react";

export default function PopularServices({ filterWorkers }) {
  const services = [
    { icon: "fa-wrench", name: "Plumber", price: "৳500-1500/job", key: "plumber" },
    { icon: "fa-bolt", name: "Electrician", price: "৳400-1200/job", key: "electrician" },
    { icon: "fa-hammer", name: "Carpenter", price: "৳600-2000/job", key: "carpenter" },
    { icon: "fa-broom", name: "Cleaner", price: "৳300-800/job", key: "cleaner" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Services</h2>
          <p className="text-lg text-gray-600">Book the most requested services in your area</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map(service => (
            <div
              key={service.key}
              onClick={() => filterWorkers(service.key)}
              className="service-card bg-white p-6 rounded-lg shadow-md cursor-pointer border border-gray-200 hover:border-blue-300"
            >
              <div className="text-center">
                <i className={`fas ${service.icon} text-4xl text-slate-700 mb-4`}></i>
                <h3 className="font-semibold text-gray-900">{service.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
