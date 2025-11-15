import { motion } from 'framer-motion'

const packages = [
  {
    id: 'corbett_safari',
    name: 'Jim Corbett Wildlife Safari – Premium Tour Package',
    image:
      'https://i.pinimg.com/736x/d1/ae/06/d1ae0622d3baf5ba1d138b6bbdf3d0e6.jpg',
    description:
      'Explore Dhikuli, Ramnagar & Jhirna Range with premium accommodation and a thrilling wildlife jeep safari.',
    features: [
      'Open Jeep Safari Experience',
      'Luxury Resort Stay',
      'Meals Included (Breakfast/Dinner)',
      'Wildlife Spotting & Nature Photography'
    ],
    whatsapp: '9027070879'
  },
  {
    id: 'nainital_package',
    name: 'Nainital Hill Station Tour – Lakes & Mountains',
    image:
      'https://i.pinimg.com/1200x/65/cb/aa/65cbaa1f528cb47ee2eeb180bccc42aa.jpg',
    description:
      'Visit Nainital, Bhimtal & Sattal with full sightseeing, boating and beautiful scenic photography locations.',
    features: [
      'Lake Boating Experience',
      'Mall Road Shopping',
      'Cable Car Ride',
      'Scenic Photography Spots',
      'Beautifull Trail Walks'
    ],
    whatsapp: '9027070879'
  }
]

export default function Packages() {
  return (
    <section
      id="packages"
      className="py-20 bg-gray-50"
      itemScope
      itemType="https://schema.org/TouristTrip"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Best Travel & Tour Packages
          </h2>
          <p className="text-gray-600">
            Explore our curated Jim Corbett & Uttarakhand trips for your next vacation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.id}
              itemScope
              itemType="https://schema.org/TourPackage"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-shadow"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={`${pkg.name} – ${pkg.description}`}
                  title={pkg.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="400"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-6">
                <h3 itemProp="name" className="text-2xl font-bold mb-2">
                  {pkg.name}
                </h3>

                <p itemProp="description" className="text-gray-600 mb-4">
                  {pkg.description}
                </p>

                <ul className="mb-6 space-y-1 text-gray-700" itemProp="touristType">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${pkg.whatsapp}?text=Hi, I am interested in the "${pkg.name}" package.`}
                  title={`Contact for ${pkg.name} details`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  itemProp="url"
                >
                  Get Details
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
