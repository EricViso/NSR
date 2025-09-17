'use client';

import { type ReactNode } from 'react';

interface PDFChromeProps {
  children: ReactNode;
}

export default function PDFChrome({ children }: PDFChromeProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* PDF Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden pdf-viewer">
          {/* Subtle divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* PDF Content */}
          <div className="relative">
            {children}
          </div>

          {/* Bottom divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>

        {/* Note about desktop experience */}
        <div className="text-center mt-6">
          <p className="text-sm text-[var(--brand-muted)]">
            Best viewed on desktop. Links in PDF are clickable.
          </p>
        </div>
      </div>
    </div>
  );
}