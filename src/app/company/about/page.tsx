import {
  ArrowRight,
  Code2,
  Globe,
  Heart,
  Linkedin,
  MapPin,
  Puzzle,
  Shield,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About LogisBase | Source-Available Logistics Platform — Singapore',
  description:
    'LogisBase is an source-available logistics and fleet management platform founded in 2018 in Singapore by Shiv Thakker and Ronald Richardson. Learn our story, mission, and the team behind the platform.',
  keywords: [
    'about logisbase',
    'logisbase team',
    'source-available logistics company',
    'logisbase singapore',
    'logistics startup singapore',
    'shiv thakker',
    'ronald richardson',
  ],
  alternates: { canonical: 'https://logisbase.com/company/about' },
  openGraph: {
    title: 'About Us | LogisBase',
    description:
      'The source-available logistics platform on a mission to democratize logistics technology.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About Us | LogisBase`,
    description: `The source-available logistics platform on a mission to democratize logistics technology.`,
  },
};

const values = [
  {
    icon: Code2,
    title: 'Transparency and control',
    description:
      'Businesses should understand and control the infrastructure they depend on. We believe operational software should be configurable, inspectable, and adaptable — not hidden behind rigid systems or vendor limitations.',
  },
  {
    icon: Globe,
    title: 'Logistics technology should be accessible',
    description:
      'Powerful operations infrastructure should not be reserved for companies with massive IT budgets. LogisBase is designed to help growing operators and large enterprises run with the same level of operational discipline and capability.',
  },
  {
    icon: Heart,
    title: 'Customer-driven evolution',
    description:
      'The strongest platforms are shaped by real operators solving real problems. Customer feedback, implementation experience, and operational insight directly influence how LogisBase evolves.',
  },
  {
    icon: Shield,
    title: 'Ownership of your operations',
    description:
      'Your infrastructure, data, and workflows should remain under your control. Whether deployed in your environment or managed by us, LogisBase is built to support long-term operational independence.',
  },
  {
    icon: Zap,
    title: 'Practical over theoretical',
    description:
      'We prioritize capabilities that create measurable operational outcomes. We move quickly, iterate from production feedback, and focus on solving problems that matter in day-to-day logistics execution.',
  },
  {
    icon: Puzzle,
    title: 'Extensible by design',
    description:
      'Every operation runs differently. LogisBase is built as a flexible platform with APIs, extensions, and modular architecture — allowing teams to adapt the system to their workflows instead of adapting their business to the software.',
  },
];

