'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, MessageCircle, Clock, CheckCircle, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about alternative communities, need consulting, or want to discuss a partnership? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium">Email</div>
                  <a 
                    href="mailto:contact@ericmiki.com" 
                    className="text-primary hover:underline"
                  >
                    contact@ericmiki.com
                  </a>
                </div>
                <div>
                  <div className="font-medium">Response Time</div>
                  <div className="text-sm text-muted-foreground">24-48 hours</div>
                </div>
                <div>
                  <div className="font-medium">Urgent Matters</div>
                  <div className="text-sm text-muted-foreground">
                    Include "URGENT" in subject line
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Connect on Social Media
                </CardTitle>
                <CardDescription>
                  Follow for updates on alternative communities and governance innovation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://twitter.com/ericmiki" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-4 h-4 mr-3" />
                    <span>Twitter</span>
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://linkedin.com/in/ericmiki" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-3" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://github.com/ericmiki" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-3" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 ml-auto" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Common Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Common Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium text-sm">Can I get a discount?</div>
                  <div className="text-xs text-muted-foreground">
                    Bulk discounts available for teams of 5+
                  </div>
                </div>
                <div>
                  <div className="font-medium text-sm">Do you offer consulting?</div>
                  <div className="text-xs text-muted-foreground">
                    Yes, custom consulting sessions available
                  </div>
                </div>
                <div>
                  <div className="font-medium text-sm">What's included with purchase?</div>
                  <div className="text-xs text-muted-foreground">
                    Full access + 1-hour consultation call
                  </div>
                </div>
                <div>
                  <div className="font-medium text-sm">Can I share the content?</div>
                  <div className="text-xs text-muted-foreground">
                    Personal license - sharing not permitted
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Guarantee */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <div className="font-semibold">Response Guarantee</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  I personally respond to every message within 48 hours. 
                  If you don't hear back, something went wrong - please try again!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16">
          <Separator className="mb-8" />
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Other Ways to Connect
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Prefer a different approach? Here are other ways to get in touch or stay updated.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Newsletter */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get updates on alternative communities and governance innovation
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:contact@ericmiki.com?subject=Newsletter%20Subscription">
                      Subscribe
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Speaking */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Speaking</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Invite me to speak at your event or conference
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:contact@ericmiki.com?subject=Speaking%20Engagement">
                      Request
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Media */}
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <ExternalLink className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Media & Press</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Press inquiries and media requests
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:contact@ericmiki.com?subject=Media%20Inquiry">
                      Contact
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}