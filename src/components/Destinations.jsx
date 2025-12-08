// src/components/Destinations.jsx
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const destinations = [
  {
    id: 'mussoorie-landour',
    name: 'Mussoorie–Landour',
    image: 'https://i.pinimg.com/736x/53/72/0d/53720de90e51c15111ff6a0d3f0e3ebf.jpg',
    description: 'Colonial-era charm, Lal Tibba views, and quiet cafes above Mussoorie',
    details: {
      overview:
        'Landour is a quiet colonial-era cantonment just above Mussoorie, known for pine and deodar forests, old British cottages, and panoramic Himalayan views from Lal Tibba and nearby walks.', // [web:75][web:77][web:80][web:89]
      highlights:
        'Popular experiences include the Char Dukan area, Lal Tibba viewpoint, heritage churches, and slow walks around the Landour loop with cosy cafes and bakeries.', // [web:75][web:83][web:89]
      bestTime:
        'Best time to visit Mussoorie–Landour is March to June and September to November, when days are pleasant and views are usually clear.', // [web:77][web:80]
    },
  },
  {
    id: 'chopta',
    name: 'Chopta',
    image: 'https://i.pinimg.com/1200x/91/00/55/91005566754f88e197ebad7ca2115028.jpg',
    description: 'Mini Switzerland base for Tungnath–Chandrashila with grand Himalayan views',
    details: {
      overview:
        'Chopta is a small hill station and meadow region in Garhwal, often called the Mini Switzerland of Uttarakhand, surrounded by forests and open bugyals with views of Chaukhamba and other peaks.', // [web:78][web:81][web:87]
      highlights:
        'It is the main base for the Tungnath and Chandrashila treks, with options for camping, village stays, and bird watching in the surrounding forests.', // [web:78][web:81][web:84]
      bestTime:
        'Best time to visit Chopta is April to June and September to November; winter months see snow and colder conditions on the meadows and trails.', // [web:78][web:81][web:90]
    },
  },
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers',
    image: 'https://i.pinimg.com/736x/b2/db/1c/b2db1c2902681c1cc99f4d6edb79d3a1.jpg',
    description: 'UNESCO alpine meadows blooming July–Sept with rare Himalayan flowers',
    details: {
      overview:
        'Valley of Flowers is a high-altitude national park and UNESCO site in Chamoli, famed for colourful alpine meadows, glaciers, and a rich variety of Himalayan wildflowers.', // [web:56][web:59]
      highlights:
        'Travellers usually stay at Ghangaria and hike into the valley to see flower-filled meadows, waterfalls, and surrounding snow-covered ridges.', // [web:56]
      bestTime:
        'Peak blooming season is July to August, while late June and September offer fewer crowds and relatively clearer weather.', // [web:56]
    },
  },
  {
    id: 'naina-peak',
    name: 'Naina Peak',
    image: 'https://i.pinimg.com/736x/b9/0c/20/b90c20a5f698901e42b8e5428f9bad40.jpg',
    description: 'Highest point of Nainital with panoramic lake and Himalayan views',
    details: {
      overview:
        'Naina Peak is the highest viewpoint above Nainital town and offers a sweeping view of Naini Lake, surrounding hills, and distant Himalayan ranges on clear days.', // [web:55]
      highlights:
        'The peak is reached by an easy forest trail or pony ride from the Mallital side, making it a popular sunrise or sunset hike for visitors.', // [web:55]
      bestTime:
        'Best months are March to June and September to November, when skies are clearer and temperatures comfortable for walking.', // [web:55]
    },
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    image: 'https://i.pinimg.com/736x/7f/cf/e4/7fcfe474f29fbcc76cd1895f966b5a59.jpg',
    description: 'Yoga capital with Ganga Aarti, rafting, camping, and ashram stays',
    details: {
      overview:
        'Rishikesh is a pilgrimage and yoga hub on the banks of the Ganga, known for ashrams, temples, suspension bridges, and a mix of spiritual retreats and adventure activities.', // [web:79][web:85][web:91]
      highlights:
        'Key experiences include the Ganga Aarti at Triveni Ghat, visits to Ram Jhula and Lakshman Jhula, Beatles Ashram murals, nearby waterfalls, and rafting stretches along the river.', // [web:79][web:82][web:85][web:88]
      bestTime:
        'The main season is October to April, with cooler, pleasant weather; monsoon months see higher river levels and limited rafting.', // [web:79][web:85][web:91]
    },
  },
  {
    id: 'jageshwar-almora',
    name: 'Jageshwar Dham, Almora',
    image: 'https://i.pinimg.com/1200x/87/4b/ec/874bec0fe75f308a014c0ac1fa2b6084.jpg',
    description: 'Kumaon’s cultural heart on a ridge with heritage, crafts, and views',
    details: {
      overview:
        'Jageshwar Dham near Almora is an ancient temple complex in a cedar forest valley, home to many stone shrines dedicated to Lord Shiva and associated with the Jageshwar temple cluster.', // [web:77]
      highlights:
        'Travellers often combine the temple visit with Almora town viewpoints, village walks, and local Kumaoni food and crafts.', // [web:77]
      bestTime:
        'Pleasant months are March to June and September to November, with cool evenings and clear mountain views around Almora.', // [web:77]
    },
  },
  {
    id: 'dhikuli',
    name: 'Dhikuli',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/2b/be/d5/d6/caption.jpg',
    description: 'Gateway to Jim Corbett with luxury resorts and wildlife experiences',
    details: {
      overview:
        'Dhikuli is a riverside belt near the Kosi river on the edge of Jim Corbett National Park, lined with resorts that act as bases for safaris and nature stays.', // [web:50]
      highlights:
        'Guests enjoy riverside walks, bird watching, campfires, and easy access to Corbett safari entry gates through resort arrangements.', // [web:50]
      bestTime:
        'Best time around Dhikuli for wildlife trips is November to June, with cooler winter safaris and warm but active summer sightings.', // [web:50][web:57]
    },
  },
  {
    id: 'ramnagar',
    name: 'Ramnagar',
    image: 'https://www.corbettnationalpark.in/blog/wp-content/uploads/2021/02/kosi-river1.jpg',
    description: 'Main Entrance Passage to the Renowned Jim Corbett National Park',
    details: {
      overview:
        'Ramnagar is the main town and hub for Jim Corbett National Park permits, transport, and budget stays, located on the banks of the Kosi river.', // [web:50]
      highlights:
        'From Ramnagar, travellers connect to different Corbett zones, nearby riverside spots, and local markets for food and basic shopping.', // [web:50]
      bestTime:
        'Most visitors come between November and June, when core zones are open and weather is better for safaris and outdoor activities.', // [web:50][web:57]
    },
  },
  {
    id: 'jhirna-range',
    name: 'Jhirna Range',
    image: 'https://www.tusktravel.com/blog/wp-content/uploads/2021/03/Jim-Corbett-National-Park.jpg',
    description: 'Open year-round for wildlife safaris and bird watching',
    details: {
      overview:
        'Jhirna is one of the safari zones of Jim Corbett National Park and is notable because it usually stays open for jeep safaris throughout the year, subject to conditions.', // [web:50][web:57]
      highlights:
        'The zone has grasslands, riverbeds, and forest patches where guests may spot deer, elephants, birds, and occasionally big cats on guided safaris.', // [web:50][web:57]
      bestTime:
        'Morning and evening safaris in the cooler months from October to March are popular for comfortable weather and better chances of sightings.', // [web:50][web:57]
    },
  },
  {
    id: 'corbett-falls',
    name: 'Corbett Falls',
    image: 'https://www.tejomayaresorts.com/wp-content/uploads/2024/01/Corbett-waterfall-jim-corbett.jpg',
    description: 'Beautiful waterfall surrounded by dense forest',
    details: {
      overview:
        'Corbett Falls is a small forest waterfall near Kaladhungi on the Corbett side, surrounded by thick greenery and accessible by a short walk from the parking area.', // [web:50][web:57]
      highlights:
        'It is a popular picnic and photo stop, often combined with museum visits or drives between Ramnagar and Nainital side routes.', // [web:50][web:57]
      bestTime:
        'Best time is October to March for pleasant walks; monsoon months make the surroundings lush but may bring slippery paths.', // [web:50][web:57]
    },
  },
  {
    id: 'nainital',
    name: 'Nainital',
    image: 'https://i.pinimg.com/1200x/24/d1/ac/24d1ac195a4faa475e6cfd9bfc9f8c23.jpg',
    description: 'Queen of Hills with the Beautiful and Picturesque Naini Lake',
    details: {
      overview:
        'Nainital is a lake town in Kumaon built around the emerald Naini Lake, ringed by hills, viewpoints, and colonial-era buildings.', // [web:55]
      highlights:
        'Popular activities include boating on Naini Lake, strolling along Mall Road, visiting viewpoints like Snow View and Tiffin Top, and exploring nearby caves and temples.', // [web:55]
      bestTime:
        'Best months are March to June and September to November, when temperatures are moderate and visibility is typically better.', // [web:55]
    },
  },
  {
    id: 'bhimtal',
    name: 'Bhimtal',
    image: 'https://i.pinimg.com/736x/c9/e4/4c/c9e44c5c2bc8927f365cf1c8a10f57dd.jpg',
    description: 'Serene lake town perfect for peaceful getaways',
    details: {
      overview:
        'Bhimtal is a quieter lake destination near Nainital, centred on a broad lake with an island and surrounded by small hills and homestays.', // [web:55]
      highlights:
        'Visitors enjoy boating, lakeside walks, short drives to nearby viewpoints, and calmer stays compared to busier Nainital.', // [web:55]
      bestTime:
        'Pleasant from March to June and again in autumn from September to November for lakeside stays and short drives in Kumaon.', // [web:55]
    },
  },
];

