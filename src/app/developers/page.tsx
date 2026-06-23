import {
  ArrowRight,
  BookOpen,
  Boxes,
  Code2,
  FileCode,
  Github,
  KeyRound,
  Plug,
  Puzzle,
  Radio,
  Terminal,
  Webhook,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { FAQSchema, SoftwareApplicationSchema } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const CANONICAL = 'https://logisbase.com/developers';

export const metadata: Metadata = {
  alternates: { canonical: CANONICAL },
  title: 'Developer Platform — Logistics API, SDKs, Webhooks & Extensions',
  description:
    'Build on the source-accessible logistics platform. REST API, real-time WebSocket channels, JavaScript and PHP SDKs, webhooks, and a full extension framework — all on the same codebase LogisBase itself runs on.',
  keywords: [
    'logistics API',
    'fleet management API',
    'delivery management API',
    'source-accessible logistics developer platform',
    'fleet management SDK',
    'logistics platform webhooks',
    'fleet management developer console',
    'build logistics application',
    'source-accessible logistics API',
    'TMS API',
    'logistics platform extensions',
    'logisbase developer',
    'JavaScript logistics SDK',
    'PHP logistics SDK',
  ],
  openGraph: {
    title:
      'Developer Platform — Logistics API, SDKs, Webhooks & Extensions | LogisBase',
    description:
      'Build on the source-accessible logistics platform. REST API, real-time WebSockets, multi-language SDKs, webhooks, and a full extension framework.',
    type: 'website',
    url: CANONICAL,
    images: [
      {
        url: '/og?title=The%20developer-first%20logistics%20platform&eyebrow=Developers&subtitle=REST%20API%2C%20WebSockets%2C%20SDKs%2C%20webhooks%2C%20and%20a%20full%20extension%20framework%20%E2%80%94%20open%20source.',
        width: 1200,
        height: 630,
        alt: 'LogisBase Developer Platform — API, SDKs, webhooks, and extensions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Platform | LogisBase',
    description:
      'REST API, real-time WebSockets, multi-language SDKs, webhooks, and a full extension framework — all source-accessible.',
    images: [
      '/og?title=The%20developer-first%20logistics%20platform&eyebrow=Developers&subtitle=REST%20API%2C%20WebSockets%2C%20SDKs%2C%20webhooks%2C%20and%20a%20full%20extension%20framework%20%E2%80%94%20open%20source.',
    ],
  },
};

const BUILDING_BLOCKS = [
  {
    icon: Plug,
    title: 'REST API',
    description:
      'A complete REST API for every resource in the platform. Orders, drivers, places, contacts, vehicles, fleets, routes, tracking — full CRUD with consistent JSON:API responses.',
    href: '/developers/api',
    cta: 'API & integrations',
  },
  {
    icon: Code2,
    title: 'Official SDKs',
    description:
      'Idiomatic clients for JavaScript and PHP that wrap the entire REST API. Type-safe, auto-paginated, and ready for both server-side and client-side use.',
    href: '/developers/sdks',
    cta: 'SDKs & libraries',
  },
  {
    icon: Webhook,
    title: 'Webhooks',
    description:
      'Subscribe to every meaningful event in the platform — order created, dispatch assigned, status changed, driver location, payment captured. HMAC-signed delivery with automatic retries.',
    href: '/developers/webhooks',
    cta: 'Webhooks & events',
  },
  {
    icon: Radio,
    title: 'Real-time WebSockets',
    description:
      'SocketCluster-powered channels stream live driver locations, order updates, and dispatch events to your apps as they happen — no polling.',
    href: '/developers/api',
    cta: 'WebSocket channels',
  },
  {
    icon: Puzzle,
    title: 'Extensions framework',
    description:
      'The same framework FleetOps, Storefront, Pallet, and Ledger are built on. Ship full-stack extensions (Ember frontend + Laravel backend) and publish them to the marketplace.',
    href: '/developers/extensions',
    cta: 'Build an extension',
  },
  {
    icon: KeyRound,
    title: 'Developer Console',
    description:
      'Manage API keys, inspect every request log, configure webhook endpoints, and monitor live socket channels — from a console built into the platform.',
    href: '/platform/developer-console',
    cta: 'Open the console',
  },
];

const DOCS_LINKS = [
  {
    icon: FileCode,
    title: 'API Reference',
    description: 'Endpoint-by-endpoint reference for the entire REST API.',
    href: '/docs/api',
  },
  {
    icon: Terminal,
    title: 'CLI Reference',
    description:
      'Scaffold extensions, manage installations, and publish to the registry.',
    href: '/docs/cli',
  },
  {
    icon: Boxes,
    title: 'Extension Development',
    description:
      'Build full-stack extensions — engines, packages, schemas, and publishing.',
    href: '/docs/extension-development',
  },
  {
    icon: BookOpen,
    title: 'Platform Documentation',
    description:
      'Guides, tutorials, and references for every module of LogisBase.',
    href: '/docs',
  },
];

const DEVELOPER_FAQS = [
  {
    question: 'Is the LogisBase API free to use?',
    answer:
      'Yes — the LogisBase REST API is available on every plan, including the free self-hosted version. Cloud customers operate under the resource-unit allocation of their plan; self-hosted customers have no API limits beyond their own infrastructure capacity.',
  },
  {
    question: 'What authentication does the API use?',
    answer:
      'Bearer token authentication with per-key scopes. Generate API keys in the Developer Console, attach granular permissions, and rotate them at any time. Storefront customer-facing endpoints use a separate public-key flow.',
  },
  {
    question: 'Which languages are supported by official SDKs?',
    answer:
      'JavaScript / TypeScript (Node and browser) and PHP have official SDKs. Storefront also ships with a dedicated JavaScript SDK. Because the underlying API is JSON-based REST, any language with an HTTP client can integrate cleanly.',
  },
  {
    question: 'How do extensions work?',
    answer:
      'Extensions are full-stack modules — an Ember Engine frontend paired with a Laravel package backend. They install with one command via the LogisBase CLI, contribute new screens and APIs to the console, and can be published to the public registry for distribution or sale.',
  },
  {
    question: 'Can I self-host the API?',
    answer:
      'Yes. LogisBase is source-accessible. Run the API server on your own infrastructure with full control over data residency, scaling, and customization. The same SDKs, webhooks, and extension framework work against your self-hosted instance.',
  },
  {
    question: 'Is there a sandbox or test environment?',
    answer:
      'Yes — the Cloud free trial includes 50 resource units against a live test environment. For self-hosted, the development setup runs locally via Docker Compose or the CLI, with seed data for immediate experimentation.',
  },
  {
    question: 'How are webhook deliveries secured?',
    answer:
      'Every webhook payload is signed with an HMAC-SHA256 signature using a per-endpoint secret. The signature is included in the request headers; verify it on your end to confirm the request originated from LogisBase.',
  },
  {
    question: 'Where is the source code?',
    answer:
      'The full LogisBase platform lives at github.com/logisbase/logisbase. All modules, SDKs, mobile apps, and the CLI are in public repositories under the @logisbase GitHub organization.',
  },
];

const STATS = [
  { value: 'REST', label: 'Full JSON:API' },
  { value: 'WS', label: 'SocketCluster channels' },
  { value: '50+', label: 'API endpoints' },
  { value: 'Source-accessible', label: 'Self-Hosting' },
];

export default function DevelopersPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="LogisBase Developer Platform"
        url={CANONICAL}
        description="Source-accessible logistics developer platform with a REST API, WebSocket channels, official SDKs, webhooks, and an extension framework."
        applicationCategory="DeveloperApplication"
      />
      <FAQSchema faqs={DEVELOPER_FAQS} />

      <div className="flex flex-col">
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="section-padding relative">
          <div className="relative container">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
              <div className="flex items-center rounded-full border p-1 text-xs">
                <span className="bg-muted rounded-full px-3 py-1">
                  Developers
                </span>
                <span className="px-3">
                  Build on the open logistics platform
                </span>
              </div>

              <h1 className="text-4xxl leading-none tracking-tight text-balance">
                The developer-first{' '}
                <span className="text-gradient">logistics platform</span>
              </h1>

              <p className="text-foreground/90 dark:text-foreground/95 max-w-3xl leading-snug md:text-lg">
                Every part of LogisBase is built on the same API, SDKs, and
                extension framework we ship to you. Build custom dispatch flows,
                integrate with your ERP, embed live tracking in your storefront,
                or ship a full vertical extension to the marketplace — all on
                infrastructure you can self-host.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/docs/api">View API reference</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link
                    href="https://tally.so/r/obgQQx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Star on GitHub
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <Link href="/platform/developer-console">
                    Open Developer Console
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl border shadow-2xl">
                <Image
                  src="/images/screenshots/developers/developers-api-keys-management.webp"
                  alt="LogisBase Developer Console — API key management, request logs, and webhook configuration"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stat strip ─────────────────────────────────────────────────── */}
        <section className="bg-muted/10 border-y">
          <div
            className="bg-border container overflow-hidden rounded-xl"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
            }}
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-background py-8 text-center">
                <p className="text-gradient text-3xl font-bold">{value}</p>
                <p className="text-muted-foreground mt-1 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Building blocks ────────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container">
            <div className="mb-12 max-w-3xl">
              <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
                <Zap className="text-primary mr-2 h-3 w-3" />
                What you can build with
              </div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance">
                Six building blocks. One open platform.
              </h2>
              <p className="text-muted-foreground leading-relaxed md:text-lg">
                Pick what you need. Use the REST API for clean integrations.
                Drop in an SDK for first-class language ergonomics. Subscribe to
                webhooks for event-driven workflows. Open a real-time channel
                for live tracking. Or build an entire vertical extension that
                ships through the marketplace.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {BUILDING_BLOCKS.map((block) => (
                <Card
                  key={block.title}
                  className="group hover:border-primary/40 flex h-full flex-col transition-colors"
                >
                  <CardHeader>
                    <div className="bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                      <block.icon className="text-primary h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{block.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {block.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <Link
                      href={block.href}
                      className="text-primary inline-flex items-center text-sm font-medium transition-opacity hover:opacity-80"
                    >
                      {block.cta}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Documentation ──────────────────────────────────────────────── */}
        <section className="section-padding bg-muted/20">
          <div className="container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
                <BookOpen className="text-primary mr-2 h-3 w-3" />
                Documentation
              </div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance">
                Reference everything. Skim nothing.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Endpoint-level API reference, CLI manuals, full extension
                development guides, and a Postman collection you can fork in one
                click. All open, all maintained.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {DOCS_LINKS.map((doc) => (
                <Link
                  key={doc.title}
                  href={doc.href}
                  className="group bg-card hover:border-primary/40 hover:bg-muted/30 flex flex-col gap-3 rounded-xl border p-6 transition-colors"
                >
                  <doc.icon className="text-primary h-6 w-6" />
                  <h3 className="font-semibold tracking-tight">{doc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {doc.description}
                  </p>
                  <span className="text-primary mt-auto inline-flex items-center text-xs font-medium">
                    Read docs
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Source-accessible ────────────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-6">
                <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                  <Github className="text-primary mr-2 h-3 w-3" />
                  Source-accessible
                </div>
                <h2 className="text-4xl leading-tight font-bold tracking-tight">
                  Built for enterprise. Customizable. Yours.
                </h2>
                <p className="text-muted-foreground leading-relaxed md:text-lg">
                  Every line of LogisBase — the API, the console, the driver
                  app, the SDKs, the CLI — lives on GitHub under
                  Source-accessible. Self-host it, fork it, audit it, contribute
                  to it. No black boxes, no vendor lock-in.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span>
                      <strong>logisbase/logisbase</strong> — the monorepo with
                      every module.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span>
                      <strong>logisbase/logisbase-js</strong>,{' '}
                      <strong>logisbase/logisbase-php</strong> — official SDKs.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span>
                      <strong>logisbase/storefront-app</strong>,{' '}
                      <strong>logisbase/navigator-app</strong> — React Native
                      apps you can white-label and ship.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span>
                      <strong>logisbase/cli</strong> — extension scaffolding and
                      registry tooling.
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link
                      href="https://tally.so/r/obgQQx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Browse the source
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/docs/contributing">Contributing guide</Link>
                  </Button>
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-xl border shadow-2xl">
                <Image
                  src="/images/screenshots/developers/developers-webhooks-management.webp"
                  alt="Webhook configuration in the LogisBase Developer Console"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        <section className="section-padding bg-muted/20">
          <div className="container mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-3xl font-bold">Developer FAQ</h2>
              <p className="text-muted-foreground">
                The questions we hear most from teams evaluating the platform.
              </p>
            </div>

            <div className="space-y-4">
              {DEVELOPER_FAQS.map((faq, i) => (
                <article key={i} className="bg-card rounded-lg border p-6">
                  <h3 className="mb-2 font-semibold tracking-tight">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ──────────────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-card relative overflow-hidden rounded-2xl border p-12 text-center">
              <div className="from-primary/5 to-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />
              <div className="relative">
                <h2 className="mb-4 text-4xl font-bold text-balance">
                  Start building in under five minutes.
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Generate an API key, send your first request, and ship a real
                  integration before lunch. Or fork the repo and run the whole
                  stack on your laptop.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button size="lg" asChild>
                    <Link href="/docs/api">Read the API docs</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/platform/developer-console">
                      Open the console
                    </Link>
                  </Button>
                  <Button size="lg" variant="ghost" asChild>
                    <Link
                      href="https://tally.so/r/obgQQx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Star on GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
