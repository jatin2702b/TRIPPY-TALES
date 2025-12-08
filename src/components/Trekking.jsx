// src/components/Trekking.jsx
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const treks = [
  {
    id: 'nag-tibba',
    title: 'Nag Tibba Trek – Best Weekend Trek in Uttarakhand',
    area: 'Near Mussoorie & Dehradun, Uttarakhand',
    duration: '2 days / 1 night',
    level: 'Very easy, beginner-friendly',
    stay: 'Camping under the stars',
    guides: 'Local trekking guides in Pantwari (base village) easily available',
    bestFor: 'Short Uttarakhand trekking package, weekend trip, families, first trek experience',
    images: ['https://i.pinimg.com/1200x/99/88/81/99888102c4ceb6eb562ba1005f33f965.jpg'],
    details: {
      placeInfo:
        'Nag Tibba trek is one of the best weekend treks in Uttarakhand, starting from Pantwari village near Mussoorie and Dehradun and climbing through oak and rhododendron forests to a 3,000 m ridge with snow views in winter.', // [web:51][web:117][web:118]
      weather:
        'Best season for Nag Tibba trekking is October to June with cool days and cold nights; winters can bring snow on the upper trail while summers stay pleasant compared to the plains.', // [web:52][web:60][web:117]
      nearby:
        'You can combine Nag Tibba trek with sightseeing in Mussoorie, Kempty Falls and Dehradun attractions like Robber’s Cave and Tapkeshwar Mahadev temple for a complete Uttarakhand tour package.', // [web:51][web:117]
    },
  },
  {
    id: 'deoriatal-tungnath',
    title: 'Deoriatal to Tungnath Trek – Easy Uttarakhand Trek',
    area: 'Near Chopta, Rudraprayag, Uttarakhand',
    duration: '1–2 days',
    level: 'Easy walk, gentle climbs',
    stay: 'Camping near Deoriatal lake or homestays in Chopta',
    guides: 'Local mountain guides in Chopta provide guide and mule support if needed',
    bestFor: 'Beginner-friendly Uttarakhand trek with lake view and Tungnath temple visit',
    images: ['https://i.pinimg.com/1200x/de/2d/bf/de2dbf5cab2167d1443f6c596bdf3022.jpg'],
    details: {
      placeInfo:
        'Deoriatal trek takes you from Sari village to a high-altitude Himalayan lake with reflections of Chaukhamba and other snow peaks, and can be combined with Tungnath temple from Chopta.', // [web:53][web:61][web:108]
      weather:
        'Best time for Deoriatal and Chopta trek is April to June and September to November; winter brings snow around Chopta and Tungnath, making it a popular snow trek in Uttarakhand.', // [web:53][web:61][web:117]
      nearby:
        'Nearby places include Sari village, Chopta meadows, Tungnath temple, Chandrashila summit, Ukhimath and Guptkashi – perfect for a short Garhwal trekking itinerary.', // [web:53][web:61]
    },
  },
  {
    id: 'chopta-tungnath-chandrashila',
    title: 'Chopta Tungnath Chandrashila Trek – Classic Uttarakhand Trek',
    area: 'Chopta, Rudraprayag, Uttarakhand',
    duration: '1 full day (trek)',
    level: 'Easy to moderate (fitness dependent)',
    stay: 'Homestays and camps in Chopta (no camping needed on trail)',
    guides: 'Every homestay in Chopta can arrange a local trekking guide',
    bestFor: 'Short Himalayan trek, spiritual Tungnath visit, sunrise from Chandrashila',
    images: ['https://i.pinimg.com/1200x/8d/4d/15/8d4d153523f5cda4c2c79456268806d0.jpg'],
    details: {
      placeInfo:
        'Chopta Tungnath Chandrashila trek is a famous Uttarakhand trekking route that climbs from Chopta to Tungnath, one of the highest Shiva temples, and then to Chandrashila top for a 360° view of Nanda Devi, Trishul and Chaukhamba.', // [web:53][web:61][web:108]
      weather:
        'Best time for Chopta Chandrashila trek is spring and autumn for clear views; in winter, the route often has snow and becomes a popular snow trek in Uttarakhand from December to March.', // [web:53][web:61]
      nearby:
        'You can also cover Deoriatal, Dugalbitta, Sari village and nearby temples in Ukhimath while planning this Chopta trekking package.', // [web:61]
    },
  },
  {
    id: 'naina-peak',
    title: 'Naina Peak Trek – Highest Point in Nainital',
    area: 'Nainital, Kumaon, Uttarakhand',
    duration: '1 day',
    level: 'Easy, beginner-friendly',
    stay: 'Hotels and homestays in Nainital (day hike)',
    guides: 'Optional; well-marked forest trekking trail',
    bestFor: 'Short Nainital trek, lake views, Himalayan sunrise and sunset',
    images: ['https://i.pinimg.com/736x/41/b0/53/41b053a8e248e9f022ef1619472fb43f.jpg'],
    notes: 'Approx 6 km climb to ~2,615 m; also called Cheena Peak',
    details: {
      placeInfo:
        'Naina Peak trek is the highest viewpoint in Nainital and a popular short trek in Kumaon, starting from Mallital side and going through deodar and rhododendron forests to a broad summit ridge.', // [web:55][web:63]
      weather:
        'Best time for Naina Peak trekking is March to June and September to November; winters are cold but offer very clear Himalayan views on cloudless days.', // [web:55][web:63]
      nearby:
        'Nearby attractions include Naini Lake boating, Naina Devi Temple, Mall Road, Tiffin Top, Snow View Point and Eco Cave Gardens – ideal for a Nainital tour package.', // [web:55]
    },
  },
  {
    id: 'valley-of-flowers',
    title: 'Valley of Flowers Trek with Hemkund Sahib',
    area: 'Govindghat – Ghangaria, Chamoli, Uttarakhand',
    duration: '4–6 days',
    level: 'Moderate Himalayan trek (Hemkund day is steep)',
    stay: 'Guest houses and lodges in Ghangaria',
    guides: 'Trekking guides available at Govindghat and Ghangaria',
    bestFor: 'Valley of Flowers Uttarakhand trek, alpine meadows, Hemkund Sahib yatra',
    images: ['https://i.pinimg.com/736x/81/85/50/818550200b38ff8b8268e8cc2bad74b8.jpg'],
    notes: 'Best July–Sept; Hemkund ~4,300 m steep climb',
    details: {
      placeInfo:
        'Valley of Flowers trek is a UNESCO World Heritage Site in Uttarakhand, famous for colourful alpine meadows, waterfalls and rich Himalayan flora above the base village of Ghangaria.', // [web:56][web:116][web:125]
      weather:
        'Best time to visit Valley of Flowers is July to August for maximum blooming; June and September are also good months with clearer weather and fewer crowds.', // [web:56][web:114][web:122]
      nearby:
        'Nearby highlights include Ghangaria village, Hemkund Sahib lake and temple, Govindghat, Joshimath and Auli, which can be combined into a longer Uttarakhand tour.', // [web:114][web:116]
    },
  },
  {
    id: 'rudranath',
    title: 'Rudranath Trek – Panch Kedar Yatra Route',
    area: 'Chamoli district, Uttarakhand',
    duration: '3–5 days',
    level: 'Moderate to tough Himalayan trek',
    stay: 'Basic lodges and dharamshalas en route, limited camping',
    guides: 'Local trekking guides from Sagar and Gopeshwar available',
    bestFor: 'Offbeat Uttarakhand trek, meadows, ridge walks, Rudranath temple darshan',
    images: ['https://i.pinimg.com/1200x/39/c2/ae/39c2aeed1e41aa29437aa196159d912a.jpg'],
    notes: 'Common route: Sagar → Panar Bugyal → Rudranath',
    details: {
      placeInfo:
        'Rudranath trek is part of the Panch Kedar yatra and takes you to a remote stone temple of Lord Shiva through dense forests, ridge-top bugyals and wide Himalayan views.', // [web:57][web:65]
      weather:
        'Best months for Rudranath trekking are May–June and September–October; monsoon makes the trail slippery while autumn gives the clearest mountain views.', // [web:57][web:65]
      nearby:
        'Common bases and nearby places include Gopeshwar, Sagar village, Anusuya Devi temple and other Panch Kedar temples like Kalpeshwar and Tungnath.', // [web:57][web:65]
    },
  },
  {
    id: 'kedarnath',
    title: 'Kedarnath Trek – Kedarnath Yatra Route',
    area: 'Gaurikund – Kedarnath, Rudraprayag, Uttarakhand',
    duration: '1–2 days (one way trek)',
    level: 'Moderate (continuous ascent on pilgrim path)',
    stay: 'Lodges, tents and dharamshalas at Kedarnath',
    guides: 'Local pony, palanquin services and guides from Gaurikund',
    bestFor: 'Kedarnath yatra trekking, Shiva temple darshan, Mandakini valley views',
    images: ['https://i.pinimg.com/1200x/5c/da/2b/5cda2b99127c7afa6e1e2b6b08efd217.jpg'],
    notes: 'Approx 16–18 km to ~3,583 m; best May–Jun & Sep–Oct',
    details: {
      placeInfo:
        'Kedarnath trek follows a paved pilgrim route from Gaurikund along the Mandakini river valley to the famous Kedarnath temple, one of the Char Dham and Panch Kedar shrines in Uttarakhand.', // [web:66][web:120]
      weather:
        'Best time for Kedarnath trekking is May–June and September–October; the temple usually opens around April–May and closes before winter due to heavy snowfall.', // [web:66]
      nearby:
        'Nearby places include Gaurikund hot water spring, Sonprayag, Triyuginarayan temple and the towns of Guptkashi and Ukhimath, which are often used as night halts in Kedarnath tour packages.', // [web:66][web:120]
    },
  },
  {
    id: 'pindari-glacier',
    title: 'Pindari Glacier Trek – Classic Kumaon Trekking Route',
    area: 'Bageshwar – Khati – Pindari, Kumaon, Uttarakhand',
    duration: '6–8 days',
    level: 'Easy to moderate multi-day trek',
    stay: 'GMVN/KMVN rest houses and homestays in mountain villages',
    guides: 'Local guides and porters available from Loharkhet / Khati',
    bestFor: 'Village trails, meadows, glacier views, classic Uttarakhand trekking experience',
    images: ['https://i.pinimg.com/1200x/89/b1/eb/89b1eb5c818801ae998c4d07a43c37ef.jpg'],
    notes: 'Classic route: Loharkhet → Dhakuri → Khati → Dwali → Phurkia → Pindari Zero Point',
    details: {
      placeInfo:
        'Pindari Glacier trek is one of the best long treks in Kumaon, Uttarakhand, following traditional village routes from Loharkhet through Dhakuri and Khati to Dwali, Phurkia and the glacier’s Zero Point.', // [web:59][web:67][web:115]
      weather:
        'Best time for Pindari Glacier trekking is April–June and September–October; monsoon brings heavy rain and winter can make the upper sections snowbound.', // [web:59][web:67]
      nearby:
        'Nearby attractions include Khati village, Kafni valley side-trek, Bageshwar town and hill stations like Kausani and Almora that can be added to a Kumaon tour package.', // [web:59][web:67]
    },
  },
];

