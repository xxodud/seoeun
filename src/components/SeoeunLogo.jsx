import React from 'react';

export default function SeoeunLogo({ variant = 'navy', size = 'md', showTagline = false }) {
  const isLightText = variant === 'white';
  const textColor = isLightText ? '#FFFFFF' : '#134078';
  const subColor = isLightText ? 'rgba(255,255,255,0.75)' : '#64748B';
  const dotColor = '#C8A464';

  const fontSize = size === 'lg' ? '32px' : size === 'sm' ? '21px' : '26px';

  return (
    <div className="seoeun-logo-wrap" style={{ display: 'inline-flex', flexDirection: 'column', userSelect: 'none' }}>
      <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', paddingRight: '18px', paddingTop: '4px' }}>
        <span
          style={{
            fontFamily: "'Pretendard', 'Arial Black', Impact, sans-serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            color: textColor,
            transition: 'color 0.25s ease',
          }}
        >
          SEOEUN
        </span>
        {/* Three signature gold dots arranged at top-right of 'N' */}
        <svg
          width={size === 'sm' ? '18' : '22'}
          height={size === 'sm' ? '18' : '22'}
          viewBox="0 0 24 24"
          fill="none"
          style={{
            position: 'absolute',
            top: size === 'sm' ? '-2px' : '-3px',
            right: '0px',
          }}
          aria-hidden="true"
        >
          <circle cx="6" cy="9" r="3.4" fill={dotColor} />
          <circle cx="16.5" cy="5.5" r="3.4" fill={dotColor} />
          <circle cx="17.5" cy="15.5" r="3.4" fill={dotColor} />
        </svg>
      </div>
      {showTagline && (
        <span
          style={{
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: subColor,
            marginTop: '2px',
          }}
        >
          PREMIUM FOOD SOLUTION
        </span>
      )}
    </div>
  );
}
