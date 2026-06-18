import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface PlaceholderPageProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export default function PlaceholderPage({
  title,
  description,
  comingSoon = false,
}: PlaceholderPageProps) {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="max-w-2xl">
        {comingSoon && (
          <span className="bg-primary/10 text-primary mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-medium">
            Coming Soon
          </span>
        )}
        <h1 className="from-primary to-primary/60 mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          {title}
        </h1>
        <p className="text-muted-foreground mb-8 text-lg md:text-xl">
          {description}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="https://tally.so/r/68VqOO">
              Get Started
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://cal.com/logisbase/demo">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
