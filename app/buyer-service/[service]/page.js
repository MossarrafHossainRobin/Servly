"use client";
import { useState } from "react";
import { Star, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function BuyerServicePage() {
  const provider = {
    name: "Robin Hossain",
    role: "Appliance Repair Expert",
    image: "/profile-placeholder.png",
    rating: 4.8,
    reviews: 120,
    description:
      "Certified appliance repair technician with 10+ years experience fixing washing machines, refrigerators, ovens, and AC units.",
  };

  const service = {
    title: "Washing Machine Repair",
    description:
      "All brands, all problems — we fix them fast. Includes installation checks and 1-month warranty.",
    price: 40,
  };

  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "provider", text: "Hello! How can I help you?" }]);
  const [input, setInput] = useState("");
  const [review, setReview] = useState({ rating: 0, comment: "" });
  const [reviewsList, setReviewsList] = useState([]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  };

  const submitReview = () => {
    if (!review.comment || review.rating === 0) return;
    setReviewsList([...reviewsList, review]);
    setReview({ rating: 0, comment: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Service Header */}
      <div className="bg-white shadow p-6 max-w-6xl mx-auto mt-6 rounded-3xl">
        <h1 className="text-3xl font-bold text-indigo-800">{service.title}</h1>
        <p className="text-gray-600 mt-2">{service.description}</p>
        <p className="text-2xl font-bold text-yellow-400 mt-4">${service.price}</p>

        <div className="mt-4 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition">
            Book Now
          </button>
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition">
            Pay ${service.price}
          </button>
        </div>
      </div>

      {/* Provider Info */}
      <div className="max-w-6xl mx-auto p-6 mt-6 bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-6">
        <img
          src={provider.image}
          alt={provider.name}
          className="w-32 h-32 rounded-full border-4 border-indigo-600 object-cover"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-indigo-800">{provider.name}</h2>
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
              href="#reviews"
              className="py-2 px-4 border border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition"
            >
              See Reviews
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div id="reviews" className="max-w-6xl mx-auto p-6 mt-6 bg-white rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Reviews</h2>

        {reviewsList.length === 0 && <p className="text-gray-500 mb-4">No reviews yet. Be the first to review!</p>}

        <div className="space-y-4 mb-6">
          {reviewsList.map((r, i) => (
            <div key={i} className="border border-gray-200 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="font-semibold text-gray-800">{r.rating}</span>
              </div>
              <p className="text-gray-600">{r.comment}</p>
            </div>
          ))}
        </div>

        {/* Submit Review */}
        <div className="border-t pt-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Submit Your Review</h3>
          <div className="flex items-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                className={`w-6 h-6 cursor-pointer ${review.rating >= n ? "text-yellow-400" : "text-gray-300"}`}
                onClick={() => setReview({ ...review, rating: n })}
              />
            ))}
          </div>
          <textarea
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
            className="w-full border border-gray-300 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write your review..."
          ></textarea>
          <button
            onClick={submitReview}
            className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Submit Review
          </button>
        </div>
      </div>

      {/* Chat Modal */}
      {chatOpen && (
        <div className="fixed inset-0 bg-black/30 flex justify-end z-50">
          <div className="w-full md:w-96 h-full bg-white flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-bold text-lg">Chat with {provider.name}</h2>
              <button onClick={() => setChatOpen(false)}>✕</button>
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
