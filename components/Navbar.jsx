"use client";

import { useState, useEffect } from "react";
// Using inline SVGs and <a> tags for environment compatibility.

// --- Inline SVG Icon Definitions (Copied for single file integrity) ---
const IconMapMarker = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.495 291.31 0 269.458 0 192C0 85.968 85.968 0 192 0s192 85.968 192 192c0 77.458-26.495 99.31-172.268 309.67c-9.535 14.502-28.947 14.502-38.484 0zM192 272a80 80 0 100-160 80 80 0 000 160z"/></svg>
);
const IconTools = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M388.3 12.5C369.3-5.2 340-4.4 321.7 14.1L192 143.7 348.3 300l129.7-129.7c18.4-18.4 18.4-48.3 0-66.7L388.3 12.5zm-247 237.7L333.6 429.6c1.1 1.1 2.3 2.1 3.5 3c-1.1-1.2-2.3-2.3-3.6-3.4L192 300 241.3 250.2c2.6-2.5 3.7-6.2 2.8-9.8s-3.7-6.5-7.3-7.5L143.7 192 14.1 321.7c-18.4 18.4-19.2 48.7-1.4 67.7l77.7 81.6c18.7 19.1 48.8 19.9 67.7 1.4L398.3 264.4c1.2-1.2 2.3-2.5 3.4-3.7-1 .9-2 1.9-3 3.1L285.8 402.7c-9.6 9.6-25.2 9.6-34.8 0L241.3 393c-2.4-2.4-5.1-4.4-7.9-6L145.4 348.6c-1.6-2.8-3.6-5.5-6-7.9l-9.7-9.7c-9.6-9.6-9.6-25.2 0-34.8L121 285.8c9.6-9.6 25.2-9.6 34.8 0l110 110.1c-1.2 1.2-2.3 2.5-3.4 3.7L155.8 285.8c-9.6-9.6-25.2-9.6-34.8 0L81.6 351c-19.1 18.7-19.9 48.8-1.4 67.7l14.1 14.1c18.7 18.3 48.4 17.5 66.8-2.1l115.9-115.9c.9-1.3 1.7-2.6 2.5-3.9z"/></svg>
);
const IconBell = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 0c17.67 0 32 14.33 32 32v32c0 10.13-2.93 20.37-8.8 29.27L256 128c0 53.02-31.95 99.43-77.94 119.52C160.7 257.67 144 274.3 144 293.33V320h160c17.67 0 32 14.33 32 32s-14.33 32-32 32H128c-17.67 0-32-14.33-32-32s14.33-32 32-32h32v-26.67c0-11.85 2.12-23.78 6.47-35.33c-39.06-15.14-68.47-52.68-68.47-97.33C98.4 89.28 152.88 34.8 224 34.8V32c0-17.67 14.33-32 32-32zm32 400c0 17.67 14.33 32 32 32s32-14.33 32-32H160c0 17.67 14.33 32 32 32s32-14.33 32-32z"/></svg>
);
const IconBars = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zm0 160c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
);
const IconTimes = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3l105.4 105.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256l105.3-105.4z"/></svg>
);
const IconUserCheck = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.3 224.9c-4.9-2.3-10.2-3.6-15.5-3.6H64c-35.3 0-64 28.7-64 64s28.7 64 64 64h224c52.9 0 96-43.1 96-96c0-43-28.7-80.1-68.5-92.8c-1.7-16.7-1.7-33.8 0-50.5c-39.8 12.7-68.5 49.8-68.5 92.8 0 52.9 43.1 96 96 96h224c35.3 0 64-28.7 64-64s-28.7-64-64-64H381.3c-5.3 0-10.6 1.3-15.5 3.6c-4.9 2.3-9.4 5.2-13.3 8.3L288 448l-68.7-32.1c-3.9-3.1-8.4-6-13.3-8.3zM464 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256z"/></svg>
);
const IconStar = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M316.9 18C324.4 2-8.5 28.8 54.9 29.3 285.8 40.5 330.3 361.6 339.7 348.8c4.6 7.4 12.3 14 20.9 17.5l-171-168.8zM288 32C129 32 0 161 0 320c0 102.7 63.3 192 153.6 224h275.2C512.7 512 576 422.7 576 320c0-159-129-288-288-288zm53 288c-10.5 17-27.5 29.5-46.7 32.7c-2.3-3.6-4.6-7.3-6.8-10.9L161.8 161.7C150.3 148.6 130.6 142 110.9 146.9c-19.7 4.9-36.8 16.5-48.4 33.5C51.1 198 44.8 221.3 46 244.7c1.4 25.4 13.9 47.9 33.7 63.8l207 165.7c20.3 16.3 46.1 25.8 73.1 27.6h4.5c46.5 0 89.2-22.9 114.7-59.5c24.7-35.3 33.5-77.5 28.3-118.8c-5.4-43.2-27.4-81.2-59.2-108.9c-30.8-26.6-69.5-42-109.8-44.4l-117.8 74.5c-3.8 2.4-7.5 4.5-11.2 6.4z"/></svg>
);
const IconSearch = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 458.6c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.1-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-112 0a112 112 0 1 0-224 0 112 112 0 1 0 224 0z"/></svg>
);
// --- END Icon Definitions ---

