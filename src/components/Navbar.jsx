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
      <div className="max-w-7xl mx-auto px-3 py-3 flex justify-between items-center">

        {/* Brand logo + name */}
        <button
          onClick={() => handleLinkClick("home")}
          className="flex items-center gap-6"
          aria-label="Go to home"
        >
          <img
  src="/logo.jpeg"
  alt="Tripyy Tales logo"
  className="h-10 sm:h-12 object-contain"
  style={{
    transform: "scale(1.35)",   
    transformOrigin: "left center",
    marginTop: "-4px",         
  }}
/>


          <span className="text-xl sm:text-2xl font-bold text-blue-600 tracking-wide">
                Tripyy Tales
          </span>
        </button>

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
