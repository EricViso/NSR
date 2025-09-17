import { Check } from 'lucide-react';

interface BulletedListProps {
  items: string[];
  className?: string;
}

export default function BulletedList({ items, className = '' }: BulletedListProps) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5">
            <Check className="w-4 h-4 text-accent-foreground" />
          </div>
          <span className="text-foreground leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}