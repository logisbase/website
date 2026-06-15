import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title:
    'LogisBase Comparisons | Source-Available Alternative to Onfleet, Tookan, Route4Me',
  description:
    'See how LogisBase compares to Onfleet, Tookan, Route4Me, and Bringg. Source-available fleet management and TMS software with no per-task or per-agent pricing.',
  keywords: [
    'Onfleet alternative',
    'Tookan alternative',
    'Route4Me alternative',
    'Bringg alternative',
    'source-available fleet management alternative',
    'delivery management software comparison',
  ],
  alternates: { canonical: 'https://logisbase.com/compare' },
};

const COMPARISONS = [
  {
    competitor: 'Onfleet',
    slug: 'vs-onfleet',
    tagline: 'No per-task pricing. Self-hosted. Full platform.',
    description:
      'Onfleet charges per task and locks you into the cloud. LogisBase is source-accessible, self-hostable, and includes WMS, storefront, and accounting — not just dispatch.',
    badge: 'Most Popular',
  },
  {
    competitor: 'Tookan',
    slug: 'vs-tookan',
    tagline: 'No per-agent fees. Source-available. Complete logistics OS.',
    description:
      "Tookan's per-agent pricing compounds as your team grows. LogisBase uses resource units — one predictable pool for orders, drivers, vehicles, and API calls.",
    badge: null,
  },
  {
    competitor: 'Route4Me',
    slug: 'vs-route4me',
    tagline: 'Route optimization plus a full fleet management platform.',
    description:
      'Route4Me plans routes. LogisBase does that and more — dispatch, driver management, real-time tracking, POD, WMS, storefront, and accounting in one source-accessible platform.',
    badge: null,
  },
  {
    competitor: 'Bringg',
    slug: 'vs-bringg',
    tagline: 'Enterprise delivery management without enterprise pricing.',
    description:
      'Bringg targets large enterprises with custom pricing. LogisBase gives you enterprise-grade fleet management and TMS from $25/month.',
    badge: null,
  },
];

export default function ComparePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding from-muted/30 to-background border-b bg-gradient-to-b">
        <div className="container max-w-4xl space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">
            How LogisBase Compares
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
            See how LogisBase stacks up against the most popular fleet
            management and delivery management platforms. Source-accessible, no
            per-task or per-agent pricing, self-hostable.
          </p>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {COMPARISONS.map((item) => (
              <Link
                key={item.slug}
                href={`/compare/${item.slug}`}
                className="group bg-card hover:border-primary/50 rounded-xl border p-6 transition-all hover:shadow-md"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    {item.badge && (
                      <span className="bg-primary/10 text-primary mb-2 inline-block rounded-full px-2 py-0.5 text-xs font-medium">
                        {item.badge}
                      </span>
                    )}
                    <h2 className="text-xl font-bold">
                      LogisBase vs {item.competitor}
                    </h2>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary mt-1 h-5 w-5 transition-all group-hover:translate-x-1" />
                </div>
                <p className="text-primary mb-2 text-sm font-medium">
                  {item.tagline}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-muted/20 border-t py-16">
        <div className="container max-w-3xl space-y-6 text-center">
          <h2 className="text-2xl font-bold">
            Ready to see LogisBase in action?
          </h2>
          <p className="text-muted-foreground">
            Start a free trial or book a live demo with our team. .
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://console.logisbase.com">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://cal.com/logisbase/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
