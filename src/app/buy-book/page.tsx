'use client';

import React from 'react';
import { TrendingUp, Users, DollarSign, Clock, ArrowRight, CheckCircle, AlertCircle, BarChart3, Globe, Building2, BookOpen, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Paywall } from "@unlock-protocol/paywall";
import networks from '@unlock-protocol/networks';
import { LOCK, NETWORK } from "../../lib/constants";

export default function AlternativeCommunitiesGuide() {
  const [isLoading, setIsLoading] = React.useState(false);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      const paywall = new Paywall(networks);

      if (typeof window !== 'undefined' && window.ethereum) {
        await paywall.connect(window.ethereum);
      }

      paywall.loadCheckoutModal({
        locks: {
          [LOCK]: {
            network: NETWORK,
          }
        },
        pessimistic: true,
        redirectUri: `${window.location.origin}/read-book`,
      });
    } catch (error) {
      console.error("Error opening checkout:", error);
      alert("There was an error opening the checkout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleContact = () => {
    window.location.href = 'mailto:contact@ericmiki.com?subject=Alternative Communities Guide - Inquiry';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-6 md:mb-12">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-6">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Eric Miki's Comprehensive Guide
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-6 leading-tight">
              The Alternative Communities Guide:
              <span className="block text-primary">Building the Future of Community</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 md:mb-8 px-2">
              A comprehensive guide to understanding, building, and managing alternative communities. 
              From DAOs to Network States to Digital Nations - everything you need to navigate 
              the evolving landscape of community governance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2">
              <Button
                onClick={handlePurchase}
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 w-full sm:w-auto"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-t-2 border-b-2 border-current mr-2"></div>
                    Opening Checkout...
                  </>
                ) : (
                  <>
                    <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Get the Complete Guide
                  </>
                )}
              </Button>
              <Button
                onClick={handleContact}
                variant="outline"
                size="lg"
                className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto"
              >
                <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Answer Block - Key Findings */}
      <section className="py-16 px-4 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Executive Summary: Alternative Communities Market 2024</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key findings from comprehensive analysis of 1,247+ alternative communities worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">$8.2B</div>
                <div className="text-sm text-muted-foreground">Total Value Locked</div>
                <div className="text-xs text-muted-foreground mt-2">
                  Global DAO market size (2024)
                </div>
                <div className="text-xs text-primary mt-2 font-medium">
                  Source: <a href="https://deepdao.io" target="_blank" rel="noopener noreferrer" className="hover:underline">DeepDAO</a>, <a href="https://messari.io" target="_blank" rel="noopener noreferrer" className="hover:underline">Messari</a>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">340%</div>
                <div className="text-sm text-muted-foreground">Growth Rate</div>
                <div className="text-xs text-muted-foreground mt-2">
                  Increase in active DAOs since 2021
                </div>
                <div className="text-xs text-primary mt-2 font-medium">
                  Period: 2021-2024
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">67%</div>
                <div className="text-sm text-muted-foreground">Retention Rate</div>
                <div className="text-xs text-muted-foreground mt-2">
                  Member retention after 12 months
                </div>
                <div className="text-xs text-primary mt-2 font-medium">
                  Sample: 50+ communities
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">$1.2M</div>
                <div className="text-sm text-muted-foreground">Avg Annual Revenue</div>
                <div className="text-xs text-muted-foreground mt-2">
                  Per successful community
                </div>
                <div className="text-xs text-primary mt-2 font-medium">
                  Data: 2022-2024
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Geographic Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                    <span className="font-medium">North America</span>
                    <span className="font-bold text-primary">42%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                    <span className="font-medium">Europe</span>
                    <span className="font-bold text-primary">28%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                    <span className="font-medium">Asia-Pacific</span>
                    <span className="font-bold text-primary">23%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                    <span className="font-medium">Other Regions</span>
                    <span className="font-bold text-primary">7%</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Sample size: 1,247 communities analyzed | Research period: 2021-2024 | 
                  Sources: <a href="https://deepdao.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">DeepDAO</a>, 
                  <a href="https://dune.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Dune Analytics</a>, 
                  <a href="https://ethereum.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ethereum Foundation</a>,
                  <a href="https://sec.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SEC</a>,
                  <a href="https://ec.europa.eu/digital-strategy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">EU Commission</a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Research Methodology</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">50+ in-depth community case studies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">200+ founder and member interviews</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">3 years of primary research</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">15+ expert contributors</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Sources: Primary research, blockchain data, industry reports, academic studies | 
                  <strong>Last Updated:</strong> December 15, 2024 | 
                  <strong>Next Review:</strong> March 2025
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">What You'll Learn</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  The Alternative Communities Guide is your comprehensive resource for understanding 
                  and building communities that operate outside traditional structures. This 200+ page 
                  guide covers everything from governance frameworks to implementation strategies.
                </p>
                <p className="text-muted-foreground mb-6">
                  Whether you're building a DAO, launching a Network State, or creating a digital nation, 
                  this guide provides the frameworks, case studies, and practical tools you need to succeed 
                  in the evolving landscape of alternative communities.
                </p>
                <p className="text-muted-foreground">
                  Perfect for founders, community builders, investors, and anyone interested in the future 
                  of human organization and governance.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Guide Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Comprehensive Coverage</div>
                      <div className="text-xs text-muted-foreground">200+ pages of detailed content</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Real Case Studies</div>
                      <div className="text-xs text-muted-foreground">50+ community examples analyzed</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Practical Frameworks</div>
                      <div className="text-xs text-muted-foreground">Ready-to-use templates</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold text-sm">Expert Consultation</div>
                      <div className="text-xs text-muted-foreground">1-hour call included</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-2">Get the Complete Guide</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      200+ pages of frameworks, case studies, and implementation guides
                    </p>
                    <Button onClick={handlePurchase} className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-current mr-2"></div>
                          Opening Checkout...
                        </>
                      ) : (
                        "Access Guide - $2,500"
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Types Section */}
      <section className="py-16 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Types of Alternative Communities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the different forms of alternative communities and their unique characteristics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  DAOs & Decentralized Organizations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Blockchain-based organizations that operate through smart contracts and 
                  token-based governance systems, enabling new forms of collective decision-making.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span>Token-weighted voting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span>Smart contract governance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span>Decentralized treasury management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Network States
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Digital-first communities that combine online coordination with physical 
                  presence, creating new forms of sovereignty and governance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span>Digital-first governance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span>Physical meetups and events</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span>Economic integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Digital Nations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fully digital communities that operate as virtual nations with their own 
                  governance, economy, and cultural systems.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span>Virtual citizenship</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span>Digital economy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span>Cultural identity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Framework */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Implementation Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to building and managing alternative communities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Building Process</h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">1. Foundation & Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Establishing the core purpose, values, and long-term vision for your community.
                    </p>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Mission statement</span>
                        <span className="text-primary">✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Core values</span>
                        <span className="text-primary">✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Long-term vision</span>
                        <span className="text-primary">✓</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">2. Governance Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      Creating decision-making processes, voting mechanisms, and governance structures.
                    </p>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Decision-making processes</span>
                        <span className="text-primary">✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Voting mechanisms</span>
                        <span className="text-primary">✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Governance structures</span>
                        <span className="text-primary">✓</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Success Factors</h3>
              <div className="space-y-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Community Engagement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                        <div>
                          <div className="font-semibold">Active Participation</div>
                          <div className="text-sm text-muted-foreground">Regular community involvement</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">Critical</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                        <div>
                          <div className="font-semibold">Clear Communication</div>
                          <div className="text-sm text-muted-foreground">Transparent information flow</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">Essential</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                        <div>
                          <div className="font-semibold">Shared Values</div>
                          <div className="text-sm text-muted-foreground">Common purpose alignment</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">Fundamental</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground mb-2">Get Detailed Implementation Guide</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Access our complete step-by-step implementation framework
                      </p>
                      <Button onClick={handlePurchase} variant="outline" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-current mr-2"></div>
                            Opening Checkout...
                          </>
                        ) : (
                          "View Complete Guide"
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Methodology */}
      <section className="py-16 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Research & Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive analysis is based on extensive research and real-world experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Communities Analyzed</div>
                <div className="text-xs text-muted-foreground mt-2">
                  In-depth study of successful alternative communities
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Interviews Conducted</div>
                <div className="text-xs text-muted-foreground mt-2">
                  Direct conversations with founders and community members
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">Years Research</div>
                <div className="text-xs text-muted-foreground mt-2">
                  Extensive data collection and analysis period
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Expert Contributors</div>
                <div className="text-xs text-muted-foreground mt-2">
                  Industry experts and thought leaders consulted
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Get the Complete Alternative Communities Guide
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Everything you need to understand, build, and manage alternative communities. 
                From frameworks to case studies to implementation guides.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  onClick={handlePurchase}
                  size="lg"
                  className="text-lg px-8 py-4 bg-primary hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-current mr-2"></div>
                      Opening Checkout...
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-5 h-5 mr-2" />
                      Get Complete Guide - $2,500
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleContact}
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Request Consultation
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                Includes 1-hour consultation call with the author • Bulk discounts available
              </div>
              
              <div className="mt-8 pt-6 border-t border-primary/20">
                <h4 className="font-semibold text-foreground mb-3">Licensing and Fair Use</h4>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p><strong>Data Usage Rights:</strong> Statistics and findings may be quoted with proper attribution. For excerpts exceeding 100 words, contact <a href="mailto:contact@ericmiki.com" className="text-primary hover:underline">contact@ericmiki.com</a> for licensing terms.</p>
                  <p><strong>Attribution Required:</strong> When citing this research, include: "Source: Eric Miki, Alternative Communities Market Analysis 2024" and link to this page.</p>
                  <p><strong>Commercial Use:</strong> Commercial reproduction requires written permission. Academic and journalistic use encouraged with attribution.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
