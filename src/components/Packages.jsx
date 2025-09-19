import { motion } from 'framer-motion'

const packages = [
  {
    id: 'corbett_safari',
    name: 'Jim Corbett Wildlife Safari',
    image: 'https://i.pinimg.com/736x/d1/ae/06/d1ae0622d3baf5ba1d138b6bbdf3d0e6.jpg',
    description: 'Dhikuli, Ramnagar & Jhirna Range exploration with luxury accommodation',
    features: ['2 Days / 1 Night', 'Jeep Safari', 'Resort Stay', 'Meals included'],
    price: 4999,
    advance: 1500
  },
  {
    id: 'nainital_package',
    name: 'Nainital Hill Station',
    image: 'https://i.pinimg.com/1200x/65/cb/aa/65cbaa1f528cb47ee2eeb180bccc42aa.jpg',
    description: 'Nainital, Bhimtal & Sattal lake tour with sightseeing',
    features: ['3 Days / 2 Nights', 'Lake boating', 'Mall Road shopping', 'Cable car ride'],
    price: 5999,
    advance: 1800
  }
]

export default function Packages() {
  return (
    <section id="packages" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Tour Packages</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card"
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <ul className="mb-6 space-y-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-gray-700">• {feature}</li>
                  ))}
                </ul>
                <div className="text-3xl font-bold text-blue-600">₹{pkg.price.toLocaleString()}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
