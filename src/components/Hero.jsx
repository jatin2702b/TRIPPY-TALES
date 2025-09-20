import { useState, useEffect, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'

// Helper to build Unsplash URLs with quality params
const up = (rawUrl, w = 3000) =>
  `${rawUrl}${rawUrl.includes('?') ? '&' : '?'}auto=format&fm=jpg&fit=max&w=${w}&q=85`

// Build a DPR-aware srcSet for crisp rendering on HiDPI screens
const makeSrcSet = (rawUrl) => {
  const widths = [1200, 1800, 2400, 3000, 3600]
  return widths.map(w => `${up(rawUrl, w)} ${w}w`).join(', ')
}

const slides = [
  { image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801', title: 'Discover Jim Corbett with Trippy Tales', subtitle: 'Your gateway to unforgettable wildlife adventures' },
  { image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4', title: 'Explore Beautiful Nainital', subtitle: 'Experience the Queen of Hills' },
  { image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa', title: 'Munsyari Mountain Adventures', subtitle: 'Himalayan peaks and pristine valleys' },
  { image: 'https://i.pinimg.com/1200x/52/72/dd/5272dd7d02313daeb3f2deba7b2a19f3.jpg', title: 'Valley of Flowers Trek', subtitle: 'A paradise of alpine blooms and sacred lakes' },
  { image: 'https://i.pinimg.com/1200x/a2/ba/11/a2ba1187846201648cab1ccc53b67795.jpg', title: 'Tungnath & Chandrashila Trek', subtitle: 'Spiritual peaks with panoramic Himalayan views' }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(0)
  const timerRef = useRef(null)

  // Initialize prevSlide to currentSlide (prevents any initial mismatch)
  useEffect(() => {
    setPrevSlide(0)
  }, [])

  // Stable autoplay: updates prevSlide (leaving) then advances currentSlide
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => {
        setPrevSlide(prev)               // the one we are leaving
        const next = (prev + 1) % slides.length
        return next
      })
    }, 6000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  // Preload next image
  useEffect(() => {
    const next = (currentSlide + 1) % slides.length
    const img = new Image()
    const url = slides[next].image.includes('unsplash.com/')
      ? up(slides[next].image, 2400)
      : slides[next].image
    img.src = url
  }, [currentSlide])

  // Active/current image
  const activeSrc = useMemo(() => {
    const url = slides[currentSlide].image
    return url.includes('unsplash.com/') ? up(url, 3000) : url
  }, [currentSlide])

  const activeSrcSet = useMemo(() => {
    const url = slides[currentSlide].image
    return url.includes('unsplash.com/') ? makeSrcSet(url) : undefined
  }, [currentSlide])

  // Previous image for crossfade
  const prevSrc = useMemo(() => {
    const url = slides[prevSlide].image
    return url.includes('unsplash.com/') ? up(url, 3000) : url
  }, [prevSlide])

  const prevSrcSet = useMemo(() => {
    const url = slides[prevSlide].image
    return url.includes('unsplash.com/') ? makeSrcSet(url) : undefined
  }, [prevSlide])

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Crossfade stack: bottom (prev), top (current fading in) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <img
            src={prevSrc}
            alt={slides[prevSlide].title}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="sync"
            srcSet={prevSrcSet}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          key={`fade-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
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
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <motion.div
          key={`content-${currentSlide}`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl px-4"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <button className="btn btn-primary text-lg px-8 py-4" aria-label="Book Your Adventure">
              Book Your Adventure
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
