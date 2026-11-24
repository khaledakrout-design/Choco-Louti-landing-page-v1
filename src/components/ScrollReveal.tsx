import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delayMs?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  as?: 'div' | 'span';
}

export function ScrollReveal({
  children,
  delayMs = 0,
  threshold = 0.08,
  rootMargin = '0px 0px -16px 0px',
  className = '',
  as = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    let rafId: number | null = null;

    // Immediately reveal elements already within the initial viewport
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.96 && rect.bottom > 0) {
      rafId = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return () => {
        if (rafId !== null) window.cancelAnimationFrame(rafId);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            rafId = window.requestAnimationFrame(() => {
              setIsVisible(true);
            });
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const Component = as;
  const displayClass = as === 'span' ? 'block' : '';

  return (
    <Component
      ref={ref as never}
      style={delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
      className={`${displayClass} reveal-base ${isVisible ? 'reveal-visible' : ''} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
