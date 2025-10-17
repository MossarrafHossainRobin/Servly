"use client";
import Link from "next/link";
import { MessageCircle, Star } from "lucide-react";

export default function RefrigeratorServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-4">
          Refrigerator Service
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Cooling issues, gas refills, and compressor replacements.
        </p>

        <div className="flex items-center mb-6">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="ml-2 font-semibold text-gray-800">4.7</span>
          <span className="ml-1 text-gray-500">(95 reviews)</span>
        </div>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="/chat/refrigerator-service"
            className="flex-1 bg-indigo-600 text-white py-2 rounded-xl font-semibold text-center hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> Message
          </Link>
          <Link
            href="/providers/refrigerator-service"
            className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded-xl font-semibold text-center hover:bg-indigo-50 transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
