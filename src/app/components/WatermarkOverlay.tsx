'use client';

import { useEffect, useState } from 'react';

interface WatermarkOverlayProps {
  address?: `0x${string}` | undefined;
}

export default function WatermarkOverlay({ address }: WatermarkOverlayProps) {
  const [timestamp, setTimestamp] = useState<string>('');

  useEffect(() => {
    setTimestamp(new Date().toISOString());
  }, []);

  if (!address) return null;

  const watermarkText = `${address.slice(0, 6)}...${address.slice(-4)} • ${timestamp}`;

  return (
    <div className="watermark-overlay">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 150px,
            rgba(139, 155, 174, 0.03) 150px,
            rgba(139, 155, 174, 0.03) 170px
          )`,
        }}
      >
        {/* Repeating watermark text */}
        <div
          className="absolute inset-0 flex flex-wrap items-center justify-center"
          style={{
            background: `repeating-conic-gradient(
              from 45deg,
              transparent 0deg,
              transparent 30deg,
              rgba(139, 155, 174, 0.02) 30deg,
              rgba(139, 155, 174, 0.02) 60deg
            )`,
          }}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="text-xs text-gray-400 opacity-20 transform rotate-45 p-8 select-none"
              style={{
                fontFamily: 'monospace',
                fontSize: '10px',
                lineHeight: '1.2',
              }}
            >
              {watermarkText}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}