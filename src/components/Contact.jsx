import { motion } from 'framer-motion'

// Professional SVG Icons
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.467 3.488"/>
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const ChatbotIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1.5c.604 0 1.083-.483 1.083-1.077v-4.946C6.583 11.483 6.104 11 5.5 11H4c-.26 0-.5.042-.5.097C3.5 6.486 7.486 3 12 3s8.5 3.486 8.5 8.097c0-.055-.24-.097-.5-.097h-1.5c-.604 0-1.083.483-1.083 1.077v4.946c0 .594.479 1.077 1.083 1.077H20c1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"/>
    <circle cx="8.5" cy="12.5" r="1.5"/>
    <circle cx="15.5" cy="12.5" r="1.5"/>
  </svg>
)

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">Ready for your next adventure? Contact us through any of these channels!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Phone */}
            <motion.div 
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <PhoneIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone Call</h3>
                <p className="text-blue-600 font-medium">9027070879</p>
                <p className="text-gray-500 text-sm">Call us anytime for instant booking</p>
              </div>
            </motion.div>
            
            {/* WhatsApp */}
            <motion.div 
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => window.open('https://wa.me/919027070879?text=Hi%20Trippy%20Tales!%20I\'m%20interested%20in%20your%20tour%20packages.', '_blank')}
            >
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white">
                <WhatsAppIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <p className="text-green-600 font-medium">9027070879</p>
                <p className="text-gray-500 text-sm">Quick response guaranteed!</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div 
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => window.open('mailto:trippytalesofficial@gmail.com', '_blank')}
            >
              <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white">
                <EmailIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-red-600 font-medium">trippytalesofficial@gmail.com</p>
                <p className="text-gray-500 text-sm">Send us detailed inquiries</p>
              </div>
            </motion.div>
            
            {/* Instagram */}
            <motion.div 
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => window.open('https://instagram.com/trippytales__official', '_blank')}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                <InstagramIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Instagram</h3>
                <p className="text-purple-600 font-medium">@trippytales__official</p>
                <p className="text-gray-500 text-sm">Follow for travel inspiration</p>
              </div>
            </motion.div>

            {/* Chatbot */}
            <motion.div 
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                <ChatbotIcon />
              </div>
              <div>
                <h3 className="font-semibold text-lg">AI Travel Assistant</h3>
                <p className="text-blue-600 font-medium">Chat with our Bot</p>
                <p className="text-gray-500 text-sm">Available 24/7 for instant help</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Your Preferred Destination</option>
                <option value="corbett">🐅 Jim Corbett (Dhikuli/Ramnagar/Jhirna)</option>
                <option value="nainital">🏔️ Nainital - Queen of Hills</option>
                <option value="bhimtal">🏞️ Bhimtal Lake</option>
                <option value="sattal">🌊 Sattal - Seven Lakes</option>
                <option value="munsyari">⛰️ Munsyari Mountains</option>
                <option value="kaichidham">🙏 Kaichidham Temple</option>
                <option value="corbett-falls">💧 Corbett Falls</option>
                <option value="complete">🌟 Complete Uttarakhand Tour</option>
              </select>
              <input
                type="number"
                placeholder="Number of Travelers"
                min="1"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <textarea
                placeholder="Tell us about your dream trip! Any special requirements, preferences, or questions?"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                🚀 Send Message & Start Planning!
              </motion.button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                Or contact us directly for immediate assistance!
              </p>
              <div className="flex justify-center space-x-4 mt-3">
                <motion.a
                  href="tel:+919027070879"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  📞 Call Now
                </motion.a>
                <motion.a
                  href="https://wa.me/919027070879?text=Hi%20Trippy%20Tales!%20I'm%20interested%20in%20your%20tour%20packages."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  💬 WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white"
        >
          <h3 className="text-2xl font-bold mb-2">Ready for an Adventure?</h3>
          <p className="text-lg opacity-90 mb-4">
            Join thousands of happy travelers who chose Trippy Tales for their perfect getaway!
          </p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-yellow-300">⭐⭐⭐⭐⭐</span>
            <span className="font-semibold">4.9/5 Customer Rating</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
