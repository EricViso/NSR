'use client';

import { ArrowLeft, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  const [currentPage] = useState(1);
  const [totalPages] = useState(42); // Placeholder - replace with actual page count
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-[var(--brand-navy)] hover:text-[var(--brand-accent)] transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">Back</span>
          </Link>

          <div className="h-6 w-px bg-gray-300" />

          <h1 className="text-lg font-semibold text-[var(--brand-navy)] truncate max-w-xs sm:max-w-none">
            {title}
          </h1>
        </div>

        {/* Center section - Page info */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-sm text-[var(--brand-muted)]">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        {/* Right section - Zoom controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            disabled={zoom <= 50}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            title="Zoom out"
          >
            <ZoomOut className="w-4 h-4 text-[var(--brand-navy)]" />
          </button>

          <span className="text-sm text-[var(--brand-navy)] min-w-[3rem] text-center">
            {zoom}%
          </span>

          <button
            onClick={handleZoomIn}
            disabled={zoom >= 200}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            title="Zoom in"
          >
            <ZoomIn className="w-4 h-4 text-[var(--brand-navy)]" />
          </button>
        </div>
      </div>
    </div>
  );
}