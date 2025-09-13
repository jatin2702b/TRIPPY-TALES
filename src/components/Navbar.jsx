import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-600">
            Trippy Tales
          </h2>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#destinations" className="text-gray-700 hover:text-blue-600">Destinations</a>
            <a href="#packages" className="text-gray-700 hover:text-blue-600">Packages</a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600">Gallery</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <a href="#home" className="block py-2 text-gray-700">Home</a>
            <a href="#destinations" className="block py-2 text-gray-700">Destinations</a>
            <a href="#packages" className="block py-2 text-gray-700">Packages</a>
            <a href="#gallery" className="block py-2 text-gray-700">Gallery</a>
            <a href="#about" className="block py-2 text-gray-700">About</a>
            <a href="#contact" className="block py-2 text-gray-700">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}

// Provide a default export so default imports work:
export default Navbar
