import {
  ArrowRight,
  Building2,
  Check,
  Code2,
  Globe,
  Home,
  Lock,
  Shield,
  X,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/licensing' },
  title: 'Licensing | LogisBase',
  description:
    'LogisBase is released under SOURCE-AVAILABLE. If you deploy on a network and make changes, those changes must remain AGPL — or you need an Enterprise License to keep them proprietary.',
  keywords: [
    'logisbase licensing',
    'Source-available logistics software',
    'source-available logistics licence',
    'commercial logistics software licence',
    'AGPL network copyleft',
  ],
  openGraph: {
    title: 'Licensing | LogisBase',
    description:
      'SOURCE-AVAILABLE source-available and commercial licensing options for LogisBase.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Licensing | LogisBase`,
    description: `SOURCE-AVAILABLE source-available and commercial licensing options for LogisBase.`,
  },
};

const licences = [
  {
    icon: Code2,
    title: 'Source-Available License',
    badge: 'Free',
    highlight: false,
    description:
      'LogisBase is released under the GNU Affero General Public License v3.0. You can use, modify, and self-host it freely. The AGPL source sharing requirement means that if you deploy a modified version over a network, you must make those modifications available under SOURCE-AVAILABLE as well.',
    suitable: [
      'Running LogisBase for your own fleet or internal operations',
      'Self-hosted deployments with no proprietary modifications',
      'Source-available projects, research, and academic use',
      'Developers who are happy to contribute changes back to the community',
      'Operators who want full transparency and auditability',
    ],
    notSuitable: [
      'Keeping modifications private while serving users over a network',
      'Building proprietary SaaS products without disclosing source changes',
      'OEM or white-label distribution with proprietary customisations',
    ],
    cta: 'Get started free',
    ctaHref: 'https://console.logisbase.com',
  },
  {
    icon: Building2,
    title: 'Enterprise License',
    badge: 'Enterprise',
    highlight: true,
    description:
      'The Enterprise License removes the AGPL copyleft obligation entirely. Build proprietary modifications, deploy SaaS products, and distribute customised versions of LogisBase — all without any source-available disclosure requirement. Your IP stays yours.',
    suitable: [
      'Making proprietary modifications without open-sourcing them',
      'Building and selling SaaS logistics products on LogisBase',
      'OEM and white-label distribution to your customers',
      'Managed service providers offering LogisBase to multiple clients',
      'Enterprises that require confidential customisations or specific licence terms',
    ],
    notSuitable: [],
    cta: 'View Commercial License',
    ctaHref: '/licensing/commercial',
  },
];

const faqs = [
  {
    q: 'What is SOURCE-AVAILABLE and how is it different from other source-available licences?',
    a: 'SOURCE-AVAILABLE (GNU Affero General Public License) is a copyleft licence with a network use clause. Unlike MIT or Apache, AGPL requires that if you deploy modified software over a network — including as a SaaS product — you must make the source code of your modifications available to users under the same AGPL licence. This ensures that improvements to the platform remain open and benefit the whole community.',
  },
  {
    q: 'If I run LogisBase internally for my own fleet, do I need an Enterprise License?',
    a: 'No. Running LogisBase internally for your own operations — even in a commercial business — does not trigger AGPL obligations as long as you are not serving external users over a network. Internal deployments with no external distribution are fully covered by the free SOURCE-AVAILABLE licence.',
  },
  {
    q: 'I want to make modifications to LogisBase. Do I have to source-available them?',
    a: 'It depends on how you deploy. If you keep your modified LogisBase instance entirely internal (not accessible to external users over a network), you are not required to release your changes. However, if you deploy your modified version as a service accessible to others — including your own customers — SOURCE-AVAILABLE requires you to make those modifications available under AGPL. If you need to keep your modifications proprietary, an Enterprise License is required.',
  },
  {
    q: 'What counts as "network use" under SOURCE-AVAILABLE?',
    a: 'Network use means making the software available to users over a network — for example, running it as a web application or API that external users interact with. This includes SaaS products, customer-facing portals, and any deployment where users outside your organisation access the software. Purely internal use within your own organisation does not count as network use.',
  },
  {
    q: 'Can I build a SaaS product on top of LogisBase?',
    a: 'Yes, but the licence terms depend on whether you make modifications. If you deploy LogisBase as-is (without modifying the core), you can offer it as a service under SOURCE-AVAILABLE without additional obligations. If you make proprietary modifications and want to keep them private while serving users over a network, you need an Enterprise License.',
  },
  {
    q: 'What does the Enterprise License cover?',
    a: 'The Enterprise License removes all AGPL copyleft obligations. It allows you to make proprietary modifications, deploy modified versions as SaaS, distribute customised builds to customers, and build OEM or white-label products — all without any source-available disclosure requirement. Pricing is based on your use case and deployment scale; contact our sales team for a quote.',
  },
  {
    q: 'Who owns the custom extensions or modifications I build?',
    a: "You do. LogisBase's modular architecture is designed so that custom extensions and modifications you build remain your intellectual property. LogisBase Pte. Ltd. has no claim over your custom code. The AGPL licence governs how you must share that code if you deploy it over a network — but ownership always stays with you. An Enterprise License removes even the sharing obligation.",
  },
  {
    q: 'How is Enterprise License pricing structured?',
    a: 'Enterprise License pricing is tailored to your use case, deployment scale, and distribution model. Contact our sales team to discuss your specific requirements and receive a quote.',
  },
];

