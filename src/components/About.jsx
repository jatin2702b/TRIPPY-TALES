import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">
            About Trippy Tales
          </h2>
          <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
            Trippy Tales is a locally rooted, client-first travel company dedicated 
            to creating seamless journeys across Uttarakhand. From wildlife escapes 
            in Jim Corbett to cultural explorations in Kumaon and treks in the Garhwal 
            Himalayas, we combine local knowledge with transparent planning to deliver 
            safe, comfortable, and memorable travel experiences.
          </p>
        </motion.div>

        {/* Services & Why Choose Us in card style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Our Services Card */}
          <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Our Services
            </h3>
            <ul className="space-y-3 text-black/70 text-lg leading-relaxed">
              <li>• End-to-end trip planning: hotels, guides, permits.</li>
              <li>• Specialist treks:Tungnath-Chandrashila, Valley of Flowers.</li>
              <li>• Wildlife & adventure: Corbett safaris and rafting.</li>
              <li>• Culture & leisure: heritage walks and lake-side stays.</li>
            </ul>
          </div>

          {/* Why Choose Us Card */}
          <div className="bg-gray-50 shadow-md rounded-2xl p-8 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-black mb-4">
              Why Choose Us
            </h3>
            <ul className="space-y-3 text-black/70 text-lg leading-relaxed">
              <li>• Local knowledge with on-ground expertise.</li>
              <li>• Transparent bookings with clear inclusions.</li>
              <li>• Reliable network of guides, drivers, and stays.</li>
              <li>• Focus on safety, comfort, and value.</li>
            </ul>
          </div>
        </motion.div>

        {/* Commitment */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-black mb-4">
            Our Commitment
          </h3>
          <p className="text-lg text-black/70 max-w-3xl mx-auto leading-relaxed">
            From first consultation to final drop, every detail is managed with precision. 
            Our mission is to let travelers focus on the essence of Uttarakhand—its lakes, 
            forests, meadows, temples, and the timeless beauty of the Himalayas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export { About as AboutSection };
