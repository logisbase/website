import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <header className="section-padding relative overflow-hidden">
      <div className="relative container flex flex-col items-center gap-6 text-center">
        {/* Badge */}
        <div className="flex items-center rounded-full border p-1 text-xs">
          <span className="bg-muted rounded-full px-3 py-1 font-medium">
            Deploy Anywhere
          </span>
          <span className="flex items-center gap-1.5 px-3 transition-opacity hover:opacity-80">
            No Vendor Lock-In
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
          Your Logistics. Your Data.{' '}
          <span className="text-gradient">Your Platform.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-foreground/80 max-w-2xl text-lg leading-snug md:text-xl">
          Fleet management, warehouse operations, e-commerce fulfillment, and
          accounting in one platform. Maintain full control of your data,
          eliminate operational silos, and scale without per-driver fees.
          Self-host on your infrastructure or use LogisBase Cloud.
        </p>

        {/* CTAs */}
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" asChild>
            <Link
              href="https://tally.so/r/68vqoo"
              target="_blank"
              rel="noopener noreferrer"
              data-cta-id="start_free_trial"
              data-cta-location="hero"
              data-cta-variant="primary"
            >
              Get Started
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="/pricing"
              data-cta-id="view_pricing"
              data-cta-location="hero"
              data-cta-variant="secondary"
            >
              View Pricing
            </Link>
          </Button>
        </div>

        {/* Trust signal */}
        <p className="text-muted-foreground text-sm">
          Start with LogisBase · Deploy Anywhere
        </p>

        {/* Hero screenshot */}
        <div className="relative mt-4 w-full max-w-6xl">
          <div className="ring-foreground/5 relative aspect-[8/5] overflow-hidden rounded-xl border shadow-2xl ring-1">
            <Image
              src="/images/screenshots/fleet-ops/fleet-ops-multi-waypoint-order.webp"
              alt="LogisBase console showing a multi-waypoint Fleet-Ops order with optimized route, driver assignment, and live status timeline"
              fill
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-contain object-top"
              priority
            />
          </div>
          {/* Bottom fade */}
          <div className="from-background pointer-events-none absolute right-0 bottom-0 left-0 h-1/3 bg-linear-to-t to-transparent" />
        </div>
      </div>

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-chart-1/[0.14] absolute -top-24 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-[120px]" />
        <div className="bg-chart-3/[0.10] absolute top-1/4 -right-24 h-[550px] w-[550px] rounded-full blur-3xl" />
        <div className="bg-chart-2/[0.09] absolute top-1/2 -left-24 h-[450px] w-[450px] rounded-full blur-3xl" />
      </div>
    </header>
  );
}
