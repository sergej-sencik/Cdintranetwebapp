import { useState, useCallback } from 'react';

/**
 * Use Showcase Scroll Hook
 * 
 * Custom hook for managing scroll-to-section functionality in showcase pages.
 * 
 * @param initialSection - Initial active section ID
 * @param scrollOffset - Offset from top for sticky headers (default: -100)
 * @returns Object with activeSection state and scrollToSection function
 * 
 * @example
 * ```tsx
 * const { activeSection, scrollToSection } = useShowcaseScroll('headings');
 * ```
 */
export function useShowcaseScroll(initialSection: string, scrollOffset: number = -100) {
  const [activeSection, setActiveSection] = useState(initialSection);

  const scrollToSection = useCallback((id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = scrollOffset;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [scrollOffset]);

  return { activeSection, scrollToSection };
}
