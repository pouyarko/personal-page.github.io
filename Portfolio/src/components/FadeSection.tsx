import React, { useEffect, useRef } from 'react';

interface FadeSectionProps {
  children: React.ReactNode;
  index: number;
}

const FadeSection: React.FC<FadeSectionProps> = ({ children, index }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionStart = windowHeight * index - 200;
      const sectionMiddle = sectionStart + windowHeight / 2 - 200;
      
      // Calculate opacity based on scroll position
      let opacity = 1;
      const distanceFromMiddle = Math.abs(scrollPosition - sectionMiddle);
      
      if (distanceFromMiddle > windowHeight / 2) {
        opacity = 0;
      } else {
        opacity = 1 - (distanceFromMiddle / (windowHeight / 2));
      }

      sectionRef.current.style.opacity = opacity.toString();
      sectionRef.current.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [index]);

  return (
    <div 
      ref={sectionRef}
      className="fixed-section"
      style={{ 
        zIndex: index + 1,
        opacity: index === 0 ? 1 : 0 // Set initial opacity to 1 for first section
      }}
    >
      {children}
    </div>
  );
};

export default FadeSection;