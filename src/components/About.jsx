import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Trippy Tales</h2>
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We are a passionate team dedicated to providing exceptional tour and travel experiences across Uttarakhand. From the wildlife adventures of Jim Corbett (Dhikuli, Ramnagar, Jhirna Range) to the serene lakes of Nainital, Bhimtal, and Sattal, we cover all major destinations. Our expertise extends to spiritual journeys at Kaichidham, mountain adventures in Munsyari, and scenic visits to Corbett Falls. With years of experience and local knowledge, we ensure you have safe, comfortable, and unforgettable adventures.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
