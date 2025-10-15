import React from "react";

export default function ServicesPage({ filterWorkers }) {
  const services = [
    {
      icon: "fa-wrench",
      title: "Plumbing Services",
      tasks: ["Pipe repair and installation", "Bathroom fitting", "Water heater service", "Drain cleaning"],
      key: "plumber",
      buttonText: "Find Plumbers"
    },
    {
      icon: "fa-bolt",
      title: "Electrical Services",
      tasks: ["Wiring and rewiring", "Fan and light installation", "Switch and socket repair", "Electrical troubleshooting"],
      key: "electrician",
      buttonText: "Find Electricians"
    },
    {
      icon: "fa-hammer",
      title: "Carpentry Services",
      tasks: ["Furniture repair", "Custom woodwork", "Door and window fitting", "Kitchen cabinet installation"],
      key: "carpenter",
      buttonText: "Find Carpenters"
    },
    {
      icon: "fa-broom",
      title: "Cleaning Services",
      tasks: ["Deep house cleaning", "Office cleaning", "Post-construction cleanup", "Regular maintenance"],
      key: "cleaner",
      buttonText: "Find Cleaners"
    },
    {
      icon: "fa-paint-roller",
      title: "Painting Services",
      tasks: ["Interior painting", "Exterior painting", "Wall texture work", "Color consultation"],
      key: "painter",
      buttonText: "Find Painters"
    },
    {
      icon: "fa-tools",
      title: "General Repair",
      tasks: ["Appliance repair", "Furniture assembly", "Home maintenance", "Emergency repairs"],
      key: "handyman",
      buttonText: "Find Handymen"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">Professional home services at your fingertips</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.key} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <i className={`fas ${service.icon} text-3xl text-slate-700 mr-4`}></i>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <ul className="text-gray-600 space-y-2 mb-6">
                {service.tasks.map((task, idx) => <li key={idx}>• {task}</li>)}
              </ul>
              <button onClick={() => filterWorkers(service.key)} className="w-full bg-slate-700 text-white py-2 rounded-md hover:bg-slate-800">
                {service.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
