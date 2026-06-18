import { ArrowRight, CheckCircle2, Minus, XCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'LogisBase vs Tookan | Source-Accessible Tookan Alternative',
  description:
    'Compare LogisBase vs Tookan. LogisBase is the source-accessible Tookan alternative with no agent-based pricing, self-hosting, full API access, and a complete logistics platform. See the full comparison.',
  keywords: [
    'Tookan alternative',
    'LogisBase vs Tookan',
    'source-accessible Tookan alternative',
    'delivery management software alternative to Tookan',
    'Tookan competitor',
    'cheaper than Tookan',
    'Tookan self hosted alternative',
  ],
  openGraph: {
    title: 'LogisBase vs Tookan | Source-Accessible Tookan Alternative',
    description:
      'Compare LogisBase vs Tookan. No agent-based pricing, self-hosting, full API access. The source-accessible alternative to Tookan.',
    images: [
      {
        url: '/og?title=LogisBase%20vs%20Tookan&eyebrow=Compare&subtitle=The%20source-accessible%20alternative%20to%20Tookan%20%E2%80%94%20no%20agent-based%20pricing%2C%20self-hosted%20or%20cloud.',
        width: 1200,
        height: 630,
        alt: 'LogisBase vs Tookan — source-accessible Tookan alternative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LogisBase vs Tookan',
    description:
      'The source-accessible Tookan alternative — no agent-based pricing, self-hosted or cloud.',
    images: [
      '/og?title=LogisBase%20vs%20Tookan&eyebrow=Compare&subtitle=The%20source-accessible%20alternative%20to%20Tookan%20%E2%80%94%20no%20agent-based%20pricing%2C%20self-hosted%20or%20cloud.',
    ],
  },
  alternates: { canonical: 'https://logisbase.com/compare/vs-tookan' },
};

type FeatureRow = {
  feature: string;
  logisbase: string | boolean;
  tookan: string | boolean;
  note?: string;
};

const COMPARISON: FeatureRow[] = [
  { feature: 'Source-accessible', logisbase: true, tookan: false },
  { feature: 'Self-Hosted Deployment', logisbase: true, tookan: false },
  { feature: 'Cloud Hosting', logisbase: true, tookan: true },
  {
    feature: 'Free Tier',
    logisbase: 'Free trial + source-accessible',
    tookan: 'Free plan (200 tasks/mo)',
  },
  {
    feature: 'Pricing Model',
    logisbase: 'Usage-based (from $25/mo)',
    tookan: 'Per-agent + per-task fees',
  },
  {
    feature: 'Per-Agent Fees',
    logisbase: false,
    tookan: true,
    note: 'Tookan charges per agent/driver',
  },
  { feature: 'Real-Time GPS Tracking', logisbase: true, tookan: true },
  { feature: 'Route Optimization', logisbase: true, tookan: true },
  { feature: 'Automated Dispatch', logisbase: true, tookan: true },
  {
    feature: 'Driver Mobile App',
    logisbase: 'Source-accessible (Navigator)',
    tookan: 'Proprietary',
  },
  { feature: 'Proof of Delivery (POD)', logisbase: true, tookan: true },
  { feature: 'Customer Notifications', logisbase: true, tookan: true },
  { feature: 'White-Label Branding', logisbase: true, tookan: 'Paid add-on' },
  { feature: 'Full REST API', logisbase: true, tookan: 'Limited' },
  { feature: 'Webhooks', logisbase: true, tookan: true },
  {
    feature: 'Extensions / Marketplace',
    logisbase: true,
    tookan: 'Limited integrations',
  },
  {
    feature: 'Multi-Tenant / Multi-Org',
    logisbase: true,
    tookan: 'Enterprise only',
  },
  {
    feature: 'Warehouse Management (WMS)',
    logisbase: 'Pallet WMS included',
    tookan: false,
  },
  { feature: 'Storefront / Online Ordering', logisbase: true, tookan: false },
  { feature: 'Accounting / Ledger', logisbase: true, tookan: false },
  { feature: 'Custom Extensions / SDK', logisbase: true, tookan: false },
  {
    feature: 'Data Ownership',
    logisbase: 'Full — self-host or export',
    tookan: 'Vendor-controlled',
  },
  {
    feature: 'Community Support',
    logisbase: 'Discord + GitHub',
    tookan: 'Email only',
  },
  { feature: 'Enterprise SLA Support', logisbase: true, tookan: true },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />;
  if (value === false)
    return <XCircle className="mx-auto h-5 w-5 text-red-400" />;
  return <span className="block text-center text-sm">{value}</span>;
}

export default function VsTookanPage() {
  return (
    <div className="min-h-screen">
      <SoftwareApplicationSchema
        name="Tookan"
        url="https://tookanapp.com"
        description="Delivery management and dispatch software with per-agent and per-task pricing — closed-source SaaS."
      />

      {/* Hero */}
      <section className="section-padding from-muted/30 to-background border-b bg-gradient-to-b">
        <div className="container max-w-5xl space-y-6 text-center">
          <Breadcrumbs
            className="justify-center [&_ol]:justify-center"
            items={[
              { label: 'Compare', href: '/compare' },
              { label: 'LogisBase vs Tookan', href: '/compare/vs-tookan' },
            ]}
          />
          <div className="text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            Comparison
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            LogisBase vs Tookan
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
            Tookan charges per agent and per task — costs that compound fast as
            your team grows. LogisBase is the source-accessible alternative with
            predictable usage-based pricing, self-hosting, and a full logistics
            platform built in.
          </p>
          <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://tally.so/r/68vqoo">
                Try LogisBase Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section className="border-b py-16 md:py-20">
        <div className="container max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold">
            Why teams switch from Tookan to LogisBase
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'No per-agent pricing',
                description:
                  'Tookan charges per agent — the more drivers you add, the more you pay. LogisBase uses resource units: one flat pool that covers orders, drivers, vehicles, and API calls.',
              },
              {
                title: 'Source-accessible & self-hostable',
                description:
                  'Tookan is closed-source and cloud-only. LogisBase is fully source-accessibleL. Deploy on your own servers, keep your data, and never worry about vendor lock-in.',
              },
              {
                title: 'A complete logistics OS',
                description:
                  'Tookan handles dispatch. LogisBase includes dispatch, WMS (Pallet), storefront, accounting (Ledger), driver app (Navigator), and an extensions marketplace — one platform for everything.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl border p-6">
                <CheckCircle2 className="mb-3 h-6 w-6 text-green-500" />
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Full Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/40 border-b">
                  <th className="w-1/2 px-4 py-3 text-left font-semibold">
                    Feature
                  </th>
                  <th className="text-primary w-1/4 px-4 py-3 text-center font-semibold">
                    LogisBase
                  </th>
                  <th className="text-muted-foreground w-1/4 px-4 py-3 text-center font-semibold">
                    Tookan
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}
                  >
                    <td className="px-4 py-3 font-medium">
                      {row.feature}
                      {row.note && (
                        <span className="text-muted-foreground mt-0.5 block text-xs">
                          {row.note}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Cell value={row.logisbase} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Cell value={row.tookan} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-16 md:py-20">
        <div className="container max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to switch from Tookan?
          </h2>
          <p className="text-muted-foreground text-lg">
            Migrate your operations to LogisBase in days. Our team provides free
            migration support for teams coming from Tookan.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://tally.so/r/68vqoo">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://cal.com/logisbase/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to Sales
              </Link>
            </Button>
          </div>
          <p className="text-muted-foreground text-sm">
            {' '}
            Free migration support · Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
