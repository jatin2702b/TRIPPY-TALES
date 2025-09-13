// src/components/ResortCatalog.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResortCatalog = () => {
  const [resorts] = useState([
    {
      id: 1,
      name: "Jim Corbett Nature Resort",
      location: "Dhikuli, Uttarakhand",
      description: "Experience wildlife adventure in the heart of Jim Corbett National Park with luxury accommodations and guided safaris.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 4500,
      rating: 4.8,
      reviews: 156,
      category: ["wildlife", "nature"],
      amenities: ["Safari Booking", "Nature Walks", "Bonfire"],
      amenityIcons: ["fas fa-binoculars", "fas fa-tree", "fas fa-fire"]
    },
    {
      id: 2,
      name: "Nainital Lake Resort",
      location: "Nainital, Uttarakhand",
      description: "Serene lakeside retreat with breathtaking mountain views, boating facilities and peaceful ambiance perfect for families.",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 3200,
      rating: 4.6,
      reviews: 89,
      category: ["lake", "mountain"],
      amenities: ["Lake View", "Boating", "Mountain Trek"],
      amenityIcons: ["fas fa-water", "fas fa-ship", "fas fa-mountain"]
    },
    {
      id: 3,
      name: "Corbett Falls Lodge",
      location: "Corbett Falls, Uttarakhand",
      description: "Cozy lodge near the famous Corbett Falls with adventure activities, nature photography and waterfall trekking.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 2800,
      rating: 4.4,
      reviews: 124,
      category: ["waterfall", "adventure"],
      amenities: ["Waterfall Trek", "Photography", "Nature Walk"],
      amenityIcons: ["fas fa-tint", "fas fa-camera", "fas fa-hiking"]
    },
    {
      id: 4,
      name: "Ramanagar Riverside Camp",
      location: "Ramanagar Jhirna, Uttarakhand",
      description: "Riverside camping experience with adventure sports, wildlife spotting and authentic jungle safari experiences.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 2200,
      rating: 4.5,
      reviews: 78,
      category: ["camping", "riverside"],
      amenities: ["River View", "Camping", "Wildlife Safari"],
      amenityIcons: ["fas fa-water", "fas fa-campground", "fas fa-paw"]
    },
    {
      id: 5,
      name: "Bhimtal Serenity Resort",
      location: "Bhimtal, Uttarakhand",
      description: "Peaceful resort on the shores of Bhimtal lake offering water sports, island visits and mountain trekking.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 3800,
      rating: 4.7,
      reviews: 203,
      category: ["lake", "luxury"],
      amenities: ["Island Visit", "Water Sports", "Lake View"],
      amenityIcons: ["fas fa-map-marker-alt", "fas fa-swimming-pool", "fas fa-eye"]
    },
    {
      id: 6,
      name: "Sattal Nature Camp",
      location: "Sattal, Uttarakhand",
      description: "Seven interconnected lakes camping experience with bird watching, kayaking and pristine natural beauty.",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 2500,
      rating: 4.9,
      reviews: 167,
      category: ["camping", "nature"],
      amenities: ["Bird Watching", "Kayaking", "Nature Trail"],
      amenityIcons: ["fas fa-dove", "fas fa-ship", "fas fa-route"]
    },
    {
      id: 7,
      name: "Munsyari Mountain Retreat",
      location: "Munsyari, Uttarakhand",
      description: "High altitude retreat with panoramic Himalayan views, trekking base camp and authentic Kumaoni culture.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 3500,
      rating: 4.8,
      reviews: 145,
      category: ["mountain", "trekking"],
      amenities: ["Himalayan View", "Trekking Base", "Local Culture"],
      amenityIcons: ["fas fa-mountain", "fas fa-hiking", "fas fa-home"]
    },
    {
      id: 8,
      name: "Kaichidham Spiritual Retreat",
      location: "Kaichidham, Uttarakhand",
      description: "Sacred pilgrimage destination with temple visits, spiritual ceremonies and peaceful meditation sessions.",
      image: "https://images.unsplash.com/photo-1518588734007-220542c4cdb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 2000,
      rating: 4.6,
      reviews: 89,
      category: ["spiritual", "temple"],
      amenities: ["Temple Visit", "Meditation", "Spiritual Guide"],
      amenityIcons: ["fas fa-place-of-worship", "fas fa-peace", "fas fa-user-friends"]
    }
  ]);

  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedResort, setSelectedResort] = useState(null);
  const [showModal, setShowModal] = useState(false);
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

  // Filter and search logic
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

  const handleBooking = (resort) => {
    setSelectedResort(resort);
    setShowModal(true);
  };

  const toggleFavorite = (resortId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(resortId)) {
        newFavorites.delete(resortId);
      } else {
        newFavorites.add(resortId);
      }
      return newFavorites;
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
        // You can add a toast notification here
        console.log('Link copied to clipboard!');
      });
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>);
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

          {/* Search Bar */}
          <motion.div 
            className="max-w-md mx-auto relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Search resorts by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 text-lg"
            />
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
              <i className="fas fa-search"></i>
            </div>
          </motion.div>
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
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full font-bold text-lg">
                        ₹{resort.price.toLocaleString()}/night
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.button 
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                        onClick={() => toggleFavorite(resort.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className={`${favorites.has(resort.id) ? 'fas fa-heart text-red-500' : 'far fa-heart text-gray-600'}`}></i>
                      </motion.button>
                      <motion.button 
                        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                        onClick={() => handleShare(resort)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <i className="fas fa-share-alt text-gray-600"></i>
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
                    <i className="fas fa-map-marker-alt text-red-500 mr-2"></i>
                    <span className="font-medium">{resort.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {resort.description}
                  </p>
                  
                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {resort.amenities.map((amenity, index) => (
                      <span 
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                      >
                        <i className={resort.amenityIcons[index]}></i>
                        {amenity}
                      </span>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-3xl font-bold text-gray-800">
                        ₹{resort.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500 ml-1">/night</span>
                    </div>
                    <motion.button 
                      className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                      onClick={() => handleBooking(resort)}
                      whileHover={{ 
                        y: -2,
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
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
              <i className="fas fa-arrow-down"></i>
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

      {/* Booking Modal */}
      <BookingModal
        resort={selectedResort}
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedResort(null);
        }}
      />
    </section>
  );
};

// Booking Modal Component (same as before, but with Font Awesome icons)
const BookingModal = ({ resort, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    rooms: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: '',
        rooms: '',
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        specialRequests: ''
      });
      setShowSuccess(false);
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with your actual booking endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Booking data:', { ...formData, resort: resort?.name });
      setShowSuccess(true);
      
      // You can integrate with your backend here:
      // const response = await fetch('/api/bookings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...formData, resort: resort?.name })
      // });
      
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const minCheckOut = formData.checkIn ? 
    new Date(new Date(formData.checkIn).getTime() + 86400000).toISOString().split('T')[0] : 
    today;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">Book Your Stay</h3>
              <motion.button 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-times text-gray-600"></i>
              </motion.button>
            </div>

            <div className="p-6">
              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div 
                    className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-xl mb-6 flex items-center gap-3"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <i className="fas fa-check-circle text-2xl"></i>
                    <span className="font-semibold">
                      Booking request submitted successfully! We'll contact you within 24 hours.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Resort Info */}
              {resort && (
                <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-2xl mb-8">
                  <h4 className="text-xl font-bold">{resort.name}</h4>
                  <p className="opacity-90 flex items-center gap-2">
                    <i className="fas fa-map-marker-alt"></i>
                    {resort.location}
                  </p>
                </div>
              )}

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <i className="fas fa-calendar-alt mr-2"></i>Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      min={today}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <i className="fas fa-calendar-alt mr-2"></i>Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      min={minCheckOut}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <i className="fas fa-users mr-2"></i>Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <i className="fas fa-bed mr-2"></i>Number of Rooms
                    </label>
                    <select
                      name="rooms"
                      value={formData.rooms}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="">Select rooms</option>
                      <option value="1">1 Room</option>
                      <option value="2">2 Rooms</option>
                      <option value="3">3 Rooms</option>
                      <option value="4+">4+ Rooms</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-user mr-2"></i>Full Name
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-envelope mr-2"></i>Email Address
                  </label>
                  <input
                    type="email"
                    name="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-phone mr-2"></i>Phone Number
                  </label>
                  <input
                    type="tel"
                    name="customerPhone"
                    value={formData.customerPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <i className="fas fa-comment mr-2"></i>Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 resize-none"
                    placeholder="Any special requirements or requests..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <motion.button 
                    type="button" 
                    className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                    onClick={onClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    disabled={isSubmitting}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-check mr-2"></i>
                        Confirm Booking
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResortCatalog;
