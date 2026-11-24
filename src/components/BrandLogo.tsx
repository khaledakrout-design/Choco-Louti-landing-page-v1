import { BRAND_ASSETS } from '../tokens/brand';

interface BrandLogoProps {
  surface?: 'ivory' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function BrandLogo({
  surface = 'ivory',
  className = '',
  size = 'md',
}: BrandLogoProps) {
  const sizeClasses = {
    sm: 'h-7 w-auto',
    md: 'h-8 sm:h-9 w-auto',
    lg: 'h-10 sm:h-12 w-auto',
  }[size];

  if (surface === 'dark') {
    return (
      <span
        className={`inline-flex items-center justify-center bg-[#F3EBDD] px-4 py-2 border border-[#C5A45A]/45 ${className}`}
      >
        <img
          src={BRAND_ASSETS.logo.src}
          width={BRAND_ASSETS.logo.width}
          height={BRAND_ASSETS.logo.height}
          alt={BRAND_ASSETS.logo.alt}
          className={`${sizeClasses} object-contain mix-blend-multiply brightness-[1.03] contrast-[1.03]`}
        />
      </span>
    );
  }

  return (
    <img
      src={BRAND_ASSETS.logo.src}
      width={BRAND_ASSETS.logo.width}
      height={BRAND_ASSETS.logo.height}
      alt={BRAND_ASSETS.logo.alt}
      className={`${sizeClasses} object-contain mix-blend-multiply brightness-[1.03] contrast-[1.03] ${className}`}
    />
  );
}
