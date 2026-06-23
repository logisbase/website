'use client';

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CreditCard,
  Factory,
  GlassWater,
  Globe,
  MapPin,
  Package,
  Percent,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Star,
  Store,
  Tag,
  Truck,
  Users,
  UtensilsCrossed,
  Wrench,
  XCircle,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { type ReactNode } from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/ui/code-block';
import { cn } from '@/lib/utils';

// ── Data ─────────────────────────────────────────────────────────────────────

const problems = [
  {
    title: 'Commissions that eat your margins',
    description:
      "Listing on DoorDash, Uber Eats, or a marketplace means handing 15–30% of every order to a platform. On $50k/month GMV, that's $15,000 gone — every month, forever.",
  },
  {
    title: 'No control over your brand or customer experience',
    description:
      "Your store is one listing in their marketplace. You can't set the design, control the flow, or differentiate from the restaurant next to you. The platform owns the experience.",
  },
  {
    title: 'The platform owns your customers',
    description:
      "Customer data stays with them. You can't run your own marketing, build loyalty programs, or contact your buyers directly. Every repeat order still goes through their platform — and their fees.",
  },
];

const catalogFeatures = [
  {
    icon: ShoppingBag,
    title: 'Unlimited Products & Variants',
    description:
      'Size, color, flavor, format — unlimited variants per product with independent pricing and stock levels.',
  },
  {
    icon: Tag,
    title: 'Customizable Addons & Options',
    description:
      'Toppings, sides, extras — build conditional addon groups with required selections and pricing that auto-totals at checkout.',
  },
  {
    icon: Globe,
    title: 'Location-Specific Catalogs',
    description:
      'Show different products for different stores or service zones. One platform, multiple catalogs — no duplication.',
  },
  {
    icon: MapPin,
    title: 'Time-Based Availability',
    description:
      'Happy hours, breakfast menus, seasonal items. Set time windows per product and let the platform enforce availability automatically.',
  },
];

const promotionFeatures = [
  {
    icon: Percent,
    title: 'Percentage & Fixed Discounts',
    description:
      'Create percentage-off or flat-amount discount codes with minimum order thresholds and single-use or multi-use options.',
  },
  {
    icon: Star,
    title: 'Bundle & BOGO Offers',
    description:
      'Run buy-one-get-one, combo deals, and category-level promotions that trigger automatically when cart conditions are met.',
  },
  {
    icon: Users,
    title: 'Customer Segment Targeting',
    description:
      'Target first-time customers, loyalty members, or specific cohorts. Promotions only appear to the segments you choose.',
  },
  {
    icon: Zap,
    title: 'Flash Sales & Limited Offers',
    description:
      'Set start and end times for promotions and let the platform handle activation. Urgency-driven sales without manual intervention.',
  },
];

const marketplaceFeatures = [
  {
    icon: Store,
    title: 'Network Creation & Store Onboarding',
    description:
      'Create a marketplace network and invite vendors with automated onboarding flows. Stores self-manage their catalog, hours, and zones under your platform.',
  },
  {
    icon: Percent,
    title: 'Commission & Revenue Sharing',
    description:
      'Set platform-level or store-level commission rates. Payouts are calculated automatically with full transaction history per vendor.',
  },
  {
    icon: Globe,
    title: 'Marketplace-Wide Search & Discovery',
    description:
      'Customers search across all stores in your network from a single interface. Filter by category, location, rating, and availability.',
  },
  {
    icon: Users,
    title: 'Aggregated Analytics',
    description:
      'Track GMV, order volume, and store performance across your entire marketplace from one dashboard — with per-store drill-downs.',
  },
];

const mobileFeatures = [
  {
    icon: Smartphone,
    title: 'iOS & Android, Production-Ready',
    description:
      'Built with React Native and Expo. Submit directly to the App Store and Google Play — no code changes required for standard white-labelling.',
  },
  {
    icon: Tag,
    title: 'White-Label Branding',
    description:
      'Replace logo, colors, and app name. Your brand throughout — not ours. Customers never see LogisBase.',
  },
  {
    icon: MapPin,
    title: 'Live Order Tracking',
    description:
      'Customer-facing live map with real-time driver position and ETA — powered by the same Fleet-Ops backend your dispatchers use.',
  },
  {
    icon: CreditCard,
    title: 'In-App Payments',
    description:
      'Stripe, PayPal, Apple Pay, and Google Pay supported out of the box. Card tokenization, wallet top-ups, and tip handling included.',
  },
];

