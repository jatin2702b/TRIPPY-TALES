import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneIcon from "lucide-react/lib/icons/phone";
import X from "lucide-react/lib/icons/x";

// Smaller WhatsApp outlined logo (green stroke, transparent background)
const WhatsAppOutlineLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 32 32"
    aria-label="WhatsApp"
  >
    <circle cx="16" cy="16" r="14" fill="none" stroke="#25D366" strokeWidth="2.5"/>
    <path
      fill="#25D366"
      d="M22.1 19.79c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.19.21-.36.24-.68.08-.33-.16-1.34-.5-2.56-1.58-.94-.85-1.57-1.9-1.75-2.23-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.18.24-.32.36-.54.11-.22.05-.41-.03-.56-.08-.16-.71-1.74-.98-2.38-.26-.62-.52-.53-.72-.54-.21-.01-.41-.01-.63-.01-.21 0-.56.09-.85.4-.3.31-1.12 1.11-1.12 2.71 0 1.61 1.15 3.17 1.31 3.39.16.22 2.27 3.53 5.51 4.96a7.09 7.09 0 0 0 1.84.69c.77.25 1.47.21 2.02.13.62-.09 1.92-.81 2.18-1.59.27-.78.27-1.45.18-1.59-.09-.14-.29-.22-.6-.37z"
    />
  </svg>
);

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919027070879?text=Hi%20Trippy%20Tales!%20I'm%20interested%20in%20your%20tour%20packages."
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform bg-transparent"
        whileTap={{ scale: 0.95 }}
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppOutlineLogo />
      </motion.a>

      {/* Phone Button with Dropdown */}
      <div className="relative inline-block" ref={dropdownRef}>
        <motion.button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md transition-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Call Us"
          aria-expanded={open}
          aria-haspopup="true"
        >
          <PhoneIcon size={18} />
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-gray-800 text-white rounded-lg shadow-lg p-3 space-y-2 text-sm min-w-[150px]"
              role="menu"
              aria-label="Call numbers"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">Call Us</span>
                <button onClick={() => setOpen(false)} aria-label="Close numbers">
                  <X size={14} />
                </button>
              </div>
              <a
                href="tel:+917906981852"
                className="block hover:bg-gray-700 px-2 py-1 rounded"
                onClick={() => setOpen(false)}
                role="menuitem"
              >
                📞 +91 79069 81852
              </a>
              <a
                href="tel:+919027070879"
                className="block hover:bg-gray-700 px-2 py-1 rounded"
                onClick={() => setOpen(false)}
                role="menuitem"
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
