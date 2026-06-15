'use client';

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Box,
  CheckCircle2,
  Code,
  GitBranch,
  Globe,
  LayoutDashboard,
  Lock,
  MapPin,
  Package,
  Puzzle,
  Shield,
  ShoppingBag,
  Smartphone,
  Truck,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import DeploymentOptions from '@/components/sections/deployment-options';
import IntegrationsEcosystem from '@/components/sections/integrations-ecosystem';
import OpenSourceAdvantage from '@/components/sections/open-source-advantage';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// ── Data ─────────────────────────────────────────────────────────────────────

function buildStats(stars: string) {
  return [
    { value: '8,000+', label: 'Active instances' },
    { value: '10M+', label: 'Orders processed' },
    { value: '50K+', label: 'Fleet vehicles tracked' },
    { value: stars, label: 'Organizations' },
  ];
}

const modules = [
  {
    icon: Truck,
    name: 'Fleet-Ops',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    dot: 'bg-blue-500',
    description:
      'Fleet management and TMS. Intelligent dispatch, real-time tracking, configurable workflows, and the Orchestrator Workbench for phase-based optimization.',
    href: '/platform/fleetops',
    badge: null,
  },
  {
    icon: ShoppingBag,
    name: 'Storefront',
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    dot: 'bg-violet-500',
    description:
      'Headless e-commerce for on-demand businesses. Zero commission fees, multi-vendor marketplace, white-label mobile app, and native Fleet-Ops delivery integration.',
    href: '/platform/storefront',
    badge: null,
  },
  {
    icon: Box,
    name: 'Pallet',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    dot: 'bg-amber-500',
    description:
      'Warehouse management and inventory. Stock levels, transfers, pick lists, fulfillment workflows, and cycle count audits for distribution and 3PL operations.',
    href: '/platform/pallet',
    badge: 'Beta',
  },
  {
    icon: BookOpen,
    name: 'Ledger',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    dot: 'bg-emerald-500',
    description:
      'Logistics finance and accounting. Double-entry bookkeeping, auto-generated journal entries, invoicing, digital wallets, and real-time financial reports.',
    href: '/platform/ledger',
    badge: null,
  },
  {
    icon: Smartphone,
    name: 'Navigator',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    dot: 'bg-green-500',
    description:
      'The driver application for logistics operations. Turn-by-turn navigation, proof of delivery, issue reporting, and real-time order communication — fully white-label and enterprise ready.',
    href: '/platform/navigator',
    badge: null,
  },
  {
    icon: Shield,
    name: 'IAM',
    color: 'text-slate-500',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/20',
    dot: 'bg-slate-500',
    description:
      'Identity and access management. Role-based access control, multi-tenant organizations, 2FA, and granular permissions across all platform modules.',
    href: '/platform/security',
    badge: null,
  },
  {
    icon: Code,
    name: 'Developer',
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    dot: 'bg-indigo-500',
    description:
      'API keys, webhooks, socket events, request logs, and sandbox/live environments. Full programmatic access to every platform capability.',
    href: '/docs',
    badge: null,
  },
  {
    icon: Puzzle,
    name: 'Extensions',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    dot: 'bg-pink-500',
    description:
      'Official and community-built extensions via the LogisBase Marketplace. One-click install from the console or CLI — telematics, payments, analytics, and more.',
    href: '/platform/extensions',
    badge: null,
  },
];

const integrationFlow = [
  {
    icon: ShoppingBag,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    module: 'Storefront',
    title: 'Customer places order',
    description:
      'Order paid via branded web or mobile app. Storefront captures payment and creates a delivery order automatically.',
  },
  {
    icon: GitBranch,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    module: 'Fleet-Ops',
    title: 'Orchestrator assigns & dispatches',
    description:
      'Fleet-Ops receives the order, runs optimization phases, assigns the best driver, and sends navigation to the Navigator app.',
  },
  {
    icon: Smartphone,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    module: 'Navigator',
    title: 'Driver completes delivery',
    description:
      'Driver navigates turn-by-turn, captures proof of delivery, and marks the order complete. Customer tracking link updates in real time.',
  },
  {
    icon: BookOpen,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    module: 'Ledger',
    title: 'Revenue recorded automatically',
    description:
      'Ledger posts the journal entry, credits the driver earnings wallet, and updates the income statement — without any manual step.',
  },
];

