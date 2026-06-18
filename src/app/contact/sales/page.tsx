import {
  ArrowRight,
  Calendar,
  Globe,
  HeadphonesIcon,
  Mail,
  MessageSquare,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/contact/sales' },
  title: 'Contact | LogisBase',
  description:
    'Get in touch with the LogisBase team. Email us, book a demo on Cal.com, or join our Discord community. We respond within 1 business day.',
  keywords: [
    'logisbase contact',
    'logisbase demo',
    'logisbase support',
    'logistics software enquiry',
  ],
  openGraph: {
    title: 'Contact | LogisBase',
    description:
      'Get in touch with the LogisBase team. Email, Discord, or book a demo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact | LogisBase`,
    description: `Get in touch with the LogisBase team. Email, Discord, or book a demo.`,
  },
};

const contactReasons = [
  {
    icon: Zap,
    title: 'Enterprise & custom plans',
    description:
      'Large-scale deployments, custom SLAs, dedicated support, and volume pricing.',
  },
  {
    icon: Globe,
    title: 'Custom deployment',
    description:
      'On-premise, private cloud, or air-gapped deployments with custom configuration.',
  },
  {
    icon: MessageSquare,
    title: 'Professional services',
    description:
      'Implementation, integration development, training, and ongoing technical support.',
  },
  {
    icon: ArrowRight,
    title: 'Partnership enquiry',
    description:
      'Integration, reseller, implementation, or technology partnership opportunities.',
  },
];

const faqs = [
  {
    q: 'How quickly will I hear back?',
    a: 'Our team responds to all enquiries within 1 business day. For urgent matters, mention it in your message and we will prioritise accordingly.',
  },
  {
    q: 'Can I get a demo before committing?',
    a: 'Yes. Book a personalised demo via Cal.com and our team will tailor the session to your specific operation and use case.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes. Cloud plans include a 7-day free trial capped at 50 resource units. Billing begins when either limit is reached first, and you can start immediately without contacting us first.',
  },
  {
    q: 'Where do I get technical support?',
    a: 'For technical questions, our Discord community is the fastest route — our team is active there daily. You can also email support@logisbase.com for direct support.',
  },
];

export default function ContactSalesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-muted-foreground mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
            Contact
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Let&apos;s talk about{' '}
            <span className="text-primary">your operation.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
            Whether you&apos;re evaluating LogisBase, exploring enterprise
            options, or looking for a partner — our team is here to help. We
            respond within 1 business day.
          </p>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-card rounded-xl border p-6 text-center"
              >
                <div className="bg-background mx-auto mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <reason.icon className="text-primary size-5" />
                </div>
                <h3 className="mb-2 font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
              Get in touch
            </h2>
            <p className="text-muted-foreground mb-10">
              Choose the channel that works best for you. We&apos;re available
              via email, Discord, or you can book a time directly in our
              calendar.
            </p>

            <div className="space-y-4">
              {/* General enquiries */}
              <Link
                href="mailto:hello@logisbase.com"
                className="group block"
                data-cta-id="contact_sales"
                data-cta-location="contact_sales_page"
                data-cta-variant="primary"
              >
                <div className="bg-card hover:border-primary/50 flex items-start gap-5 rounded-xl border p-6 transition-colors">
                  <div className="bg-background flex size-10 shrink-0 items-center justify-center rounded-lg border">
                    <Mail className="text-primary size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">
                      General enquiries &amp; sales
                    </div>
                    <div className="text-muted-foreground mt-1 text-sm">
                      Enterprise plans, partnerships, pricing, and anything
                      else.
                    </div>
                    <div className="text-primary mt-2 text-sm font-medium group-hover:underline">
                      hello@logisbase.com
                    </div>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary mt-1 size-4 shrink-0 transition-colors" />
                </div>
              </Link>

              {/* Support */}
              <Link
                href="mailto:support@logisbase.com"
                className="group block"
                data-cta-id="contact_support"
                data-cta-location="contact_sales_page"
                data-cta-variant="secondary"
              >
                <div className="bg-card hover:border-primary/50 flex items-start gap-5 rounded-xl border p-6 transition-colors">
                  <div className="bg-background flex size-10 shrink-0 items-center justify-center rounded-lg border">
                    <HeadphonesIcon className="text-primary size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Technical support</div>
                    <div className="text-muted-foreground mt-1 text-sm">
                      Bug reports, account issues, and platform support.
                    </div>
                    <div className="text-primary mt-2 text-sm font-medium group-hover:underline">
                      support@logisbase.com
                    </div>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary mt-1 size-4 shrink-0 transition-colors" />
                </div>
              </Link>

              {/* Cal.com */}
              <Link
                href="https://cal.com/logisbase/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                data-cta-id="book_demo"
                data-cta-location="contact_sales_page"
                data-cta-variant="primary"
              >
                <div className="bg-card hover:border-primary/50 flex items-start gap-5 rounded-xl border p-6 transition-colors">
                  <div className="bg-background flex size-10 shrink-0 items-center justify-center rounded-lg border">
                    <Calendar className="text-primary size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Book a demo</div>
                    <div className="text-muted-foreground mt-1 text-sm">
                      Schedule a 30-minute personalised demo. We&apos;ll tailor
                      it to your operation and use case.
                    </div>
                    <div className="text-primary mt-2 text-sm font-medium group-hover:underline">
                      Book a time on Cal.com →
                    </div>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary mt-1 size-4 shrink-0 transition-colors" />
                </div>
              </Link>

              {/* Discord */}
              <Link
                href="https://discord.com/invite/HnTqQ6zAVn"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                data-cta-id="join_discord"
                data-cta-location="contact_sales_page"
                data-cta-variant="tertiary"
              >
                <div className="bg-card hover:border-primary/50 flex items-start gap-5 rounded-xl border p-6 transition-colors">
                  <div className="bg-background flex size-10 shrink-0 items-center justify-center rounded-lg border">
                    {/* Discord icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary size-5"
                      aria-hidden="true"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Community Discord</div>
                    <div className="text-muted-foreground mt-1 text-sm">
                      For technical questions, community support, and real-time
                      chat. Our team is active there daily.
                    </div>
                    <div className="text-primary mt-2 text-sm font-medium group-hover:underline">
                      Join the Discord server →
                    </div>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary mt-1 size-4 shrink-0 transition-colors" />
                </div>
              </Link>
            </div>

            {/* FAQ */}
            <div className="mt-14">
              <h3 className="mb-6 text-xl font-semibold">Common questions</h3>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="bg-card rounded-xl border p-6">
                    <div className="mb-2 font-medium">{faq.q}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Free trial nudge */}
            <div className="bg-muted/20 mt-10 rounded-xl border p-6">
              <div className="mb-2 font-semibold">Just want to try it?</div>
              <p className="text-muted-foreground mb-4 text-sm">
                Start a free 7-day trial capped at 50 resource units.
              </p>
              <Button variant="outline" asChild>
                <Link
                  href="https://tally.so/r/68VqOO"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta-id="start_free_trial"
                  data-cta-location="contact_sales_page"
                  data-cta-variant="secondary"
                >
                  Start free trial <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
