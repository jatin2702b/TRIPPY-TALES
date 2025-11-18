// Optimized ResortCatalog.jsx (Steps applied except step 9, and keeping title sizes unchanged)

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
      name: "West View Hotel – Heritage Colonial Stay",
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
    return resorts.filter(resort => currentFilter === 'all' || resort.category.includes(currentFilter));
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
      navigator.clipboard.writeText(`Check out ${resort.name} in ${resort.location} - ${window.location.href}`);
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
  // Updated ResortCatalog section with bolder and darker styling
  <section
  id="resortscatalog"
  className="py-20 bg-gradient-to-br from-blue-100 via-white to-green-100 min-h-screen"
  itemScope
  itemType="https://schema.org/ItemList"
>
  <meta itemProp="name" content="Best Resorts in Uttarakhand | tripyy tales" />
  <meta
    itemProp="description"
    content="Explore curated resorts in Jim Corbett, Nainital, Rishikesh and more with luxury stays and adventure activities."
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-gray-900">
      Discover Our Resort Collection
    </h2>

    <p className="text-center text-gray-700 font-medium mb-12 max-w-2xl mx-auto">
      Find your perfect getaway from our curated selection of premium resorts
    </p>

    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setCurrentFilter(filter.value)}
          className={`px-6 py-2 rounded-full font-semibold transition-all shadow-sm ${
            currentFilter === filter.value
              ? "bg-blue-700 text-white shadow-lg"
              : "bg-gray-100 text-gray-800 border border-gray-400 hover:border-blue-700 hover:text-gray-900"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>

    <AnimatePresence mode="wait">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleResorts.map((resort, index) => (
          <motion.div
            key={resort.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-gray-300"
          >
            <div className="relative">
              <img
                src={resort.image}
                alt={resort.name}
                className="w-full h-48 object-cover"
              />

              <button
                onClick={() => toggleFavorite(resort.id)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-xl transition-shadow border border-gray-300"
              >
                <FontAwesomeIcon
                  icon={favorites.has(resort.id) ? faHeartSolid : faHeartRegular}
                  className={favorites.has(resort.id) ? "text-red-600" : "text-gray-500"}
                />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                {resort.name}
              </h3>

              <div className="flex items-center text-gray-700 mb-3 font-medium">
                <FontAwesomeIcon icon={faLocationDot} className="mr-2 text-blue-700" />
                <p className="text-sm">{resort.location}</p>
              </div>

              <p className="text-gray-700 text-sm mb-4 font-medium line-clamp-2">
                {resort.description}
              </p>

              <div className="flex items-center mb-4">
                <div className="flex gap-1">{renderStars(resort.rating)}</div>
                <span className="ml-3 text-sm font-bold text-gray-800">
                  {resort.rating} ({resort.reviews} reviews)
                </span>
              </div>

              <div className="flex gap-2 flex-wrap mb-4">
                {resort.amenities.slice(0, 2).map((amenity, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-blue-200 text-blue-900 px-3 py-1 rounded-full font-semibold"
                  >
                    {amenity}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => handleGetDetails(resort)}
                  className="flex-1 bg-green-700 text-white py-2 rounded-lg font-bold hover:bg-green-800 transition-colors flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faWhatsapp} /> Get Details
                </button>

                <button
                  onClick={() => handleShare(resort)}
                  className="flex-1 bg-blue-700 text-white py-2 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faShareNodes} /> Share
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>

    {visibleCount < filteredResorts.length && (
      <div className="flex justify-center mt-12">
        <button
          onClick={() => setVisibleCount((prev) => prev + 3)}
          className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center gap-2 shadow-md"
        >
          <FontAwesomeIcon icon={faArrowDown} /> Load More Resorts
        </button>
      </div>
    )}
  </div>
    </section>
  );
};

export default ResortCatalog;
