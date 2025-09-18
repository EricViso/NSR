import { Wallet, ShoppingCart, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    title: 'Connect',
    description: 'Connect your crypto wallet to get started'
  },
  {
    icon: ShoppingCart,
    title: 'Buy NFT',
    description: 'Purchase the book NFT with one click'
  },
  {
    icon: BookOpen,
    title: 'Access',
    description: 'Get redirected to your member area with full access'
  }
];

export default function Steps() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={index} className="text-center">
            <div className="relative">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        );
      })}
    </div>
  );
}