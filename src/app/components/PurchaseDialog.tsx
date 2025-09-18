'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, DollarSign, Clock, Users, FileText, Calendar } from 'lucide-react';

interface PurchaseDialogProps {
  children: React.ReactNode;
  productType: 'guide';
  price: number;
  onPurchase: () => void;
}

export default function PurchaseDialog({ children, productType, price, onPurchase }: PurchaseDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const productInfo = {
    guide: {
      title: 'Alternative Communities Guide',
      description: 'Complete guide to building and managing alternative communities',
      features: [
        '200+ page comprehensive guide',
        'Community building frameworks',
        'Case studies and examples',
        'Governance templates',
        '1-hour consultation call',
        'Lifetime updates'
      ],
      icon: FileText,
    }
  };

  const currentProduct = productInfo[productType];
  const IconComponent = currentProduct.icon;

  const handlePurchase = () => {
    onPurchase();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <IconComponent className="w-5 h-5 text-primary" />
            </div>
            Purchase {currentProduct.title}
          </DialogTitle>
          <DialogDescription>
            {currentProduct.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Pricing Card */}
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-primary">
                ${price.toLocaleString()}
              </CardTitle>
              <CardDescription>
                One-time purchase • Lifetime access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Instant access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No subscription</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Lifetime updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Personal license</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-3">What's Included:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentProduct.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Payment Options */}
          <div className="space-y-4">
            <h3 className="font-semibold">Payment Options:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Card className="cursor-pointer hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                      <DollarSign className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Crypto Payment</div>
                      <div className="text-sm text-muted-foreground">Pay with ETH/USDC</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="cursor-pointer hover:border-primary/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Invoice</div>
                      <div className="text-sm text-muted-foreground">For businesses</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={handlePurchase} className="flex-1" size="lg">
              <DollarSign className="w-4 h-4 mr-2" />
              Purchase Now - ${price.toLocaleString()}
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1" size="lg">
              Cancel
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Questions? Contact us at{' '}
              <a href="mailto:contact@ericmiki.com" className="text-primary hover:underline">
                contact@ericmiki.com
              </a>
            </p>
            <div className="flex items-center justify-center gap-4 mt-2">
              <Badge variant="secondary">30-day money back</Badge>
              <Badge variant="secondary">Secure payment</Badge>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
