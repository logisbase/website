import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, XCircle, ArrowRight, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'LogisBase vs Onfleet | Source-Available Onfleet Alternative',
  description:
    'Compare LogisBase vs Onfleet. LogisBase is the source-available Onfleet alternative with no per-task pricing, self-hosting, full API access, and a free tier. See the full feature comparison.',
  keywords: [
    'Onfleet alternative',
    'LogisBase vs Onfleet',
    'source-available Onfleet alternative',
    'delivery management software alternative to Onfleet',
    'Onfleet competitor',
    'cheaper than Onfleet',
    'Onfleet self hosted alternative',
  ],
  openGraph: {
    title: 'LogisBase vs Onfleet | Source-Available Onfleet Alternative',
    description:
      'Compare LogisBase vs Onfleet. No per-task pricing, self-hosting, full API access, and a free tier. The source-available alternative to Onfleet.',
    images: [
      {
        url: '/og?title=LogisBase%20vs%20Onfleet&eyebrow=Compare&subtitle=The%20source-available%20alternative%20to%20Onfleet%20%E2%80%94%20no%20per-task%20pricing%2C%20self-hosted%20or%20cloud.',
        width: 1200,
        height: 630,
        alt: 'LogisBase vs Onfleet — source-available Onfleet alternative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LogisBase vs Onfleet',
    description:
      'The source-available Onfleet alternative — no per-task pricing, self-hosted or cloud.',
    images: [
      '/og?title=LogisBase%20vs%20Onfleet&eyebrow=Compare&subtitle=The%20source-available%20alternative%20to%20Onfleet%20%E2%80%94%20no%20per-task%20pricing%2C%20self-hosted%20or%20cloud.',
    ],
  },
  alternates: { canonical: 'https://logisbase.com/compare/vs-onfleet' },
};

type FeatureRow = {
  feature: string;
  logisbase: string | boolean;
  onfleet: string | boolean;
  note?: string;
};

const COMPARISON: FeatureRow[] = [
  { feature: 'Source-available', logisbase: true, onfleet: false },
  { feature: 'Self-Hosted Deployment', logisbase: true, onfleet: false },
  { feature: 'Cloud Hosting', logisbase: true, onfleet: true },
  {
    feature: 'Free Tier / Trial',
    logisbase: 'Free trial + source-available',
    onfleet: '14-day trial only',
  },
  {
    feature: 'Pricing Model',
    logisbase: 'Usage-based (from $50/mo)',
    onfleet: 'Per-task pricing (expensive at scale)',
  },
  {
    feature: 'Per-Task Fees',
    logisbase: false,
    onfleet: true,
    note: 'Onfleet charges per task at higher tiers',
  },
  { feature: 'Real-Time GPS Tracking', logisbase: true, onfleet: true },
  { feature: 'Route Optimization', logisbase: true, onfleet: true },
  { feature: 'Automated Dispatch', logisbase: true, onfleet: true },
  {
    feature: 'Driver Mobile App',
    logisbase: 'Free source-available (Navigator)',
    onfleet: 'Proprietary',
  },
  { feature: 'Proof of Delivery (POD)', logisbase: true, onfleet: true },
  { feature: 'Customer Notifications', logisbase: true, onfleet: true },
  {
    feature: 'White-Label Branding',
    logisbase: true,
    onfleet: 'Enterprise only',
  },
  { feature: 'Full REST API', logisbase: true, onfleet: 'Limited' },
  { feature: 'Webhooks', logisbase: true, onfleet: true },
  { feature: 'Extensions / Marketplace', logisbase: true, onfleet: false },
  {
    feature: 'Multi-Tenant / Multi-Org',
    logisbase: true,
    onfleet: 'Enterprise only',
  },
  {
    feature: 'Warehouse Management (WMS)',
    logisbase: 'Pallet WMS included',
    onfleet: false,
  },
  { feature: 'Storefront / Online Ordering', logisbase: true, onfleet: false },
  { feature: 'Accounting / Ledger', logisbase: true, onfleet: false },
  { feature: 'Custom Extensions / SDK', logisbase: true, onfleet: false },
  {
    feature: 'Data Ownership',
    logisbase: 'Full — self-host or export',
    onfleet: 'Vendor-controlled',
  },
  {
    feature: 'Community Support',
    logisbase: 'Discord + GitHub',
    onfleet: 'Forum only',
  },
  { feature: 'Enterprise SLA Support', logisbase: true, onfleet: true },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />;
  if (value === false)
    return <XCircle className="mx-auto h-5 w-5 text-red-400" />;
  return <span className="block text-center text-sm">{value}</span>;
}

export default function VsOnfleetPage() {
  return (
    <div className="min-h-screen">
      <SoftwareApplicationSchema
        name="Onfleet"
        url="https://onfleet.com"
        description="Last-mile delivery management software for dispatch, routing, and proof of delivery — closed-source, per-task pricing."
      />

      {/* Hero */}
      <section className="section-padding from-muted/30 to-background border-b bg-gradient-to-b">
        <div className="container max-w-5xl space-y-6 text-center">
          <Breadcrumbs
            className="justify-center [&_ol]:justify-center"
            items={[
              { label: 'Compare', href: '/compare' },
              { label: 'LogisBase vs Onfleet', href: '/compare/vs-onfleet' },
            ]}
          />
          <div className="text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            Comparison
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            LogisBase vs Onfleet
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
            Onfleet is a solid delivery management tool — but it charges per
            task, locks you into their cloud, and gives you no access to the
            source code. LogisBase is the source-available alternative that
            scales without punishing you for growth.
          </p>
          <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://console.logisbase.com/onboard">
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
            Why teams switch from Onfleet to LogisBase
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'No per-task pricing',
                description:
                  "Onfleet's per-task model means your costs spike every time you grow. LogisBase uses usage-based resource units — predictable, flat pricing that doesn't punish scale.",
              },
              {
                title: 'Self-host or cloud',
                description:
                  'Onfleet is cloud-only. LogisBase can be deployed on your own infrastructure — AWS, GCP, Azure, or bare metal. Your data stays where you want it.',
              },
              {
                title: 'Full platform, not just dispatch',
                description:
                  'Onfleet is a dispatch tool. LogisBase includes dispatch, WMS (Pallet), storefront, accounting (Ledger), driver app (Navigator), and an extensions marketplace — all in one.',
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
                    Onfleet
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
                      <Cell value={row.onfleet} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="bg-muted/20 border-t py-16 md:py-20">
        <div className="container max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Pricing Comparison
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-card rounded-xl border p-8">
              <div className="text-primary mb-2 text-sm font-semibold">
                LogisBase
              </div>
              <div className="mb-1 text-4xl font-bold">
                $25
                <span className="text-muted-foreground text-lg font-normal">
                  /mo
                </span>
              </div>
              <p className="text-muted-foreground mb-6 text-sm">
                Micro cloud plan — 100 resource units included. Scale up as you
                grow. Self-hosted from $2,500 one-time.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  'Usage-based, not per-task',
                  'No seat fees',
                  'Self-hosting available',
                  'Full API access',
                  'Source-available — free forever if self-hosted',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl border p-8">
              <div className="text-muted-foreground mb-2 text-sm font-semibold">
                Onfleet
              </div>
              <div className="mb-1 text-4xl font-bold">
                $550
                <span className="text-muted-foreground text-lg font-normal">
                  /mo
                </span>
              </div>
              <p className="text-muted-foreground mb-6 text-sm">
                Launch plan — 2,000 tasks/month. Additional tasks charged
                per-task. Scales expensively.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  'Per-task pricing at scale',
                  'Cloud-only',
                  'No self-hosting',
                  'Limited API access',
                  'Closed source',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Minus className="text-muted-foreground h-4 w-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-16 md:py-20">
        <div className="container max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to switch from Onfleet?
          </h2>
          <p className="text-muted-foreground text-lg">
            Migrate your operations to LogisBase in days, not months. Our team
            provides free migration support for teams coming from Onfleet.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://console.logisbase.com/onboard">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href={`https://cal.com/logisbase/demo`}
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
