import { useEffect, useRef, useState, type ReactNode } from 'react';

interface FadeInUpProps {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  immediate?: boolean;
}

export function FadeInUp({
  children,
  delayMs = 0,
  className = '',
  immediate = false,
}: FadeInUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  if (immediate) {
    return (
      <div
        style={delayMs > 0 ? { animationDelay: `${delayMs}ms` } : undefined}
        className={`hero-fade-in-up ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
      className={`reveal-base ${visible ? 'reveal-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
