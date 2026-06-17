import {
  AlertCircle,
  ArrowRight,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  ExternalLink,
  GitBranch,
  Globe,
  HardDrive,
  Headphones,
  MessageSquare,
  Palette,
  RefreshCw,
  Server,
  Settings,
  ShieldCheck,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

// Canonical T&C — Google Doc maintained by ops. Update here if the URL changes.
const TERMS_DOC =
  'https://docs.google.com/document/d/1ECrnJkjJ1k1Z7fWbx3JtnN0MTfjghGDxVMtj3vPWMv8/edit?usp=sharing';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Managed Installation Service | LogisBase',
  description:
    'Get LogisBase fully deployed on your own infrastructure in 7 days. Our team handles everything — server deployment, CI/CD, custom branding, DNS, and handover. $2,500 one-time.',
  keywords: [
    'logisbase installation service',
    'logisbase deployment',
    'managed logistics platform setup',
    'self-hosted logisbase',
    'logisbase implementation',
  ],
  alternates: { canonical: 'https://logisbase.com/services/installation' },
  openGraph: {
    title: 'Managed Installation Service | LogisBase',
    description:
      'LogisBase deployed on your infrastructure in 7 days. Everything included — $2,500 one-time.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Managed Installation Service | LogisBase`,
    description: `LogisBase deployed on your infrastructure in 7 days. Everything included — $2,500 one-time.`,
  },
};

// ─── Deliverables ─────────────────────────────────────────────────────────────
const DELIVERABLES = [
  {
    icon: Server,
    title: 'Platform Deployment',
    description:
      'Full deployment of LogisBase Console & Core on your server or cloud account — AWS, Azure, GCP, DigitalOcean, or bare metal.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline Setup',
    description:
      'Automated deployment pipelines so your installation stays up to date and new releases can be applied without downtime.',
  },
  {
    icon: MessageSquare,
    title: 'SMS Configuration',
    description:
      'Integration with your SMS provider (Twilio or equivalent) for order notifications, driver alerts, and OTP delivery.',
  },
  {
    icon: HardDrive,
    title: 'File Storage Configuration',
    description:
      'Connection to your S3-compatible storage (AWS S3, Cloudflare R2, DigitalOcean Spaces, or MinIO) for uploads, proof of delivery, and documents.',
  },
  {
    icon: Globe,
    title: 'Custom Domain & DNS',
    description:
      'Your LogisBase console and API served on your own domain — fully configured with SSL certificates included.',
  },
  {
    icon: Settings,
    title: 'Custom Order Configuration',
    description:
      'Order workflows tailored to your operational structure — custom fields, order types, and status flows configured for your business.',
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description:
      'Your logo and visual identity applied throughout the console — so your team sees your brand, not ours.',
  },
];

// ─── Process Steps ─────────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    day: 'Day 1',
    title: 'Kickoff & Access',
    description:
      'We confirm requirements, collect server credentials and third-party service details, and assign a dedicated implementation engineer to your project.',
  },
  {
    day: 'Days 2–3',
    title: 'Infrastructure & Deployment',
    description:
      'Platform deployed on your server with database, Redis, storage, and SSL configured. CI/CD pipelines established and verified.',
  },
  {
    day: 'Days 4–5',
    title: 'Configuration & Branding',
    description:
      'SMS, file storage, custom domain, order workflows, and branding applied and tested end-to-end.',
  },
  {
    day: 'Days 6–7',
    title: 'QA, Testing & Handover',
    description:
      'Full system QA, walkthrough session with your team, and documented handover. You receive a working, production-ready LogisBase installation.',
  },
];

// ─── Requirements ─────────────────────────────────────────────────────────────
const CLIENT_REQUIREMENTS = [
  'A server or cloud account to deploy on (AWS, Azure, GCP, DigitalOcean, or VPS)',
  'Domain name and DNS management access',
  'SMS provider account (e.g. Twilio) — or we can advise on setup',
  'S3-compatible storage bucket — or we can advise on setup',
  'A designated point of contact available for the 7-day implementation window',
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'What cloud providers do you support?',
    a: 'We deploy on AWS, Azure, GCP, DigitalOcean, Hetzner, and bare-metal Linux servers. If you have an existing server environment, we can work within it.',
  },
  {
    q: 'Do I need to procure the server before engaging you?',
    a: 'Yes — you provide the infrastructure, and we deploy LogisBase on it. If you need guidance on what to provision, we can advise during the kickoff call before work begins.',
  },
  {
    q: 'What happens after the 7 days?',
    a: 'You receive a fully working LogisBase installation that you own and control. We conduct a handover session with your team. Ongoing support and automatic upgrades are available via the optional Maintenance Plan at $200/month.',
  },
  {
    q: 'What is the Maintenance Plan and is it required?',
    a: 'The Maintenance Plan is optional. It provides priority email support and automatic LogisBase version upgrades as new releases are published. Without it, you are responsible for keeping your installation updated.',
  },
  {
    q: 'Does this include custom feature development?',
    a: 'No — this service covers deployment, configuration, and branding of the standard LogisBase platform. Custom extension development, ERP integrations, or bespoke features are scoped separately under our Custom Extension Development service.',
  },
  {
    q: 'What licence applies to my installation?',
    a: 'LogisBase is provided under a source-accessible license. Your deployment is governed by this license. If you need to keep proprietary modifications private or build a commercial product on top of LogisBase, an Enterprise License is required—contact us for details.',
  },
  {
    q: 'What is your refund policy?',
    a: 'The one-time service fee is non-refundable once implementation begins. We work closely with you during the kickoff to confirm scope and requirements before any work starts.',
  },
];

