interface OrnamentDividerProps {
  tone?: 'gold' | 'green' | 'ivory';
  align?: 'left' | 'center';
  className?: string;
}

export function OrnamentDivider({
  tone = 'gold',
  align = 'center',
  className = '',
}: OrnamentDividerProps) {
  const strokeColor =
    tone === 'gold' ? '#C5A45A' : tone === 'green' ? '#173D32' : '#F3EBDD';

  return (
    <div
      aria-hidden="true"
      className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : 'justify-start'} ${className}`}
    >
      {align === 'center' && (
        <span
          className="h-px w-12 sm:w-16 opacity-60"
          style={{ backgroundColor: strokeColor }}
        />
      )}
      {/* Geometric diamond ornament derived from CHOCO LOUTI Color Chart V1.0 */}
      <svg
        width="26"
        height="18"
        viewBox="0 0 26 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M13 1L24.5 9L13 17L1.5 9L13 1Z"
          stroke={strokeColor}
          strokeWidth="1"
        />
        <path
          d="M13 4L20.5 9L13 14L5.5 9L13 4Z"
          stroke={strokeColor}
          strokeWidth="0.75"
          strokeOpacity="0.65"
        />
        <circle cx="13" cy="9" r="1.75" fill={strokeColor} />
      </svg>
      <span
        className="h-px w-12 sm:w-16 opacity-60"
        style={{ backgroundColor: strokeColor }}
      />
    </div>
  );
}