const integrationSteps = [
  {
    icon: ShoppingBag,
    step: '1',
    title: 'Customer places order',
    description:
      'Customer checks out via your branded web or mobile storefront. Payment is captured.',
  },
  {
    icon: Zap,
    step: '2',
    title: 'Auto-dispatched to Fleet-Ops',
    description:
      'Storefront creates a Fleet-Ops order automatically — no webhook, no middleware, no manual step.',
  },
  {
    icon: Truck,
    step: '3',
    title: 'Driver assigned & en route',
    description:
      'The Orchestrator assigns the best available driver. Navigation starts in the driver app.',
  },
  {
    icon: MapPin,
    step: '4',
    title: 'Customer tracks in real time',
    description:
      'A live tracking link is sent to the customer. They watch their order move on the map.',
  },
];

const useCases = [
  { icon: UtensilsCrossed, label: 'Restaurants & Food' },
  { icon: ShoppingCart, label: 'Grocery & Convenience' },
  { icon: Store, label: 'Retail & E-Commerce' },
  { icon: GlassWater, label: 'Alcohol & Specialty' },
  { icon: Wrench, label: 'Services & Bookings' },
  { icon: Building2, label: 'Multi-Vendor Marketplaces' },
  { icon: Truck, label: 'Food Trucks & Pop-ups' },
  { icon: Factory, label: 'B2B & Wholesale' },
];

const comparison = [
  {
    feature: 'Commission fees',
    storefront: { value: '0%', positive: true },
    shopify: { value: '2.9% + 30¢', positive: null },
    thirdParty: { value: '15–30%', positive: false },
  },
  {
    feature: 'Integrated logistics',
    storefront: { value: 'Built-in', positive: true },
    shopify: { value: 'Third-party only', positive: false },
    thirdParty: { value: 'Built-in', positive: null },
  },
  {
    feature: 'Branded mobile app',
    storefront: { value: 'Included', positive: true },
    shopify: { value: 'Extra cost', positive: false },
    thirdParty: { value: 'Their app', positive: false },
  },
  {
    feature: 'Customer data ownership',
    storefront: { value: 'You own it', positive: true },
    shopify: { value: 'You own it', positive: true },
    thirdParty: { value: 'They own it', positive: false },
  },
  {
    feature: 'Multi-vendor marketplace',
    storefront: { value: 'Built-in', positive: true },
    shopify: { value: 'Add-on required', positive: false },
    thirdParty: { value: 'Built-in', positive: null },
  },
  {
    feature: 'Source-accessible & self-hosted',
    storefront: { value: 'Yes', positive: true },
    shopify: { value: 'No', positive: false },
    thirdParty: { value: 'No', positive: false },
  },
  {
    feature: 'Brand control',
    storefront: { value: 'Full control', positive: true },
    shopify: { value: 'Full control', positive: true },
    thirdParty: { value: 'Limited', positive: false },
  },
];

