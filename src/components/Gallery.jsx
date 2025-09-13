import { motion } from 'framer-motion'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&w=400',
    alt: 'Jim Corbett Tiger'
  },
  {
    src: 'https://i.pinimg.com/1200x/f8/7c/da/f87cda1bb71c2e344d529473a6551c84.jpg',
    alt: 'Nainital Lake'
  },
  {
    src: 'https://i.pinimg.com/736x/db/db/5e/dbdb5ec46f0367cf04d395c033aac29d.jpg',
    alt: 'Mountain View'
  },
  {
    src: 'https://i.pinimg.com/1200x/5b/54/fd/5b54fdad18dc4b1089baa9cfbb815dfc.jpg',
    alt: 'Wildlife Safari'
  },
  {
    src: 'https://i.pinimg.com/736x/83/b7/ff/83b7ff763a40f8722174fc28d8ca98bf.jpg',
    alt: 'Temple View'
  },
  {
    src: 'https://imgs.search.brave.com/LW08HIiXnkMuVdse9GtL1t8yHinaqkfSPnP_z9EqwJM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MDkvYTMvODIvYjQv/Y29yYmV0dC1mYWxs/cy5qcGc',
    alt: 'Waterfall'
  }
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Provide a default export so default imports work
export default Gallery
