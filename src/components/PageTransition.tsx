
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setHasMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const container = pageRef.current;
    if (!container || !hasMounted) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' && typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;
    if (prefersReducedMotion) {
      container.style.opacity = '1';
      return;
    }

    const reveals = pageRef.current?.getElementsByClassName("reveal") ?? [];

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10%' }
    );

    if (reveals && reveals.length > 0) {
      for (let i = 0; i < reveals.length; i++) {
        const el = reveals[i];
        revealObserver.observe(el);
      }
    }

    return () => revealObserver.disconnect();
  }, [hasMounted]);
  
  return (
    <div 
      ref={pageRef} 
      className={cn(
        "min-h-screen transition-opacity duration-700 ease-out",
        hasMounted ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageTransition;
