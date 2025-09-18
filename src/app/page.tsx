'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, BookOpen } from 'lucide-react';

export default function Home() {
  const handleContact = () => {
    window.location.href = 'mailto:contact@ericmiki.com?subject=Let\'s Talk - Innovation Navigation';
  };

  const handleBookAccess = () => {
    // Navigate to market analysis page (main entry point)
    window.location.href = '/buy-book';
  };


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-8 md:py-20 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Main Heading */}
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 md:mb-6 leading-tight">
              <span className="block">ERIC MIKI</span>
              <span className="block text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal italic">
                mapping alternative communities
              </span>
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto px-2">
              <p className="mb-2 md:mb-4">
                <em>Communities are evolving beyond traditional structures...</em>
              </p>
              <p className="mb-2 md:mb-4">
                <em>From DAOs to Network States to Digital Nations</em>
              </p>
              <p className="text-primary font-semibold">
                * GET THE COMPLETE GUIDE 🚀
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
              <Button
                onClick={handleBookAccess}
                size="lg"
                className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                Read my Book
              </Button>
              <Button
                onClick={handleContact}
                variant="outline"
                size="lg"
                className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 border-2 hover:bg-accent hover:border-accent transition-all duration-300"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                Let's Connect
              </Button>
            </div>

            <div className="text-sm md:text-base text-muted-foreground">
              <p>Includes 1-hour consultation call with the author • Bulk discounts available</p>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="mb-8 md:mb-16">
            <Card className="bg-card/80 backdrop-blur-sm border shadow-lg">
              <CardContent className="p-4 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 text-center">
                  <div className="space-y-2 md:space-y-4">
                    <div className="text-3xl md:text-4xl">🏘️</div>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Traditional communities are breaking down.
                    </p>
                  </div>
                  <div className="space-y-2 md:space-y-4">
                    <div className="text-3xl md:text-4xl">🌐</div>
                    <p className="text-sm md:text-base text-muted-foreground">
                      New digital communities are emerging everywhere.
                    </p>
                  </div>
                  <div className="space-y-2 md:space-y-4">
                    <div className="text-3xl md:text-4xl">🧭</div>
                    <p className="text-sm md:text-base text-muted-foreground">
                      You need a guide to navigate this new landscape.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Solution */}
          <div className="mb-8 md:mb-16">
            <Card className="bg-primary text-primary-foreground border shadow-lg">
              <CardContent className="p-4 md:p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-6">🧭 The Alternative Communities Guide:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 text-base md:text-lg">
                  <div className="space-y-1 md:space-y-2">
                    <div className="text-xl md:text-2xl">•</div>
                    <p>Complete framework for building alternative communities</p>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <div className="text-xl md:text-2xl">•</div>
                    <p>Real-world case studies and examples</p>
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <div className="text-xl md:text-2xl">•</div>
                    <p>Practical tools and implementation guides</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alternative Communities Guide Section */}
          <div className="mb-8 md:mb-16">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 shadow-xl">
              <CardContent className="p-6 md:p-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">📚 Alternative Communities Guide</h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                  Everything you need to understand, build, and manage alternative communities. 
                  From frameworks to case studies to implementation guides.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <Button
                    onClick={handleBookAccess}
                    size="lg"
                    className="text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 bg-primary hover:bg-primary/90 shadow-lg"
                  >
                    <BookOpen className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                    Read my Book
                  </Button>
                  <Button
                    onClick={handleContact}
                    variant="outline"
                    size="lg"
                    className="text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 border-2"
                  >
                    <Mail className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                    Request Consultation
                  </Button>
                </div>
                <p className="text-sm md:text-base text-muted-foreground">
                  Includes 1-hour consultation call with the author • Bulk discounts available
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="mb-8 md:mb-16">
            <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20 shadow-xl">
              <CardContent className="p-6 md:p-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">📩 Let's Connect</h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                  Have questions about alternative communities? Want to discuss your project? 
                  Let's talk about how these frameworks can help you.
                </p>
                <Button
                  onClick={handleContact}
                  size="lg"
                  className="text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 bg-accent hover:bg-accent/90 shadow-lg"
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                  Send Message
                </Button>
                <p className="text-sm md:text-base text-muted-foreground mt-4">
                  Free consultation • Quick response • Expert guidance
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA Section */}
          <div className="mb-8 md:mb-16">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/30 shadow-xl">
              <CardContent className="p-6 md:p-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">Ready to Get Started? 🚀</h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                  Join hundreds of community builders who are already using these frameworks 
                  to create the future of human organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    onClick={handleBookAccess}
                    size="lg"
                    className="text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 bg-primary hover:bg-primary/90 shadow-lg"
                  >
                    <BookOpen className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                    Read my Book
                  </Button>
                  <Button
                    onClick={handleContact}
                    variant="outline"
                    size="lg"
                    className="text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 border-2"
                  >
                    <Mail className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                    Ask Questions First
                  </Button>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mt-4">
                  Includes 1-hour consultation call • Bulk discounts available • 30-day satisfaction guarantee
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}