import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Novinky a média", hasDropdown: true },
  { label: "Pro zaměstnance", hasDropdown: true },
  { label: "Naše firma", hasDropdown: true },
  { label: "Dokumenty", hasDropdown: true },
  { label: "Podpora", hasDropdown: true },
  { label: "Nástroje a aplikace", hasDropdown: false },
  { label: "Telefonní seznam", hasDropdown: false },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-white hover:bg-[rgba(255,255,255,0.1)] rounded-md transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#009fda] border-t border-[rgba(255,255,255,0.2)] z-50">
          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="text-left px-4 py-3 text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors border-b border-[rgba(255,255,255,0.1)]"
              >
                <span className="font-['Roboto:Regular',_sans-serif]">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
