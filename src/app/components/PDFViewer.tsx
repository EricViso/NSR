'use client';

import { useState, useCallback, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ZoomIn, 
  ZoomOut, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  RotateCw,
  Maximize2,
  Minimize2,
  FileText,
  AlertCircle
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
  address?: `0x${string}`;
}

export default function PDFViewer({ pdfUrl, address }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [rotation, setRotation] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pdfDocument, setPdfDocument] = useState<any>(null);

  // Disable text selection, copying, printing, and other security measures
  useEffect(() => {
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };
    
    const handleDragStart = (e: Event) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable common shortcuts for copying, printing, saving
      if (
        (e.ctrlKey || e.metaKey) && 
        (e.key === 'p' || e.key === 's' || e.key === 'a' || e.key === 'c')
      ) {
        e.preventDefault();
        toast({
          title: "Action Disabled",
          description: "This action is disabled to protect the content.",
          variant: "destructive",
        });
      }
    };

    const handleContextMenu = (e: Event) => {
      e.preventDefault();
    };

    // Disable right-click context menu
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((error: Error) => {
    console.error('PDF load error:', error);
    setError('Failed to load PDF. Please try again.');
    setIsLoading(false);
    toast({
      title: "PDF Load Error",
      description: "There was an error loading the PDF. Please check your connection and try again.",
      variant: "destructive",
    });
  }, []);

  const goToPrevPage = useCallback(() => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  }, []);

  const goToNextPage = useCallback(() => {
    setPageNumber(prev => Math.min(prev + 1, numPages));
  }, [numPages]);

  const zoomIn = useCallback(() => {
    setScale(prev => Math.min(prev + 0.25, 3.0));
  }, []);

  const zoomOut = useCallback(() => {
    setScale(prev => Math.max(prev - 0.25, 0.5));
  }, []);

  const rotateDocument = useCallback(() => {
    setRotation(prev => (prev + 90) % 360);
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  const handleDownload = useCallback(() => {
    // Download is disabled for security reasons
    toast({
      title: "Download Disabled",
      description: "Downloads are disabled to protect the content. This book is for viewing only.",
      variant: "destructive",
    });
  }, []);

  if (error) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">PDF Load Error</h3>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>
            Reload Page
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={`pdf-viewer-container ${isFullscreen ? 'fixed inset-0 z-50 bg-background' : ''}`}>
      {/* PDF Toolbar */}
      <div className="border-b border-border p-4 flex items-center justify-between bg-muted/30 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Alternative Communities Guide
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            Page {pageNumber} of {numPages}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Navigation */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <span className="text-sm text-muted-foreground px-2">
            {pageNumber} / {numPages}
          </span>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          <div className="w-px h-6 bg-border mx-2" />

          {/* Zoom Controls */}
          <Button variant="outline" size="sm" onClick={zoomOut} disabled={scale <= 0.5}>
            <ZoomOut className="w-4 h-4" />
          </Button>
          
          <span className="text-sm text-muted-foreground px-2 min-w-[3rem] text-center">
            {Math.round(scale * 100)}%
          </span>
          
          <Button variant="outline" size="sm" onClick={zoomIn} disabled={scale >= 3.0}>
            <ZoomIn className="w-4 h-4" />
          </Button>

          <div className="w-px h-6 bg-border mx-2" />

          {/* Additional Controls */}
          <Button variant="outline" size="sm" onClick={rotateDocument}>
            <RotateCw className="w-4 h-4" />
          </Button>
          
          <Button variant="outline" size="sm" onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleDownload}
            disabled
            className="opacity-50 cursor-not-allowed"
            title="Download disabled for content protection"
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Security Notice */}
      <div className="security-notice">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="security-notice-text">
              <strong>Content Protection:</strong> This book is protected against copying, printing, and downloading. 
              Please respect the intellectual property rights.
            </p>
          </div>
        </div>
      </div>

      {/* PDF Content Area */}
      <div className="flex-1 p-4 bg-muted/20 overflow-auto">
        <div className="flex justify-center">
          {isLoading && (
            <div className="flex items-center justify-center min-h-[600px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          )}
          
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex items-center justify-center min-h-[600px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            }
            className="pdf-document"
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              rotate={rotation}
              className="pdf-page shadow-lg"
              renderTextLayer={false} // Disable text selection
              renderAnnotationLayer={false} // Disable annotations
            />
          </Document>
        </div>
      </div>

      {/* Page Navigation Footer */}
      <div className="border-t border-border p-4 bg-muted/30 flex items-center justify-center gap-4">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
        
        <div className="flex items-center gap-2">
          <input
            type="number"
            min="1"
            max={numPages}
            value={pageNumber}
            onChange={(e) => {
              const page = parseInt(e.target.value);
              if (page >= 1 && page <= numPages) {
                setPageNumber(page);
              }
            }}
            className="w-16 px-2 py-1 text-sm border border-border rounded text-center bg-background"
          />
          <span className="text-sm text-muted-foreground">of {numPages}</span>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
