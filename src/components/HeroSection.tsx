
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  background?: 'light' | 'dark';
  className?: string;
  align?: 'left' | 'center';
  children?: React.ReactNode;
  showLogo?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  background = 'light',
  className,
  align = 'center',
  children,
  showLogo = false,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = heroRef.current;
    if (!element || typeof window === 'undefined') return;

    const prefersReducedMotion =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;

    if (prefersReducedMotion) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      return;
    }

    let ticking = false;

    const updateStyles = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = Math.max(1 - scrollPosition / 700, 0.2);
      const translateY = scrollPosition * 0.2;

      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `translateY(${translateY}px)`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateStyles);
      }
    };

    updateStyles();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        background === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900',
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-auccon-500/10 to-transparent opacity-60"></div>
        {background === 'light' && (
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        )}
      </div>
      
      <div 
        ref={heroRef}
        className={cn(
          'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-20 transition-all duration-200',
          align === 'center' ? 'text-center' : 'text-left'
        )}
        style={{ willChange: 'transform, opacity' }}
      >
        {showLogo && (
          <div className={cn("mb-10 w-full", align === 'center' ? 'mx-auto' : '')}>
            <img
              src="./images/banner.png"
              alt="Auccon Logo"
              loading="eager"
              decoding="async"
              className={cn(
                "h-64 md:h-80 lg:h-96 xl:h-[36rem] object-contain w-full",
                align === 'center' ? 'mx-auto' : ''
              )}
            />
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default HeroSection;
