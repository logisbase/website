import { ArrowRight, Check, ChevronDown, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { type BreadcrumbItem, Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  bullets?: string[];
  icon: React.ElementType;
  screenshot?: string;
  screenshotAlt?: string;
}

export interface Capability {
  icon: React.ElementType;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface SolutionPageProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  /**
   * Optional breadcrumb trail rendered above the hero badge.
   * The Home crumb is added automatically — pass only the descendant trail.
   * Also emits `BreadcrumbList` JSON-LD for SERP-eligible rich snippets.
   */
  breadcrumbs?: BreadcrumbItem[];
  stats: Stat[];
  heroCta?: {
    primary: string;
    primaryHref: string;
    secondary?: string;
    secondaryHref?: string;
  };
  heroScreenshot?: string;
  heroScreenshotAlt?: string;
  painPoints?: { heading: string; items: string[] };
  featuresHeading?: string;
  featuresSubheading?: string;
  features: Feature[];
  capabilities?: Capability[];
  testimonial?: Testimonial;
  faqs?: FAQ[];
  ctaHeading: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a }: FAQ) {
  return (
    <details className="group border-b py-5 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
        {q}
        <ChevronDown className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <p className="text-muted-foreground mt-3 pr-8 text-sm leading-relaxed">
        {a}
      </p>
    </details>
  );
}

// ─── Main Layout ──────────────────────────────────────────────────────────────

export default function SolutionPageLayout({
  badge,
  title,
  description,
  breadcrumbs,
  stats,
  heroCta,
  heroScreenshot,
  heroScreenshotAlt,
  painPoints,
  featuresHeading,
  featuresSubheading,
  features,
  capabilities,
  testimonial,
  faqs,
  ctaHeading,
  ctaBody,
  ctaPrimary,
  ctaPrimaryHref,
  ctaSecondary,
  ctaSecondaryHref,
}: SolutionPageProps) {
  const primaryCta = heroCta ?? {
    primary: 'Start Free Trial',
    primaryHref: 'https://console.logisbase.com/onboard',
    secondary: 'Book a Demo',
    secondaryHref: 'https://cal.com/logisbase/demo',
  };

  return (
    <div className="flex flex-col">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <Breadcrumbs
                className="mb-6 justify-center [&_ol]:justify-center"
                items={breadcrumbs}
              />
            )}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              {badge}
            </div>
            <h1 className="mb-6 text-5xl leading-none font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-balance">
              {description}
            </p>
            <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href={primaryCta.primaryHref}>
                  {primaryCta.primary} <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              {primaryCta.secondary && primaryCta.secondaryHref && (
                <Button size="lg" variant="outline" asChild>
                  <Link href={primaryCta.secondaryHref}>
                    {primaryCta.secondary}
                  </Link>
                </Button>
              )}
            </div>
            <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-6 text-xs">
              {[
                'Source-accessible',
                'No per-seat pricing',
                '7-day free trial',
              ].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <Check className="text-primary size-3" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-border mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-card flex flex-col items-center gap-1.5 px-6 py-8 text-center"
              >
                <span className="text-3xl font-bold tracking-tight md:text-4xl">
                  {s.value}
                </span>
                <span className="text-muted-foreground text-xs leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Hero image */}
          <div className="mx-auto mt-14 max-w-5xl">
            <Image
              src={heroScreenshot ?? '/images/placeholder.png'}
              alt={heroScreenshotAlt ?? 'LogisBase platform'}
              width={1200}
              height={700}
              className="w-full rounded-2xl border shadow-2xl"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ── Pain Points ───────────────────────────────────────────────── */}
      {painPoints && (
        <section className="section-padding bg-muted/30 border-y">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10">
                <p className="text-destructive mb-3 text-xs font-semibold tracking-widest uppercase">
                  The old way
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                  {painPoints.heading}
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {painPoints.items.map((item) => (
                  <div
                    key={item}
                    className="bg-card flex items-start gap-3 rounded-xl border p-4"
                  >
                    <div className="bg-destructive/10 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                      <X className="text-destructive size-3" />
                    </div>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Features ──────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              {featuresHeading ?? "Everything you need. Nothing you don't."}
            </h2>
            {featuresSubheading && (
              <p className="text-muted-foreground text-lg">
                {featuresSubheading}
              </p>
            )}
          </div>
          <div className="space-y-24">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={cn(
                  'grid items-center gap-12 lg:grid-cols-2',
                  i % 2 === 1 && 'lg:[&>*:first-child]:order-2',
                )}
              >
                <div>
                  <div className="bg-card mb-5 flex size-12 items-center justify-center rounded-xl border">
                    <feature.icon className="text-primary size-6" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.bullets && feature.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {feature.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <Check className="text-primary mt-0.5 size-4 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div>
                  <Image
                    src={feature.screenshot ?? '/images/placeholder.png'}
                    alt={feature.screenshotAlt ?? feature.title}
                    width={700}
                    height={440}
                    className="w-full rounded-2xl border shadow-lg"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities Grid ─────────────────────────────────────────── */}
      {capabilities && capabilities.length > 0 && (
        <section className="section-padding bg-muted/20 border-y">
          <div className="container">
            <div className="mx-auto mb-10 max-w-xl text-center">
              <h2 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
                More built-in, out of the box
              </h2>
              <p className="text-muted-foreground">
                Every feature your team needs, without the integrations tax.
              </p>
            </div>
            <div className="bg-border mx-auto grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border sm:grid-cols-3 md:grid-cols-4">
              {capabilities.map((cap) => (
                <div
                  key={cap.label}
                  className="bg-card flex flex-col items-center gap-3 p-6 text-center"
                >
                  <div className="bg-primary/10 flex size-10 items-center justify-center rounded-lg">
                    <cap.icon className="text-primary size-5" />
                  </div>
                  <span className="text-sm font-medium">{cap.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Testimonial ───────────────────────────────────────────────── */}
      {testimonial && (
        <section className="section-padding">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <div className="bg-card relative rounded-2xl border px-10 py-12 text-center md:px-16">
                <div className="bg-card text-primary absolute -top-4 left-1/2 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border font-serif text-xl">
                  "
                </div>
                <blockquote className="mb-8 text-xl leading-relaxed font-medium text-balance md:text-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-3">
                  <div className="bg-border h-px w-8" />
                  <div className="text-sm">
                    <span className="font-semibold">{testimonial.author}</span>
                    <span className="text-muted-foreground">
                      {' '}
                      · {testimonial.role}, {testimonial.company}
                    </span>
                  </div>
                  <div className="bg-border h-px w-8" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      {faqs && faqs.length > 0 && (
        <section className="section-padding bg-muted/20 border-y">
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-2 text-3xl font-bold tracking-tight">
                Common questions
              </h2>
              <p className="text-muted-foreground mb-10">
                Everything you need to know before getting started.
              </p>
              <div className="bg-card divide-y rounded-2xl border px-6">
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} {...faq} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card relative overflow-hidden rounded-2xl border p-12 text-center md:p-16">
            <div className="from-primary/5 to-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />
            <div className="relative">
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
                {ctaHeading}
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg leading-relaxed">
                {ctaBody}
              </p>
              <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href={ctaPrimaryHref}>
                    {ctaPrimary} <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                {ctaSecondary && ctaSecondaryHref && (
                  <Button size="lg" variant="outline" asChild>
                    <Link href={ctaSecondaryHref}>{ctaSecondary}</Link>
                  </Button>
                )}
              </div>
              <p className="text-muted-foreground text-xs">
                7-day free trial · Full platform access
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
