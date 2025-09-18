'use client';

import { Book, ExternalLink, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface HeroProps {
  onPurchaseClick: () => void;
  onPreviewClick: () => void;
  onContactClick: () => void;
  onMcKinseyStyleClick: () => void;
}

export default function Hero({ onPurchaseClick, onPreviewClick, onContactClick, onMcKinseyStyleClick }: HeroProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Market Intelligence Report
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Network Societies
              <span className="block text-primary">Market Analysis</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Cut through the noise. Get structured insights on 50+ Network Society projects, 
              market trends, and investment opportunities in the governance engineering sector.
            </p>

            {/* Primary CTA */}
            <div className="mb-12">
              <Button
                onClick={onPurchaseClick}
                size="lg"
                className="text-xl px-12 py-6 bg-primary hover:bg-primary/90 shadow-lg"
              >
                <DollarSign className="w-6 h-6 mr-3" />
                Buy Report - $2,500
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Includes 1-hour consultation call with the author
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$2B+</div>
                <div className="text-sm text-muted-foreground">Market Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Latest Data</div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Problem & Solution */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-destructive" />
                    The Problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Scattered, inconsistent information across multiple sources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>No standardized framework for evaluating Network Society projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Difficulty identifying investment opportunities and market trends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Time-consuming research with unclear ROI</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Our Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Comprehensive analysis of 50+ Network Society projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Standardized evaluation framework and scoring system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Market trends, growth projections, and investment thesis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Executive summary with actionable insights</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right - Pricing & CTA */}
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Complete Market Analysis</CardTitle>
                  <CardDescription>Everything you need to understand the Network Societies sector</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="text-4xl font-bold text-primary">$2,500</div>
                  <div className="text-sm text-muted-foreground">One-time purchase</div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span>200+ page comprehensive report</span>
                      <span className="text-primary">✓</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>50+ project deep-dives</span>
                      <span className="text-primary">✓</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Market sizing & projections</span>
                      <span className="text-primary">✓</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Investment framework</span>
                      <span className="text-primary">✓</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>1-hour consulting call</span>
                      <span className="text-primary">✓</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={onPurchaseClick}
                      size="lg"
                      className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
                    >
                      <DollarSign className="w-5 h-5 mr-2" />
                      Buy Report - $2,500
                    </Button>
                    
                    <Button
                      onClick={onPreviewClick}
                      variant="ghost"
                      size="lg"
                      className="w-full text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Preview Sample Pages
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Includes 1-hour consultation call with the author
                  </div>
                </CardContent>
              </Card>

              {/* Contact Section */}
              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <h3 className="font-semibold text-foreground">Need a Custom Analysis?</h3>
                    <p className="text-sm text-muted-foreground">
                      Contact us for bulk discounts, custom research, or extended consulting.
                    </p>
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={onContactClick}
                      >
                        <Clock className="w-4 h-4 mr-2" />
                        Contact for Discounts
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full text-xs"
                        onClick={onMcKinseyStyleClick}
                      >
                        <TrendingUp className="w-3 h-3 mr-1" />
                        McKinsey-Style Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}