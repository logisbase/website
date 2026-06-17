import {
  ArrowRight,
  Code2,
  Globe,
  Handshake,
  Puzzle,
  Wrench,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Partner Program | LogisBase',
  description:
    'Join the LogisBase partner program as an integration, implementation, technology, or reseller partner. Help your customers deploy source-accessible logistics infrastructure.',
  keywords: [
    'LogisBase partners',
    'logisbase partner program',
    'logistics partner program',
    'source-accessible logistics partners',
    'logisbase reseller',
  ],
  openGraph: {
    title: 'Partner Program | LogisBase',
    description:
      'Join the partner program as an integration, implementation, technology, or reseller partner.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Partner Program | LogisBase`,
    description: `Join the partner program as an integration, implementation, technology, or reseller partner.`,
  },
  alternates: { canonical: 'https://logisbase.com/partners' },
};

const partnerTypes = [
  {
    icon: Puzzle,
    title: 'Integration Partners',
    description:
      'Technology companies that have built certified integrations with LogisBase — connecting e-commerce platforms, ERPs, payment processors, mapping providers, and communication tools to the LogisBase ecosystem.',
    examples: [
      'E-commerce platforms',
      'ERP & WMS systems',
      'Payment processors',
      'Mapping & routing providers',
      'SMS & notification services',
    ],
    cta: 'Become an integration partner',
  },
  {
    icon: Wrench,
    title: 'Implementation Partners',
    description:
      'Consulting firms and system integrators that help businesses deploy, configure, and customise LogisBase for their specific operations. Implementation partners are certified by LogisBase and listed in our partner directory.',
    examples: [
      'Logistics consultancies',
      'System integrators',
      'IT services firms',
      'Digital transformation agencies',
    ],
    cta: 'Become an implementation partner',
  },
  {
    icon: Code2,
    title: 'Technology Partners',
    description:
      'Hardware manufacturers, IoT providers, and technology companies whose products work with LogisBase — including GPS hardware, barcode scanners, vehicle telematics systems, and mobile device management platforms.',
    examples: [
      'GPS hardware manufacturers',
      'IoT & telematics providers',
      'Mobile device management',
      'Barcode & RFID hardware',
    ],
    cta: 'Become a technology partner',
  },
  {
    icon: Globe,
    title: 'Reseller Partners',
    description:
      'Regional and vertical-specialist resellers who bring LogisBase to markets and industries they know deeply — offering local support, implementation, and customisation services alongside the platform.',
    examples: [
      'Regional logistics specialists',
      'Vertical industry experts',
      'Managed service providers',
      'Value-added resellers',
    ],
    cta: 'Become a reseller partner',
  },
];

const partnerBenefits = [
  {
    title: 'Partner directory listing',
    description:
      'Featured placement in the LogisBase partner directory, visible to all prospects and customers.',
  },
  {
    title: 'Co-marketing opportunities',
    description:
      'Joint case studies, blog posts, webinars, and event appearances to grow your reach.',
  },
  {
    title: 'Technical enablement',
    description:
      'Access to technical documentation, sandbox environments, and direct engineering support.',
  },
  {
    title: 'Partner portal access',
    description:
      'Deal registration, lead sharing, and partner-exclusive resources in the LogisBase partner portal.',
  },
  {
    title: 'Revenue sharing',
    description:
      'Referral and revenue share programmes for qualifying partner types and deal sizes.',
  },
  {
    title: 'Certification programme',
    description:
      'Official LogisBase certification for implementation partners and their technical staff.',
  },
];

export default function PartnersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-muted-foreground mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
            Partner Program
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Grow your business with{' '}
            <span className="text-primary">LogisBase.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
            The LogisBase partner network connects integration providers,
            implementation specialists, and technology companies with a global
            community of logistics operators looking for trusted solutions and
            expertise.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://cal.com/logisbase/demo">
                Apply to partner <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/developers">View API docs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Looking for integrations? */}
      <section className="bg-muted/20 border-b py-12 md:py-16">
        <div className="container">
          <div className="bg-card mx-auto max-w-3xl rounded-2xl border p-8 text-center md:p-10">
            <div className="text-muted-foreground mb-2 text-sm font-medium tracking-wider uppercase">
              Looking for integrations?
            </div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
              See what LogisBase plugs into
            </h2>
            <p className="text-muted-foreground mb-6">
              Maps, payments, communication, cloud, e-commerce, and developer
              tooling — all available natively or through the Extensions
              Marketplace.
            </p>
            <Button asChild>
              <Link href="/platform/extensions#integrations">
                Browse integrations <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Partner types
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              Find the right partnership model for your business.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {partnerTypes.map((type) => (
              <div key={type.title} className="bg-card rounded-xl border p-8">
                <div className="bg-background mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <type.icon className="text-primary size-5" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{type.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {type.description}
                </p>
                <div className="mb-6">
                  <div className="mb-2 text-sm font-medium">Includes:</div>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((ex) => (
                      <span
                        key={ex}
                        className="bg-muted/40 text-muted-foreground rounded-full border px-3 py-1 text-xs"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="https://cal.com/logisbase/demo"
                  className="text-primary flex items-center text-sm font-medium hover:underline"
                >
                  {type.cta} <ArrowRight className="ml-1 size-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Partner benefits
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
              Everything you need to build a successful LogisBase practice.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnerBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-xl border p-6"
              >
                <Handshake className="text-primary mb-3 size-5" />
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
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
                Ready to partner with LogisBase?
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Tell us about your business and the partnership model you have
                in mind. Our partnerships team will be in touch within 2
                business days.
              </p>
              <Button size="lg" asChild>
                <Link href="https://cal.com/logisbase/demo">
                  Apply now <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
