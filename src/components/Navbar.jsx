import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close the menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
         <div className="flex flex-col">
    <h2 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
  tripyy tales
  <span className="text-sm text-gray-500 italic">— Trips that turn into tales</span>
</h2>

        </div>
  

          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#destinations" className="text-gray-700 hover:text-blue-600">Destinations</a>
            <a href="#packages" className="text-gray-700 hover:text-blue-600">Packages</a>
            <a href="#trekking" className="text-gray-700 hover:text-blue-600">Trekking Packages</a>
            <a href="#resorts" className="text-gray-700 hover:text-blue-600">Resorts</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600">Gallery</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2">
            <a href="#home" onClick={handleLinkClick} className="block py-2 text-gray-700">Home</a>
            <a href="#destinations" onClick={handleLinkClick} className="block py-2 text-gray-700">Destinations</a>
            <a href="#packages" onClick={handleLinkClick} className="block py-2 text-gray-700">Packages</a>
            <a href="#trekking" onClick={handleLinkClick} className="block py-2 text-gray-700">Trekking Packages</a>
            <a href="#resorts" onClick={handleLinkClick} className="block py-2 text-gray-700">Resorts</a>
            <a href="#gallery" onClick={handleLinkClick} className="block py-2 text-gray-700">Gallery</a>
            <a href="#about" onClick={handleLinkClick} className="block py-2 text-gray-700">About</a>
            <a href="#contact" onClick={handleLinkClick} className="block py-2 text-gray-700">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
