"use client";
import Link from "next/link";
import { Star, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function ProviderProfilePage() {
  const provider = {
    name: "John Doe",
    role: "Appliance Repair Expert",
    image: "/profile-placeholder.png",
    rating: 4.8,
    reviews: 120,
    description:
      "I am a certified appliance repair technician with 10+ years of experience fixing washing machines, refrigerators, ovens, and AC units. Customer satisfaction guaranteed!",
    services: [
      { title: "Washing Machine Repair", href: "/services/washing-machine-repair", price: "$40" },
      { title: "Refrigerator Service", href: "/services/refrigerator-service", price: "$50" },
      { title: "Microwave & Oven Fix", href: "/services/microwave-oven-fix", price: "$35" },
      { title: "Air Conditioner Repair", href: "/services/air-conditioner-repair", price: "$60" },
      { title: "Smart Appliance Setup", href: "/services/smart-appliance-setup", price: "$45" },
    ],
    location: { lat: 23.8103, lng: 90.4125 }, // Dhaka example
  };

  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "worker", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={provider.image}
            alt={provider.name}
            className="w-32 h-32 rounded-full border-4 border-indigo-600 object-cover"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-indigo-800">{provider.name}</h1>
            <p className="text-gray-600">{provider.role}</p>
            <div className="flex items-center gap-2 mt-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold text-gray-800">{provider.rating}</span>
              <span className="text-gray-500">({provider.reviews} reviews)</span>
            </div>
            <div className="mt-4 flex gap-4 flex-wrap">
              <button
                onClick={() => setChatOpen(true)}
                className="flex items-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                <MessageCircle className="w-5 h-5" /> Message
              </button>
              <Link
                href="#services"
                className="py-2 px-4 border border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto p-6 mt-6 bg-white rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600">{provider.description}</p>
      </div>

      {/* Live Location */}
      <div className="max-w-6xl mx-auto p-6 mt-6 bg-white rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Live Location</h2>
        <div className="h-64 w-full rounded-2xl overflow-hidden shadow-lg">
          <MapContainer center={[provider.location.lat, provider.location.lng]} zoom={13} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[provider.location.lat, provider.location.lng]}>
              <Popup>Worker is currently here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="max-w-6xl mx-auto p-6 mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {provider.services.map((service, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition cursor-pointer">
              <div>
                <h3 className="text-xl font-bold text-indigo-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 font-semibold">{service.price}</p>
              </div>
              <Link
                href={service.href}
                className="mt-4 inline-flex items-center justify-center py-2 px-4 bg-yellow-400 text-gray-900 font-semibold rounded-xl hover:bg-yellow-300 transition"
              >
                View Service
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-6xl mx-auto p-6 mt-6 bg-white rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>
        <div className="space-y-4">
          <Review name="Alice M." rating={5} comment="Excellent service! My washing machine was fixed in no time." />
          <Review name="Bob K." rating={4.5} comment="Very professional and reliable. Highly recommend." />
          <Review name="Catherine P." rating={4.8} comment="Quick response and expert repair. Will hire again!" />
        </div>
      </div>

      {/* Chat Modal */}
      {chatOpen && (
        <div className="fixed inset-0 bg-black/30 flex justify-end z-50">
          <div className="w-full md:w-96 h-full bg-white flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-bold text-lg">Chat with {provider.name}</h2>
              <button onClick={() => setChatOpen(false)}><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-xs ${
                    msg.from === "user" ? "bg-indigo-600 text-white ml-auto" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="p-4 border-t flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={sendMessage}
                className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Review = ({ name, rating, comment }) => (
  <div className="border border-gray-200 p-4 rounded-xl">
    <div className="flex items-center gap-2 mb-2">
      <Star className="w-4 h-4 text-yellow-400" />
      <span className="font-semibold text-gray-800">{rating}</span>
      <span className="text-gray-500">by {name}</span>
    </div>
    <p className="text-gray-600">{comment}</p>
  </div>
);
