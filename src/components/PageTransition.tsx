
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Garantir que a opacidade permanece como 1 após a animação
          setTimeout(() => {
            if (pageRef.current) {
              pageRef.current.style.opacity = '1';
            }
          }, 600); // Animation duration
        }
      });
    }, { threshold: 0.1 });
    
    if (pageRef.current) {
      observer.observe(pageRef.current);
    }
    
    // Scroll reveal animation
    const reveals = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          
          // Garantir que o elemento permanece visível após a animação
          setTimeout(() => {
            if (entry.target instanceof HTMLElement) {
              entry.target.style.opacity = '1';
            }
          }, 900); // Animation duration
        }
      });
    }, { threshold: 0.15 });
    
    reveals.forEach(reveal => {
      revealObserver.observe(reveal);
    });
    
    return () => {
      if (pageRef.current) {
        observer.unobserve(pageRef.current);
      }
      reveals.forEach(reveal => {
        revealObserver.unobserve(reveal);
      });
    };
  }, []);
  
  return (
    <div 
      ref={pageRef} 
      className={cn("opacity-0 min-h-screen", className)}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
