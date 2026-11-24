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
          className="h-px w-10 sm:w-14 opacity-55"
          style={{ backgroundColor: strokeColor }}
        />
      )}
      {/* Dual cocoa-leaf emblem derived directly from the official CHOCO LOUTI logo */}
      <svg
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M11.2 13.5C7.2 13.1 4.2 10.2 3.5 5.2C7.8 5.4 10.7 8.1 11.2 13.5Z"
          stroke={strokeColor}
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path
          d="M6.3 8.1C8 9.6 9.5 11.3 11 13.3"
          stroke={strokeColor}
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <path
          d="M12.8 13.5C13.3 7.4 16.4 4.2 21 3.5C20.2 8.9 17.2 12.6 12.8 13.5Z"
          stroke={strokeColor}
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <path
          d="M17.8 6.8C15.9 8.6 14.3 10.7 12.9 13.3"
          stroke={strokeColor}
          strokeWidth="0.9"
          strokeLinecap="round"
        />
      </svg>
      <span
        className="h-px w-10 sm:w-14 opacity-55"
        style={{ backgroundColor: strokeColor }}
      />
    </div>
  );
}
