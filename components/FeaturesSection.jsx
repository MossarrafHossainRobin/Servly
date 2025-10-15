import React from "react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Kaajbazar?</h2>
          <p className="text-lg text-gray-600">The most trusted platform for home services in Bangladesh</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-indigo-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Workers</h3>
            <p className="text-gray-600">
              All workers are ID verified and skill tested for your safety and quality assurance.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-credit-card text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">
              Pay safely with bKash, Nagad, or cards. Transparent billing with no hidden charges.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-clock text-yellow-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Round-the-clock customer support to help you with any issues or questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
