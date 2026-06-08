'use client';

import {
  ArrowRight,
  BarChart3,
  CreditCard,
  FileText,
  Receipt,
  RefreshCw,
  Wallet,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Receipt,
    title: 'Automated Invoicing',
    desc: 'Generate professional invoices automatically on order completion. Apply custom branding, tax rules, and payment terms.',
  },
  {
    icon: Wallet,
    title: 'Driver & Stakeholder Wallets',
    desc: 'Manage digital wallets for drivers, vendors, and partners. Track earnings, payouts, and balance history in one place.',
  },
  {
    icon: BarChart3,
    title: 'Financial Reporting',
    desc: 'Real-time P&L, revenue by route, cost-per-delivery, and cash flow dashboards — built for logistics finance teams.',
  },
  {
    icon: RefreshCw,
    title: 'Billing & Reconciliation',
    desc: 'Reconcile payments across multiple customers and service types. Reduce billing disputes with a full audit trail.',
  },
  {
    icon: CreditCard,
    title: 'Payment Gateway Integration',
    desc: 'Connect Stripe, PayPal, and regional gateways. Accept payments online and auto-reconcile against orders.',
  },
  {
    icon: FileText,
    title: 'Chart of Accounts',
    desc: 'Full double-entry accounting with a customisable chart of accounts. Export to your ERP or accounting software.',
  },
];

export default function LedgerShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      className="section-padding from-muted/20 to-background bg-gradient-to-b"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
            <span className="text-primary">●</span>
            <span>Ledger — Finance & Billing</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Close the Loop on{' '}
            <span className="text-primary">Logistics Finance</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ledger brings financial operations directly into your logistics
            workflow. From automated invoicing to driver wallets and full
            reconciliation — manage money the same way you manage movement.
          </p>
        </motion.div>

        {/* Main content — screenshot + features */}
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border shadow-2xl">
              <Image
                src="/images/screenshots/ledger/ledger-balance-sheet.webp"
                alt="LogisBase Ledger balance sheet showing assets, liabilities, and equity totals generated automatically from logistics operations"
                fill
                className="object-cover object-top"
                unoptimized
              />
              {/* Overlay badge */}
              <div className="bg-background/90 absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border px-3 py-2 backdrop-blur-sm">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-xs font-medium">Live financial data</span>
              </div>
            </div>
            {/* Floating stat card */}
            <div className="bg-card absolute -right-4 -bottom-6 hidden rounded-xl border px-4 py-3 shadow-lg md:block">
              <div className="text-primary text-2xl font-bold">100%</div>
              <div className="text-muted-foreground text-xs">
                Audit trail coverage
              </div>
            </div>
          </motion.div>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="bg-card hover:border-primary/50 rounded-lg border p-4 transition-colors"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="bg-primary/10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md">
                    <feature.icon className="text-primary h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card flex flex-col items-center justify-between gap-6 rounded-2xl border p-8 md:flex-row"
        >
          <div>
            <h3 className="mb-1 text-xl font-bold">
              Ready to unify your logistics finance?
            </h3>
            <p className="text-muted-foreground text-sm">
              Ledger is included in every LogisBase plan. No additional cost. No
              separate finance tool needed.
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-3">
            <Button asChild>
              <Link href="/platform/ledger">
                Explore Ledger <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://cal.com/logisbase/demo"
                target="_blank"
                rel="noopener noreferrer"
                data-cta-id="contact_sales"
                data-cta-location="ledger_showcase"
                data-cta-variant="secondary"
              >
                Talk to Sales
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
