import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Check,
  ChevronRight,
  Clock,
  Cpu,
  Eye,
  GitBranch,
  Layers,
  MessageSquare,
  Package,
  Route,
  Shield,
  Sparkles,
  Star,
  Truck,
  X,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title:
    'Source-accessible Logistics AI | AI-Powered Fleet & Delivery Management',
  description:
    'LogisBase is building the source-accessible AI layer for logistics. AI-powered route optimisation, predictive dispatch, anomaly detection, and natural language operations — all on infrastructure you control.',
  keywords: [
    'logistics AI',
    'AI fleet management',
    'source-accessible logistics AI',
    'AI dispatch software',
    'AI route optimization',
    'logistics automation AI',
    'AI delivery management',
    'generative AI logistics',
    'AI TMS software',
    'AI supply chain platform',
    'source-accessible AI logistics platform',
    'AI last mile delivery',
    'predictive logistics AI',
    'fleet AI software',
  ],
  alternates: { canonical: 'https://logisbase.com/platform/ai' },
  openGraph: {
    title: 'Source-accessible Logistics AI | LogisBase',
    description:
      'The source-accessible AI layer for logistics operations. Route AI, dispatch AI, anomaly detection, and natural language control — on infrastructure you own.',
    images: [{ url: '/images/og-ai.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Source-accessible Logistics AI | LogisBase`,
    description: `The source-accessible AI layer for logistics operations. Route AI, dispatch AI, anomaly detection, and natural language control — on infrastructure you own.`,
  },
};

// ─── AI Capabilities ──────────────────────────────────────────────────────────
const AI_CAPABILITIES = [
  {
    icon: Route,
    title: 'AI Route Optimisation',
    tag: 'Coming Soon',
    description:
      'Go beyond static routing. LogisBase AI will continuously re-optimise routes in real time using live traffic, weather, driver availability, vehicle capacity, and historical delivery patterns — cutting fuel costs by up to 30%.',
    keywords: ['AI route optimization', 'dynamic routing AI', 'last-mile AI'],
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Dispatch',
    tag: 'Coming Soon',
    description:
      'Dispatch orders, reassign drivers, and query your fleet using plain English. Tell LogisBase AI "find the nearest available driver for this order in Zone 4" and it executes — no clicks required.',
    keywords: [
      'AI dispatch',
      'natural language logistics',
      'conversational AI fleet',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Predictive Anomaly Detection',
    tag: 'Coming Soon',
    description:
      'AI monitors every order, driver, and vehicle in real time. It flags late deliveries before they happen, detects unusual driver behaviour, and alerts you to vehicle faults before they cause breakdowns.',
    keywords: [
      'predictive logistics',
      'anomaly detection fleet',
      'AI monitoring logistics',
    ],
  },
  {
    icon: BarChart3,
    title: 'AI-Powered Analytics',
    tag: 'Coming Soon',
    description:
      'Stop reading dashboards. Ask your data questions. LogisBase AI will surface insights automatically — "Why did on-time delivery drop last Tuesday?" — and recommend corrective actions.',
    keywords: ['logistics analytics AI', 'AI insights fleet management'],
  },
  {
    icon: Bot,
    title: 'Autonomous Order Processing',
    tag: 'Coming Soon',
    description:
      'AI reads incoming orders from any source — email, API, EDI, WhatsApp — extracts structured data, validates it, and creates dispatch-ready jobs in LogisBase without human intervention.',
    keywords: [
      'AI order processing',
      'autonomous logistics',
      'AI automation logistics',
    ],
  },
  {
    icon: Truck,
    title: 'Predictive Maintenance',
    tag: 'Coming Soon',
    description:
      'LogisBase AI analyses vehicle telemetry to predict component failures before they occur. Schedule maintenance proactively, reduce unplanned downtime, and extend vehicle lifespan.',
    keywords: [
      'predictive maintenance fleet',
      'AI vehicle management',
      'fleet AI maintenance',
    ],
  },
  {
    icon: Package,
    title: 'Demand Forecasting',
    tag: 'Coming Soon',
    description:
      'AI analyses your historical order volumes, seasonality, and external signals to forecast future demand. Pre-position drivers and vehicles before the surge hits.',
    keywords: ['demand forecasting logistics', 'AI supply chain forecasting'],
  },
  {
    icon: Shield,
    title: 'AI Compliance & Risk',
    tag: 'Coming Soon',
    description:
      'Automatically flag compliance risks — driver hours violations, vehicle inspection overdue, hazmat route restrictions. AI keeps your operation compliant without manual checking.',
    keywords: ['AI compliance logistics', 'fleet risk management AI'],
  },
];

// ─── How It Works ─────────────────────────────────────────────────────────────
const HOW_IT_WORKS = [
  {
    step: '01',
    icon: Eye,
    title: 'AI Observes Everything',
    description:
      'Every order, driver location, vehicle status, and customer interaction flows into the LogisBase AI layer in real time. Nothing is missed.',
  },
  {
    step: '02',
    icon: Brain,
    title: 'AI Reasons & Decides',
    description:
      'Models trained on logistics-specific data analyse patterns, detect anomalies, and generate recommendations — or take autonomous action when configured to do so.',
  },
  {
    step: '03',
    icon: Zap,
    title: 'AI Acts in the Platform',
    description:
      "AI doesn't just surface insights in a separate dashboard. It acts directly inside LogisBase — re-assigning drivers, updating ETAs, creating alerts, and triggering workflows.",
  },
  {
    step: '04',
    icon: Layers,
    title: 'You Stay in Control',
    description:
      'Every AI action is logged, explainable, and reversible. You choose which capabilities run autonomously and which require human approval. Source-accessible means you can audit the models.',
  },
];

// ─── Why Source-accessible AI ───────────────────────────────────────────────────────
const OPEN_SOURCE_ADVANTAGES = [
  {
    icon: GitBranch,
    title: 'No AI Black Box',
    description:
      'With closed-source logistics AI, you have no idea why a route was chosen or a driver was flagged. LogisBase AI is transparent — inspect the logic, understand the decisions, and validate the outputs.',
  },
  {
    icon: Cpu,
    title: 'Run Your Own Models',
    description:
      'Connect your own LLMs, fine-tuned models, or proprietary algorithms. LogisBase AI is model-agnostic — use OpenAI, Anthropic, Mistral, or your own self-hosted model.',
  },
  {
    icon: Shield,
    title: 'Data Stays on Your Infrastructure',
    description:
      'Your logistics data never leaves your servers. Train AI on your own historical data without sending sensitive shipment, customer, or driver data to third-party AI providers.',
  },
  {
    icon: Sparkles,
    title: 'Community-Driven Intelligence',
    description:
      'AI capabilities are shaped by logistics operators, developers, and researchers building on LogisBase, not just an internal product team. In a source-accessible ecosystem, the most effective ideas can be adopted, extended, and shipped faster.',
  },
];

// ─── Roadmap ──────────────────────────────────────────────────────────────────
const ROADMAP = [
  {
    quarter: 'Q3 2025',
    status: 'In Progress',
    statusColor: 'bg-blue-500',
    items: [
      'AI Route Optimisation Engine (beta)',
      'Natural Language Query Interface',
      'Anomaly Detection for Late Deliveries',
    ],
  },
  {
    quarter: 'Q4 2025',
    status: 'Planned',
    statusColor: 'bg-yellow-500',
    items: [
      'Autonomous Order Processing',
      'Predictive Driver ETA Engine',
      'AI-Powered Analytics Narratives',
    ],
  },
  {
    quarter: 'Q1 2026',
    status: 'Planned',
    statusColor: 'bg-gray-400',
    items: [
      'Predictive Maintenance Integration',
      'Demand Forecasting Module',
      'AI Compliance & Risk Monitor',
    ],
  },
  {
    quarter: 'Q2 2026',
    status: 'Planned',
    statusColor: 'bg-gray-400',
    items: [
      'Custom Model Fine-Tuning UI',
      'Multi-Modal AI (voice dispatch)',
      'AI Extensions Marketplace',
    ],
  },
];

// ─── Use Cases ────────────────────────────────────────────────────────────────
const USE_CASES = [
  {
    role: 'Operations Manager',
    pain: 'Spending hours manually re-routing drivers when traffic spikes or orders are cancelled.',
    solution:
      'AI automatically re-optimises all active routes in seconds and notifies affected drivers via the Navigator app.',
  },
  {
    role: 'Fleet Manager',
    pain: 'Vehicles breaking down unexpectedly, causing missed deliveries and emergency repair costs.',
    solution:
      'Predictive maintenance AI flags components approaching failure 2–3 weeks in advance, enabling planned workshop visits.',
  },
  {
    role: 'Dispatcher',
    pain: 'Processing 200+ incoming orders per day from email, WhatsApp, and API — manually copying data into the system.',
    solution:
      'Autonomous order processing AI reads every channel, extracts order data, and creates dispatch-ready jobs automatically.',
  },
  {
    role: 'Executive / CEO',
    pain: 'No clear visibility into why KPIs dropped last month — dashboards show what happened but not why.',
    solution:
      'AI analytics narratives explain performance changes in plain English and surface the root cause with supporting data.',
  },
];

export default function LogisticsAIPage() {
  return (
    <div className="flex flex-col">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'LogisBase Logistics AI',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web, Cloud, Self-Hosted',
            description:
              'Source-accessible AI layer for logistics operations. AI route optimisation, predictive dispatch, anomaly detection, and natural language fleet control.',
            url: 'https://logisbase.com/platform/ai',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            creator: {
              '@type': 'Organization',
              name: 'LogisBase',
              url: 'https://logisbase.com',
            },
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="section-padding relative overflow-hidden">
        {/* Background gradient */}
        <div className="from-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent to-purple-500/5" />
        <div className="bg-primary/10 pointer-events-none absolute top-20 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full blur-3xl" />

        <div className="relative container mx-auto max-w-5xl text-center">
          <div className="border-primary/30 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm">
            <Sparkles className="text-primary h-3.5 w-3.5" />
            <span className="text-primary font-medium">
              Logistics AI — Coming to LogisBase
            </span>
          </div>

          <h1 className="mb-6 text-5xl leading-tight font-bold tracking-tight text-balance md:text-7xl">
            The <span className="text-primary">AI Layer</span> for Logistics
            Operations
          </h1>

          <p className="text-muted-foreground mx-auto mb-4 max-w-3xl text-xl text-balance md:text-2xl">
            LogisBase is building AI that goes beyond insights to execution —
            enabling route optimization, automated dispatch, anomaly detection,
            and natural-language fleet control. All deployed on infrastructure
            you control.
          </p>

          <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-base">
            No black-box systems, no external data exposure, and no vendor
            dependency. Fully transparent, auditable, and model-agnostic so you
            retain complete control over your operational intelligence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="https://tally.so/r/68VqOO">
                Try LogisBase Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://github.com/logisbase/logisbase"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request source access <Star className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <p className="text-muted-foreground mt-4 text-xs">
            AI capabilities are on our immediate roadmap. Join the waitlist to
            get early access.
          </p>
        </div>
      </section>

      {/* ── The Problem with Logistics AI Today ── */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="text-muted-foreground mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase">
                <span className="bg-muted-foreground/40 h-px w-6" /> The Problem
              </div>
              <h2 className="mb-6 text-3xl font-bold text-balance md:text-4xl">
                Logistics AI is broken — and you&apos;re paying for it
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Most &quot;AI-powered&quot; logistics platforms operate as
                  closed systems. Recommendations are generated without
                  transparency, data is often routed through third-party AI
                  services, and models cannot be meaningfully customized. When
                  outputs fail, there is little visibility into why. understand
                  why.
                </p>
                <p>
                  his architecture also creates dependency. Once core decisions
                  rely on external AI systems, organizations inherit their
                  pricing, uptime constraints, and roadmap decisions.
                </p>
                <p>
                  LogisBase takes a different approach — embedding AI directly
                  into the logistics operating system as a transparent,
                  controllable layer. Intelligence is designed to operate within
                  your workflows, not as an external tool requiring
                  interpretation.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Black-box AI decisions', bad: true },
                { label: 'Data sent to third-party AI providers', bad: true },
                { label: 'AI insights in a separate dashboard', bad: true },
                { label: 'Vendor lock-in on AI models', bad: true },
                { label: 'No ability to customise or audit models', bad: true },
                { label: 'Per-seat pricing that penalises growth', bad: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-card flex items-center gap-3 rounded-lg border p-3"
                >
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-500/10">
                    <X className="h-3 w-3 text-red-500" />
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="text-muted-foreground mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase">
              <span className="bg-muted-foreground/40 h-px w-6" /> Architecture
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              AI that acts inside your operations
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              LogisBase AI is not a reporting layer. It is embedded into the
              platform — observing, reasoning, and acting directly within your
              dispatch, fleet, and order workflows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-primary/5 absolute -top-4 -left-2 text-6xl font-black select-none">
                  {step.step}
                </div>
                <div className="bg-card relative h-full rounded-xl border p-6">
                  <div className="bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                    <step.icon className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Capabilities Grid ── */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="text-muted-foreground mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase">
              <span className="bg-muted-foreground/40 h-px w-6" /> Capabilities
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Every dimension of logistics, made intelligent
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Eight AI capabilities designed around the real problems logistics
              operators face every day — from the first mile to the last.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {AI_CAPABILITIES.map((cap) => (
              <Card
                key={cap.title}
                className="group hover:border-primary/50 relative transition-colors"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors">
                      <cap.icon className="text-primary h-5 w-5" />
                    </div>
                    <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium">
                      {cap.tag}
                    </span>
                  </div>
                  <CardTitle className="text-base leading-snug">
                    {cap.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {cap.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases by Role ── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="text-muted-foreground mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase">
              <span className="bg-muted-foreground/40 h-px w-6" /> Use Cases
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              AI that solves real logistics problems
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Every AI capability maps to a specific pain point your team faces
              today.
            </p>
          </div>

          <div className="space-y-4">
            {USE_CASES.map((uc) => (
              <div
                key={uc.role}
                className="bg-card grid items-start gap-4 rounded-xl border p-6 md:grid-cols-3"
              >
                <div>
                  <div className="text-primary mb-1 text-xs font-medium tracking-widest uppercase">
                    Role
                  </div>
                  <div className="font-semibold">{uc.role}</div>
                </div>
                <div>
                  <div className="mb-1 text-xs font-medium tracking-widest text-red-500 uppercase">
                    Today&apos;s Problem
                  </div>
                  <div className="text-muted-foreground text-sm">{uc.pain}</div>
                </div>
                <div>
                  <div className="mb-1 text-xs font-medium tracking-widest text-green-500 uppercase">
                    With LogisBase AI
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {uc.solution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Source-accessible AI ── */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="text-muted-foreground mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase">
              <span className="bg-muted-foreground/40 h-px w-6" /> Why Source
              Access Matters
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Source-accessible AI is a strategic advantage
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Closed logistics AI systems introduce operational and strategic
              risk through opacity and dependency. Source-accessible AI provides
              transparency, extensibility, and long-term control — allowing
              organizations to audit, adapt, and build on top of the system.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {OPEN_SOURCE_ADVANTAGES.map((adv) => (
              <div
                key={adv.title}
                className="bg-card flex gap-4 rounded-xl border p-6"
              >
                <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                  <adv.icon className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">{adv.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="text-muted-foreground mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase">
              <span className="bg-muted-foreground/40 h-px w-6" /> Roadmap
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              AI is on our immediate roadmap
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              LogisBase AI is actively in development. Track progress publicly
              and participate in shaping upcoming capabilities through the
              community and development roadmap.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ROADMAP.map((phase) => (
              <div
                key={phase.quarter}
                className="bg-card rounded-xl border p-5"
              >
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${phase.statusColor}`}
                  />
                  <div>
                    <div className="text-xs font-semibold">{phase.quarter}</div>
                    <div className="text-muted-foreground text-xs">
                      {phase.status}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex items-start gap-2 text-sm"
                    >
                      <ChevronRight className="text-primary mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="https://github.com/logisbase/logisbase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline"
            >
              Follow the full roadmap on GitHub{' '}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Comparison vs Closed AI ── */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              LogisBase AI vs. Closed-Source Logistics AI
            </h2>
          </div>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/30 border-b">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="text-primary p-4 text-center font-semibold">
                    LogisBase AI
                  </th>
                  <th className="text-muted-foreground p-4 text-center font-semibold">
                    Closed-Source AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ['Auditable AI decisions', true, false],
                  ['Data stays on your infrastructure', true, false],
                  ['Bring your own AI model', true, false],
                  ['Embedded in operations workflow', true, false],
                  ['Source-accessible codebase', true, false],
                  ['No vendor lock-in', true, false],
                  ['Community-driven development', true, false],
                  ['Custom model fine-tuning', true, false],
                  ['Usage-based pricing', true, false],
                  ['Works with self-hosted deployment', true, false],
                ].map(([feature, fb, closed]) => (
                  <tr
                    key={String(feature)}
                    className="hover:bg-muted/10 transition-colors"
                  >
                    <td className="text-muted-foreground p-4">
                      {String(feature)}
                    </td>
                    <td className="p-4 text-center">
                      {fb ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                      ) : (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                          <X className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {closed ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                      ) : (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                          <X className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Early Access CTA ── */}
      <section className="section-padding relative overflow-hidden">
        <div className="from-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent to-purple-500/10" />
        <div className="relative container mx-auto max-w-3xl text-center">
          <div className="border-primary/30 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm">
            <Sparkles className="text-primary h-3.5 w-3.5" />
            <span className="text-primary font-medium">Get Early Access</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-balance md:text-5xl">
            Be among the first to run AI in logistics operations
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
            Join the LogisBase community to follow active AI development.
            Connect with our team to explore your use case — we are shaping the
            roadmap alongside early partners and operators.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="https://tally.so/r/68VqOO">
                Start Free — Try LogisBase Now{' '}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://cal.com/logisbase/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book an AI Strategy Call
              </Link>
            </Button>
          </div>
          <div className="text-muted-foreground mt-8 flex items-center justify-center gap-6 text-sm">
            <Link
              href="https://github.com/logisbase/logisbase"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <Star className="h-4 w-4" /> Request source access
            </Link>
            <Link
              href="https://discord.gg/7xPbDryKDH"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="h-4 w-4" /> Join Discord
            </Link>
            <Link
              href="/changelog"
              className="hover:text-foreground flex items-center gap-1.5 transition-colors"
            >
              <Clock className="h-4 w-4" /> View Changelog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
