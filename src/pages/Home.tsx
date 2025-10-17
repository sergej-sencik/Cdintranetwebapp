import { useEffect, useState } from "react";
import Home from "../imports/Home-1-22881";
import { AIAssistant } from "../components/AIAssistant";
import "../components/sticky-header.css";

export default function HomePage() {
  const [showTopHeader, setShowTopHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show when at top
      if (currentScrollY < 10) {
        setShowTopHeader(true);
      } else {
        // Show when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY) {
          setShowTopHeader(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowTopHeader(false);
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
    <div className="home-wrapper">
      <div className={`sticky-header-container ${!showTopHeader ? 'top-header-hidden' : ''}`}>
        <Home />
      </div>
      <AIAssistant />
    </div>
  );
}
