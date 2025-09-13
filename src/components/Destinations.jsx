import { motion } from 'framer-motion'

const destinations = [
  {
    name: 'Dhikuli',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/2b/be/d5/d6/caption.jpg',
    description: 'Gateway to Jim Corbett with luxury resorts and wildlife experiences'
  },
  {
    name: 'Ramnagar',
    image: 'https://www.corbettnationalpark.in/blog/wp-content/uploads/2021/02/kosi-river1.jpg',
    description: 'Main entrance to Jim Corbett National Park'
  },
  {
    name: 'Jhirna Range',
    image: 'https://www.tusktravel.com/blog/wp-content/uploads/2021/03/Jim-Corbett-National-Park.jpg',
    description: 'Open year-round for wildlife safaris and bird watching'
  },
  {
    name: 'Corbett Falls',
    image: 'https://www.tejomayaresorts.com/wp-content/uploads/2024/01/Corbett-waterfall-jim-corbett.jpg',
    description: 'Beautiful waterfall surrounded by dense forest'
  },
  {
    name: 'Nainital',
    image: 'https://i.pinimg.com/736x/8e/c7/f3/8ec7f3401d3999a071cdaa85a19ce606.jpg',
    description: 'Queen of Hills with beautiful Naini Lake'
  },
  {
    name: 'Bhimtal',
    image: 'https://imgs.search.brave.com/Dzdt36hFU-WAX43uj-1lZIGnXyvspO1MwgbGtU_fPAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MmMvMGUvYzYvNTkv/aXNsYW5kLWluLWJo/aW10YWwtbGFrZS5q/cGc',
    description: 'Serene lake town perfect for peaceful getaways'
  }
]

export function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Destinations</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="card group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600">{destination.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Add this line to provide a default export:
export default Destinations
