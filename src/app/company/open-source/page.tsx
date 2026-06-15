import {
  ArrowRight,
  BookOpen,
  Code2,
  Database,
  GitBranch,
  Github,
  Shield,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://logisbase.com/company/platform-independence',
  },
  title: 'Platform Independence | LogisBase',
  description:
    'LogisBase is an enterprise, source-available logistics platform with self-hostable options. Learn why we chose transparency, what it means for your deployment, how to self-host, and how to contribute to the project.',
  keywords: [
    'logisbase enterprise',
    'source-available logistics platform',
    'self-hostable logistics software',
    'self-hosted fleet management',
  ],
  openGraph: {
    title: 'Platform Independence | LogisBase',
    description:
      'Enterprise, source-available logistics infrastructure. Deploy anywhere, own everything.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Platform Independence | LogisBase`,
    description: `Enterprise, source-available logistics infrastructure. Deploy anywhere, own everything.`,
  },
};

const reasons = [
  {
    icon: Shield,
    title: 'No vendor lock-in',
    description:
      'With a source-accessible architecture, your logistics stack is not tied to a vendor’s pricing changes, product direction, or business continuity risks. You retain the ability to run, modify, and maintain your deployment independently.',
  },
  {
    icon: Code2,
    title: 'Security you can verify',
    description:
      'Every component that processes orders, assigns drivers, and manages operational data can be reviewed at the code level. This enables enterprise security audits, internal compliance checks, and full system transparency.',
  },
  {
    icon: GitBranch,
    title: 'Built for extension',
    description:
      'LogisBase is designed to be extended at every layer. Teams can adapt workflows, build custom modules, and integrate deeply with existing systems without waiting on external roadmaps or relying on one-off vendor development cycles.',
  },
  {
    icon: Users,
    title: 'Enterprise-grade foundation',
    description:
      'The platform is built with reliability, scalability, and operational resilience in mind. Transparency into the system architecture allows technical teams to deploy with confidence in high-volume environments.',
  },
  {
    icon: Database,
    title: 'Data sovereignty',
    description:
      'Deploy LogisBase in your own infrastructure, cloud environment, or regulatory jurisdiction. You maintain full control over where your operational data is stored and how it is accessed.',
  },
  {
    icon: BookOpen,
    title: 'Long-term operational control',
    description:
      'The platform is designed to remain usable and maintainable over time, ensuring that your logistics infrastructure stays under your control regardless of vendor strategy changes or market shifts.',
  },
];

const licenceDetails = [
  {
    title: 'Standard License',
    description:
      'LogisBase can be used, modified, and self-hosted for internal operations and evaluation purposes. When deployed within an organization for internal use, you retain full operational flexibility. If you deploy modified versions as part of externally facing services or products, certain sharing obligations may apply to those modifications under the standard license terms.',
    suitable: [
      'Internal deployments for your own operations',
      'Evaluation, testing, and development environments',
      'Academic and non-commercial use cases',
      'Teams that are comfortable operating within standard license conditions',
    ],
  },
  {
    title: 'Enterprise License',
    description:
      'The Enterprise License provides expanded commercial rights for organizations that need to keep modifications private or operate LogisBase as part of a proprietary offering. It is designed for businesses that want to build SaaS products, white-label solutions, or custom logistics platforms on top of LogisBase without external disclosure requirements for their proprietary enhancements.',
    suitable: [
      'Proprietary modifications kept confidential',
      'SaaS platforms built on LogisBase',
      'OEM and white-label distribution',
      'Managed service providers and enterprise-scale deployments',
    ],
  },
];

export default function OpenSourcePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl">
          <div className="text-muted-foreground mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
            Platform Independence
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Your platform, <span className="text-primary">your control.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
            LogisBase is built with a source-accessible model. The core system
            can be reviewed and deployed on your own infrastructure, giving your
            team visibility into how dispatch, driver tracking, and order
            processing systems operate — and the ability to adapt them to your
            requirements.
          </p>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed md:text-xl">
            We treat transparency as a product principle, not a marketing
            position. Logistics infrastructure is critical operational software,
            and it should be built in a way that supports trust, control, and
            long-term ownership for the businesses that depend on it.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link
                href="https://github.com/logisbase/logisbase"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 size-4" />
                Request source access
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/developers">
                Developer docs <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/20 border-y py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: 'Platform model', label: 'Source-accessible' },
              { value: 'Transparency', label: 'Full system visibility' },
              { value: 'Deployment', label: 'Self-hosted or managed' },
              { value: 'Customization', label: 'Adaptable to your workflows' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-primary text-2xl font-bold md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-muted-foreground mt-1 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Platform Independence */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why platform independence matters for logistics
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
              Logistics is core operational infrastructure. The systems that run
              it should be transparent, adaptable, and fully controlled by the
              businesses that depend on them.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="bg-card rounded-xl border p-6">
                <div className="bg-background mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <reason.icon className="text-primary size-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Licensing explained
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
              LogisBase uses a source-accessible licensing model. An Enterprise
              License is available for organizations that require additional
              commercial flexibility for proprietary use cases. Below is a clear
              breakdown of what each option provides.
            </p>
          </div>
          <div className="space-y-6">
            {licenceDetails.map((licence) => (
              <div
                key={licence.title}
                className="bg-card rounded-xl border p-8"
              >
                <h3 className="mb-3 text-xl font-semibold">{licence.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {licence.description}
                </p>
                <div>
                  <div className="mb-2 text-sm font-medium">Suitable for:</div>
                  <div className="flex flex-wrap gap-2">
                    {licence.suitable.map((use) => (
                      <span
                        key={use}
                        className="bg-muted/40 text-muted-foreground rounded-full border px-3 py-1 text-xs"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/licensing">
                Full licensing details <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="border-t py-16 md:py-20">
        <div className="container">
          <div className="bg-card relative overflow-hidden rounded-2xl border px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="bg-primary/5 absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl" />
            </div>
            <div className="mx-auto max-w-2xl">
              <Github className="text-primary mx-auto mb-4 size-10" />
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Contribute to LogisBase
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                LogisBase evolves through collaboration with developers,
                logistics operators, and implementation partners worldwide.
                Whether you’re fixing issues, building extensions, improving
                documentation, or proposing new capabilities, contributions that
                improve the platform are encouraged and valued.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link
                    href="https://github.com/logisbase/logisbase"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 size-4" />
                    Request source access
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://discord.com/invite/HnTqQ6zAVn">
                    Join the community
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
