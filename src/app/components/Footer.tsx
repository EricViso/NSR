'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3 md:gap-4">
            <Logo size="md" className="text-primary" />
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold text-foreground">
                ERIC MIKI
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                mapping alternative communities
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link 
              href="/buy-book" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Buy Book
            </Link>
            <Link 
              href="/book" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Access Guide
            </Link>
            <Link 
              href="/guide" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Guide
            </Link>
            <Link 
              href="/faq" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              FAQ
            </Link>
            <Link 
              href="/definitions" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Definitions
            </Link>
            <Link 
              href="/contact" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a 
              href="mailto:contact@ericmiki.com" 
              className="hover:text-primary transition-colors duration-200"
            >
              contact@ericmiki.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Eric Miki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
