
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  background?: 'light' | 'dark';
  className?: string;
  align?: 'left' | 'center';
  children?: React.ReactNode;
  showLogo?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  background = 'light',
  className,
  align = 'center',
  children,
  showLogo = false,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(1 - scrollPosition / 700, 0.2);
        const translateY = scrollPosition * 0.2;
        
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        background === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900',
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
          'relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 transition-all duration-200',
          align === 'center' ? 'text-center' : 'text-left'
        )}
        style={{ willChange: 'transform, opacity' }}
      >
        {showLogo && (
          <div className={cn("mb-10", align === 'center' ? 'mx-auto' : '')}>
            <img src="./logo.png" alt="Auccon Logo" className={cn("h-24 md:h-32", align === 'center' ? 'mx-auto' : '')} />
          </div>
        )}
        
        <h1 
          className={cn(
            'font-heading font-bold mb-6 leading-tight tracking-tight reveal fade-bottom',
            align === 'center' ? 'mx-auto' : ''
          )}
        >
          {title}
        </h1>
        
        {subtitle && (
          <p className={cn(
            'text-lg md:text-xl max-w-3xl leading-relaxed mb-10 reveal fade-bottom',
            background === 'dark' ? 'text-gray-300' : 'text-gray-600',
            align === 'center' ? 'mx-auto' : ''
          )}>
            {subtitle}
          </p>
        )}
        
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
