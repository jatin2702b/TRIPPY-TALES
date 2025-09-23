import { useRef } from "react";
import { motion } from "framer-motion";

const destinations = [
  { name: "Mussoorie–Landour", image: "https://i.pinimg.com/736x/53/72/0d/53720de90e51c15111ff6a0d3f0e3ebf.jpg", description: "Colonial-era charm, Lal Tibba views, and quiet cafes above Mussoorie" },
  { name: "Chopta", image: "https://i.pinimg.com/1200x/91/00/55/91005566754f88e197ebad7ca2115028.jpg", description: "Mini Switzerland base for Tungnath–Chandrashila with grand Himalayan views" },
  { name: "Valley of Flowers", image: "https://i.pinimg.com/736x/b2/db/1c/b2db1c2902681c1cc99f4d6edb79d3a1.jpg", description: "UNESCO alpine meadows blooming July–Sept with rare Himalayan flowers" },
  { name: "Naina Peak", image: "https://i.pinimg.com/736x/b9/0c/20/b90c20a5f698901e42b8e5428f9bad40.jpg", description: "Highest point of Nainital with panoramic lake and Himalayan views" },
];

export default function Destinations() {
  const containerRef = useRef(null);

  // This handler lets vertical scroll pass through while allowing horizontal swipe
  const onWheel = (e) => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // If shift key is pressed or horizontal scroll exists, scroll horizontally
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
      container.scrollLeft += e.deltaY;
      e.preventDefault();
    }
    // Otherwise, let vertical scroll pass naturally
  };

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-gray-900">Our Destinations</h2>
          <p className="mt-2 text-gray-600">Scroll to explore</p>
        </motion.div>

        <div className="relative">
          <div
            ref={containerRef}
            onWheel={onWheel}
            className="
              flex gap-4 overflow-x-auto pb-2
              snap-x snap-mandatory scroll-smooth
              touch-pan-x
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            {destinations.map((d, i) => (
              <motion.div
                key={d.name + i}
                className="snap-start shrink-0 w-72 md:w-80"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ root: containerRef, once: true }}
                transition={{ duration: 0.18 }}
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-full h-full object-cover pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">{d.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{d.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
