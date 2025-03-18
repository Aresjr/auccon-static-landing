
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
