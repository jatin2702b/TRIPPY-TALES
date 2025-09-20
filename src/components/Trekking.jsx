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
    images: ['https://i.pinimg.com/1200x/99/88/81/99888102c4ceb6eb562ba1005f33f965.jpg'],
  },
  {
    id: 'deoriatal-tungnath',
    title: 'Deoriatal – Tungnath',
    area: '(near Chopta)',
    duration: '1–2 days',
    level: 'Easy walk, gentle climbs',
    stay: 'Camping near the lake or homestays in Chopta',
    guides: 'Locals in Chopta provide guide, mule support if needed',
    bestFor: 'Beautiful lake view, option to visit Tungnath temple',
    images: ['https://i.pinimg.com/1200x/de/2d/bf/de2dbf5cab2167d1443f6c596bdf3022.jpg'],
  },
  {
    id: 'chopta-tungnath-chandrashila',
    title: 'Chopta, Tungnath-Chandrashila',
    area: '(Chopta)',
    duration: '1 full day',
    level: 'Easy to moderate (fitness dependent)',
    stay: 'Homestays in Chopta (no camping needed)',
    guides: 'Every homestay in Chopta can arrange a local guide',
    bestFor: 'Short trek, spiritual visit, Himalayan sunrise',
    images: ['https://i.pinimg.com/1200x/8d/4d/15/8d4d153523f5cda4c2c79456268806d0.jpg'],
  },
  {
    id: 'naina-peak',
    title: 'Naina Peak Trek',
    area: '(Nainital)',
    duration: '1 day',
    level: 'Easy, beginner-friendly',
    stay: 'Hotels/homestays in Nainital (day hike)',
    guides: 'Optional; well-marked forest trail',
    bestFor: 'Highest point in Nainital, panoramic lake & Himalayan views',
    images: ['https://i.pinimg.com/736x/41/b0/53/41b053a8e248e9f022ef1619472fb43f.jpg'],
    notes: 'Approx 6 km climb to ~2,615 m; also called China/Cheena Peak',
  },
  {
    id: 'valley-of-flowers',
    title: 'Valley of Flowers + Hemkund (optional)',
    area: '(Govindghat–Ghangaria)',
    duration: '4–6 days (trekking 3–4 days)',
    level: 'Moderate (Hemkund day is steep)',
    stay: 'Lodges in Gangharia',
    guides: 'Available at Govindghat/Ghangaria',
    bestFor: 'Alpine meadows, 600+ flower species, sacred Hemkund lake',
    images: ['https://i.pinimg.com/736x/81/85/50/818550200b38ff8b8268e8cc2bad74b8.jpg'],
    notes: 'Start at Govindghat → Ghangaria; best July–Sept; Hemkund ~4,300 m climb day',
  },
  {
    id: 'rudranath',
    title: 'Rudranath Trek (Panch Kedar)',
    area: '(Chamoli, via Sagar / Panar Bugyal)',
    duration: '3–5 days (on foot)',
    level: 'Moderate to tough',
    stay: 'Camps/Basic lodges en route (Panar Bugyal, etc.)',
    guides: 'Local guides from Sagar/Gopeshwar available',
    bestFor: 'Meadows, ridge walks, sacred Rudranath temple',
    images: ['https://i.pinimg.com/1200x/39/c2/ae/39c2aeed1e41aa29437aa196159d912a.jpg'],
    notes: 'Popular via Sagar → Panar Bugyal → Rudranath; long walking days at altitude',
  },
  {
    id: 'kedarnath',
    title: 'Kedarnath Trek (Yatra)',
    area: '(Gaurikund-Kedarnath)',
    duration: '1–2 days (one-way 6–8 hrs)',
    level: 'Moderate (continuous ascent)',
    stay: 'Lodges/tents at Kedarnath or base camps',
    guides: 'Available at Gaurikund; ponies/palkis/porters/heli options',
    bestFor: 'Spiritual pilgrimage with high-altitude Himalayan views',
    images: ['https://i.pinimg.com/1200x/5c/da/2b/5cda2b99127c7afa6e1e2b6b08efd217.jpg'],
    notes: 'Approx 16 km to ~3,583 m; best May–Jun & Sep–Oct; start early for weather and crowd',
  },
];

export default function Trekking() {
  const trackRef = useRef(null);

  return (
    <section id="trekking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
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
          {/* Native momentum + snap, no JS drag */}
          <div
            ref={trackRef}
            style={{ WebkitOverflowScrolling: 'touch' }} /* iOS momentum */ /* [web:58] */
            className="
              flex gap-6 overflow-x-auto pb-2
              snap-x snap-proximity scroll-smooth overscroll-x-contain
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
              select-none touch-pan-x
              will-change-scroll
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
                  bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow
                "
              >
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  {t.images?.length ? (
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
                    {t.notes && <li className="text-gray-600">{t.notes}</li>}
                  </ul>

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
