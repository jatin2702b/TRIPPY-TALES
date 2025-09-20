import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Helper to build Unsplash URLs with quality params
const up = (rawUrl, w = 3000) =>
  `${rawUrl}${rawUrl.includes('?') ? '&' : '?'}auto=format&fm=jpg&fit=max&w=${w}&q=85`

// Build a DPR-aware srcSet for crisp rendering on HiDPI screens
const makeSrcSet = (rawUrl) => {
  const base = rawUrl.includes('unsplash.com/') ? rawUrl : rawUrl
  const widths = [1200, 1800, 2400, 3000, 3600]
  return widths.map(w => `${up(base, w)} ${w}w`).join(', ')
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
    title: 'Discover Jim Corbett with Trippy Tales',
    subtitle: 'Your gateway to unforgettable wildlife adventures'
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    title: 'Explore Beautiful Nainital',
    subtitle: 'Experience the Queen of Hills'
  },
  {
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa',
    title: 'Munsyari Mountain Adventures',
    subtitle: 'Himalayan peaks and pristine valleys'
  },
  // Non-Unsplash sources: keep as-is, but try to use higher-res images when possible
  {
    image: 'https://i.pinimg.com/1200x/52/72/dd/5272dd7d02313daeb3f2deba7b2a19f3.jpg',
    title: 'Valley of Flowers Trek',
    subtitle: 'A paradise of alpine blooms and sacred lakes'
  },
  {
    image: 'https://i.pinimg.com/1200x/a2/ba/11/a2ba1187846201648cab1ccc53b67795.jpg',
    title: 'Tungnath & Chandrashila Trek',
    subtitle: 'Spiritual peaks with panoramic Himalayan views'
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // slightly longer to allow full-res images to load
    return () => clearInterval(timer)
  }, [])

  // Preload next slide image to avoid soft fade while it loads
  useEffect(() => {
    const next = (currentSlide + 1) % slides.length
    const img = new Image()
    const url = slides[next].image.includes('unsplash.com/')
      ? up(slides[next].image, 2400) // preload at decent width
      : slides[next].image
    img.src = url
  }, [currentSlide])

  // For the active slide, create responsive attributes
  const activeSrc = useMemo(() => {
    const url = slides[currentSlide].image
    if (url.includes('unsplash.com/')) return up(url, 3000)
    return url // external (pinimg) left as-is
  }, [currentSlide])

  const activeSrcSet = useMemo(() => {
    const url = slides[currentSlide].image
    if (url.includes('unsplash.com/')) return makeSrcSet(url)
    return undefined
  }, [currentSlide])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={activeSrc}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="sync"
            srcSet={activeSrcSet}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl px-4"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <button className="btn btn-primary text-lg px-8 py-4" aria-label="Book Your Adventure">
              Book Your Adventure
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation (optional). Remove if you don’t want arrows */}
      {/* 
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        onClick={() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        ←
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
        aria-label="Next slide"
      >
        →
      </button>
      */}
    </section>
  )
}

export default Hero
