import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";

// ✅ Official WhatsApp SVG Icon (clean + scalable)
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.52 3.48A11.81 11.81 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.1.55 4.15 1.59 5.95L0 24l6.24-1.64A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 22a9.89 9.89 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.37A9.87 9.87 0 1 1 12 22Zm5.47-7.62c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15c-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.5-.17 0-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
  </svg>
);

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50"
      ref={dropdownRef}
    >
      {/* ✅ WhatsApp Button */}
      <motion.a
        href="https://wa.me/917906981852?text=Hi%20Trippy%20Tales!%20I'm%20interested%20in%20your%20tour%20packages."
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
        {/* Tooltip */}
        <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </motion.a>

      {/* ✅ Phone Button with dropdown */}
      <div className="relative">
        <motion.button
          onClick={() => setOpen(!open)}
          className="relative bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Call Us"
        >
          <Phone />
          {/* Tooltip */}
          <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call Us
          </div>
        </motion.button>

        {/* ✅ Dropdown menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 bg-gray-800 text-white rounded-2xl shadow-xl p-4 w-56 space-y-3 text-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-base">Call Us</span>
                <button onClick={() => setOpen(false)} className="hover:text-gray-300">
                  <X size={18} />
                </button>
              </div>

              <a
                href="tel:+917906981852"
                className="flex items-center gap-2 hover:bg-gray-700 px-3 py-2 rounded-lg transition-all"
                onClick={() => setOpen(false)}
              >
                📞 +91 79069 81852
              </a>
              <a
                href="tel:+919027070879"
                className="flex items-center gap-2 hover:bg-gray-700 px-3 py-2 rounded-lg transition-all"
                onClick={() => setOpen(false)}
              >
                📞 +91 90270 70879
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
