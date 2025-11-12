// src/components/Chatbot.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const chatbotResponses = {
  greeting: [
    "Hello! Welcome to tripyy tales! 🌟 How can I help plan the next Uttarakhand getaway?",
    "Hi there! Ready for an adventure with tripyy tales? Ask about destinations, treks, or packages!",
    "Welcome to tripyy tales! 🏔️ From Corbett safaris to Himalayan treks, how can I help today?"
  ],
  destinations: [
    "We cover Jim Corbett (Dhikuli, Ramnagar, Jhirna Range), Nainital–Bhimtal–Sattal, Mussoorie–Landour, Chopta, Rishikesh, Almora (Jageshwar Dham), plus Valley of Flowers and more. Which one interests you? 😊",
    "Top picks: Corbett for wildlife, Nainital/Bhimtal for lakes, Mussoorie–Landour for café walks, Chopta for Tungnath–Chandrashila, Rishikesh for yoga & rafting, Almora for heritage, and Valley of Flowers in bloom July–Sept. Where to? 🗺️"
  ],
  packages: [
    "Our packages include stay, select meals, activities, and on-ground support. Popular: Corbett Wildlife (2D/1N), Nainital Lakes (3D/2N), Rishikesh Rafting+Stay, and Chopta–Tungnath day trips. Want a custom plan?",
    "We plan end-to-end: hotels/resorts, transfers, permits, guides, and activities. Tell me dates, group size, and preferred vibe (wildlife, lakes, trek, spiritual), and I’ll draft options!"
  ],
  booking: [
    "Booking is easy! 📞 Call/WhatsApp 9027070879 to reserve. A small advance confirms your plan; we share vouchers and a detailed itinerary.",
    "To book, ping 9027070879 on WhatsApp or call directly. We’ll confirm slots (hotel/safari/trek), take a token advance, and send your plan."
  ],
  contact: [
    "📞 9027070879\n✉️ trippytalesofficial@gmail.com\n📸 Instagram: @trippytales__official\n💬 WhatsApp us for the fastest response!",
    "Reach us anytime: 9027070879 (call/WhatsApp), trippytalesofficial@gmail.com, Instagram @trippytales__official. We’ll respond quickly!"
  ],
  corbett: [
    "Corbett is perfect for wildlife lovers! 🐅 We serve Dhikuli (resorts), Ramnagar (main gate), and Jhirna Range (open year-round). Ask for jeep safari + stay combos.",
    "Corbett packages include safari assistance, comfortable stays, and local support. Best window: Nov–Jun for sightings; Jhirna open most of the year. Want dates?"
  ],
  lakes: [
    "Nainital–Bhimtal–Sattal are great for lake views, boating, ropeway, cafés, and calm stays. Easy add-ons: Naina Peak hike and nearby viewpoints!",
    "For lakes: stay in Nainital or Bhimtal, do Naini Lake boating, Sattal/Khurpatal visits, Cable Car, Mall Road. Perfect for couples/families."
  ],
  treks: [
    "Popular treks: Naina Peak (easy day hike), Chopta–Tungnath–Chandrashila (easy–moderate), Valley of Flowers + Hemkund (moderate, Jul–Sept), and Kedarnath/Rudranath spiritual treks (moderate to tough). Want fitness-based picks?",
    "Short treks: Naina Peak, Chopta–Tungnath. Multi-day: Valley of Flowers + Hemkund (via Ghangaria). Spiritual: Kedarnath, Rudranath. We arrange stays, guides, transfers."
  ],
  vof: [
    "Valley of Flowers blooms Jul–Sept. Base at Ghangaria, day trek to the valley, optional Hemkund Sahib (steep, ~4,300 m). We manage stays, permits, porter/pony if needed.",
    "For Valley of Flowers: arrive Govindghat → Ghangaria base → valley day(s), optional Hemkund. Best months Jul–Sept. Want a 4–6 day plan?"
  ],
  kedarnath: [
    "Kedarnath trek is ~16 km from Gaurikund, moderate with continuous ascent. Options: ponies/palkis/heli (subject to availability). Best May–Jun & Sep–Oct.",
    "Kedarnath yatra support: stays, transfers, and on-ground assistance. Start early for weather and crowd. Share dates and group size for options."
  ],
  rudranath: [
    "Rudranath (Panch Kedar) via Sagar & Panar Bugyal—meadows and ridge walks with temple darshan. Moderate to tough, best with a local guide.",
    "Rudranath plans include logistics, guides, and flexible pacing. Good for fit trekkers seeking a serene, spiritual trail."
  ],
  price: [
    "Pricing depends on dates, group size, hotel category, and activities. Share basics and I’ll quote options. We keep it transparent—no hidden costs.",
    "We offer competitive, clear pricing with inclusions listed upfront. Tell me dates, guests, and destination to share exact quotes."
  ],
  default: [
    "Tell me what’s on your mind: destinations, treks, prices, or booking. Or WhatsApp us at 9027070879 for a quick plan! 😊",
    "I can help with Corbett safaris, lake stays, treks (Naina Peak, Chopta, Valley of Flowers, Kedarnath, Rudranath) and more. What would you like to explore?",
    "Share your dates, group size, and preferred experience (wildlife, lakes, trek, spiritual). I’ll suggest great options right away!"
  ]
}