const faqs = [
  {
    q: 'How is Storefront different from Shopify?',
    a: "Storefront is built specifically for hyperlocal, on-demand commerce with integrated logistics. Unlike Shopify, which is designed for shipping products, Storefront includes native delivery management via Fleet-Ops, production-ready mobile apps, and multi-vendor marketplace capabilities out of the box. Plus, it's source-accessible and self-hostable.",
  },
  {
    q: 'Do I really pay zero commission fees?',
    a: 'Yes. Storefront charges no commission fees on your orders. You pay a flat monthly subscription based on your usage (resource units), not a percentage of your sales. This means you keep all your revenue minus standard payment processing fees (Stripe, PayPal, etc.).',
  },
  {
    q: 'Can I build a multi-vendor marketplace like DoorDash?',
    a: 'Absolutely. Storefront includes full multi-vendor marketplace capabilities. You can create networks, invite stores, set commission rates, manage payouts, and provide a unified shopping experience. Perfect for food courts, local business networks, or building your own delivery platform.',
  },
  {
    q: 'Are the mobile apps really included?',
    a: 'Yes. Storefront includes production-ready iOS and Android apps built with React Native. You can customize the branding, colors, and logo, then submit to the App Store and Google Play. The app source code is source-accessible — inspect it, fork it, extend it.',
  },
  {
    q: 'Can I use my own drivers or do I have to use Fleet-Ops?',
    a: "You can use Fleet-Ops for delivery management (included with Storefront), integrate with third-party delivery services via API, or manage your own driver fleet. Fleet-Ops provides dispatch, route optimization, and tracking, but you're not locked in.",
  },
  {
    q: 'What payment gateways are supported?',
    a: 'Storefront supports Stripe, PayPal, and QPay out of the box, with credit cards, debit cards, Apple Pay, Google Pay, and wallet top-ups. The payment system is extensible so you can integrate additional gateways for local market requirements.',
  },
  {
    q: 'Is Storefront really source-accessible?',
    a: 'Yes. Storefront is fully source-accessible. View the code on GitHub, self-host on your own infrastructure, and customise it to your exact needs. An Enterprise License is available if you need to keep your changes proprietary.',
  },
  {
    q: 'Can I migrate from DoorDash or Uber Eats?',
    a: 'Yes. Many businesses migrate from third-party delivery platforms to Storefront to eliminate commission fees and own their customer relationships. You can export your product catalog, set up your branded storefront and mobile apps, and start accepting orders directly.',
  },
];

// ── Shared Components ─────────────────────────────────────────────────────────

function BrowserFrame({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn('overflow-hidden rounded-xl border shadow-lg', className)}
    >
      <div className="bg-muted/50 flex items-center gap-2 border-b px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        </div>
        <span className="text-muted-foreground ml-2 text-xs">{label}</span>
      </div>
      {children}
    </div>
  );
}

