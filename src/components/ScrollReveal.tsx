'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

// Only register on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: ReactNode;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div' | 'blockquote';
}

const ScrollRevealText = ({
  children,
  enableBlur = true,
  baseOpacity = 0,
  baseRotation = 0,
  blurStrength = 4,
  containerClassName = '',
  className = '',
  as: Component = 'div'
}: ScrollRevealProps) => {
  const finalContainerClassName = className || containerClassName;
  const containerRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || animatedRef.current) return;

    // Set initial state
    gsap.set(el, { 
      opacity: baseOpacity, 
      y: 20,
      filter: enableBlur ? `blur(${blurStrength}px)` : 'none'
    });

    const runAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      gsap.to(el, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power2.out'
      });
    };

    // Check if already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      // Element is in view, animate after a brief delay
      setTimeout(runAnimation, 100);
    } else {
      // Create ScrollTrigger for elements not in view
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: runAnimation,
        once: true
      });

      return () => trigger.kill();
    }
  }, [enableBlur, baseOpacity, blurStrength]);

  return (
    <Component ref={containerRef as any} className={finalContainerClassName}>
      {children}
    </Component>
  );
};

// For images and other non-text elements
interface ScrollRevealElementProps {
  children: ReactNode;
  className?: string;
  enableBlur?: boolean;
  baseOpacity?: number;
  blurStrength?: number;
  delay?: number;
}

const ScrollRevealElement = ({
  children,
  className = '',
  enableBlur = false,
  baseOpacity = 0,
  blurStrength = 4,
  delay = 0
}: ScrollRevealElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || animatedRef.current) return;

    // Set initial state
    gsap.set(el, { 
      opacity: baseOpacity, 
      y: 30,
      filter: enableBlur ? `blur(${blurStrength}px)` : 'none'
    });

    const runAnimation = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;

      gsap.to(el, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.7,
        delay,
        ease: 'power2.out'
      });
    };

    // Check if already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setTimeout(runAnimation, 100);
    } else {
      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: runAnimation,
        once: true
      });

      return () => trigger.kill();
    }
  }, [enableBlur, baseOpacity, blurStrength, delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export { ScrollRevealText, ScrollRevealElement };
export default ScrollRevealText;
