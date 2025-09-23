import { useRef } from "react";
import { motion } from "framer-motion";

const destinations = [
  { name: "Mussoorie–Landour", image: "https://i.pinimg.com/736x/53/72/0d/53720de90e51c15111ff6a0d3f0e3ebf.jpg", description: "Colonial-era charm, Lal Tibba views, and quiet cafes above Mussoorie" },
  { name: "Chopta", image: "https://i.pinimg.com/1200x/91/00/55/91005566754f88e197ebad7ca2115028.jpg", description: "Mini Switzerland base for Tungnath–Chandrashila with grand Himalayan views" },
  { name: "Valley of Flowers", image: "https://i.pinimg.com/736x/b2/db/1c/b2db1c2902681c1cc99f4d6edb79d3a1.jpg", description: "UNESCO alpine meadows blooming July–Sept with rare Himalayan flowers" },
  { name: "Naina Peak", image: "https://i.pinimg.com/736x/b9/0c/20/b90c20a5f698901e42b8e5428f9bad40.jpg", description: "Highest point of Nainital with panoramic lake and Himalayan views" },
  { name: "Auli", image: "https://i.pinimg.com/736x/7c/11/2b/7c112b4fcf9bde6f9f1f2e0c7ec7b8d3.jpg", description: "Famous ski destination with stunning Himalayan slopes and ropeways" },
  { name: "Jim Corbett", image: "https://i.pinimg.com/736x/d1/ae/06/d1ae0622d3baf5ba1d138b6bbdf3d0e6.jpg", description: "Wildlife safari and luxury stays in India's first national park" },
  { name: "Ranikhet", image: "https://i.pinimg.com/736x/18/34/0c/d218340cd2a3bcf7cb1a96c054b6ad9e.jpg", description: "Peaceful hill station surrounded by pine forests and Himalayan vistas" },
];

export default function Destinations() {
  const containerRef = useRef(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isDragging = useRef(false);

  // Horizontal scroll for desktop mouse wheel
  const onWheel = (e) => {
    if (!containerRef.current) return;
    if (containerRef.current.scrollWidth > containerRef.current.clientWidth) {
      containerRef.current.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  // Mobile touch handlers
  const onTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (startX.current - x); // positive => scroll right
    containerRef.current.scrollLeft = scrollLeft.current + walk;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
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
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="
              flex gap-6 overflow-x-auto pb-2
              snap-x snap-mandatory scroll-smooth
              touch-pan-x
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {destinations.map((d, i) => (
              <motion.div
                key={d.name + i}
                className="snap-start flex-shrink-0 w-72 md:w-80"
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
