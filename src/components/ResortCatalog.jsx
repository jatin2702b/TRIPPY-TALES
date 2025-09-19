// src/components/ResortCatalog.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShareNodes,
  faStar,
  faStarHalfStroke,
  faLocationDot,
  faMagnifyingGlass,
  faArrowDown,
  faCircleCheck,
  faHeart as faHeartSolid,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const BUSINESS_WHATSAPP = '919876543210'; // Replace with full international number, no +, spaces, or dashes

const ResortCatalog = () => {
  const [resorts] = useState([
    {
      id: 1,
      name: "Maulik Mansion",
      location: "Dhikuli, Uttarakhand",
      description: "Experience wildlife adventure in the heart of Jim Corbett National Park with luxury accommodations and guided safaris.",
      image: "https://onlinecorbettresorts.com/img/ToursImage_259_3917.jpg",
      price: 4500,
      rating: 4.8,
      reviews: 156,
      category: ["wildlife", "nature"],
      amenities: ["Safari Booking", "Nature Walks", "Bonfire"],
    },
    {
      id: 2,
      name: "Trishul Resort",
      location: "Mukteshwar, Uttarakhand",
      description: "Scenic retreat at Trishul Resort, Mukteshwar with panoramic mountain views, forest trails, bird watching, and adventure activities.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/9d/ca/27/resorts-by-the-baagh.jpg?w=900&h=500&s=1",
      price: 3200,
      rating: 4.6,
      reviews: 89,
      category: ["lake", "mountain"],
      amenities: ["Lake View", "Boating", "Mountain Trek"],
    },
    {
      id: 3,
      name: "West View Hotel",
      location: "Ranikhet, Uttarakhand",
      description: "Cozy hotel at West View, Ranikhet surrounded by lush pine forests with adventure activities, photography spots.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/34/0c/d2/west-view-ranikhet.jpg?w=900&h=500&s=1",
      price: 2800,
      rating: 4.4,
      reviews: 124,
      category: ["waterfall", "adventure"],
      amenities: ["Waterfall Trek", "Photography", "Nature Walk"],
    },
    {
      id: 4,
      name: "Balrampur House",
      location: "Nainital, Uttarakhand",
      description: "Cozy stay at Balram House, Nainital with scenic lake views, nature walks, bird watching, and peaceful surroundings.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/25/3d/98/balrampur-house.jpg?w=900&h=500&s=1",
      price: 2200,
      rating: 4.5,
      reviews: 78,
      category: ["camping", "riverside", "mountain", "lake"],
      amenities: ["River View", "Camping", "Wildlife Safari"],
    },
    {
      id: 5,
      name: "Ojaswi Resort",
      location: "Chaukori Pithoragarh, Uttarakhand",
      description: "Charming resort at Ojawsi, Pithoragarh with mountain views, trekking trails, nature photography, and adventure activities.",
      image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_2448,h_1377,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/ojaswi-resort-chaukori/Snow_Capped_4_Ojaswi_Hotel_and_Resort_in_Chaukori_mewbtu",
      price: 3800,
      rating: 4.7,
      reviews: 203,
      category: ["luxury"],
      amenities: ["Island Visit", "Water Sports", "Lake View"],
    },
    {
      id: 6,
      name: "Imperial Height",
      location: "Almora, Uttarakhand",
      description: "Charming hillside stay at Imperial Heights, Almora with panoramic vistas, trekking paths, photography spots, and cozy evenings.",
      image: "https://imgs.search.brave.com/dFUakT8DD5Fwyg0x8BtF-sjk2XAZuRCFaDp-sFDibFg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/YWxtb3JhL2M3Lzk5/OTlwNTk2Mi41OTYy/LjE0MDcwNzEwMzcw/NS50OWM3L2NhdGFs/b2d1ZS9pbXBlcmlh/bC1oZWlnaHRzLWFs/bW9yYS1oby1hbG1v/cmEtaG90ZWxzLW14/ZjZldmE1Mm4uanBn/P3c9Mzg0MCZxPTc1",
      price: 2500,
      rating: 4.9,
      reviews: 167,
      category: ["camping", "nature"],
      amenities: ["Bird Watching", "Kayaking", "Nature Trail"],
    },
    {
      id: 7,
      name: "Shivpuri Camps",
      location: "Rishikesh, Uttarakhand",
      description: "Riverside camps and adventure activities near Rishikesh, popular for rafting and nature stays.",
      image: "https://imgs.search.brave.com/MsXaA-r2xefyJY2muGudW6W6ujCQRSO8YlW6r-6YZ0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yaXNo/aWtlc2guY2FtcC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8x/MC9TaGl2cHVyaS1C/ZWFjaC1SaXZlcnNp/ZGUtQ2FtcGluZy1p/bi1SaXNoaWtlc2gu/anBn",
      price: 3000,
      rating: 4.6,
      reviews: 142,
      category: ["adventure", "riverside", "spiritual"],
      amenities: ["River Rafting", "Campfire", "Nature Walk"],
    },
  ]);

  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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

  // Filter and search logic (unchanged)
  const filteredResorts = useMemo(() => {
    return resorts.filter(resort => {
      const matchesCategory = currentFilter === 'all' || resort.category.includes(currentFilter);
      const matchesSearch = !searchTerm ||
        resort.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resort.location.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [resorts, currentFilter, searchTerm]);

  const visibleResorts = filteredResorts.slice(0, visibleCount);

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredResorts.length));
  };

  const toggleFavorite = (resortId) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(resortId)) next.delete(resortId);
      else next.add(resortId);
      return next;
    });
  };

  const handleShare = (resort) => {
    if (navigator.share) {
      navigator.share({
        title: resort.name,
        text: `Check out this amazing resort: ${resort.name} in ${resort.location}`,
        url: window.location.href
      });
    } else {
      const shareText = `Check out ${resort.name} in ${resort.location} - ${window.location.href}`;
      navigator.clipboard.writeText(shareText).then(() => {
        console.log('Link copied to clipboard!');
      });
    }
  };

  const handleGetDetails = (resort) => {
    const message = `Hello Trippy Tales,\nI'm interested in ${resort.name} (${resort.location}). Could you share details, availability, and best rates?`;
    const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < full; i++) {
      stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-yellow-400" />);
    }
    if (hasHalf) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfStroke} className="text-yellow-400" />);
    }
    const remaining = 5 - Math.ceil(rating);
    for (let i = 0; i < remaining; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarRegular} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Featured Resorts & Stays
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover handpicked accommodations in Uttarakhand's most beautiful destinations with Trippy Tales
          </p>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter.value}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  currentFilter === filter.value
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600'
                }`}
                onClick={() => handleFilterChange(filter.value)}
                whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                <i className={filter.icon}></i>
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* Search Bar removed */}
        </motion.div>

        {/* Resort Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          layout
        >
          <AnimatePresence>
            {visibleResorts.map((resort, index) => (
              <motion.div
                key={resort.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Card Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={resort.image}
                    alt={resort.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.button
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                        onClick={() => toggleFavorite(resort.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Toggle favorite"
                      >
                        {favorites.has(resort.id) ? (
                          <FontAwesomeIcon icon={faHeartSolid} className="text-red-500" />
                        ) : (
                          <FontAwesomeIcon icon={faHeartRegular} className="text-gray-600" />
                        )}
                      </motion.button>
                      <motion.button
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                        onClick={() => handleShare(resort)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Share"
                      >
                        <FontAwesomeIcon icon={faShareNodes} className="text-gray-600" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 line-clamp-2 flex-1">
                      {resort.name}
                    </h3>
                    <div className="ml-4 text-right">
                      <div className="flex items-center gap-1 mb-1">
                        {renderStars(resort.rating)}
                      </div>
                      <span className="text-sm text-gray-500">
                        {resort.rating} ({resort.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <FontAwesomeIcon icon={faLocationDot} className="text-red-500 mr-2" />
                    <span className="font-medium">{resort.location}</span>
                  </div>

                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {resort.description}
                  </p>

                  {/* Amenities */}
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

                  {/* Footer */}
                  <div className="flex justify-end items-center pt-4 border-t border-gray-100">
                    <motion.button
                      className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                      onClick={() => handleGetDetails(resort)}
                      whileHover={{
                        y: -2,
                        boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
                      Get Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredResorts.length && (
          <div className="text-center">
            <motion.button
              className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center gap-3"
              onClick={handleLoadMore}
              whileHover={{
                y: -2,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Load More Resorts
              <FontAwesomeIcon icon={faArrowDown} />
            </motion.button>
          </div>
        )}

        {/* No Results */}
        {filteredResorts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <i className="fas fa-search text-6xl text-gray-300 mb-6"></i>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">No resorts found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ResortCatalog;
