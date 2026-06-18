import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="bg-card relative overflow-hidden rounded-2xl border px-8 py-16 text-center md:px-16">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="bg-primary/5 absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl" />
            <div className="bg-chart-1/10 absolute right-1/4 -bottom-1/4 h-64 w-64 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="text-muted-foreground mb-6 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
              Get Started Today
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
              Own Your Operations.{' '}
              <span className="text-gradient">Scale With Confidence.</span>
            </h2>
            <p className="text-muted-foreground mx-auto mb-10 max-w-xl text-lg leading-relaxed">
              Join 8,000+ active deployments using LogisBase to manage logistics
              operations with greater control, flexibility, and visibility.
              Deploy anywhere, customize every workflow, and build on a platform
              designed for long-term ownership. Start your 7-day trial today.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <Button size="lg" className="gap-2" asChild>
                <Link
                  href="https://tally.so/r/68vqoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta-id="start_free_trial"
                  data-cta-location="final_cta"
                  data-cta-variant="primary"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link
                  href="/pricing"
                  data-cta-id="view_pricing"
                  data-cta-location="final_cta"
                  data-cta-variant="secondary"
                >
                  View Pricing
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link
                  href="https://cal.com/logisbase/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta-id="book_demo"
                  data-cta-location="final_cta"
                  data-cta-variant="secondary"
                >
                  <Calendar className="h-4 w-4" /> Book a Demo
                </Link>
              </Button>
            </div>

            <p className="text-muted-foreground mt-6 text-xs">
              Full Platform Access · Cancel Anytime · Self-Hosted or Cloud
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