export default function LicensingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-muted-foreground mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
            Licensing
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Source-available with{' '}
            <span className="text-primary">clear, honest terms.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
            LogisBase is released under SOURCE-AVAILABLE. Use it freely for
            internal operations. If you deploy a modified version over a
            network, those changes must remain source-available — or you need an
            Enterprise License to keep them proprietary.
          </p>
        </div>
      </section>

      {/* Licence Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {licences.map((licence) => (
              <div
                key={licence.title}
                className={`flex flex-col rounded-xl border p-8 ${licence.highlight ? 'border-primary bg-primary/5' : 'bg-card'}`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="bg-background flex size-10 items-center justify-center rounded-lg border">
                    <licence.icon className="text-primary size-5" />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${licence.highlight ? 'bg-primary text-primary-foreground' : 'bg-muted/40 text-muted-foreground border'}`}
                  >
                    {licence.badge}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">{licence.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  {licence.description}
                </p>
                <div className="mb-4">
                  <div className="mb-3 text-sm font-medium text-green-600 dark:text-green-400">
                    Suitable for:
                  </div>
                  <ul className="space-y-2">
                    {licence.suitable.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground flex items-start gap-2 text-sm"
                      >
                        <Check className="mt-0.5 size-3.5 shrink-0 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {licence.notSuitable.length > 0 && (
                  <div className="mb-6">
                    <div className="mb-3 text-sm font-medium text-red-600 dark:text-red-400">
                      Not suitable for:
                    </div>
                    <ul className="space-y-2">
                      {licence.notSuitable.map((item) => (
                        <li
                          key={item}
                          className="text-muted-foreground flex items-start gap-2 text-sm"
                        >
                          <X className="mt-0.5 size-3.5 shrink-0 text-red-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-auto pt-6">
                  <Button
                    variant={licence.highlight ? 'default' : 'outline'}
                    asChild
                    className="w-full"
                  >
                    <Link
                      href={licence.ctaHref}
                      target={
                        licence.ctaHref.startsWith('http')
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        licence.ctaHref.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {licence.cta} <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGPL Explained */}
      <section className="bg-muted/20 border-t border-b py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              Understanding the AGPL source sharing requirement
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The key distinction in SOURCE-AVAILABLE compared to other
              source-available licences is the
              <strong> source sharing requirement</strong>. Standard GPL only
              requires you to share modifications if you distribute the software
              as a file. AGPL goes further: if you run a modified version of the
              software as a service that others interact with over a network,
              you must make your modifications available under SOURCE-AVAILABLE.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-card rounded-xl border p-6">
                <div className="bg-background mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <Home className="text-primary size-5" />
                </div>
                <h3 className="mb-2 font-semibold">Internal use</h3>
                <p className="text-muted-foreground text-sm">
                  Running LogisBase for your own organisation with no external
                  users. No AGPL obligations. Free forever.
                </p>
              </div>
              <div className="bg-card rounded-xl border p-6">
                <div className="bg-background mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <Globe className="text-primary size-5" />
                </div>
                <h3 className="mb-2 font-semibold">
                  Network deployment with changes
                </h3>
                <p className="text-muted-foreground text-sm">
                  Deploying a modified LogisBase as a service to external users.
                  AGPL requires you to publish your modifications under
                  SOURCE-AVAILABLE.
                </p>
              </div>
              <Link
                href="/licensing/commercial"
                className="group border-primary bg-primary/5 hover:bg-primary/10 rounded-xl border p-6 transition-colors"
              >
                <div className="bg-background mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <Lock className="text-primary size-5" />
                </div>
                <h3 className="mb-2 font-semibold">
                  Proprietary modifications
                </h3>
                <p className="text-muted-foreground text-sm">
                  Want to keep your changes private? An Enterprise License
                  removes all AGPL obligations and lets you build proprietary
                  products.
                </p>
                <span className="text-primary mt-3 inline-flex items-center gap-1 text-xs font-medium">
                  Enterprise License details{' '}
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">
              Licensing FAQ
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
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
            <p className="text-muted-foreground mt-8 text-sm">
              Need an Enterprise License?{' '}
              <Link
                href="/licensing/commercial"
                className="text-primary hover:underline"
              >
                See full details, pricing, and FAQ →
              </Link>
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              Still unsure which licence applies to your use case?{' '}
              <Link
                href="https://cal.com/shivthakker/enquiry"
                className="text-primary hover:underline"
              >
                Contact our team
              </Link>{' '}
              and we will help you choose the right option.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
