import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(request: NextRequest) {
  try {
    // Get the PDF file path
    const pdfPath = join(process.cwd(), 'public', 'PDF', 'NSR_sample.pdf');

    // Read the PDF file
    const pdfBuffer = readFileSync(pdfPath);

    // Create response with anti-download headers
    const response = new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="document.pdf"', // Force inline viewing
        'Cache-Control': 'no-cache, no-store, must-revalidate, private',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Frame-Options': 'SAMEORIGIN', // Only allow embedding in same origin
        'X-Content-Type-Options': 'nosniff',
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval'; object-src 'none'; style-src 'self' 'unsafe-inline';", // Allow PDF.js to work
        'Referrer-Policy': 'no-referrer',
        'X-Download-Options': 'noopen', // IE security
        'X-Permitted-Cross-Domain-Policies': 'none'
      }
    });

    return response;
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('PDF not found', { status: 404 });
  }
}