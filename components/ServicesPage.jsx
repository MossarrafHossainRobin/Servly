"use client";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: "⚡",
      title: "Electrical Services",
      tasks: ["Wiring and rewiring", "Fan & light installation", "Switch & socket repair", "Electrical troubleshooting"],
      href: "/services/electricians",
      buttonText: "Explore Electricians"
    },
    {
      icon: "💧",
      title: "Plumbing Services",
      tasks: ["Pipe repair & installation", "Bathroom fitting", "Water heater service", "Drain cleaning"],
      href: "/services/plumbers",
      buttonText: "Explore Plumbers"
    },
    {
      icon: "🔨",
      title: "Carpentry Services",
      tasks: ["Furniture repair", "Custom woodwork", "Door & window fitting", "Kitchen cabinet installation"],
      href: "/services/carpenters",
      buttonText: "Explore Carpenters"
    },
    {
      icon: "🧹",
      title: "Cleaning Services",
      tasks: ["Deep house cleaning", "Office cleaning", "Post-construction cleanup", "Regular maintenance"],
      href: "/services/cleaners",
      buttonText: "Explore Cleaners"
    },
    {
      icon: "🎨",
      title: "Painting Services",
      tasks: ["Interior painting", "Exterior painting", "Wall texture work", "Color consultation"],
      href: "/services/painters",
      buttonText: "Explore Painters"
    },
    {
      icon: "🔧",
      title: "Appliance Repair & General Handyman",
      tasks: ["Appliance repair", "Furniture assembly", "Home maintenance", "Emergency repairs"],
      href: "/services/appliance-repair",
      buttonText: "Explore Handymen"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">Professional home services at your fingertips</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{service.icon}</span>
                <h3 className="text-xl font-semibold text-indigo-800">{service.title}</h3>
              </div>
              <ul className="text-gray-600 mb-6 space-y-2">
                {service.tasks.map((task, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-yellow-500">•</span> {task}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={service.href}
              className="w-full inline-flex justify-center py-2 px-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
            >
              {service.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
