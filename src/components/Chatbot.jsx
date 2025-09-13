// src/components/Chatbot.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const chatbotResponses = {
  greeting: [
    "Hello! Welcome to Trippy Tales! 🌟 How can I help you plan your perfect trip?",
    "Hi there! Ready for an adventure? Ask me about our destinations or packages!",
    "Welcome to Trippy Tales! 🏔️ I'm here to help you explore Uttarakhand!"
  ],
  destinations: [
    "We cover amazing destinations like Jim Corbett (Dhikuli, Ramnagar, Jhirna Range), Nainital, Bhimtal, Sattal, Munsyari, Kaichidham, and Corbett Falls! Which one interests you?",
    "Our top destinations include Jim Corbett National Park for wildlife, Nainital for lakes, and Munsyari for mountain adventures! What type of experience are you looking for?"
  ],
  packages: [
    "We offer fantastic packages! 📦 Our Jim Corbett Wildlife Safari (2D/1N) starts at ₹4,999 and Nainital Hill Station (3D/2N) at ₹5,999. Both include accommodation, meals, and activities!",
    "Our tour packages cover everything - accommodation, meals, activities, and transport! Would you like details about Jim Corbett Safari or Nainital packages?"
  ],
  booking: [
    "Booking is easy! 📞 Call us at 9027070879 or WhatsApp for instant booking. You can pay advance amount to secure your trip!",
    "To book your trip, contact us at 9027070879 or click the WhatsApp button! We accept advance payments to confirm your booking."
  ],
  contact: [
    "📞 Phone: 9027070879\n✉️ Email: trippytalesofficial@gmail.com\n📱 Instagram: @trippytales__official\n💬 WhatsApp us for quick response!",
    "You can reach us anytime! Call 9027070879, email trippytalesofficial@gmail.com, or follow us @trippytales__official on Instagram!"
  ],
  corbett: [
    "Jim Corbett is perfect for wildlife lovers! 🐅 We cover Dhikuli (luxury resorts), Ramnagar (main entrance), and Jhirna Range (open year-round). Safari, accommodation, and meals included!",
    "Jim Corbett National Park offers incredible wildlife experiences! Our package includes jeep safari, forest accommodation, and expert guides. Best time: November to June!"
  ],
  nainital: [
    "Nainital is the Queen of Hills! 🏔️ Our package includes Naini Lake boating, Mall Road shopping, cable car rides, and visits to Bhimtal & Sattal. Perfect for families!",
    "Nainital package covers beautiful lakes, mountain views, and local sightseeing! We include hotel stay, meals, and transportation. Great for couples and families!"
  ],
  price: [
    "Our packages are very affordable! Jim Corbett Safari: ₹4,999 (advance ₹1,500), Nainital Hills: ₹5,999 (advance ₹1,800). Prices include everything!",
    "We offer competitive pricing with no hidden costs! Jim Corbett ₹4,999, Nainital ₹5,999. Pay small advance to book, rest on arrival!"
  ],
  default: [
    "I'd love to help you plan your trip! Ask me about our destinations, packages, prices, or booking process. Or contact us directly at 9027070879! 😊",
    "I'm here to help with your travel plans! You can ask about Jim Corbett, Nainital, prices, booking, or anything else. Ready to explore Uttarakhand?",
    "Great question! For detailed information, please call us at 9027070879 or WhatsApp. Our team will help you plan the perfect trip! 🎯"
  ]
}

const quickReplies = [
  "Show destinations 🏔️",
  "Tour packages 📦",
  "Prices 💰",
  "Book now 📞",
  "Jim Corbett 🐅",
  "Nainital 🏞️",
  "Contact info 📱"
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! I'm your Trippy Tales travel assistant! 🌟 Ask me about destinations, packages, or booking!",
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }
  ])
  const [inputText, setInputText] = useState('')

  const getResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)]
    }
    if (message.includes('destination') || message.includes('place') || message.includes('where')) {
      return chatbotResponses.destinations[Math.floor(Math.random() * chatbotResponses.destinations.length)]
    }
    if (message.includes('package') || message.includes('tour') || message.includes('trip')) {
      return chatbotResponses.packages[Math.floor(Math.random() * chatbotResponses.packages.length)]
    }
    if (message.includes('book') || message.includes('reservation') || message.includes('reserve')) {
      return chatbotResponses.booking[Math.floor(Math.random() * chatbotResponses.booking.length)]
    }
    if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
      return chatbotResponses.contact[Math.floor(Math.random() * chatbotResponses.contact.length)]
    }
    if (message.includes('corbett') || message.includes('safari') || message.includes('wildlife')) {
      return chatbotResponses.corbett[Math.floor(Math.random() * chatbotResponses.corbett.length)]
    }
    if (message.includes('nainital') || message.includes('lake') || message.includes('hill')) {
      return chatbotResponses.nainital[Math.floor(Math.random() * chatbotResponses.nainital.length)]
    }
    if (message.includes('price') || message.includes('cost') || message.includes('₹')) {
      return chatbotResponses.price[Math.floor(Math.random() * chatbotResponses.price.length)]
    }
    return chatbotResponses.default[Math.floor(Math.random() * chatbotResponses.default.length)]
  }

  const handleSendMessage = (text = inputText) => {
    if (!text.trim()) return

    const userMessage = {
      type: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }

    const botResponse = {
      type: 'bot',
      text: getResponse(text),
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }

    setMessages(prev => [...prev, userMessage, botResponse])
    setInputText('')
  }

  const handleQuickReply = (reply) => {
    handleSendMessage(reply)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="fixed bottom-6 left-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl">🤖</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-24 left-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Trippy Tales Bot</h3>
                <p className="text-xs opacity-80">Online now</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                      {message.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="p-2 border-t overflow-x-auto">
              <div className="flex space-x-2 pb-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs whitespace-nowrap transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
