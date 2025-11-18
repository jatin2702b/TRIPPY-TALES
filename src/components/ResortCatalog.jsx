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
  faChevronUp, // New icon for 'Hide Details'
  faChevronDown, // New icon for 'Show Details'
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// Added missing specific icons imports for the filter buttons
import { faPaw, faMountain, faWater, faHiking, faPlaceOfWorship, faCampground, faThLarge } from '@fortawesome/free-solid-svg-icons';


const BUSINESS_WHATSAPP = '7906981852';

const ResortCatalog = () => {
  const [resorts] = useState([
    {
      id: 1,
      name: "Maulik Mansion – Luxury Wildlife Resort",
      location: "Dhikuli, Jim Corbett National Park, Uttarakhand",
      description:
        "Stay at Maulik Mansion Resort with luxury amenities, wildlife safaris, nature walks, and comfortable accommodation near Corbett.",
      image: "https://onlinecorbettresorts.com/img/ToursImage_259_3917.jpg",
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
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/9d/ca/27/resorts-by-the-baagh.jpg?w=900&h=500&s=1",
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
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/34/0c/d2/west-view-ranikhet.jpg?w=900&h=500&s=1",
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
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/25/3d/98/balrampur-house.jpg?w=900&h=500&s=1",
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
      image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_2448,h_1377,r_0,c_crop,q_80,fl_progressive/w_900,f_auto/c_fit/ojaswi-resort-chaukori/Snow_Capped_4_Ojaswi_Hotel_and_Resort_in_Chaukori_mewbtu",
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
      image: "https://imgs.search.brave.com/dFUakT8DD5Fwyg0x8BtF-sjk2XAZuRCFaDp-sFDibFg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/YWxtb3JhL2M3Lzk5/OTlwNTk2Mi41OTYy/LjE0MDcwNzEwMzcw/NS50OWM3L2NhdGFs/b2d1ZS9pbXBlcmlh/bC1oZWlnaHRzLWFs/bW9yYS1oby1hbG1v/cmEtaG90ZWxzLW14/ZjZldmE1Mm4uanBn/P3c9Mzg0MCZxPTc1",
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
      image: "https://imgs.search.brave.com/MsXaA-r2xefyJY2muGudW6W6ujCQRSO8YlW6r-6YZ0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yaXNo/aWtlc2guY2FtcC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8x/MC9TaGl2cHVyaS1C/ZWFjaC1SaXZlcnNp/ZGUtQ2FtcGluZy1p/bi1SaXNoaWtlc2gu/anBn",
      rating: 4.6,
      reviews: 142,
      category: ["adventure", "riverside", "spiritual"],
      amenities: ["River Rafting", "Campfire", "Nature Walk"],
    },
  ]);

  const [currentFilter, setCurrentFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(3); // Start with fewer resorts for mobile
  const [favorites, setFavorites] = useState(new Set());
  // New state to manage open/closed details on cards
  const [openDetailsId, setOpenDetailsId] = useState(null); 

  const filters = [
    { value: 'all', label: 'All Resorts', icon: faThLarge },
    { value: 'wildlife', label: 'Wildlife', icon: faPaw },
    { value: 'mountain', label: 'Mountain', icon: faMountain },
    { value: 'lake', label: 'Lake', icon: faWater },
    { value: 'adventure', label: 'Adventure', icon: faHiking },
    { value: 'spiritual', label: 'Spiritual', icon: faPlaceOfWorship },
    { value: 'camping', label: 'Camping', icon: faCampground }
  ];

  const filteredResorts = useMemo(() => {
    return resorts.filter(resort => currentFilter === 'all' || resort.category.includes(currentFilter));
  }, [resorts, currentFilter]);

  const visibleResorts = filteredResorts.slice(0, visibleCount);

  // Fix: Added backticks to template literals
  const handleShare = (resort) => {
    if (navigator.share) {
      navigator.share({
        title: resort.name,
        text: `Check out this resort: ${resort.name} in ${resort.location}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`Check out ${resort.name} in ${resort.location} - ${window.location.href}`);
    }
  };
  
  // Fix: Added backticks to template literal
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

  const toggleDetails = (id) => {
    setOpenDetailsId(openDetailsId === id ? null : id);
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
      id="resortscatalog"
      // Change: Using a clean white background for better contrast and mobile performance
      className="py-10 bg-white min-h-screen" 
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Best Resorts in Uttarakhand | tripyy tales" />
      <meta
        itemProp="description"
        content="Explore curated resorts in Jim Corbett, Nainital, Rishikesh, Almora, and Pithoragarh with premium stays, adventure activities, lake views and nature experiences."
      />

      {/* Change: Reduced max-width and padding for tighter mobile layout */}
      <div className="mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-8" // Reduced margin
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Change: Slightly smaller title for mobile readability */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Our Premium Stays
          </h2>
          <p className="text-md text-gray-600 mb-8 max-w-2xl mx-auto">
            Find your perfect escape, curated by tripyy tales.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8"> {/* Reduced gap */}
            {filters.map(filter => (
              <motion.button
                key={filter.value}
                onClick={() => setCurrentFilter(filter.value)}
                aria-label={`Filter resorts by ${filter.label}`}
                // Fix: Correctly referencing the icon object instead of the string class
                // Change: Smaller padding for filter buttons
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1 ${                  
                  currentFilter === filter.value
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 border border-gray-300 hover:border-blue-500"
                }`}              
              >
                <FontAwesomeIcon icon={filter.icon} className="text-md"/>
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" layout> {/* Reduced gap */}
          <AnimatePresence>
            {visibleResorts.map((resort, index) => (
              <motion.article
                key={resort.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }} // Faster transition
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200" // Compact card styling
              >
                <div className="relative h-48 overflow-hidden"> {/* Reduced image height */}
                  <motion.img
                    src={resort.image}
                    alt={`${resort.name} – ${resort.description}`}
                    title={resort.name}
                    width="600"
                    height="300"
                    loading="lazy"
                    itemProp="image"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="absolute top-3 right-3 flex gap-2"> {/* Smaller buttons */}
                    <motion.button
                      aria-label="Add to favorites"
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center p-1"
                      onClick={() => toggleFavorite(resort.id)}
                    >
                      {favorites.has(resort.id) ? (
                        <FontAwesomeIcon icon={faHeartSolid} className="text-red-500 text-sm" />
                      ) : (
                        <FontAwesomeIcon icon={faHeartRegular} className="text-gray-600 text-sm" />
                      )}
                    </motion.button>
                  </div>
                </div>

                <div className="p-4"> {/* Reduced padding */}
                  <h3 itemProp="name" className="text-lg font-bold text-gray-800 mb-1">
                    {resort.name}
                  </h3>

                  <div className="flex items-center text-gray-600 mb-2">
                    <FontAwesomeIcon icon={faLocationDot} className="text-blue-500 text-sm mr-1" />
                    <span itemProp="address" className="text-xs">{resort.location}</span> {/* Smaller font */}
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(resort.rating)}
                    <span className="text-xs text-gray-500 ml-1">
                      {resort.rating} ({resort.reviews} reviews)
                    </span>
                  </div>
                  
                  {/* Action Buttons (Always visible) */}
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <motion.button
                      onClick={() => toggleDetails(resort.id)}
                      className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:text-blue-800 transition-colors"
                      aria-expanded={openDetailsId === resort.id}
                    >
                      {openDetailsId === resort.id ? 'Hide Details' : 'Show Details'}
                      <FontAwesomeIcon icon={openDetailsId === resort.id ? faChevronUp : faChevronDown} className="text-xs" />
                    </motion.button>

                    <motion.button
                      aria-label="Contact on WhatsApp"
                      onClick={() => handleGetDetails(resort)}
                      className="bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold inline-flex items-center gap-1 hover:bg-green-700 transition-colors"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="text-md" />
                      Inquire
                    </motion.button>
                  </div>

                  {/* Toggleable Details Section */}
                  <AnimatePresence>
                    {openDetailsId === resort.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 pt-3 border-t border-gray-100"
                      >
                        <p itemProp="description" className="text-gray-700 text-xs mb-3">
                          {resort.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {resort.amenities.map((amenity, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1"
                            >
                              <FontAwesomeIcon icon={faCircleCheck} className="text-sm" />
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredResorts.length && (
          <div className="text-center">
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2 text-sm"
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