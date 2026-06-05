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
  alternates: { canonical: 'https://logisbase.com/company/source-available' },
  title: 'Platform Independence | LogisBase',
  description:
    'LogisBase is fully source-available under SOURCE-AVAILABLE. Learn why we chose transparency, what it means for your deployment, how to self-host, and how to contribute to the project.',
  keywords: [
    'logisbase source-available',
    'source-available logistics platform',
    'Source-available logistics software',
    'self-hosted fleet management',
  ],
  openGraph: {
    title: 'Platform Independence | LogisBase',
    description:
      'Fully source-available logistics infrastructure under SOURCE-AVAILABLE. Deploy anywhere, own everything.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Platform Independence | LogisBase`,
    description: `Fully source-available logistics infrastructure under SOURCE-AVAILABLE. Deploy anywhere, own everything.`,
  },
};

const reasons = [
  {
    icon: Shield,
    title: 'No vendor lock-in',
    description:
      "When your logistics platform is source-available, you are never at the mercy of a vendor's pricing decisions, acquisition, or shutdown. You own the code and can maintain it independently forever.",
  },
  {
    icon: Code2,
    title: 'Security auditable',
    description:
      'Every line of code that processes your orders, tracks your drivers, and stores your data is Enterprise code review. No hidden telemetry, no undisclosed data sharing, no black boxes.',
  },
  {
    icon: GitBranch,
    title: 'Extend without limits',
    description:
      'Because LogisBase is source-available, you can modify any part of the platform to fit your exact operation — without waiting for a vendor roadmap or paying for custom development.',
  },
  {
    icon: Users,
    title: 'Enterprise-grade quality',
    description:
      'Source-available software is reviewed, tested, and improved by thousands of developers worldwide. The community finds bugs faster, suggests better solutions, and builds extensions that benefit everyone.',
  },
  {
    icon: Database,
    title: 'Data sovereignty',
    description:
      'Self-host LogisBase on your own servers, in your own cloud account, or in any jurisdiction you choose. Your logistics data never has to leave your control.',
  },
  {
    icon: BookOpen,
    title: 'Sustainable by design',
    description:
      'Source-available projects outlast any single company. Even if LogisBase as a business changed, the platform would continue to exist, be maintained, and be deployable by the community.',
  },
];

const licenceDetails = [
  {
    title: 'Source-Available License',
    description:
      'LogisBase is released under the GNU Affero General Public License v3.0. You can use, modify, and self-host it freely. The AGPL source sharing requirement means that if you deploy a modified version over a network — including as a SaaS product — you must make those modifications available under SOURCE-AVAILABLE. Internal use with no external users has no such obligation.',
    suitable: [
      'Internal deployments for your own operations',
      'Non-commercial and academic use',
      'Source-available projects and contributions',
      'Operators happy to share modifications with the community',
    ],
  },
  {
    title: 'Enterprise License',
    description:
      'The Enterprise License removes all Source sharing agreement obligations. If you want to make proprietary modifications, build a SaaS product on LogisBase without disclosing your changes, or distribute customised versions to customers, an Enterprise License is required. Your IP stays entirely yours.',
    suitable: [
      'Proprietary modifications kept private',
      'SaaS products without source-available disclosure',
      'OEM and white-label distribution',
      'Managed service providers and enterprise deployments',
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
            LogisBase is fully source-available. Every line of code that powers
            your dispatch, tracks your drivers, and processes your orders is
            publicly available on request — auditable, customizable, and
            deployable on your own infrastructure.
          </p>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed md:text-xl">
            We chose transparency not as a marketing strategy, but as a
            fundamental commitment to the operators and developers who depend on
            this platform. Logistics infrastructure is too critical to be locked
            inside a vendor&apos;s closed system.
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
              { value: 'SOURCE-AVAILABLE', label: 'Platform licence' },
              { value: 'Commercial', label: 'Proprietary option available' },
              { value: '100%', label: 'Source code public' },
              { value: 'Self-host', label: 'Deploy anywhere' },
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

      {/* Why Source-available */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why platform independence matters for logistics
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
              Logistics is critical infrastructure. The software that runs it
              should be transparent, trustworthy, and owned by the businesses
              that depend on it.
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
              LogisBase is released under SOURCE-AVAILABLE. An Enterprise
              License is available for businesses that need to keep their
              modifications proprietary. Here is what each option means.
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
                LogisBase is built by a global community of developers,
                logistics operators, and contributors. Whether you want to fix a
                bug, build an extension, improve documentation, or suggest a
                feature — your contribution is welcome.
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