const quickReplies = [
  "Show destinations 🗺️",
  "Treks & hikes 🥾",
  "Corbett safari 🐅",
  "Lakes trip 🚤",
  "Valley of Flowers 🌸",
  "Kedarnath yatra 🛕",
  "Prices & quotes 💰",
  "Book now 📞",
  "Contact info 📱"
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! I’m your tripyy tales assistant. Ask me about Corbett safaris, lakes trips, treks (Naina Peak, Chopta, Valley of Flowers, Kedarnath, Rudranath), pricing, or booking! 🌟",
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }
  ])
  const [inputText, setInputText] = useState('')

  const routeQuickReply = (text) => {
    const msg = text.toLowerCase()
    if (msg.includes('destination')) return 'destinations'
    if (msg.includes('trek') || msg.includes('hike')) return 'treks'
    if (msg.includes('corbett') || msg.includes('safari')) return 'corbett'
    if (msg.includes('lake') || msg.includes('nainital') || msg.includes('bhimtal') || msg.includes('sattal')) return 'lakes'
    if (msg.includes('valley')) return 'vof'
    if (msg.includes('kedarnath')) return 'kedarnath'
    if (msg.includes('price') || msg.includes('quote') || msg.includes('₹')) return 'price'
    if (msg.includes('book')) return 'booking'
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('whatsapp')) return 'contact'
    return null
  }

  const getResponse = (userMessage) => {
    const m = userMessage.toLowerCase()

    // quick route for new topics
    const routed = routeQuickReply(m)
    if (routed && chatbotResponses[routed]) {
      const arr = chatbotResponses[routed]
      return arr[Math.floor(Math.random() * arr.length)]
    }

    // generic matching
    if (m.includes('hello') || m.includes('hi') || m.includes('hey')) {
      const arr = chatbotResponses.greeting
      return arr[Math.floor(Math.random() * arr.length)]
    }
    if (m.includes('destination') || m.includes('place') || m.includes('where')) {
      const arr = chatbotResponses.destinations
      return arr[Math.floor(Math.random() * arr.length)]
    }
    if (m.includes('trek') || m.includes('hike') || m.includes('trail')) {
      const arr = chatbotResponses.treks
      return arr[Math.floor(Math.random() * arr.length)]
    }
    if (m.includes('package') || m.includes('tour') || m.includes('trip')) {
      const arr = chatbotResponses.packages
      return arr[Math.floor(Math.random() * arr.length)]
    }
    if (m.includes('book') || m.includes('reservation') || m.includes('reserve')) {
      const arr = chatbotResponses.booking
      return arr[Math.floor(Math.random() * arr.length)]
    }
    if (m.includes('contact') || m.includes('phone') || m.includes('email') || m.includes('whatsapp')) {
      const arr = chatbotResponses.contact
      return arr[Math.floor(Math.random() * arr.length)]
    }
    if (m.includes('corbett') || m.includes('safari') || m.includes('wildlife')) {
      const arr = chatbotResponses.corbett
      return arr[Math.floor(Math.random() * arr.length)]
    }
    if (m.includes('lake') || m.includes('nainital') || m.includes('bhimtal') || m.includes('sattal')) {
      const arr = chatbotResponses.lakes
      return arr[Math.floor(Math.random() * arr.length)]
    }
    if (m.includes('valley')) {
      const arr = chatbotResponses.vof
      return arr[Math.floor(Math.random() * arr.length)]
    }
    if (m.includes('kedarnath')) {
      const arr = chatbotResponses.kedarnath
      return arr[Math.floor(Math.random() * arr.length)]
    }
    if (m.includes('rudranath')) {
      const arr = chatbotResponses.rudranath
      return arr[Math.floor(Math.random() * arr.length)]
    }
    if (m.includes('price') || m.includes('cost') || m.includes('₹') || m.includes('quote')) {
      const arr = chatbotResponses.price
      return arr[Math.floor(Math.random() * arr.length)]
    }
    const arr = chatbotResponses.default
    return arr[Math.floor(Math.random() * arr.length)]
  }

  const handleSendMessage = (text = inputText) => {
    if (!text.trim()) return

    const userMessage = {
      type: 'user',
      text,
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
  aria-label="Open chat"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
   <path d="M7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H7Zm0 4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H7Z" />
   <path fillRule="evenodd" d="M12 3C6.477 3 2 6.94 2 11.8c0 1.88.66 3.63 1.8 5.04-.19 1.07-.6 2.26-1.3 3.43a.75.75 0 0 0 .95 1.08c1.93-.56 3.39-1.3 4.43-2.02A12.7 12.7 0 0 0 12 20.6c5.523 0 10-3.94 10-8.8S17.523 3 12 3Zm-8.5 8.8c0-4.07 3.82-7.3 8.5-7.3s8.5 3.23 8.5 7.3-3.82 7.3-8.5 7.3c-1.3 0-2.54-.22-3.67-.63a.75.75 0 0 0-.58.05c-.8.47-1.92 1.06-3.43 1.6.47-.95.78-1.9.95-2.78a.75.75 0 0 0-.17-.62c-1-1.17-1.55-2.6-1.55-4Z" clipRule="evenodd" />
  </svg>
</motion.button>


      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-24 left-6 w-80 h-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden"
            role="dialog"
            aria-label="tripyy tales chat"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">tripyy tales Bot</h3>
                <p className="text-xs opacity-80">Online now</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center"
                aria-label="Close chat"
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
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Message"
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
