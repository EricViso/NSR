'use client';

import { Book, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onPurchaseClick: () => void;
  onPreviewClick: () => void;
}

export default function Hero({ onPurchaseClick, onPreviewClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Split layout container */}
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left side - Book image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            {/* Placeholder book image - replace with actual book image */}
            <div className="w-80 h-96 bg-gradient-to-br from-primary to-accent rounded-lg shadow-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Book className="w-24 h-24 text-primary-foreground opacity-50" />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              NFT Book
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-center lg:text-left space-y-6">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Network Societies Playbook
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            Clear, field-tested frameworks for builders, policymakers, and investors in governance engineering.
          </p>

          {/* Session badge */}
          <div className="inline-flex items-center bg-card border border-accent/20 rounded-full px-4 py-2 text-sm font-medium text-card-foreground">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            Free 60-minute session included
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={onPurchaseClick}
              size="lg"
              className="flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              <Book className="w-5 h-5" />
              Buy NFT + Read Now
            </Button>

            <Button
              onClick={onPreviewClick}
              variant="outline"
              size="lg"
              className="flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              <ExternalLink className="w-5 h-5" />
              Preview Contents
            </Button>
          </div>

          {/* Benefit note */}
          <p className="text-sm text-muted-foreground pt-2">
            Your NFT unlocks the book today and may include future holder perks.
          </p>
        </div>
      </div>

      {/* Blurred background on right side */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-20 blur-3xl bg-gradient-to-l from-accent/30 to-transparent"
        style={{
          background: `linear-gradient(135deg, var(--accent), var(--primary))`,
          filter: 'blur(60px)',
        }}
      />
    </section>
  );
}