const milestones = [
  {
    year: '2022',
    title: 'Founded',
    description:
      'LogisBase was founded with a clear belief: logistics infrastructure should be flexible, extensible, and accessible — not trapped inside rigid systems, expensive implementation cycles, and software that businesses cannot adapt as they grow.',
  },
  {
    year: '2023',
    title: 'Source-accessible',
    description:
      'LogisBase adopted a source-accessible approach, giving operators and technical teams greater visibility, deployment flexibility, and control over the platform while maintaining a sustainable commercial model.',
  },
  {
    year: '2024',
    title: 'Extensions Marketplace',
    description:
      'The LogisBase Extensions Marketplace launched, opening the platform for integrations, custom workflows, operational modules, and ecosystem development — allowing businesses to tailor LogisBase to their operations.',
  },
  {
    year: '2025',
    title: 'Global Scale',
    description:
      'LogisBase expanded beyond its initial markets and evolved into a broader logistics operating platform. New modules, implementation capabilities, and deployment models supported customers operating across regions and industries.',
  },
  {
    year: '2026 & Beyond',
    title: 'Enterprise Growth',
    description:
      'Enterprise services, implementation support, partner programs, and advanced deployment options continue to expand — while LogisBase remains focused on helping businesses build and operate logistics infrastructure with greater ownership, flexibility, and control.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl">
          <div className="text-muted-foreground mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
            About LogisBase
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            We built the logistics platform{' '}
            <span className="text-primary">we wanted to run ourselves.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
            LogisBase was created from a simple observation: modern logistics
            software had become increasingly expensive, rigid, and disconnected
            from how operators actually work. Businesses were being pushed into
            closed platforms, per-seat pricing, long implementation cycles, and
            systems that became difficult to adapt as operations evolved.
          </p>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed md:text-xl">
            For teams building logistics businesses, customization often meant
            costly service engagements. For operators, growth meant adding more
            vendors, more integrations, and more operational complexity. We
            believed there should be a better model — a logistics operating
            platform designed for ownership, flexibility, and scale.
          </p>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed md:text-xl">
            LogisBase was built to give operators and technical teams a unified
            platform they can deploy, extend, and operate on their own terms.
            Fleet operations, warehousing, commerce, delivery, finance, and
            automation — connected through a single operational layer designed
            to adapt to the way businesses actually run. LogisBase is building
            infrastructure for the next generation of logistics operations
            across emerging and global markets.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand-blue-600 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Our mission
            </h2>
            <blockquote className="text-xl leading-relaxed text-white md:text-2xl">
              &ldquo;To make world-class logistics infrastructure accessible to
              every business by building flexible, extensible, and
              operator-first technology — giving teams the tools to run, adapt,
              and scale their operations with greater control, efficiency, and
              independence.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* How we operate */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              How we operate
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              LogisBase is founder-led and built with long-term ownership in
              mind. The platform was designed from the ground up by the founding
              team, who remain deeply involved across product, engineering,
              customer relationships, and strategic partnerships.
            </p>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              We operate with a focused approach — prioritizing customer
              outcomes, platform quality, and sustainable execution over
              short-term growth cycles. Our decisions are guided by operator
              needs and real-world logistics complexity, not quarterly targets.
            </p>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Behind the platform is a dedicated team across engineering,
              customer operations, and infrastructure, delivering the
              reliability, implementation support, and operational depth
              enterprise customers expect.
            </p>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              What this means in practice:
            </p>
            <ul className="text-muted-foreground mt-4 space-y-3 text-lg leading-relaxed">
              <li className="flex gap-3">
                <span className="bg-primary mt-2.5 size-1.5 shrink-0 rounded-full" />
                <span>
                  <strong className="text-foreground font-semibold">
                    Close access to decision makers:
                  </strong>{' '}
                  Product feedback, implementation conversations, and strategic
                  partnerships stay close to the team shaping the platform.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-primary mt-2.5 size-1.5 shrink-0 rounded-full" />
                <span>
                  <strong className="text-foreground font-semibold">
                    A team built for execution:
                  </strong>{' '}
                  Engineering, customer operations, and infrastructure teams
                  work continuously to deliver platform improvements, deployment
                  support, and enterprise-grade reliability.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-primary mt-2.5 size-1.5 shrink-0 rounded-full" />
                <span>
                  <strong className="text-foreground font-semibold">
                    A roadmap driven by operational reality:
                  </strong>{' '}
                  We prioritize capabilities that improve how logistics
                  businesses actually operate — focusing on practical outcomes
                  over feature volume.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="bg-primary mt-2.5 size-1.5 shrink-0 rounded-full" />
                <span>
                  <strong className="text-foreground font-semibold">
                    Deployment flexibility by design:
                  </strong>{' '}
                  Run LogisBase in the environment that fits your business —
                  self-hosted, managed, or hybrid — with the flexibility to
                  evolve as your operation grows.
                </span>
              </li>
            </ul>
            <div className="bg-muted/20 mt-8 rounded-xl border p-6">
              <p className="text-muted-foreground text-base leading-relaxed">
                If you&apos;re interested in investing in our team, our mission,
                or LogisBase as a platform, we&apos;re open to investment
                opportunities and strategic partnerships.{' '}
                <Link
                  href="/company/investors"
                  className="text-primary underline underline-offset-4"
                >
                  Read our investor page
                </Link>{' '}
                or{' '}
                <Link
                  href="/partners"
                  className="text-primary underline underline-offset-4"
                >
                  explore the partner program
                </Link>{' '}
                to start the conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What we believe
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
              These principles guide how we build, how we make decisions, and
              how we support the businesses running on LogisBase.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl border p-6">
                <div className="bg-background mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <value.icon className="text-primary size-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Our journey
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
              From a founding conviction in 2018 to a global logistics platform
              used in 40+ countries.
            </p>
          </div>
          <div className="before:bg-border relative space-y-8 pl-8 before:absolute before:top-2 before:left-3 before:h-full before:w-px">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative">
                <div className="bg-background absolute -left-8 flex size-6 items-center justify-center rounded-full border">
                  <div className="bg-primary size-2 rounded-full" />
                </div>
                <div className="bg-card rounded-xl border p-6">
                  <div className="text-primary mb-1 text-sm font-semibold">
                    {milestone.year}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              The founders
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
              LogisBase was founded by two operators with complementary
              backgrounds across technology, financial infrastructure, and
              logistics operations. Together, they bring a combination of
              enterprise systems thinking, operational discipline, and execution
              experience shaped by emerging markets. Their shared belief was
              simple: logistics software should give businesses more ownership,
              more flexibility, and more control over how operations are run.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Shiv Thakker */}
            <div className="bg-card rounded-xl border p-8">
              <div className="mb-5 flex items-start gap-5">
                <div className="bg-muted border-primary/20 size-20 flex-shrink-0 overflow-hidden rounded-full border-2">
                  <Image
                    src="/images/team/shiv-thakker.jpg"
                    alt="Shiv Thakker — Co-founder & CEO of LogisBase"
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Chike Ngwu</h3>
                  <p className="text-primary text-sm font-medium">
                    Co-founder &amp; CEO
                  </p>
                  <div className="text-muted-foreground mt-1 flex items-center gap-1 text-xs">
                    <MapPin className="size-3" />
                    Lagos, Nigeria
                  </div>
                  <Link
                    href="https://www.linkedin.com/in/shivthakker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary mt-2 inline-flex items-center gap-1.5 text-xs transition-colors"
                  >
                    <Linkedin className="size-3.5" />
                    LinkedIn
                  </Link>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Chike Ngwu is a technology entrepreneur with experience building
                products across payment infrastructure, financial operations,
                and business systems. Prior to LogisBase, he worked across
                payment orchestration and accounting technology, developing a
                practical understanding of how businesses manage transactions,
                operations, and growth at scale.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                That experience shaped a core belief behind LogisBase:
                operational software should adapt to businesses — not force
                businesses to adapt to software. As CEO, Chike leads company
                strategy, product direction, customer relationships, and the
                long-term vision for building modern logistics infrastructure
                from Africa for global markets.
              </p>
            </div>
            {/* Ronald Richardson */}
            <div className="bg-card rounded-xl border p-8">
              <div className="mb-5 flex items-start gap-5">
                <div className="bg-muted border-primary/20 size-20 flex-shrink-0 overflow-hidden rounded-full border-2">
                  <Image
                    src="/images/team/ronald-richardson.jpg"
                    alt="Ronald Richardson — Co-founder & CTO of LogisBase"
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Tek Orakle</h3>
                  <p className="text-primary text-sm font-medium">
                    Co-founder &amp; CTO
                  </p>
                  <div className="text-muted-foreground mt-1 flex items-center gap-1 text-xs">
                    <MapPin className="size-3" />
                    Lagos, Nigeria
                  </div>
                  <Link
                    href="https://www.linkedin.com/in/ronald-a-richardson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary mt-2 inline-flex items-center gap-1.5 text-xs transition-colors"
                  >
                    <Linkedin className="size-3.5" />
                    LinkedIn
                  </Link>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Tek Orakle combines technical leadership with formal training in
                logistics and supply chain operations. He studied at the
                Nigerian Defence Academy (NDA), earning a B.Sc. in Logistics and
                Supply Chain Management under the Faculty of Management
                Sciences. His background developed a systems-oriented approach
                to operations — emphasizing planning, coordination, execution,
                and reliability in complex environments.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                As Co-Founder and CTO, Tek leads platform architecture,
                engineering direction, and the technical foundation behind
                LogisBase — building infrastructure designed to support modern
                logistics operations with flexibility, extensibility, and
                long-term operational control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Singapore HQ */}
      <section className="bg-muted/20 border-t py-12 md:py-16">
        <div className="container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row">
            <div className="bg-card flex min-w-[180px] flex-shrink-0 flex-col items-center gap-3 rounded-xl border p-6">
              <div className="text-4xl">🇳🇬</div>
              <div className="text-center">
                <div className="font-semibold">Headquartered in</div>
                <div className="text-primary text-lg font-bold">
                  Lagos, Nigeria
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-3 text-2xl font-bold">
                Built in Lagos, designed for global logistics
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                LogisBase is built in Lagos, Nigeria — one of Africa’s largest
                commercial and logistics ecosystems. Operating in a market
                defined by scale, infrastructure complexity, and rapidly
                evolving supply chains has shaped how we think about logistics
                software: flexible, resilient, and built for real operations.
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Our location influences more than where we work — it shapes how
                we build. We design for environments where execution matters,
                systems must adapt, and operators need technology that supports
                growth rather than constraining it. From local delivery networks
                to multi-site logistics operations, LogisBase is built to help
                businesses deploy, operate, and scale with greater control —
                wherever they run.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="bg-card relative overflow-hidden rounded-2xl border px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="bg-primary/5 absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl" />
            </div>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Join the movement
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Whether you’re a logistics operator looking for a more flexible
                platform, a developer building on logistics infrastructure, or a
                business exploring partnership opportunities — we’d be glad to
                connect and explore how LogisBase fits your needs.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="https://console.logisbase.com">
                    Start free trial <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://cal.com/logisbase/demo">Talk to us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
