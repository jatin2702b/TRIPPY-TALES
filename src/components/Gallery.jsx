import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&w=1600&auto=format&fit=crop&q=80', alt: 'Tiger in Jim Corbett National Park' },
  { src: 'https://i.pinimg.com/1200x/f8/7c/da/f87cda1bb71c2e344d529473a6551c84.jpg', alt: 'Nainital Lake panoramic view' },
  { src: 'https://i.pinimg.com/736x/db/db/5e/dbdb5ec46f0367cf04d395c033aac29d.jpg', alt: 'Himalayan mountain scenery in Uttarakhand' },
  { src: 'https://i.pinimg.com/1200x/5b/54/fd/5b54fdad18dc4b1089baa9cfbb815dfc.jpg', alt: 'Wildlife safari inside Jim Corbett forest' },
  { src: 'https://i.pinimg.com/736x/83/b7/ff/83b7ff763a40f8722174fc28d8ca98bf.jpg', alt: 'Ancient temple view in Uttarakhand' },
  { src: 'https://i.pinimg.com/1200x/3c/6d/00/3c6d00696ee4ffb7cf5df979d82bc486.jpg', alt: 'Corbett waterfall in dense forest' },
];

export function Gallery() {
  const sliderRef = useRef(null);

  const scrollByAmount = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cardWidth = slider.firstChild?.getBoundingClientRect().width || 288;
    const gap = 16;
    const amount = direction === 'left' ? -(cardWidth + gap) : cardWidth + gap;
    slider.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gray-50"
      aria-labelledby="gallery-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2
            id="gallery-heading"
            className="text-4xl font-bold text-gray-900"
          >
            Photo Gallery
          </h2>
          <p className="text-gray-600 mt-2">
            Swipe to explore the beauty of Uttarakhand & Jim Corbett
          </p>
        </motion.div>

        {/* Horizontal slider with arrows and scroll snap */}
        <div className="relative">
          {/* Desktop arrows */}
          <button
            onClick={() => scrollByAmount('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-gray-800 shadow-lg items-center justify-center hover:bg-white"
            aria-label="Scroll gallery left"
          >
            ‹
          </button>

          <button
            onClick={() => scrollByAmount('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-gray-800 shadow-lg items-center justify-center hover:bg-white"
            aria-label="Scroll gallery right"
          >
            ›
          </button>

          {/* Mobile arrows */}
          <div className="md:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between z-20 pointer-events-none">
            <button
              onClick={() => scrollByAmount('left')}
              className="pointer-events-auto ml-1 w-8 h-8 rounded-full bg-white/90 text-gray-800 shadow flex items-center justify-center"
              aria-label="Scroll gallery left"
            >
              ‹
            </button>
            <button
              onClick={() => scrollByAmount('right')}
              className="pointer-events-auto mr-1 w-8 h-8 rounded-full bg-white/90 text-gray-800 shadow flex items-center justify-center"
              aria-label="Scroll gallery right"
            >
              ›
            </button>
          </div>

          <div
            ref={sliderRef}
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'manipulation',
            }}
            className="
              flex gap-4 overflow-x-auto overflow-y-hidden pb-2
              snap-x snap-proximity scroll-smooth
              overscroll-x-contain overscroll-y-auto
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
            role="list"
            aria-label="Travel Gallery Images"
          >
            {galleryImages.map((image, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="
                  snap-center snap-always
                  shrink-0 w-72 md:w-96
                  relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow
                  bg-gray-100
                "
                role="listitem"
              >
                <figure>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-56 md:h-64 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="sr-only">{image.alt}</figcaption>
                </figure>

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