export default function Destinations() {
  const containerRef = useRef(null);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const scrollByAmount = (direction) => {
    const slider = containerRef.current;
    if (!slider) return;
    const cardWidth = slider.firstChild?.getBoundingClientRect().width || 288;
    const gap = 24;
    const amount = direction === 'left' ? -(cardWidth + gap) : cardWidth + gap;
    slider.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handleCardClick = (dest) => {
    setSelectedDestination(dest);
  };

  const closeModal = () => {
    setSelectedDestination(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section
      id="destinations"
      className="py-20 bg-gray-50"
      aria-labelledby="destinations-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2
            className="text-4xl font-bold text-gray-900"
            id="destinations-heading"
          >
            Popular Destinations in Uttarakhand
          </h2>

          <p className="text-gray-600 mt-2">
            Explore curated travel spots across Jim Corbett, Nainital, Rishikesh, Almora, Chopta & more
          </p>
        </motion.div>

        {/* Scroll container with arrows */}
        <div className="relative">
          {/* Desktop arrows */}
          <button
            onClick={() => scrollByAmount('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-gray-800 shadow-lg items-center justify-center hover:bg-white"
            aria-label="Scroll destinations left"
          >
            ‹
          </button>

          <button
            onClick={() => scrollByAmount('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 text-gray-800 shadow-lg items-center justify-center hover:bg-white"
            aria-label="Scroll destinations right"
          >
            ›
          </button>

          {/* Mobile arrows */}
          <div className="md:hidden absolute inset-y-0 left-0 right-0 flex items-center justify-between z-20 pointer-events-none">
            <button
              onClick={() => scrollByAmount('left')}
              className="pointer-events-auto ml-1 w-8 h-8 rounded-full bg-white/90 text-gray-800 shadow flex items-center justify-center"
              aria-label="Scroll destinations left"
            >
              ‹
            </button>
            <button
              onClick={() => scrollByAmount('right')}
              className="pointer-events-auto mr-1 w-8 h-8 rounded-full bg-white/90 text-gray-800 shadow flex items-center justify-center"
              aria-label="Scroll destinations right"
            >
              ›
            </button>
          </div>

          <div
            ref={containerRef}
            className="
              flex gap-6 overflow-x-auto overflow-y-hidden pb-2
              snap-x snap-proximity scroll-smooth
              overscroll-x-contain overscroll-y-auto
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
              select-none
            "
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'manipulation',
            }}
          >
            {destinations.map((d, idx) => (
              <motion.article
                key={d.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleCardClick(d)}
                aria-label={`${d.name} destination card`}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={d.image}
                    alt={`${d.name} - Uttarakhand tourist destination`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {d.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Destination details modal */}
        {selectedDestination && (
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
                    {selectedDestination.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
                    Uttarakhand destination highlight
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="ml-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center text-xs"
                  aria-label="Close destination details"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable body */}
              <div className="px-4 sm:px-5 py-3 sm:py-4 overflow-y-auto text-[11px] sm:text-sm text-gray-700 space-y-3">
                {selectedDestination.image && (
                  <div className="w-full rounded-xl overflow-hidden mb-1">
                    <img
                      src={selectedDestination.image}
                      alt={selectedDestination.name}
                      className="w-full h-40 sm:h-48 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Overview
                  </h4>
                  <p>{selectedDestination.details?.overview}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Highlights
                  </h4>
                  <p>{selectedDestination.details?.highlights}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Best time to visit
                  </h4>
                  <p>{selectedDestination.details?.bestTime}</p>
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