// Custom Tailwind-like CSS for animation
const customStyles = `
  @keyframes slideDown {
    0% { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-slideDown {
    animation: slideDown 0.2s ease-out forwards;
  }
`;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [location, setLocation] = useState("Detecting...");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleNotifications = () => setNotificationOpen(!notificationOpen);
  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Add navigation logic here
  };

  // --- Location API (Unchanged) ---
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            const area =
              data.address.suburb ||
              data.address.neighbourhood ||
              data.address.road ||
              "";
            const district =
              data.address.city || data.address.town || data.address.county || "";

            const locationString = area && district ? `${area}, ${district}` : "Unknown Location";

            setLocation(locationString);
          } catch (err) {
            console.error("Geocoding error:", err);
            setLocation("API Error");
          }
        },
        (err) => {
          console.error("Geolocation error:", err);
          setLocation("Location denied");
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      setLocation("Geo not supported");
    }
  }, []);

  // Define the primary Red accent color (for Search Bar)
  const RED_ACCENT_COLOR = '#E63946';

  return (
    <>
      <style>{customStyles}</style>
      <nav className="bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 sticky top-0 z-50 border-b border-blue-500/20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* --- Left Section (Logo + Location) --- */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <a href="/" className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-[1.02]">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-purple-400/50 transition-all duration-300">
                  <IconTools className="text-white text-xl w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                    Servly
                  </h1>
                  <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">Pro Services Hub</p>
                </div>
              </a>

              {/* Location Display - IMPROVED DESIGN */}
              <div className="hidden lg:flex items-center px-4 py-2 bg-white rounded-full text-sm font-semibold transition-all duration-300 border border-blue-200 hover:border-blue-400 hover:shadow-md cursor-pointer">
                <IconMapMarker
                  className={`mr-2 transition-colors duration-500 w-4 h-4 ${
                    location.includes("Detecting") || location.includes("denied")
                      ? "text-red-500 animate-pulse"
                      : "text-blue-600"
                  }`}
                />
                <span className={`${location.includes("Detecting") ? "text-gray-500" : "text-gray-800"}`}>
                  {location}
                </span>
              </div>
            </div>

            {/* --- Center Section (Search Bar - WIDER, RED ACCENT) --- */}
            <div className="flex-1 max-w-2xl hidden lg:block mx-10">
              <div className="relative w-full rounded-full shadow-2xl border-2 transition-all duration-300 group focus-within:ring-4 focus-within:ring-red-200"
                   style={{ 
                     borderColor: RED_ACCENT_COLOR, 
                     boxShadow: `0 10px 20px -5px rgba(230, 57, 70, 0.3)`
                   }}>
                
                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Find talents or works..." // Confirmed placeholder text
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-6 pr-28 py-3.5 rounded-full bg-white focus:outline-none text-gray-800 placeholder-gray-500 font-medium text-base transition-all duration-300"
                />

                {/* Search Button (Vibrant Red) */}
                <button
                  onClick={handleSearch}
                  className="absolute right-0 top-0 h-full w-24 flex items-center justify-center rounded-r-full text-white font-semibold transition-all duration-300 hover:w-28 hover:opacity-90"
                  style={{ background: RED_ACCENT_COLOR, boxShadow: '0 4px 10px rgba(230, 57, 70, 0.5)' }}
                >
                  <IconSearch className="text-xl w-5 h-5" />
                </button>

                {/* Clear Button (Only visible if text exists) */}
                {searchTerm && (
                  <button
                    className="absolute right-24 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors duration-300 p-2"
                    onClick={() => setSearchTerm("")}
                  >
                    <IconTimes className="text-sm w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* --- Right Section (Icons + Auth) --- */}
            <div className="flex items-center space-x-3">
              {/* Desktop Links */}
              <div className="hidden md:flex items-center space-x-1">
                {["Services", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg text-base font-semibold transition-all duration-300 hover:bg-blue-50"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Notification (Unchanged) */}
              <div className="relative">
                <button
                  onClick={toggleNotifications}
                  className="p-3 text-gray-600 hover:text-white bg-gray-100 hover:bg-blue-600 rounded-full transition-all duration-300 shadow-md relative group"
                >
                  <IconBell className="text-lg w-5 h-5 group-hover:animate-pulse" />
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold border-2 border-white transform scale-90">
                    3
                  </span>
                </button>

                {/* Notification Dropdown */}
                {notificationOpen && (
                  <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 animate-slideDown origin-top-right">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                      <h3 className="font-bold text-xl text-gray-900">Notifications</h3>
                      <span className="text-sm text-blue-500 cursor-pointer hover:text-blue-700">Clear All</span>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      <NotificationItem
                        Icon={IconUserCheck}
                        iconBg="bg-blue-100"
                        iconColor="text-blue-600"
                        title="New booking confirmed"
                        text="Karim Ahmed accepted your plumbing request"
                        time="2 minutes ago"
                      />
                      <NotificationItem
                        Icon={IconStar}
                        iconBg="bg-green-100"
                        iconColor="text-green-600"
                        title="Service completed"
                        text="Please rate your experience with Rashida"
                        time="1 hour ago"
                      />
                      <div className="p-4 text-center text-gray-500 text-sm">No older notifications.</div>
                    </div>
                    <div className="p-3 border-t border-gray-100">
                      <button className="w-full text-center text-base text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">
                        View all
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Auth Actions - New button added */}
              <div className="hidden md:flex items-center space-x-3">
                {/* NEW: Talent/Work Signup Button */}
                <button 
                  className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-extrabold shadow-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-[1.03]"
                  title="Sign up to offer your professional services"
                >
                  Sign Up for Talents
                </button>

                <button className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-50">
                  Login
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl shadow-purple-500/40 hover:opacity-95 transition-all duration-300 hover:scale-[1.03]">
                  Sign Up (Customer)
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-3 text-gray-700 hover:text-white hover:bg-blue-600 rounded-full transition-all duration-300"
              >
                {mobileMenuOpen ? <IconTimes className="text-xl w-5 h-5" /> : <IconBars className="text-xl w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Updated with new button) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-inner animate-slideDown">
            <div className="px-4 py-5 space-y-4">
              {/* Mobile Search Bar */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Find services..."
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 shadow-inner text-base"
                />
                <IconSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>

              {/* Mobile Location Display */}
              <div className="flex items-center px-4 py-2 bg-gray-100 rounded-xl text-sm font-medium">
                <IconMapMarker className="mr-2 text-blue-500 w-4 h-4" />
                <span className="text-gray-700">{location}</span>
              </div>
              
              {/* Mobile Links */}
              {["Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={toggleMobileMenu}
                  className="block px-4 py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-medium border-b border-gray-100 last:border-b-0"
                >
                  {item}
                </a>
              ))}
              
              {/* Mobile Auth Actions */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                 <button 
                  className="w-full bg-yellow-500 text-gray-900 py-3 rounded-xl text-lg font-bold shadow-lg hover:opacity-90 transition-all duration-300"
                >
                  Sign Up for Talents
                </button>
                <button className="w-full text-center text-lg text-blue-600 hover:bg-blue-50 py-2 rounded-xl font-semibold transition-all duration-300">
                  Login
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl text-lg font-bold shadow-lg hover:opacity-90 transition-all duration-300">
                  Sign Up (Customer)
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

// Separate component for cleaner notification item rendering
const NotificationItem = ({ Icon, iconBg, iconColor, title, text, time }) => (
  <div className="p-4 hover:bg-gray-50 border-b border-gray-50 cursor-pointer flex items-start space-x-3 transition-colors duration-150">
    <div className={`w-9 h-9 ${iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
      <Icon className={`${iconColor} text-sm w-4 h-4`} />
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900 leading-snug">{title}</p>
      <p className="text-xs text-gray-500 mt-0.5">{text}</p>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  </div>
);
