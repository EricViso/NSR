'use client';

import { ArrowLeft, ZoomIn, ZoomOut } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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
    <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </Link>
          </Button>

          <Separator orientation="vertical" className="h-6" />

          <h1 className="text-lg font-semibold text-foreground truncate max-w-xs sm:max-w-none">
            {title}
          </h1>
        </div>

        {/* Center section - Page info */}
        <div className="hidden md:flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        {/* Right section - Zoom controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomOut}
            disabled={zoom <= 50}
            title="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </Button>

          <span className="text-sm text-foreground min-w-[3rem] text-center">
            {zoom}%
          </span>

          <Button
            variant="ghost"
            size="sm"
            onClick={handleZoomIn}
            disabled={zoom >= 200}
            title="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}