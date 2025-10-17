"use client";

import Navbar from "@/components/Navbar";

const AboutPage = () => {
  const ACCENT_COLOR = "text-yellow-500";

  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      {/* 1. Hero - Mission Statement */}
      <div className="py-20 md:py-24 bg-gray-50 border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-lg font-semibold ${ACCENT_COLOR}`}>OUR MISSION</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mt-3 max-w-4xl text-gray-900">
            We are the <strong>Bridge</strong> connecting{" "}
            <span className="text-indigo-700">Skilled Tradespeople</span> with Local Needs.
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-4xl">
            In a fractured market, we deliver trust and transparency. We eliminate the guesswork for customers and empower verified professionals to grow their business effortlessly.
          </p>
        </div>
      </div>

      {/* 2. Value Proposition - The Bridge Visual */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Beyond Traditional Classifieds
            </h2>
            <p className="text-gray-600 mb-6">
              Unlike basic platforms, we deeply vet every service provider—from{" "}
              <strong>Electricians</strong> and <strong>Plumbers</strong> to specialized{" "}
              <strong>HVAC technicians</strong>. Our system guarantees insurance
              verification, background checks, and skill assessments, ensuring a
              professional, safe, and reliable transaction every time.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className={`mr-2 ${ACCENT_COLOR} font-extrabold text-xl`}>✓</span>
                Transparent pricing and fixed-scope projects.
              </li>
              <li className="flex items-center text-gray-700">
                <span className={`mr-2 ${ACCENT_COLOR} font-extrabold text-xl`}>✓</span>
                Secure payment processing and escrow protection.
              </li>
              <li className="flex items-center text-gray-700">
                <span className={`mr-2 ${ACCENT_COLOR} font-extrabold text-xl`}>✓</span>
                24/7 Dispute resolution and customer support.
              </li>
            </ul>
          </div>

          {/* Right Column - Bridge Visualization */}
          <div className="p-8 bg-indigo-50 rounded-3xl shadow-2xl shadow-indigo-200/50">
            <div className="flex justify-between items-center relative py-10">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-indigo-500 to-indigo-800 transform -translate-y-1/2 z-0"></div>

              {/* Customer */}
              <div className="w-1/3 text-center z-10">
                <div className="w-20 h-20 bg-white border-4 border-yellow-500 rounded-full mx-auto flex items-center justify-center text-4xl shadow-lg mb-2">
                  🧑
                </div>
                <p className="font-bold text-lg text-gray-900">The Customer</p>
              </div>

              {/* Platform */}
              <div className="w-1/3 text-center z-10">
                <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-5xl font-black text-white bg-indigo-800 shadow-xl ring-8 ring-indigo-50">
                  S
                </div>
                <p className="font-bold text-lg mt-2 text-indigo-700">The Platform</p>
              </div>

              {/* Talent */}
              <div className="w-1/3 text-center z-10">
                <div className="w-20 h-20 bg-white border-4 border-indigo-700 rounded-full mx-auto flex items-center justify-center text-4xl shadow-lg mb-2">
                  👷
                </div>
                <p className="font-bold text-lg text-gray-900">The Talent</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 pt-4">
              We simplify the complex process of finding, hiring, and paying skilled labor.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Core Values Section */}
      <div className="py-20 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon="🤝"
              title="Trust & Security"
              text="Every professional is vetted, background-checked, and insured for your peace of mind."
            />
            <ValueCard
              icon="🌟"
              title="Quality & Skill"
              text="We prioritize certified, high-rated professionals who deliver exceptional workmanship."
            />
            <ValueCard
              icon="💡"
              title="Simplicity & Speed"
              text="Our platform makes booking a professional an effortless, near-instant experience."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon, title, text }) => (
  <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm shadow-xl transition-transform transform hover:scale-[1.05] hover:bg-white/20 border border-white/20">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300">{text}</p>
  </div>
);

export default AboutPage;
