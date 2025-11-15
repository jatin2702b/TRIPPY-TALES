// src/components/Destinations.jsx
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const destinations = [
  { name: 'Mussoorie–Landour', image: 'https://i.pinimg.com/736x/53/72/0d/53720de90e51c15111ff6a0d3f0e3ebf.jpg', description: 'Colonial-era charm, Lal Tibba views, and quiet cafes above Mussoorie' },
  { name: 'Chopta', image: 'https://i.pinimg.com/1200x/91/00/55/91005566754f88e197ebad7ca2115028.jpg', description: 'Mini Switzerland base for Tungnath–Chandrashila with grand Himalayan views' },
  { name: 'Valley of Flowers', image: 'https://i.pinimg.com/736x/b2/db/1c/b2db1c2902681c1cc99f4d6edb79d3a1.jpg', description: 'UNESCO alpine meadows blooming July–Sept with rare Himalayan flowers' },
  { name: 'Naina Peak', image: 'https://i.pinimg.com/736x/b9/0c/20/b90c20a5f698901e42b8e5428f9bad40.jpg', description: 'Highest point of Nainital with panoramic lake and Himalayan views' },
  { name: 'Rishikesh', image: 'https://i.pinimg.com/736x/7f/cf/e4/7fcfe474f29fbcc76cd1895f966b5a59.jpg', description: 'Yoga capital with Ganga Aarti, rafting, camping, and ashram stays' },
  { name: 'Jageshwar Dham, Almora', image: 'https://i.pinimg.com/1200x/87/4b/ec/874bec0fe75f308a014c0ac1fa2b6084.jpg', description: 'Kumaon’s cultural heart on a ridge with heritage, crafts, and views' },
  { name: 'Dhikuli', image: 'https://media-cdn.tripadvisor.com/media/photo-s/2b/be/d5/d6/caption.jpg', description: 'Gateway to Jim Corbett with luxury resorts and wildlife experiences' },
  { name: 'Ramnagar', image: 'https://www.corbettnationalpark.in/blog/wp-content/uploads/2021/02/kosi-river1.jpg', description: 'Main Entrance Passage to the Renowned Jim Corbett National Park' },
  { name: 'Jhirna Range', image: 'https://www.tusktravel.com/blog/wp-content/uploads/2021/03/Jim-Corbett-National-Park.jpg', description: 'Open year-round for wildlife safaris and bird watching' },
  { name: 'Corbett Falls', image: 'https://www.tejomayaresorts.com/wp-content/uploads/2024/01/Corbett-waterfall-jim-corbett.jpg', description: 'Beautiful waterfall surrounded by dense forest' },
  { name: 'Nainital', image: 'https://i.pinimg.com/736x/8e/c7/f3/8ec7f3401d3999a071cdaa85a19ce606.jpg', description: 'Queen of Hills with the Beautiful and Picturesque Naini Lake' },
  { name: 'Bhimtal', image: 'https://i.pinimg.com/736x/c9/e4/4c/c9e44c5c2bc8927f365cf1c8a10f57dd.jpg', description: 'Serene lake town perfect for peaceful getaways' },
];

export default function Destinations() {
  const containerRef = useRef(null);

  return (
    <section 
      id="destinations" 
      className="py-20 bg-gray-50"
      aria-labelledby="destinations-heading"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* SEO-friendly heading */}
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

        {/* Scroll container */}
        <div className="relative">
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
                key={d.name + idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="snap-start shrink-0 w-72 md:w-80 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  
                  {/* SEO-optimized alt */}
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

                  {/* Keyword-rich but unchanged description */}
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