export default function Trekking() {
  const trackRef = useRef(null);
  const [selectedTrek, setSelectedTrek] = useState(null);

  const handleCardClick = (trek) => {
    setSelectedTrek(trek);
  };

  const closeModal = () => {
    setSelectedTrek(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const scrollByAmount = (direction) => {
    const slider = trackRef.current;
    if (!slider) return;
    const cardWidth = slider.firstChild?.getBoundingClientRect().width || 300;
    const gap = 24;
    const amount = direction === 'left' ? -(cardWidth + gap) : cardWidth + gap;
    slider.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section
      className="py-16 sm:py-20 bg-white"
      aria-label="Uttarakhand trekking packages and Himalayan treks"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Uttarakhand Trekking Packages & Himalayan Treks
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
            Discover the best treks in Uttarakhand – Nag Tibba, Chopta Tungnath Chandrashila, Valley of Flowers, Kedarnath, Pindari Glacier and more – with safe, well‑planned trekking packages for beginners and experienced hikers.
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scrollByAmount('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-gray-800 shadow-lg items-center justify-center hover:bg-white"
            aria-label="Scroll trekking packages left"
          >
            ‹
          </button>

          <button
            onClick={() => scrollByAmount('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-gray-800 shadow-lg items-center justify-center hover:bg-white"
            aria-label="Scroll trekking packages right"
          >
            ›
          </button>

          <div className="md:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between z-20 pointer-events-none">
            <button
              onClick={() => scrollByAmount('left')}
              className="pointer-events-auto ml-1 w-8 h-8 rounded-full bg-white/90 text-gray-800 shadow flex items-center justify-center"
              aria-label="Scroll treks left"
            >
              ‹
            </button>
            <button
              onClick={() => scrollByAmount('right')}
              className="pointer-events-auto mr-1 w-8 h-8 rounded-full bg-white/90 text-gray-800 shadow flex items-center justify-center"
              aria-label="Scroll treks right"
            >
              ›
            </button>
          </div>

          <div
            ref={trackRef}
            style={{ WebkitOverflowScrolling: 'touch', touchAction: 'manipulation' }}
            className="flex gap-4 sm:gap-6 overflow-x-auto overflow-y-hidden pb-2 snap-x snap-proximity scroll-smooth overscroll-x-contain overscroll-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none"
          >
            {treks.map((t, idx) => (
              <motion.article
                key={t.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="trek-card snap-start shrink-0 w-72 sm:w-80 md:w-96 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleCardClick(t)}
                aria-label={`${t.title} trekking package`}
              >
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={t.images[0]}
                    alt={t.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                    {t.title}
                    <span className="text-gray-500 block text-xs sm:text-sm font-normal">
                      {t.area}
                    </span>
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] sm:text-xs">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                      ⏱ {t.duration}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
                      🥾 {t.level}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1 text-xs sm:text-sm text-gray-700">
                    <li><strong>Stay:</strong> {t.stay}</li>
                    <li><strong>Guides:</strong> {t.guides}</li>
                    <li><strong>Best For:</strong> {t.bestFor}</li>
                    {t.notes && (
                      <li className="text-gray-500 text-[11px] sm:text-xs">{t.notes}</li>
                    )}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {selectedTrek && (
          <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-3 sm:px-4"
            onClick={handleBackdropClick}
          >
            <div
              className="
                bg-white w-full max-w-md sm:max-w-lg
                rounded-2xl shadow-2xl overflow-hidden
                max-h-[70vh] sm:max-h-[65vh]
                flex flex-col
              "
            >
              {/* Header */}
              <div className="flex items-start justify-between px-4 sm:px-5 pt-4 pb-2 border-b border-gray-100">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    {selectedTrek.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                    {selectedTrek.area}
                  </p>
                  <p className="text-[11px] sm:text-xs text-emerald-700 font-medium mt-2">
                    Perfect for: {selectedTrek.bestFor}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="ml-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center text-xs"
                  aria-label="Close trek details"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable body */}
              <div className="px-4 sm:px-5 py-3 sm:py-4 overflow-y-auto text-[11px] sm:text-sm text-gray-700 space-y-3">
                {selectedTrek.details && (
                  <>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        About this Uttarakhand trek
                      </h4>
                      <p>{selectedTrek.details.placeInfo}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Weather & best time to trek
                      </h4>
                      <p>{selectedTrek.details.weather}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Nearby places to visit
                      </h4>
                      <p>{selectedTrek.details.nearby}</p>
                    </div>
                  </>
                )}

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Quick trek facts
                  </h4>
                  <ul className="space-y-1">
                    <li><strong>Duration:</strong> {selectedTrek.duration}</li>
                    <li><strong>Difficulty:</strong> {selectedTrek.level}</li>
                    <li><strong>Stay:</strong> {selectedTrek.stay}</li>
                    <li><strong>Guide support:</strong> {selectedTrek.guides}</li>
                    {selectedTrek.notes && (
                      <li className="text-gray-500 text-[10px] sm:text-xs">
                        {selectedTrek.notes}
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 sm:px-5 py-2 sm:py-3 border-t border-gray-100 flex justify-end">
                <button
                  onClick={closeModal}
                  className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm font-semibold border border-gray-300 text-gray-800 hover:bg-gray-100"
                >
                  Close details
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