function FeatureList({
  items,
}: {
  items: { icon: React.ElementType; title: string; description: string }[];
}) {
  return (
    <div className="divide-y">
      {items.map((feature) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="flex gap-4 py-5 first:pt-0 last:pb-0"
          >
            <div className="bg-muted/30 flex size-9 shrink-0 items-center justify-center rounded-md border">
              <Icon className="text-muted-foreground size-4" />
            </div>
            <div className="space-y-0.5">
              <h4 className="text-accent-foreground font-semibold">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-snug">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function StorefrontPageContent() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/[0.10] blur-[120px]" />
          <div className="absolute top-1/3 -right-24 h-[500px] w-[500px] rounded-full bg-blue-500/[0.07] blur-3xl" />
          <div className="absolute top-1/2 -left-24 h-[400px] w-[400px] rounded-full bg-pink-500/[0.06] blur-3xl" />
        </div>
        <div className="container space-y-12">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="text-muted-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              Storefront · Headless Commerce & Marketplace
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Your Commerce.{' '}
              <span className="text-gradient">Zero Commission.</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-snug md:text-xl">
              A logistics-first commerce platform for on-demand businesses.
              Launch your branded storefront and mobile app with integrated
              delivery — no platform fees and no vendor lock-in.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  Get Started <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://cal.com/logisbase/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a
                  href="https://tally.so/r/obgQQx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request source access
                </a>
              </Button>
            </div>
          </div>

          {/* Commission stat strip */}
          <div className="bg-border grid grid-cols-1 gap-px overflow-hidden rounded-xl border sm:grid-cols-3">
            <div className="bg-card flex flex-col items-center justify-center gap-1 px-6 py-8 text-center">
              <span className="text-primary text-3xl font-bold tracking-tight md:text-4xl">
                0%
              </span>
              <span className="text-muted-foreground text-xs">
                Commission fees on every order
              </span>
            </div>
            <div className="bg-card flex flex-col items-center justify-center gap-1 px-6 py-8 text-center">
              <span className="text-primary text-3xl font-bold tracking-tight md:text-4xl">
                100%
              </span>
              <span className="text-muted-foreground text-xs">
                Customer data stays yours
              </span>
            </div>
            <div className="bg-card flex flex-col items-center justify-center gap-1 px-6 py-8 text-center">
              <span className="text-primary text-3xl font-bold tracking-tight md:text-4xl">
                8,000+
              </span>
              <span className="text-muted-foreground text-xs">
                Active LogisBase operations
              </span>
            </div>
          </div>

          {/* Hero screenshot */}
          <BrowserFrame
            label="Storefront — Commerce Dashboard"
            className="shadow-2xl"
          >
            <div className="relative aspect-[16/7] w-full">
              <Image
                src="/images/screenshots/storefront/storefront-dashboard.webp"
                alt="LogisBase Storefront console dashboard showing live orders, store activity, product catalog, and delivery metrics"
                fill
                className="object-cover object-top"
                priority
                unoptimized
              />
            </div>
          </BrowserFrame>
        </div>
      </section>

      {/* ── The Platform Tax ──────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="flex flex-col justify-center gap-5 lg:col-span-2">
              <div className="text-muted-foreground inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium">
                The Problem
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl">
                Stop Funding the Platform That's Eating Your Margins
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Third-party delivery and marketplace platforms take a percentage
                of every single order — permanently. They own the customer
                relationship, control the experience, and keep the data. You do
                the work; they collect the rent.
              </p>
              <div className="bg-muted/20 rounded-xl border p-5">
                <p className="text-muted-foreground text-xs">
                  At 30% commission on
                </p>
                <p className="text-primary text-4xl font-bold tracking-tight">
                  $15,000
                </p>
                <p className="text-muted-foreground text-sm">
                  lost every month on $50k GMV — going to their platform, not
                  yours
                </p>
              </div>
            </div>
            <div className="divide-y lg:col-span-3">
              {problems.map((problem, i) => (
                <div key={i} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                  <div className="bg-destructive/10 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md">
                    <XCircle className="text-destructive size-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-accent-foreground font-semibold">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Products & Catalog ────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Products & Catalog
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Your Catalog, <span className="text-gradient">Your Rules</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-snug lg:text-xl">
              Build exactly the product structure your business needs —
              unlimited variants, addons, time-based availability, and
              location-specific menus. No template constraints.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: screenshots */}
            <div className="flex flex-col gap-5 lg:col-span-3">
              <BrowserFrame label="Storefront — Product Grid">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/screenshots/storefront/storefront-products-overview.webp"
                    alt="Storefront product overview showing catalog items with images, pricing, variants, and availability settings"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
              </BrowserFrame>
              <BrowserFrame label="Storefront — Product Editor">
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src="/images/screenshots/storefront/storefront-products-new.webp"
                    alt="Storefront product editor showing fields for product details, pricing, categories, variants, and addons"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
              </BrowserFrame>
            </div>

            {/* Right: feature list */}
            <div className="lg:col-span-2">
              <FeatureList items={catalogFeatures} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Promotions ────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-600 dark:text-pink-400">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
              Promotions & Marketing
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Drive Repeat Orders with{' '}
              <span className="text-gradient">Built-In Promotions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-snug lg:text-xl">
              Discounts, bundles, flash sales, and segment-targeted offers — all
              managed from one place, no third-party marketing tool required.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: feature list */}
            <div className="lg:col-span-2">
              <FeatureList items={promotionFeatures} />
            </div>

            {/* Right: screenshot */}
            <div className="lg:col-span-3">
              <BrowserFrame label="Storefront — Promotions">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/screenshots/storefront/storefront-dashboard.webp"
                    alt="Storefront dashboard with Promotions module — KPI cards, recent orders, and the Promotions navigation entry"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ── Multi-Vendor Marketplace ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-400">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              Multi-Vendor Marketplace
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Build Your Own{' '}
              <span className="text-gradient">Delivery Marketplace</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-snug lg:text-xl">
              Create a multi-vendor network, onboard stores, set commission
              rates, and give customers a unified browsing experience across all
              your vendors. The infrastructure to compete with the platforms —
              owned entirely by you.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left: screenshots */}
            <div className="flex flex-col gap-5 lg:col-span-3">
              <BrowserFrame label="Storefront — Catalogs & Networks">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/screenshots/storefront/storefront-catalogs-overview.webp"
                    alt="Storefront catalog and network management showing multi-vendor store configuration and network settings"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
              </BrowserFrame>
              <BrowserFrame label="Storefront — Food Trucks & Stores">
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src="/images/screenshots/storefront/storefront-food-trucks-overview.webp"
                    alt="Storefront store directory showing food trucks and vendors with location, hours, and catalog management"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </div>
              </BrowserFrame>
            </div>

            {/* Right: feature list */}
            <div className="lg:col-span-2">
              <FeatureList items={marketplaceFeatures} />
            </div>
          </div>
        </div>
      </section>

      {/* ── From Checkout to Doorstep ─────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Fleet-Ops Integration
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              From Checkout to Doorstep —{' '}
              <span className="text-gradient">
                Without a Single Integration
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-snug lg:text-xl">
              Storefront and Fleet-Ops share the same platform. When a customer
              checks out, the delivery order is created, assigned, and tracked
              automatically — no webhook to maintain, no third-party middleware,
              no manual handoff.
            </p>
          </div>

          {/* Step flow */}
          <div className="bg-border grid grid-cols-1 gap-px overflow-hidden rounded-xl border md:grid-cols-2 lg:grid-cols-4">
            {integrationSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="bg-card flex flex-col gap-3 p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold">
                      {step.step}
                    </div>
                    <div className="bg-muted/40 flex size-8 items-center justify-center rounded-md">
                      <Icon className="text-muted-foreground size-4" />
                    </div>
                  </div>
                  <h4 className="text-accent-foreground font-semibold">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-snug">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Map screenshot */}
          <BrowserFrame label="Fleet-Ops — Live Dispatch (auto-triggered by Storefront order)">
            <div className="relative aspect-[16/7] w-full">
              <Image
                src="/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp"
                alt="Fleet-Ops live map showing real-time driver dispatch triggered automatically by a Storefront order"
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
          </BrowserFrame>
        </div>
      </section>

      {/* ── Customer Mobile App ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: copy */}
            <div className="flex min-w-0 flex-col gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  Customer Mobile App
                </div>
                <h2 className="text-4xxl leading-tight tracking-tight text-balance md:text-5xl">
                  A Branded App.{' '}
                  <span className="text-gradient">
                    Source-accessible. Fully Customizable.
                  </span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Storefront App is a production-ready, white-label iOS and
                  Android application for your customers. Replace your logo and
                  brand colors, then publish to the App Store and Google Play —
                  no coding required for standard branding. Full source access
                  is available if you need deeper customization.
                </p>
              </div>
              <div className="divide-y">
                {mobileFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="flex gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <div className="bg-muted/30 flex size-8 shrink-0 items-center justify-center rounded-md border">
                        <Icon className="text-muted-foreground size-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-accent-foreground text-sm font-semibold">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground text-xs leading-snug">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild className="w-full sm:w-auto">
                  <a
                    href="https://tally.so/r/obgQQx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request source access
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="/docs/storefront">Documentation</Link>
                </Button>
              </div>
            </div>

            {/* Right: storefront product browsing screenshot */}
            <div className="w-full">
              <BrowserFrame label="Storefront — Products">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/screenshots/storefront/storefront-products-overview.webp"
                    alt="Storefront product catalog grid — categories, product cards, and inventory controls"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ──────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
              How We Compare
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl">
              The Clear Choice for On-Demand Commerce
            </h2>
            <p className="text-muted-foreground text-lg leading-snug">
              See how Storefront stacks up against traditional e-commerce
              platforms and third-party delivery apps.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="bg-card w-full min-w-[700px] overflow-hidden rounded-xl border">
              <thead>
                <tr className="border-b">
                  <th className="text-muted-foreground p-4 text-left text-sm font-semibold">
                    Feature
                  </th>
                  <th className="bg-primary/5 p-4 text-center text-sm font-semibold">
                    Storefront
                  </th>
                  <th className="text-muted-foreground p-4 text-center text-sm font-semibold">
                    Shopify
                  </th>
                  <th className="text-muted-foreground p-4 text-center text-sm font-semibold">
                    DoorDash / Uber Eats
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      'border-b last:border-0',
                      i % 2 === 1 && 'bg-muted/10',
                    )}
                  >
                    <td className="text-accent-foreground p-4 text-sm font-medium">
                      {row.feature}
                    </td>
                    <td
                      className={cn(
                        'p-4 text-center text-sm font-semibold',
                        'bg-primary/5',
                        row.storefront.positive === true &&
                          'text-emerald-600 dark:text-emerald-400',
                        row.storefront.positive === false && 'text-destructive',
                      )}
                    >
                      {row.storefront.value}
                    </td>
                    <td
                      className={cn(
                        'p-4 text-center text-sm',
                        row.shopify.positive === true &&
                          'text-emerald-600 dark:text-emerald-400',
                        row.shopify.positive === false &&
                          'text-muted-foreground',
                      )}
                    >
                      {row.shopify.value}
                    </td>
                    <td
                      className={cn(
                        'p-4 text-center text-sm',
                        row.thirdParty.positive === true &&
                          'text-emerald-600 dark:text-emerald-400',
                        row.thirdParty.positive === false &&
                          'text-muted-foreground',
                      )}
                    >
                      {row.thirdParty.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Use Cases ─────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
              Industry Use Cases
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl">
              Built for Every On-Demand Business
            </h2>
            <p className="text-muted-foreground text-lg leading-snug">
              From a single restaurant to a multi-city marketplace — Storefront
              powers hyperlocal commerce across every industry.
            </p>
          </div>
          <div className="bg-border grid grid-cols-1 gap-px overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <div
                  key={uc.label}
                  className="bg-card flex flex-col items-center gap-3 p-6 text-center"
                >
                  <div className="bg-primary/10 flex size-9 items-center justify-center rounded-md">
                    <Icon className="text-primary size-5" />
                  </div>
                  <span className="text-accent-foreground text-sm font-semibold">
                    {uc.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Developer / Headless API ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="text-muted-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium">
                  <span className="bg-primary h-1.5 w-1.5 rounded-full" />
                  Headless Commerce API
                </div>
                <h2 className="text-4xxl leading-tight tracking-tight text-balance md:text-5xl">
                  Build Any Commerce Experience{' '}
                  <span className="text-gradient">On Top of Storefront</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Go fully headless. Use the Storefront REST API to build a
                  completely custom frontend, integrate with an existing
                  website, or connect to any third-party system. The mobile apps
                  and web console are just two of many possible frontends for
                  your Storefront backend.
                </p>
              </div>
              <div className="divide-y">
                {[
                  'Full REST API: catalog, orders, customers, payments, promotions',
                  'Webhooks for order events, payment status, and delivery updates',
                  'JavaScript SDK for rapid frontend integration',
                  'Sandbox environment for safe integration testing',
                  'Source-accessible — self-host, fork, and extend freely',
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <CheckCircle2 className="text-primary size-4 shrink-0" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="/docs/storefront">View API Docs</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://tally.so/r/obgQQx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <CodeBlock
              label="Storefront API — Create Order"
              language="javascript"
              code={`// POST /api/v1/storefront/orders

{
  "customer_uuid": "customer_abc123",
  "store_uuid": "store_xyz456",
  "cart": [
    {
      "product_uuid": "prod_burger_01",
      "quantity": 2,
      "addons": ["addon_cheese", "addon_sauce"]
    }
  ],
  "delivery_address": {
    "street": "123 High Street",
    "city": "Sydney",
    "postal_code": "2000"
  },
  "payment_method": "stripe_pm_xyz"
}

// Response — order created + dispatched to Fleet-Ops
{
  "id": "order_sf_k92jd",
  "status": "dispatched",
  "driver": { "name": "Alex T.", "eta": "18 min" },
  "tracking_url": "https://track.yourbrand.com/k92jd"
}`}
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 space-y-4 text-center">
              <div className="text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
                FAQ
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about Storefront.
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-lg border px-6"
                >
                  <AccordionTrigger className="py-5 text-left font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="bg-card relative overflow-hidden rounded-2xl border px-8 py-16 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/[0.12] blur-3xl" />
              <div className="absolute right-1/4 -bottom-1/2 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-3xl" />
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
                Start Today
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
                Own Your Commerce.{' '}
                <span className="text-gradient">Keep Every Penny.</span>
              </h2>
              <p className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed">
                Launch your branded storefront and mobile app. Build your own
                marketplace. Keep 100% of every order — no commissions, no
                vendor lock-in, no compromise.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/pricing">
                    Get Started <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://cal.com/logisbase/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Demo
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground text-xs">
                7-day trial · Self-host or cloud deployment · Full platform
                access
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
