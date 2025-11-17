import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CorporateShowMore() {
  const [show, setShow] = useState(false);

  return (
    <section id="corporateshowmore" className="max-w-3xl mx-auto px-4 mt-12 py-8 bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-lg text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
        Corporate Travel Experiences
      </h2>
      <p className="text-gray-600 mb-6 text-base sm:text-lg">
        Transform your team’s offsite into an unforgettable experience — bonding, adventure, and relaxation in Jim Corbett & Uttarakhand.
      </p>

      {!show && (
        <button
          onClick={() => setShow(true)}
          className="mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          Explore Corporate Perks
        </button>
      )}

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8 text-left space-y-6"
          >
            {/* What We Offer */}
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">What We Offer</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-1">
                <li>Fully Managed Corporate Retreats</li>
                <li>Team-Building & Leadership Workshops</li>
                <li>Adventure & Wellness Activities</li>
                <li>Custom Offsite Itineraries</li>
                <li>Executive Travel Support</li>
              </ul>
            </div>

            {/* Why Tripyy Tales */}
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Why Tripyy Tales?</h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base space-y-1">
                <li>Dedicated Travel Coordinator</li>
                <li>Verified Stays & Safe Travel</li>
                <li>Flexible Dates & Custom Packages</li>
                <li>On-Ground Support 24/7</li>
                <li>Seamless Booking & Logistics</li>
              </ul>
            </div>

            {/* Brochure */}
            <div className="text-center">
              <p className="text-gray-700 mb-3">Get the full brochure to see everything we can do for your team.</p>
              <a
                href="Tripyy Tales bouchere (1) (1).pdf"
                download
                className="inline-block px-6 py-3 bg-black text-white rounded-xl font-medium shadow hover:scale-105 transition-transform"
              >
                Download Corporate Brochure
              </a>
            </div>

            {/* Show Less */}
            <div className="text-center mt-6">
              <button
                onClick={() => setShow(false)}
                className="px-5 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                Show Less
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
