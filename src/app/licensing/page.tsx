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
    'LogisBase is released under Source-accessible. If you deploy on a network and make changes, those changes must remain Source-accessible — or you need an Enterprise License to keep them proprietary.',
  keywords: [
    'logisbase licensing',
    'Source-accessible logistics software',
    'source-accessible logistics licence',
    'commercial logistics software licence',
    'Source-accessible',
  ],
  openGraph: {
    title: 'Licensing | LogisBase',
    description:
      'Source-accessible and commercial licensing options for LogisBase.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Licensing | LogisBase`,
    description: `Source-accessible and commercial licensing options for LogisBase.`,
  },
};

const licences = [
  {
    icon: Code2,
    title: 'Source-Accessible License',
    badge: 'Standard',
    highlight: false,
    description:
      'LogisBase is provided under a source-accessible model that allows you to use, modify, and self-host the platform for operational needs. When you deploy modified versions over a network, those changes must remain available under the same license terms.',
    suitable: [
      'Running LogisBase for your own fleet or internal operations',
      'Self-hosted deployments without proprietary modifications',
      'Research, academic, and evaluation use cases',
      'Developers contributing improvements back to the ecosystem',
      'Teams that prioritize transparency and auditability',
    ],
    notSuitable: [
      'Keeping modifications private while offering the system as a service',
      'Building proprietary SaaS products without sharing changes',
      'OEM or white-label deployments with closed modifications',
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
      'The Enterprise License provides expanded commercial rights for organizations that require full confidentiality over their customizations and deployments. It enables proprietary use of LogisBase within commercial environments under negotiated terms, including SaaS, white-label, and OEM scenarios. Your proprietary extensions and modifications remain your intellectual property under the terms of the agreement.',
    suitable: [
      'Proprietary modifications kept private within commercial deployments',
      'Building and operating SaaS products on top of LogisBase',
      'OEM and white-label distribution models',
      'Managed service providers serving multiple client environments',
      'Enterprises requiring confidential customizations and tailored licensing terms',
    ],
    notSuitable: [],
    cta: 'View Commercial License',
    ctaHref: '/licensing/commercial',
  },
];

const faqs = [
  {
    q: 'What is LogisBase licensing and how is it different from other licensing models?',
    a: 'LogisBase uses a source-accessible licensing model designed for transparency and operational flexibility. Unlike permissive models such as MIT or Apache, it includes conditions around how modified versions can be deployed as network-accessible services. This ensures improvements to the platform remain traceable while supporting both internal and commercial use cases.',
  },
  {
    q: 'If I run LogisBase internally for my own fleet, do I need an Enterprise License?',
    a: 'No. Internal use of LogisBase within your own organisation does not trigger any external sharing requirements, even in commercial environments, as long as it is not exposed to external users over a network.',
  },
  {
    q: 'I want to make modifications to LogisBase. Do I have to share them?',
    a: 'It depends on how you deploy it. If your modified version is used strictly within your organisation, there is no requirement to share changes. If you deploy a modified version as a network-accessible service for external users or customers, the licence requires those modifications to be made available under the standard terms. An Enterprise License is required if you want to keep modifications proprietary in such cases.',
  },
  {
    q: 'What counts as "network use" under the LogisBase license?',
    a: 'Network use refers to making LogisBase available to users over a network — such as through a web application, API, or customer-facing system. This includes SaaS deployments and any system accessed by users outside your internal organisation.',
  },
  {
    q: 'Can I build a SaaS product on top of LogisBase?',
    a: 'Yes. If you deploy LogisBase without modifying the core platform, you can offer it as a service under the standard licensing terms. If you introduce modifications and want to keep them private while serving users over a network, an Enterprise License is required.',
  },
  {
    q: 'What does the Enterprise License cover?',
    a: 'The Enterprise License removes external sharing requirements for covered components. It enables proprietary modifications, SaaS deployment with private changes, OEM and white-label distribution, and customised enterprise deployments under negotiated commercial terms.',
  },
  {
    q: 'Who owns the custom extensions or modifications I build?',
    a: 'You retain full ownership of any custom extensions or code you develop for LogisBase. The license governs how modified platform components must be handled when deployed over a network, but does not transfer ownership of your intellectual property. An Enterprise License removes external sharing requirements for covered modifications.',
  },
  {
    q: 'How is Enterprise License pricing structured?',
    a: 'Enterprise pricing is customised based on deployment size, use case, and commercial requirements. Contact the LogisBase team to receive a tailored quote.',
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
            Clear, practical terms{' '}
            <span className="text-primary">for real-world operations.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
            LogisBase is provided under a source-accessible model. You can use
            and self-host it for internal business operations. If you deploy
            modified versions as part of an externally accessible service, those
            modifications are subject to the standard sharing requirements — or
            you can obtain an Enterprise License to keep them proprietary under
            commercial terms.
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

      {/* Source-accessible Explained */}
      <section className="bg-muted/20 border-t border-b py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              Understanding the source-sharing requirement
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The key distinction in LogisBase’s source-accessible model is how
              modifications are treated when the platform is deployed beyond
              private infrastructure. If you modify LogisBase and operate it as
              a service for external users, those changes fall under the
              standard sharing requirements of the license.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-card rounded-xl border p-6">
                <div className="bg-background mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <Home className="text-primary size-5" />
                </div>
                <h3 className="mb-2 font-semibold">Internal deployment</h3>
                <p className="text-muted-foreground text-sm">
                  Running LogisBase within your organization for operational use
                  only, with no external customer or third-party access. No
                  source-sharing obligations apply.
                </p>
              </div>
              <div className="bg-card rounded-xl border p-6">
                <div className="bg-background mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <Globe className="text-primary size-5" />
                </div>
                <h3 className="mb-2 font-semibold">
                  Network deployment with modifications
                </h3>
                <p className="text-muted-foreground text-sm">
                  Operating a modified version of LogisBase as a service
                  accessed by external users or customers. Modifications to the
                  platform must remain available under the standard license
                  terms.
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
                  If you need to keep your custom changes private while running
                  LogisBase as part of a commercial offering, an Enterprise
                  License is required.
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
                href="https://cal.com/logisbase/demo"
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
