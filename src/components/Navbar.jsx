import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Brand Name */}
        <h1 className="text-xl font-bold text-blue-600 flex items-center gap-1">
          Tripyy Tales
          <span className="text-xs text-gray-500 italic">
            — Trips that turn into tales
          </span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            ["home", "Home"],
            ["destinations", "Destinations"],
            ["packages", "Packages"],
            ["trekking", "Trekking Packages"],
            ["resortscatalog", "Resorts"],
            ["corporateshowmore", "Corporate"],
            ["gallery", "Gallery"],
            ["about", "About"],
            ["contact", "Contact"],
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
          className="md:hidden p-2 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t p-4 flex flex-col gap-3">
          {[
            ["home", "Home"],
            ["destinations", "Destinations"],
            ["packages", "Packages"],
            ["trekking", "Trekking Packages"],
            ["resortscatalog", "Resorts"],
            ["corporateshowmore", "Corporate"],
            ["gallery", "Gallery"],
            ["about", "About"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleLinkClick(id)}
              className="text-gray-700 py-2 border-b text-left"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