const platformPrinciples = [
  {
    icon: Puzzle,
    title: 'Modular by design',
    description:
      'Deploy only the capabilities your operation requires. Expand as your business grows without the constraints of a rigid, all-in-one monolith or unnecessary bundled features.',
  },
  {
    icon: Globe,
    title: 'Controlled Access Architecture',
    description:
      'LogisBase is built with a transparent, inspectable architecture that supports self-hosted or managed deployments. Organizations can review implementation details, extend functionality, or operate through our hosted environment based on internal requirements.',
  },
  {
    icon: Lock,
    title: 'Full Ownership of Your Environment',
    description:
      'Maintain complete control over your deployment, data, and configuration. Scale without per-user or per-seat restrictions, and operate free from vendor dependency or forced usage models.',
  },
  {
    icon: Zap,
    title: 'Unified Data Layer',
    description:
      'Fleet operations, commerce, warehousing, finance, and fulfillment modules are built on a shared data foundation. This eliminates the need for external integrations between core system components and ensures consistent operational flow across the platform.',
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PlatformPageContent({ stars }: { stars: string }) {
  const stats = buildStats(stars);
  return (
    <div className="flex flex-col">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-chart-1/[0.10] absolute -top-24 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full blur-[120px]" />
          <div className="bg-chart-3/[0.07] absolute top-1/3 -right-24 h-[500px] w-[500px] rounded-full blur-3xl" />
          <div className="bg-chart-2/[0.06] absolute top-1/2 -left-24 h-[400px] w-[400px] rounded-full blur-3xl" />
        </div>
        <div className="container space-y-12">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="text-muted-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium">
              <span className="bg-primary h-1.5 w-1.5 rounded-full" />
              Platform Overview
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              One Platform for Every{' '}
              <span className="text-gradient">Logistics Operation</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-snug md:text-xl">
              LogisBase unifies fleet management, warehousing, commerce,
              fulfillment, finance, and driver operations in a single modular
              platform. Start with the capabilities you need today and expand as
              your business grows. Deploy on your infrastructure or in the
              cloud, with the flexibility and control modern logistics
              operations demand.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a
                  href="https://console.logisbase.com/onboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try LogisBase Cloud <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://cal.com/logisbase/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Demo
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a
                  href="https://github.com/logisbase/logisbase"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request source access
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div
            className="bg-border overflow-hidden rounded-xl border"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card flex flex-col items-center justify-center gap-1 px-6 py-8 text-center"
              >
                <span className="text-primary text-3xl font-bold tracking-tight md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Hero screenshot */}
          <div className="overflow-hidden rounded-xl border shadow-2xl">
            <div className="bg-muted/50 flex items-center gap-2 border-b px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
              </div>
              <span className="text-muted-foreground ml-2 text-xs">
                LogisBase — Fleet-Ops Live Operations
              </span>
            </div>
            <div className="relative aspect-[16/7] w-full">
              <Image
                src="/images/screenshots/fleet-ops/fleet-ops-live-orders-panel.webp"
                alt="LogisBase platform showing the Fleet-Ops live operations dashboard with real-time fleet map, active orders, and driver positions"
                fill
                className="object-cover object-top"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform Principles ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="flex flex-col justify-center gap-5 lg:col-span-2">
              <div className="text-muted-foreground inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium">
                How It Works
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl">
                Built to Work the Way Your Operation Does
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Most logistics platforms force you to use everything or nothing.
                LogisBase is modular — each piece works independently, and every
                piece works better together.
              </p>
            </div>
            <div className="divide-y lg:col-span-3">
              {platformPrinciples.map((principle) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={principle.title}
                    className="flex gap-5 py-6 first:pt-0 last:pb-0"
                  >
                    <div className="bg-muted/30 mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border">
                      <Icon className="text-muted-foreground size-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-accent-foreground font-semibold">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── All Modules ───────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-10">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
              The Full Platform
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Every Module You Need,{' '}
              <span className="text-gradient">Nothing You Don't</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-snug lg:text-xl">
              Begin with a single module and expand as your business evolves.
              Each capability is independently deployable, fully integrated
              through a shared system architecture, and designed to work
              seamlessly with the rest of the platform. Activate only what you
              need, when you need it, without unnecessary overhead.
            </p>
          </div>

          <div
            className="bg-border grid grid-cols-1 overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: '1px' }}
          >
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <Link
                  key={mod.name}
                  href={mod.href}
                  className="group bg-card hover:bg-muted/30 flex flex-col gap-4 p-6 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={cn(
                        'flex size-10 items-center justify-center rounded-lg',
                        mod.bg,
                      )}
                    >
                      <Icon className={cn('size-5', mod.color)} />
                    </div>
                    {mod.badge && (
                      <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                        {mod.badge}
                      </span>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-accent-foreground font-semibold">
                      {mod.name}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-snug">
                      {mod.description}
                    </p>
                  </div>
                  <div className="text-muted-foreground group-hover:text-accent-foreground mt-auto flex items-center gap-1 text-xs font-medium transition-colors">
                    Explore {mod.name}{' '}
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How Modules Connect ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container space-y-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <div className="text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
              Native Integration
            </div>
            <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
              Modules That Talk to Each Other{' '}
              <span className="text-gradient">Out of the Box</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-snug lg:text-xl">
              When multiple LogisBase modules are deployed together, they
              operate on a shared data layer by default. A Storefront order
              seamlessly becomes a Fleet-Ops dispatch and a Ledger entry
              automatically—without requiring webhooks, middleware, or custom
              integration layers. This native connectivity ensures that your
              systems work together from day one, with less development overhead
              and more operational reliability.
            </p>
          </div>

          {/* Flow steps */}
          <div
            className="bg-border overflow-hidden rounded-xl border"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
            }}
          >
            {integrationFlow.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.module}
                  className="bg-card relative flex flex-col gap-3 p-6"
                >
                  {i < integrationFlow.length - 1 && (
                    <div className="absolute top-1/2 right-0 z-10 hidden translate-x-1/2 -translate-y-1/2 lg:flex">
                      <ArrowRight className="text-muted-foreground/40 size-4" />
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        'flex size-8 items-center justify-center rounded-md',
                        step.bg,
                      )}
                    >
                      <Icon className={cn('size-4', step.color)} />
                    </div>
                    <span className={cn('text-xs font-semibold', step.color)}>
                      {step.module}
                    </span>
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

          {/* Supporting check-points */}
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              'No webhooks to maintain between modules',
              'Shared contact, place, and vehicle data across all modules',
              'One IAM layer controls permissions everywhere',
            ].map((point) => (
              <div
                key={point}
                className="bg-muted/20 flex items-start gap-3 rounded-lg border p-4"
              >
                <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" />
                <span className="text-muted-foreground text-sm leading-snug">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shared Sections ───────────────────────────────────────────────── */}
      <IntegrationsEcosystem />
      <OpenSourceAdvantage />
      <DeploymentOptions />

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="bg-card relative overflow-hidden rounded-2xl border px-8 py-16 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="bg-chart-1/[0.12] absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl" />
              <div className="bg-chart-3/[0.08] absolute right-1/4 -bottom-1/2 h-72 w-72 rounded-full blur-3xl" />
            </div>
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
                Get Started
              </div>
              <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
                Your Logistics Stack,{' '}
                <span className="text-gradient">Under Your Control</span>
              </h2>
              <p className="text-muted-foreground mx-auto max-w-xl text-lg leading-relaxed">
                Start a 7-day free trial on LogisBase Cloud or deploy the full
                platform in your own environment. No per-seat pricing, no vendor
                lock-in, and complete flexibility across cloud or self-hosted
                deployments.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a
                    href="https://console.logisbase.com/onboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Free Trial <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://cal.com/logisbase/demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Demo
                  </a>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <a
                    href="https://github.com/logisbase/logisbase"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deploy Self-Hosted
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground text-xs">
                7-day free trial · Deploy self-hosted or cloud · Full platform
                access
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
