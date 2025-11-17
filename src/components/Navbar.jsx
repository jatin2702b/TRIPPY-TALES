import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80 // adjust for fixed navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Brand */}
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            Tripyy Tales
            <span className="text-sm text-gray-500 italic">— Trips that turn into tales</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            ['home', 'Home'],
            ['destinations', 'Destinations'],
            ['packages', 'Packages'],
            ['trekking', 'Trekking Packages'],
            ['resortscatalog', 'Resorts'],
            ['corporateshowmore', 'Corporate'],
            ['gallery', 'Gallery'],
            ['about', 'About'],
            ['contact', 'Contact'],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleLinkClick(id)}
              className="text-gray-700 hover:text-blue-600"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-2">
            {[
              ['home', 'Home'],
              ['destinations', 'Destinations'],
              ['packages', 'Packages'],
              ['trekking', 'Trekking Packages'],
              ['resortscatalog', 'Resorts'],
              ['corporateshowmore', 'Corporate'],
              ['gallery', 'Gallery'],
              ['about', 'About'],
              ['contact', 'Contact'],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => handleLinkClick(id)}
                className="block py-2 text-gray-700 text-left"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
