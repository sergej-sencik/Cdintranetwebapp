import { useState, useEffect } from "react";

interface StickyHeaderProps {
  topSection: React.ReactNode;
  bottomSection: React.ReactNode;
}

export function StickyHeader({ topSection, bottomSection }: StickyHeaderProps) {
  const [showTopSection, setShowTopSection] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the top of the page
      if (currentScrollY < 10) {
        setIsAtTop(true);
        setShowTopSection(true);
      } else {
        setIsAtTop(false);
        
        // Show top section when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY) {
          // Scrolling up
          setShowTopSection(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down (and not near the top)
          setShowTopSection(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="sticky top-0 z-[100] w-full">
      {/* Top Section - shows/hides based on scroll direction */}
      <div
        className={`w-full bg-white transition-transform duration-300 ease-in-out ${
          showTopSection ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {topSection}
      </div>
      
      {/* Bottom Section - always visible */}
      <div className="w-full bg-[#009fda]">
        {bottomSection}
      </div>
    </div>
  );
}
