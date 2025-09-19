import { useRef } from 'react'
import { motion } from 'framer-motion'

const destinations = [
  {
    name: 'Dhikuli',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/2b/be/d5/d6/caption.jpg',
    description: 'Gateway to Jim Corbett with luxury resorts and wildlife experiences'
  },
  {
    name: 'Ramnagar',
    image: 'https://www.corbettnationalpark.in/blog/wp-content/uploads/2021/02/kosi-river1.jpg',
    description: 'Main entrance to Jim Corbett National Park'
  },
  {
    name: 'Jhirna Range',
    image: 'https://www.tusktravel.com/blog/wp-content/uploads/2021/03/Jim-Corbett-National-Park.jpg',
    description: 'Open year-round for wildlife safaris and bird watching'
  },
  {
    name: 'Corbett Falls',
    image: 'https://www.tejomayaresorts.com/wp-content/uploads/2024/01/Corbett-waterfall-jim-corbett.jpg',
    description: 'Beautiful waterfall surrounded by dense forest'
  },
  {
    name: 'Nainital',
    image: 'https://i.pinimg.com/736x/8e/c7/f3/8ec7f3401d3999a071cdaa85a19ce606.jpg',
    description: 'Queen of Hills with beautiful Naini Lake'
  },
  {
    name: 'Bhimtal',
    image: 'https://imgs.search.brave.com/Dzdt36hFU-WAX43uj-1lZIGnXyvspO1MwgbGtU_fPAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MmMvMGUvYzYvNTkv/aXNsYW5kLWluLWJo/aW10YWwtbGFrZS5q/cGc',
    description: 'Serene lake town perfect for peaceful getaways'
  }
]

export function Destinations() {
  const trackRef = useRef(null)

  const scrollByCards = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('.destination-card')
    const cardWidth = card ? card.clientWidth : 320
    const gap = 24 // gap-6
    const visible = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3
    const amount = (cardWidth + gap) * visible
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Centered title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Destinations</h2>
        </motion.div>

        <div className="relative">
          {/* Left/Right overlay arrows like Netflix */}
          <button
            onClick={() => scrollByCards(-1)}
            aria-label="Previous"
            className="
              absolute left-2 top-1/2 -translate-y-1/2 z-10
              h-10 w-10 md:h-12 md:w-12 rounded-full
              bg-white/90 shadow border border-gray-200
              text-gray-800 hover:bg-white
            "
          >
            ‹
          </button>
          <button
            onClick={() => scrollByCards(1)}
            aria-label="Next"
            className="
              absolute right-2 top-1/2 -translate-y-1/2 z-10
              h-10 w-10 md:h-12 md:w-12 rounded-full
              bg-white/90 shadow border border-gray-200
              text-gray-800 hover:bg-white
            "
          >
            ›
          </button>

          {/* Optional edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-50 to-transparent" />

          {/* Slider track with scroll snap */}
          <div
            ref={trackRef}
            className="
              flex gap-6 overflow-x-auto pb-2 scroll-smooth
              snap-x snap-mandatory
              overscroll-x-contain
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name + index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="
                  destination-card snap-start shrink-0
                  w-72 md:w-80 bg-white rounded-xl overflow-hidden shadow
                  hover:shadow-lg transition-shadow
                "
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{destination.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {destination.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Default export
export default Destinations
