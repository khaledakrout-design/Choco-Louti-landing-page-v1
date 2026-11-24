import { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  fallbackLabel?: string;
}

export function ProductImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  imgClassName = 'object-cover object-center',
  fallbackLabel = 'CHOCO LOUTI — Création chocolatée',
}: ProductImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#173D32] text-[#F3EBDD] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-[11px] tracking-[0.22em] uppercase text-[#C5A45A] mb-2">
          CHOCO LOUTI
        </span>
        <span className="font-editorial text-lg italic">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`w-full h-full ${imgClassName} ${className}`}
    />
  );
}
