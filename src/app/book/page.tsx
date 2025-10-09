'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ClientOnly from '../components/ClientOnly';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Use no-SSR for the TokenGate to avoid hydration issues
const TokenGate = dynamic(
  () => import('../components/TokenGate'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }
);

export default function BookPage() {
  return (
    <ClientOnly
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      }
    >
      <div className="min-h-screen bg-background">
        <TokenGate>
          <div className="container mx-auto px-4 py-12">
            {/* Protected Content - Original landing page content */}
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Welcome to the <span className="text-accent">Alternative Communities Guide</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
                You now have access to the complete guide and resources 🎉
              </p>
              <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            </header>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* PDF Access */}
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-card-foreground">
                    📖 Read the Book
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Access the complete Alternative Communities Guide with all frameworks, case studies, and implementation guides.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/read-book">
                      Open PDF Reader
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Session Booking */}
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-card-foreground">
                    🗓️ Book Your Session
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Schedule your complimentary 60-minute consultation with Eric to discuss the guide and your specific use case.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="secondary" className="w-full">
                    <a href="mailto:eric@viso.space?subject=Book%20Session%20-%20Alternative%20Communities%20Guide">
                      Schedule Session
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Additional Resources */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
                Your Resources
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg font-bold text-card-foreground">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                      {resource.link && (
                        <a href={resource.link} className="text-accent hover:underline text-sm font-medium">
                          Access →
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-muted-foreground">
              <p>© 2024 Alternative Communities Guide. Access granted via NFT ownership.</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href="mailto:eric@viso.space" className="text-foreground hover:text-accent transition-colors duration-200">Support</a>
                <Link href="/" className="text-foreground hover:text-accent transition-colors duration-200">Home</Link>
              </div>
            </footer>
          </div>
        </TokenGate>
      </div>
    </ClientOnly>
  );
}

const resources = [
  {
    title: "Community Templates",
    description: "Ready-to-use templates for alternative community structures and governance",
    link: "#templates"
  },
  {
    title: "Case Study Database",
    description: "Detailed analysis of successful alternative community implementations",
    link: "#cases"
  },
  {
    title: "Community Forum",
    description: "Connect with other community builders and get ongoing support",
    link: "#community"
  },
  {
    title: "Resource Library",
    description: "Curated collection of tools, research, and additional reading",
    link: "#library"
  },
  {
    title: "Update Notifications",
    description: "Get notified when new content and frameworks are added",
    link: "#updates"
  },
  {
    title: "Expert Network",
    description: "Directory of consultants and experts in alternative communities",
    link: "#experts"
  }
];