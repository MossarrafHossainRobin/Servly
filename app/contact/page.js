"use client";

const ContactPage = () => {
  const PRIMARY_COLOR = 'bg-indigo-800';
  const ACCENT_COLOR = 'text-yellow-400';

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900">Get In Touch</h1>
          <p className="mt-3 text-xl text-gray-600">
            Our dedicated support team is here to ensure a smooth connection between you and your service provider.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Left Panel */}
          <div className={`p-8 md:p-12 lg:col-span-1 ${PRIMARY_COLOR} text-white`}>
            <h2 className="text-3xl font-bold mb-6">Need Immediate Help?</h2>
            <p className="text-indigo-200 mb-8">
              For existing bookings or urgent matters, please use our dedicated channels below.
            </p>
            
            <div className="space-y-6">
              <ContactDetail icon="📞" title="Emergency Support Line" info="+1 (555) 123-4567" className={ACCENT_COLOR} />
              <ContactDetail icon="📧" title="General Inquiries" info="hello@servly.com" />
              <ContactDetail icon="⚙️" title="Technical Support" info="support@servly.com" />
              <ContactDetail icon="📍" title="Our Global HQ" info="101 Digital Way, Suite 400, Tech City, 90210" />
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="p-8 md:p-12 lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <select id="subject" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 bg-white">
                  <option>Select...</option>
                  <option>Question about a Booking</option>
                  <option>Become a Service Provider (Talent)</option>
                  <option>General Feedback</option>
                  <option>Technical Issue</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                <textarea id="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" placeholder="How can we help you?"></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-3 rounded-xl font-bold text-lg text-white shadow-lg transition-all duration-300 hover:opacity-90 bg-gradient-to-r from-blue-700 to-indigo-800`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactDetail = ({ icon, title, info, className = 'text-white' }) => (
  <div className="flex items-start space-x-4">
    <div className={`text-2xl ${className}`}>{icon}</div>
    <div>
      <p className="text-lg font-semibold text-white">{title}</p>
      <p className="text-indigo-300">{info}</p>
    </div>
  </div>
);

export default ContactPage;
