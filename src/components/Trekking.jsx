// src/components/Trekking.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const treks = [
  {
    id: 'nag-tibba',
    title: 'Nag Tibba Trek',
    area: '(near Mussoorie)',
    duration: '2 days',
    level: 'Very easy, beginner-friendly',
    stay: 'Camping under the stars',
    guides: 'Local guides in Pantwari (base) easily available',
    bestFor: 'Weekend trip, families, first trek experience',
    images: [
       'https://i.pinimg.com/1200x/99/88/81/99888102c4ceb6eb562ba1005f33f965.jpg',
    ],
  },
  {
    id: 'deoriatal-tungnath-short',
    title: 'Deoriatal – Tungnath (short)',
    area: '(near Chopta)',
    duration: '1–2 days',
    level: 'Easy walk, gentle climbs',
    stay: 'Camping near the lake or homestays in Chopta',
    guides: 'Locals in Chopta provide guide, mule support if needed',
    bestFor: 'Beautiful lake view, option to visit Tungnath temple',
    images: [
      'https://i.pinimg.com/1200x/de/2d/bf/de2dbf5cab2167d1443f6c596bdf3022.jpg',
    ],
  },
  {
    id: 'chopta-tungnath-chandrashila',
    title: 'Chopta – Tungnath – Chandrashila (mini)',
    area: '(Chopta region)',
    duration: '1 full day',
    level: 'Easy to moderate (fitness dependent)',
    stay: 'Homestays in Chopta (no camping needed)',
    guides: 'Every homestay in Chopta can arrange a local guide',
    bestFor: 'Short trek, spiritual visit, Himalayan sunrise',
    images: [
      'https://i.pinimg.com/1200x/8d/4d/15/8d4d153523f5cda4c2c79456268806d0.jpg',
    ],
  },
];

export default function Trekking() {
  const trackRef = useRef(null);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.trek-card');
    const cardWidth = card ? card.clientWidth : 320;
    const gap = 24; // matches gap-6
    const visible = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    const amount = (cardWidth + gap) * visible;
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section id="trekking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl font-bold text-gray-900">Trekking Packages</h2>
          <p className="text-gray-600 mt-4">
            Weekend‑friendly, beginner‑safe treks with local guide options and flexible stays
          </p>
        </motion.div>

        <div className="relative">
          {/* Overlay arrows */}
          <button
            onClick={() => scrollByCards(-1)}
            aria-label="Previous treks"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 shadow border border-gray-200 text-gray-800 hover:bg-white"
          >
            ‹
          </button>
          <button
            onClick={() => scrollByCards(1)}
            aria-label="Next treks"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/90 shadow border border-gray-200 text-gray-800 hover:bg-white"
          >
            ›
          </button>

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

          {/* Slider track */}
          <div
            ref={trackRef}
            className="
              flex gap-6 overflow-x-auto pb-2 scroll-smooth
              snap-x snap-mandatory overscroll-x-contain
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {treks.map((t, idx) => (
              <motion.article
                key={t.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="
                  trek-card snap-start shrink-0 w-80 md:w-96
                  bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow
                "
              >
                <div className="relative h-56 bg-gray-100">
                  {t.images && t.images.length > 0 ? (
                    <img
                      src={t.images[0]}
                      alt={`${t.title} ${t.area}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center text-gray-500">
                      Add an image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t.title} <span className="text-gray-500">{t.area}</span>
                  </h3>

                  <ul className="mt-3 space-y-1 text-sm text-gray-700">
                    <li><span className="font-medium">Duration:</span> {t.duration}</li>
                    <li><span className="font-medium">Level:</span> {t.level}</li>
                    <li><span className="font-medium">Stay:</span> {t.stay}</li>
                    <li><span className="font-medium">Guides:</span> {t.guides}</li>
                    <li><span className="font-medium">Best for:</span> {t.bestFor}</li>
                  </ul>

                  {/* Optional secondary images preview row */}
                  {t.images && t.images.length > 1 && (
                    <div className="mt-4 flex gap-2 overflow-x-auto">
                      {t.images.slice(1).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${t.title} preview ${i + 2}`}
                          className="h-14 w-20 rounded object-cover border"
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
