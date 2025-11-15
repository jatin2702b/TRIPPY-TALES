// src/components/ResortCatalog.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShareNodes,
  faStar,
  faStarHalfStroke,
  faLocationDot,
  faArrowDown,
  faCircleCheck,
  faHeart as faHeartSolid,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const BUSINESS_WHATSAPP = '919876543210';

const ResortCatalog = () => {
  const [resorts] = useState([
    {
      id: 1,
      name: "Maulik Mansion – Luxury Wildlife Resort",
      location: "Dhikuli, Jim Corbett National Park, Uttarakhand",
      description:
        "Stay at Maulik Mansion Resort with luxury amenities, wildlife safaris, nature walks, and comfortable accommodation near Corbett.",
      image:
        "https://onlinecorbettresorts.com/img/ToursImage_259_3917.jpg",
      rating: 4.8,
      reviews: 156,
      category: ["wildlife", "nature"],
      amenities: ["Safari Booking", "Nature Walks", "Bonfire"],
    },
    {
      id: 2,
      name: "Trishul Resort – Scenic Mountain Stay",
      location: "Mukteshwar, Uttarakhand",
      description:
        "Experience panoramic mountain views, forest trails, and adventure activities at Trishul Resort in Mukteshwar.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/9d/ca/27/resorts-by-the-baagh.jpg?w=900&h=500&s=1",
      rating: 4.6,
      reviews: 89,
      category: ["lake", "mountain"],
      amenities: ["Lake View", "Boating", "Mountain Trek"],
    },
    {
      id: 3,
      name: "West View Hotel – Heritage Stay",
      location: "Ranikhet, Uttarakhand",
      description:
        "A cozy heritage stay in West View Hotel, Ranikhet surrounded by pine forests with trekking, photography, and serene views.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/34/0c/d2/west-view-ranikhet.jpg?w=900&h=500&s=1",
      rating: 4.4,
      reviews: 124,
      category: ["waterfall", "adventure"],
      amenities: ["Waterfall Trek", "Photography", "Nature Walk"],
    },
    {
      id: 4,
      name: "Balrampur House – Lake View Resort",
      location: "Nainital, Uttarakhand",
      description:
        "Stay at Balrampur House, Nainital with lake views, lush greenery, bird watching, peaceful ambience and nature walks.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/25/3d/98/balrampur-house.jpg?w=900&h=500&s=1",
      rating: 4.5,
      reviews: 78,
      category: ["camping", "riverside", "mountain", "lake"],
      amenities: ["River View", "Camping", "Wildlife Safari"],
    },
    {
      id: 5,
      name: "Ojaswi Resort – Scenic Himalayan Stay",
      location: "Chaukori, Pithoragarh, Uttarakhand",
      description:
        "Stay at Ojaswi Resort, Chaukori with stunning Himalayan views, trekking paths, nature photography and peaceful ambience.",
      image:
        "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_2448,h_1377,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/ojaswi-resort-chaukori/Snow_Capped_4_Ojaswi_Hotel_and_Resort_in_Chaukori_mewbtu",
      rating: 4.7,
      reviews: 203,
      category: ["luxury"],
      amenities: ["Island Visit", "Water Sports", "Lake View"],
    },
    {
      id: 6,
      name: "Imperial Heights – Boutique Hill Resort",
      location: "Almora, Uttarakhand",
      description:
        "Imperial Heights, Almora offers panoramic mountain views, trekking trails, photography spots and premium hillside stay.",
      image:
        "https://imgs.search.brave.com/dFUakT8DD5Fwyg0x8BtF-sjk2XAZuRCFaDp-sFDibFg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/YWxtb3JhL2M3Lzk5/OTlwNTk2Mi41OTYy/LjE0MDcwNzEwMzcw/NS50OWM3L2NhdGFs/b2d1ZS9pbXBlcmlh/bC1oZWlnaHRzLWFs/bW9yYS1oby1hbG1v/cmEtaG90ZWxzLW14/ZjZldmE1Mm4uanBn/P3c9Mzg0MCZxPTc1",
      rating: 4.9,
      reviews: 167,
      category: ["camping", "nature"],
      amenities: ["Bird Watching", "Kayaking", "Nature Trail"],
    },
    {
      id: 7,
      name: "Shivpuri Camps – Riverside Adventure Stay",
      location: "Rishikesh, Uttarakhand",
      description:
        "Enjoy riverside camping, rafting, bonfires, nature trails and adventure activities at Shivpuri Camps near Rishikesh.",
      image:
        "https://imgs.search.brave.com/MsXaA-r2xefyJY2muGudW6W6ujCQRSO8YlW6r-6YZ0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yaXNo/aWtlc2guY2FtcC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8x/MC9TaGl2cHVyaS1C/ZWFjaC1SaXZlcnNp/ZGUtQ2FtcGluZy1p/bi1SaXNoaWtlc2gu/anBn",
      rating: 4.6,
      reviews: 142,
      category: ["adventure", "riverside", "spiritual"],
      amenities: ["River Rafting", "Campfire", "Nature Walk"],
    },
  ]);

  const [currentFilter, setCurrentFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [favorites, setFavorites] = useState(new Set());

  const filters = [
    { value: 'all', label: 'All Resorts', icon: 'fas fa-th-large' },
    { value: 'wildlife', label: 'Wildlife', icon: 'fas fa-paw' },
    { value: 'mountain', label: 'Mountain', icon: 'fas fa-mountain' },
    { value: 'lake', label: 'Lake', icon: 'fas fa-water' },
    { value: 'adventure', label: 'Adventure', icon: 'fas fa-hiking' },
    { value: 'spiritual', label: 'Spiritual', icon: 'fas fa-place-of-worship' },
    { value: 'camping', label: 'Camping', icon: 'fas fa-campground' }
  ];

  const filteredResorts = useMemo(() => {
    return resorts.filter(resort => {
      const matchesCategory = currentFilter === 'all' || resort.category.includes(currentFilter);
      return matchesCategory;
    });
  }, [resorts, currentFilter]);

  const visibleResorts = filteredResorts.slice(0, visibleCount);

  const handleShare = (resort) => {
    if (navigator.share) {
      navigator.share({
        title: resort.name,
        text: `Check out this resort: ${resort.name} in ${resort.location}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(
        `Check out ${resort.name} in ${resort.location} - ${window.location.href}`
      );
    }
  };

  const handleGetDetails = (resort) => {
    const message = `Hello tripyy tales,%0AI'm interested in ${resort.name} (${resort.location}). Please share availability, pricing, and inclusions.`;
    window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${message}`, "_blank");
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const isHalf = rating % 1 !== 0;
    let stars = [];

    for (let i = 0; i < full; i++)
      stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-yellow-400" />);
    if (isHalf)
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfStroke} className="text-yellow-400" />);
    for (let i = 0; i < 5 - Math.ceil(rating); i++)
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarRegular} className="text-yellow-400" />);

    return stars;
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Best Resorts in Uttarakhand | tripyy tales" />
      <meta
        itemProp="description"
        content="Explore curated resorts in Jim Corbett, Nainital, Rishikesh, Almora, and Pithoragarh with premium stays, adventure activities, lake views and nature experiences."
      />

      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Best Resorts & Stays in Uttarakhand
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore premium resorts, mountain stays, riverside camps, luxury hotels and wildlife lodges across Uttarakhand — curated by tripyy tales.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map(filter => (
              <motion.button
                key={filter.value}
                onClick={() => setCurrentFilter(filter.value)}
                aria-label={`Filter resorts by ${filter.label}`}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  currentFilter === filter.value
                    ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500"
                }`}
              >
                <i className={filter.icon}></i>
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          layout
        >
          <AnimatePresence>
            {visibleResorts.map((resort, index) => (
              <motion.article
                key={resort.id}
                itemScope
                itemType="https://schema.org/LodgingBusiness"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={resort.image}
                    alt={`${resort.name} – ${resort.description}`}
                    title={resort.name}
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    itemProp="image"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.button
                        aria-label="Add to favorites"
                        className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"
                        onClick={() => toggleFavorite(resort.id)}
                      >
                        {favorites.has(resort.id) ? (
                          <FontAwesomeIcon icon={faHeartSolid} className="text-red-500" />
                        ) : (
                          <FontAwesomeIcon icon={faHeartRegular} className="text-gray-600" />
                        )}
                      </motion.button>

                      <motion.button
                        aria-label="Share resort"
                        className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"
                        onClick={() => handleShare(resort)}
                      >
                        <FontAwesomeIcon icon={faShareNodes} className="text-gray-600" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 itemProp="name" className="text-xl font-bold text-gray-800 mb-2">
                    {resort.name}
                  </h3>

                  <div className="flex items-center text-gray-600 mb-3">
                    <FontAwesomeIcon icon={faLocationDot} className="text-red-500 mr-2" />
                    <span itemProp="address">{resort.location}</span>
                  </div>

                  <p itemProp="description" className="text-gray-600 mb-4 line-clamp-3">
                    {resort.description}
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(resort.rating)}
                    <span className="text-sm text-gray-500 ml-2">
                      {resort.rating} ({resort.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {resort.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <motion.button
                      aria-label="Contact on WhatsApp"
                      onClick={() => handleGetDetails(resort)}
                      className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                      Get Details
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredResorts.length && (
          <div className="text-center">
            <motion.button
              className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all inline-flex items-center gap-3"
              onClick={() => setVisibleCount(v => v + 3)}
              aria-label="Load more resorts"
            >
              Load More Resorts
              <FontAwesomeIcon icon={faArrowDown} />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResortCatalog;
