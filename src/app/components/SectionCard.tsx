import { type ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SectionCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function SectionCard({ title, children, className = '' }: SectionCardProps) {
  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto max-w-4xl">
        <Card className="border-0 shadow-none bg-transparent">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold text-[var(--brand-navy)] mb-4">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            {children}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}