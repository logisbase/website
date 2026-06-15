import {
  ArrowRight,
  Building2,
  Code2,
  Compass,
  Globe,
  LineChart,
  Lock,
  Mail,
  Network,
  ShieldCheck,
  Sprout,
  Target,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { getGitHubStars } from '@/lib/github-stars';

export const metadata: Metadata = {
  title: 'Investors | LogisBase',
  description:
    'LogisBase is a bootstrapped, profitable source-available logistics platform powering 8,000+ active instances and 10M+ orders globally. Learn about the opportunity, our model, and what we look for in long-term partners.',
  keywords: [
    'logisbase investors',
    'source-available logistics investment',
    'logistics infrastructure investment',
    'bootstrapped logistics company',
    'logisbase strategic partner',
  ],
  openGraph: {
    title: 'Investors | LogisBase',
    description:
      'Bootstrapped source-available logistics platform with 8,000+ active instances. Learn about the opportunity and what we look for in long-term partners.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Investors | LogisBase`,
    description: `Bootstrapped source-available logistics platform with 8,000+ active instances. Learn about the opportunity and what we look for in long-term partners.`,
  },
  alternates: { canonical: 'https://logisbase.com/company/investors' },
};

function buildNumbers(stars: string) {
  return [
    {
      value: '8,000+',
      label: 'Active instances',
      sub: 'Datadog-verified deployments',
    },
    {
      value: '10M+',
      label: 'Orders processed',
      sub: 'Across the platform globally',
    },
    { value: stars, label: 'Organizations', sub: 'Source-available community' },
    { value: '40+', label: 'Countries', sub: 'Production deployments' },
  ];
}

const principles = [
  {
    icon: Sprout,
    title: 'Bootstrapped to date',
    description:
      'LogisBase has been built without venture funding. This has allowed us to validate the platform directly with operators, make long-term product decisions without external pressure, and maintain a focus on sustainable, revenue-driven growth.',
  },
  {
    icon: Lock,
    title: 'Open foundation, by design',
    description:
      'The core platform is built on a source-accessible foundation and will remain so. This transparency is central to how operators trust the system and how developers extend it. It is a structural commitment, not a temporary positioning.',
  },
  {
    icon: Compass,
    title: 'Operator-first product philosophy',
    description:
      'Every product decision starts with real operational environments — fleets, dispatch teams, warehouses, and delivery networks. We design for execution and reliability in live operations, not for abstract procurement requirements or feature checklists.',
  },
];

const opportunity = [
  {
    icon: Globe,
    title: 'A market still running on legacy systems',
    description:
      'Across logistics, fleet management, and last-mile delivery, many operators still rely on rigid, closed platforms that are difficult to integrate, slow to adapt, and costly to customise. The shift toward modern, API-first, modular infrastructure is still early, creating significant room for new platforms to define the category.',
  },
  {
    icon: Code2,
    title: 'Transparency as a new distribution model',
    description:
      'Across infrastructure software, a clear pattern has emerged: operators increasingly want control over their systems, while developers prefer platforms they can inspect, extend, and integrate deeply into. This shift is reshaping how next-generation operational software is adopted and distributed.',
  },
  {
    icon: Network,
    title: 'A platform, not a single product',
    description:
      'LogisBase is built as a modular logistics platform rather than a single-use application. Core components such as FleetOps, Storefront, Pallet, Ledger, IAM, and the Extensions Marketplace form a layered system where each module serves a distinct operational domain and creates its own expansion and monetisation opportunities.',
  },
];

const businessModel = [
  {
    title: 'Self-hosted core platform',
    description:
      'A source-accessible deployment model that enables operators to run LogisBase on their own infrastructure with full control over configuration and scale.',
  },
  {
    title: 'LogisBase Cloud',
    description:
      'A fully managed deployment option with infrastructure operations handled end-to-end, including upgrades, backups, monitoring, and system reliability. Pricing is based on deployment, not per-user or per-driver.',
  },
  {
    title: 'Enterprise services',
    description:
      'Enterprise-grade offerings including SLAs, dedicated environments, custom integrations, on-premise deployment support, and direct engineering assistance for production-critical operations.',
  },
  {
    title: 'Extensions Marketplace',
    description:
      'A commercial ecosystem for first-party and third-party extensions, with revenue-sharing mechanisms that allow developers and partners to build and monetize logistics capabilities on top of the platform.',
  },
];

const fitWeAreLookingFor = [
  {
    icon: Target,
    title: 'Strategic alignment',
    description:
      'Partners who understand infrastructure software, long-term product cycles, and source-accessible models — and who are aligned with building durable systems rather than short-term exit timelines.',
  },
  {
    icon: Building2,
    title: 'Industry depth',
    description:
      'Operators, investors, or strategic partners with real experience in logistics, supply chain, fleet operations, or adjacent commerce systems, with strong understanding of how these environments function in practice.',
  },
  {
    icon: Users,
    title: 'Distribution leverage',
    description:
      'Access to meaningful channels across priority sectors or regions — including last-mile delivery, freight and haulage, ports, healthcare logistics, government operations, and high-growth emerging markets.',
  },
];

const wonts = [
  'Close the core platform or restrict access to its source foundation',
  'Shift the core offering to per-seat or per-driver pricing models',
  'Compromise developer experience for short-term commercial gains',
  'Shape the roadmap primarily around exit-driven timelines or acquisition cycles',
];

export default async function InvestorsPage() {
  const stars = await getGitHubStars();
  const numbers = buildNumbers(stars);
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl">
          <div className="text-muted-foreground mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
            For Investors &amp; Strategic Partners
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            We&apos;re building the{' '}
            <span className="text-primary">next generation logistics</span>{' '}
            infrastructure platform.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
            LogisBase is a self-sustained, revenue-generating platform
            supporting 8,000+ deployments and 10M+ orders across 40+ countries.
            We are not actively raising capital, but we remain open to strategic
            conversations with long-term partners who align with our vision.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://cal.com/logisbase/demo">
                Open a conversation <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/company/about">Read our story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-muted/20 border-y py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {numbers.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-primary text-3xl font-bold md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium">{stat.label}</div>
                <div className="text-muted-foreground text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-6 text-center text-xs">
            Active-instance counts are independently measured via Datadog
            telemetry across self-hosted and cloud deployments.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How we operate
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              The principles that guide how LogisBase is built today — and how
              we evaluate any capital or partnership discussions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="bg-card rounded-xl border p-6">
                <div className="bg-background mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <p.icon className="text-primary size-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity */}
      <section className="bg-muted/10 border-t py-16 md:py-24">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              The opportunity
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              Logistics is one of the largest sectors in the global economy, yet
              the software infrastructure behind it remains largely closed,
              expensive, and designed around procurement rather than operational
              reality. The migration to modern, open, API-first platforms is
              just beginning.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {opportunity.map((item) => (
              <div key={item.title} className="bg-card rounded-xl border p-6">
                <div className="bg-background mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <item.icon className="text-primary size-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business model */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How LogisBase makes money
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              A multi-surface commercial model built around deployment
              flexibility, enterprise needs, and ecosystem expansion.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {businessModel.map((item, i) => (
              <div key={item.title} className="bg-card rounded-xl border p-6">
                <div className="text-muted-foreground mb-3 inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 text-xs font-medium">
                  <span className="text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <LineChart className="size-3" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 text-sm">
            Detailed unit economics and revenue-mix breakdowns are available
            under NDA on request.
          </p>
        </div>
      </section>

      {/* Fit */}
      <section className="bg-muted/10 border-t py-16 md:py-24">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What we look for
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              We are selective about capital and partnerships. The right
              relationship should accelerate LogisBase without compromising the
              principles that make the platform valuable. place.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {fitWeAreLookingFor.map((item) => (
              <div key={item.title} className="bg-card rounded-xl border p-6">
                <div className="bg-background mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <item.icon className="text-primary size-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Won'ts */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                What we won&apos;t do
              </h2>
              <p className="text-muted-foreground mt-3 text-lg">
                If a conversation starts here, we’re likely not the right fit.
              </p>
            </div>
            <ul className="space-y-3">
              {wonts.map((w) => (
                <li
                  key={w}
                  className="bg-card flex items-start gap-3 rounded-xl border p-4"
                >
                  <ShieldCheck className="text-primary mt-0.5 size-5 shrink-0" />
                  <span className="text-sm leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/20 border-t py-16 md:py-24">
        <div className="container">
          <div className="bg-card mx-auto max-w-3xl rounded-2xl border p-10 text-center md:p-14">
            <Mail className="text-primary mx-auto mb-4 size-8" />
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
              Open a conversation
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              We engage directly — no formal pitch process or structured funnel.
              Share a bit about your firm, your focus areas, and what you’re
              exploring, and we’ll take it from there.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="https://cal.com/logisbase/demo">
                  Book an intro call <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:hello@logisbase.com?subject=Investors%20%E2%80%94%20Intro">
                  hello@logisbase.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
