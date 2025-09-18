'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, BookOpen, BarChart3, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import Logo from './Logo';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-2 p-4">
          {/* Logo/Brand */}
          <div className="flex items-center gap-1">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors duration-200"
            >
              <Logo size="md" />
              <span className="hidden font-bold md:block">ERIC MIKI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-3.5">
            {/* Main Navigation Links */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/buy-book">
                  <BarChart3 className="w-4 h-4" />
                  <span className="hidden lg:inline">Alternative Communities Guide</span>
                  <span className="lg:hidden">Guide</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/book">
                  <BookOpen className="w-4 h-4" />
                  <span className="hidden lg:inline">Access Guide</span>
                  <span className="lg:hidden">Access</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contact">
                  <Mail className="w-4 h-4" />
                  Contact
                </Link>
              </Button>
            </div>


            {/* Separator */}
            <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] h-8" />

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center gap-2 pb-4 border-b border-border">
                  <Logo size="sm" />
                  <span className="text-lg font-bold text-foreground">ERIC MIKI</span>
                </div>
                <Link 
                  href="/buy-book" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-accent/50"
                >
                  <BarChart3 className="w-5 h-5" />
                  <span className="text-base">Alternative Communities Guide</span>
                </Link>
                <Link 
                  href="/book" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-accent/50"
                >
                  <BookOpen className="w-5 h-5" />
                  <span className="text-base">Access Guide</span>
                </Link>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-accent/50"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-base">Contact</span>
                </Link>
                
                {/* Mobile Theme Toggle */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between px-3 py-2">
                    <span className="text-sm font-medium text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
