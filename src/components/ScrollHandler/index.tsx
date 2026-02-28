import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const sectionId = location.pathname.replace("/", "") || "home";
      const element = document.getElementById(sectionId);

      if (element) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: { y: element, offsetY: 80 },
          ease: "power3.out",
        });
      }
    }, 50); 

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
}