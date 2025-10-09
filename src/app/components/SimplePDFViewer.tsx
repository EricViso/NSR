'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ZoomIn, ZoomOut, RotateCcw, AlertCircle } from 'lucide-react';
import { useAccount } from 'wagmi';
import Link from 'next/link';

interface SimplePDFViewerProps {
  pdfUrl: string;
}

export default function SimplePDFViewer({ pdfUrl }: SimplePDFViewerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState(1.0);
  const { address } = useAccount();

  // Watermark text with wallet address and timestamp
  const watermarkText = `${address?.slice(0, 6)}...${address?.slice(-4)} - ${new Date().toISOString()}`;

  useEffect(() => {
    // Disable right-click context menu
    const disableContextMenu = (e: MouseEvent) => e.preventDefault();

    // Disable common screenshot shortcuts and save attempts
    const disableScreenshotKeys = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+P, and more
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'u') ||
        (e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.key === 'p') ||
        (e.ctrlKey && e.key === 'a') || // Select all
        (e.ctrlKey && e.key === 'c') || // Copy
        (e.ctrlKey && e.key === 'v') || // Paste
        (e.ctrlKey && e.key === 'x') || // Cut
        e.key === 'PrintScreen' ||
        (e.altKey && e.key === 'PrintScreen') ||
        (e.metaKey && e.key === 's') || // Mac save
        (e.metaKey && e.key === 'p') || // Mac print
        e.key === 'F11' // Fullscreen
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Disable drag and drop
    const disableDragDrop = (e: DragEvent) => e.preventDefault();

    // Add event listeners
    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('keydown', disableScreenshotKeys);
    document.addEventListener('dragstart', disableDragDrop);
    document.addEventListener('drop', disableDragDrop);

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clean up event listeners
    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableScreenshotKeys);
      document.removeEventListener('dragstart', disableDragDrop);
      document.removeEventListener('drop', disableDragDrop);
      clearTimeout(timer);
    };
  }, []);

  const zoomIn = () => {
    setScale(Math.min(scale + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale(Math.max(scale - 0.2, 0.4));
  };

  const resetZoom = () => {
    setScale(1.0);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading PDF...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black">
      {/* Floating Navigation Controls - Bottom Left */}
      <div className="absolute bottom-4 left-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-600">
        <div className="flex items-center p-2 space-x-2">
          <Button variant="ghost" size="sm" asChild className="text-white hover:bg-gray-800">
            <Link href="/book" className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Link>
          </Button>
        </div>
      </div>

      {/* Floating Zoom Controls - Bottom Right */}
      <div className="absolute bottom-4 right-4 z-50 bg-black/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-600">
        <div className="flex items-center p-2 space-x-2">
          <Button variant="ghost" size="sm" onClick={zoomOut} disabled={scale <= 0.4} className="text-white hover:bg-gray-800">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium min-w-[50px] text-center text-white">
            {Math.round(scale * 100)}%
          </span>
          <Button variant="ghost" size="sm" onClick={zoomIn} disabled={scale >= 2.0} className="text-white hover:bg-gray-800">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={resetZoom} className="text-white hover:bg-gray-800">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Full-screen PDF Viewer */}
      <div className="w-full h-full relative">
        {/* Watermark Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
                <text x="200" y="100" text-anchor="middle" dominant-baseline="middle"
                      font-family="Arial" font-size="12" fill="rgba(255,255,255,0.03)"
                      transform="rotate(-45 200 100)">
                  ${watermarkText}
                </text>
              </svg>
            `)}")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '400px 200px'
          }}
        />

        {/* PDF Content */}
        {error ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-white">
            <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">PDF Loading Error</h3>
            <p className="text-gray-300 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()} variant="outline">
              Reload Page
            </Button>
          </div>
        ) : (
          <div
            className="w-full h-full pdf-container"
            style={{
              userSelect: 'none',
              WebkitUserSelect: 'none',
              WebkitTouchCallout: 'none',
              WebkitUserDrag: 'none',
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
              transition: 'transform 0.2s ease'
            }}
          >
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=1&scrollbar=1&statusbar=0&messages=0&view=FitH`}
              className="w-full h-full"
              style={{
                border: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                minHeight: '100vh',
                pointerEvents: 'auto'
              }}
              title="PDF Document - Alternative Communities Guide"
              onLoad={() => setLoading(false)}
              onError={() => setError('Failed to load PDF document')}
            />
          </div>
        )}
      </div>

      {/* Anti-screenshot CSS */}
      <style jsx global>{`
        .pdf-container {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-user-drag: none !important;
        }

        .pdf-container iframe {
          user-select: none !important;
          -webkit-user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-user-drag: none !important;
        }

        /* Hide website navigation and footer when PDF viewer is active */
        body:has(.pdf-container) nav,
        body:has(.pdf-container) footer {
          display: none !important;
        }

        /* Remove padding-top from main when PDF viewer is active */
        body:has(.pdf-container) main {
          padding-top: 0 !important;
        }

        /* Hide scrollbars from the main page when PDF is full-screen */
        body:has(.pdf-container) {
          overflow: hidden;
        }

        /* Hide from print */
        @media print {
          .pdf-container {
            display: none !important;
          }
        }

        /* Ensure full-screen coverage */
        .pdf-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
        }

        /* Additional protection against saving/downloading */
        .pdf-container iframe::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          background: transparent;
          z-index: 1;
        }

        /* Hide any download buttons or save options that might appear */
        .pdf-container [title*="Download"],
        .pdf-container [title*="Save"],
        .pdf-container [aria-label*="Download"],
        .pdf-container [aria-label*="Save"] {
          display: none !important;
          visibility: hidden !important;
        }
      `}</style>
    </div>
  );
}