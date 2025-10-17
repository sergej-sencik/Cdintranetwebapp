import { useEffect, useState } from "react";
import HomePage from "./pages/Home";
import { ComponentsShowcase } from "./components/ComponentsShowcase";
import { FontStylesShowcase } from "./pages/showcase/FontStylesShowcase";
import { ColorStylesShowcase } from "./pages/showcase/ColorStylesShowcase";
import { ShowcaseTest } from "./components/ShowcaseTest";
import { TestCmdA } from "./components/test-cmd-a";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    // Handle initial navigation
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href && anchor.origin === window.location.origin) {
        const path = anchor.pathname;
        if (path === '/components' || path === '/fonts' || path === '/colors' || path === '/test' || path === '/test-cmd-a' || path === '/') {
          e.preventDefault();
          window.history.pushState({}, '', path);
          setCurrentPath(path);
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (currentPath === '/components') {
    return <ComponentsShowcase />;
  }

  if (currentPath === '/fonts') {
    return <FontStylesShowcase />;
  }

  if (currentPath === '/colors') {
    return <ColorStylesShowcase />;
  }

  if (currentPath === '/test') {
    return <ShowcaseTest />;
  }

  if (currentPath === '/test-cmd-a') {
    return <TestCmdA />;
  }

  return <HomePage />;
}