export default function InstallationServicePage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden text-center">
        {/* Decorative background orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-primary/8 absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl" />
          <div className="bg-primary/5 absolute top-0 right-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
            <span className="text-primary">●</span>
            <span>Managed Installation Service</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance md:text-6xl">
            LogisBase on your infrastructure,{' '}
            <span className="text-primary">deployed in 7 days.</span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
            Our engineering team handles the full deployment — server setup,
            CI/CD pipelines, SMS, storage, custom domain, branding, and
            handover. You get a production-ready installation on infrastructure
            you own and control.
          </p>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">$2,500</div>
              <div className="text-muted-foreground text-sm">one-time fee</div>
            </div>
            <div className="bg-border hidden h-10 w-px sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold">7 days</div>
              <div className="text-muted-foreground text-sm">
                deployment timeline
              </div>
            </div>
            <div className="bg-border hidden h-10 w-px sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-muted-foreground text-sm">
                your infrastructure
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link
                href="https://tally.so/r/mVbv2M"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://cal.com/logisbase/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a Call First
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── What's Included ──────────────────────────────────────────────── */}
      <section className="bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              Everything included in one engagement
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              One fixed fee covers the complete deployment. No per-hour billing,
              no scope surprises. The engagement ends when LogisBase is live on
              your infrastructure and your team is ready to use it.
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((item) => (
              <Card key={item.title} className="flex flex-col">
                <CardHeader className="pb-3">
                  <div className="mb-1 flex items-center gap-3">
                    <div className="bg-primary/10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg">
                      <item.icon className="text-primary h-4 w-4" />
                    </div>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              How the engagement works
            </h2>
            <p className="text-muted-foreground mx-auto max-w-xl">
              From kickoff to handover in 7 days. Every step is managed by our
              implementation team with a dedicated point of contact on your
              side.
            </p>
          </div>
          <div className="relative">
            {/* Vertical line — left-side on mobile, centered on desktop */}
            <div className="from-primary via-primary/40 absolute top-0 bottom-0 left-[22px] w-0.5 bg-gradient-to-b to-transparent md:left-1/2 md:-translate-x-px" />

            <div className="space-y-10">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.day}
                  className={cn(
                    'relative flex items-start gap-5 md:gap-0',
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                  )}
                >
                  {/* Mobile node (in flow) */}
                  <div className="bg-primary text-primary-foreground shadow-primary/30 ring-background relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full shadow-lg ring-4 md:hidden">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>

                  {/* Desktop node (absolute, centered on line) */}
                  <div className="bg-primary text-primary-foreground shadow-primary/30 ring-background absolute top-3.5 left-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full shadow-lg ring-4 md:flex">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>

                  {/* Card */}
                  <div
                    className={cn(
                      'min-w-0 flex-1',
                      'md:w-[calc(50%-2.75rem)] md:flex-none',
                      i % 2 === 0 ? 'md:pr-10' : 'md:pl-10',
                    )}
                  >
                    <Card className="shadow-sm transition-shadow hover:shadow-md">
                      <CardHeader className="pb-2">
                        <span className="bg-primary/10 text-primary mb-2 inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-bold tracking-wider uppercase">
                          {step.day}
                        </span>
                        <CardTitle className="text-base">
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Desktop spacer for the opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-2.75rem)] md:flex-none" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section className="bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              Simple, transparent pricing
            </h2>
            <p className="text-muted-foreground mx-auto max-w-xl">
              One upfront fee to get you live. An optional monthly plan to keep
              you current.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
            {/* One-time */}
            <Card className="border-primary shadow-primary/10 flex flex-col shadow-lg">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <CardTitle className="text-lg">Implementation</CardTitle>
                  <span className="bg-primary text-primary-foreground rounded-full px-2.5 py-1 text-xs font-semibold">
                    One-time
                  </span>
                </div>
                <div className="text-4xl font-bold">$2,500</div>
                <CardDescription className="mt-1 text-sm">
                  Payable upfront before deployment begins
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-2.5">
                {[
                  'Full LogisBase deployment on your infrastructure',
                  'CI/CD pipeline setup',
                  'SMS provider integration',
                  'S3-compatible file storage configuration',
                  'Custom domain & SSL',
                  'Custom order workflow configuration',
                  'Custom branding (logo & identity)',
                  'QA testing & team handover session',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <Check className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full" asChild>
                  <Link
                    href="https://tally.so/r/mVbv2M"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Maintenance */}
            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <CardTitle className="text-lg">
                    Maintenance & Support
                  </CardTitle>
                  <span className="bg-muted/40 text-muted-foreground rounded-full border px-2.5 py-1 text-xs font-semibold">
                    Optional
                  </span>
                </div>
                <div className="text-4xl font-bold">
                  $200
                  <span className="text-muted-foreground text-lg font-normal">
                    /mo
                  </span>
                </div>
                <CardDescription className="mt-1 text-sm">
                  Add at any time — cancel with 7 days' notice
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-2.5">
                {[
                  'Automatic LogisBase version upgrades',
                  'Priority email support',
                  'Security patch delivery',
                  'Upgrade compatibility verification',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                    <span>{f}</span>
                  </div>
                ))}
                <div className="space-y-2 pt-2">
                  {[
                    'Custom feature development',
                    'New integration builds',
                    'Infrastructure management',
                  ].map((f) => (
                    <div
                      key={f}
                      className="text-muted-foreground/60 flex items-start gap-2 text-sm"
                    >
                      <span className="mt-0.5 h-4 w-4 flex-shrink-0 text-center leading-none">
                        —
                      </span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full" variant="outline" asChild>
                  <Link
                    href="https://tally.so/r/mVbv2M"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add During Signup
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Client Requirements ───────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="bg-card flex items-start gap-4 rounded-2xl border p-8">
            <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="mb-2 text-xl font-bold">
                What you need to provide
              </h2>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                To keep the 7-day timeline, the following should be in place
                before implementation begins. If anything isn't ready, let us
                know during the kickoff call — we can advise.
              </p>
              <ul className="space-y-2.5">
                {CLIENT_REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-start gap-2.5 text-sm">
                    <ChevronRight className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why this makes sense ─────────────────────────────────────────── */}
      <section className="bg-muted/20 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              The case for a managed deployment
            </h2>
            <p className="text-muted-foreground mx-auto max-w-xl">
              Self-hosting gives you full ownership. Our installation service
              gets you there without the trial and error.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                icon: Clock,
                title: 'Up in 7 days',
                description:
                  'A DIY deployment can take weeks of engineering time. Our team ships faster because they have done this hundreds of times.',
              },
              {
                icon: ShieldCheck,
                title: 'Production-hardened',
                description:
                  'SSL, firewall rules, storage permissions, CORS, and WebSocket security are all configured correctly from day one — not discovered after launch.',
              },
              {
                icon: Headphones,
                title: 'Expert handover',
                description:
                  'Your team receives a walkthrough of the configuration, not just a live system. You understand what was deployed and how to manage it going forward.',
              },
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader className="pb-3">
                  <div className="bg-primary/10 mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg">
                    <item.icon className="text-primary h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border px-6"
              >
                <AccordionTrigger className="py-5 text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Terms notice ─────────────────────────────────────────────────── */}
      <section className="py-4">
        <div className="container mx-auto max-w-3xl px-4">
          <p className="text-muted-foreground text-center text-xs">
            By submitting the registration form you agree to the{' '}
            <Link
              href={TERMS_DOC}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground inline-flex items-center gap-1 underline underline-offset-4 transition-colors"
            >
              LogisBase Console &amp; Core Implementation Terms &amp; Conditions
              <ExternalLink className="size-3" />
            </Link>
            . The service is provided by LogisBase Ltd., Singapore.
          </p>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="bg-muted/20 py-16">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <div className="bg-primary/5 border-primary/20 rounded-2xl border p-10">
            <RefreshCw className="text-primary mx-auto mb-4 h-10 w-10" />
            <h2 className="mb-3 text-2xl font-bold">
              Ready to get LogisBase live?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Submit the registration form and our team will be in touch within
              one business day to confirm scope and schedule your kickoff.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <Link
                  href="https://tally.so/r/mVbv2M"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit Registration Form{' '}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="https://cal.com/logisbase/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Discovery Call
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground mt-5 text-xs">
              Questions? Email us at{' '}
              <a
                href="mailto:hello@logisbase.com"
                className="text-primary underline underline-offset-4"
              >
                hello@logisbase.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
