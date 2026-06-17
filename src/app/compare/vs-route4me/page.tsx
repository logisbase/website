import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'LogisBase vs Route4Me | Source-Accessible Route4Me Alternative',
  description:
    'Compare LogisBase vs Route4Me. LogisBase is the source-accessible Route4Me alternative with full dispatch, fleet management, driver app, and route optimization — no per-route fees.',
  keywords: [
    'Route4Me alternative',
    'LogisBase vs Route4Me',
    'source-accessible route optimization software',
    'route planning software alternative',
    'Route4Me competitor',
    'cheaper than Route4Me',
    'fleet management with route optimization',
  ],
  openGraph: {
    title: 'LogisBase vs Route4Me | Source-Accessible Route4Me Alternative',
    description:
      'Compare LogisBase vs Route4Me. Full dispatch, fleet management, driver app, and route optimization — no per-route fees.',
    images: [
      {
        url: '/og?title=LogisBase%20vs%20Route4Me&eyebrow=Compare&subtitle=Source-accessible%20alternative%20with%20dispatch%2C%20fleet%20management%2C%20driver%20app%2C%20and%20route%20optimization%20built%20in.',
        width: 1200,
        height: 630,
        alt: 'LogisBase vs Route4Me — source-accessible Route4Me alternative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LogisBase vs Route4Me',
    description:
      'Source-accessible alternative with dispatch, fleet management, driver app, and route optimization built in.',
    images: [
      '/og?title=LogisBase%20vs%20Route4Me&eyebrow=Compare&subtitle=Source-accessible%20alternative%20with%20dispatch%2C%20fleet%20management%2C%20driver%20app%2C%20and%20route%20optimization%20built%20in.',
    ],
  },
  alternates: { canonical: 'https://logisbase.com/compare/vs-route4me' },
};

type FeatureRow = {
  feature: string;
  logisbase: string | boolean;
  route4me: string | boolean;
  note?: string;
};

const COMPARISON: FeatureRow[] = [
  { feature: 'Source-accessible', logisbase: true, route4me: false },
  { feature: 'Self-Hosted Deployment', logisbase: true, route4me: false },
  { feature: 'Cloud Hosting', logisbase: true, route4me: true },
  {
    feature: 'Free Tier',
    logisbase: 'Free trial + source-accessible',
    route4me: '7-day trial only',
  },
  {
    feature: 'Pricing Model',
    logisbase: 'Usage-based (from $25/mo)',
    route4me: 'Per-route + per-driver fees',
  },
  { feature: 'Route Optimization', logisbase: true, route4me: true },
  { feature: 'Real-Time GPS Tracking', logisbase: true, route4me: true },
  { feature: 'Automated Dispatch', logisbase: true, route4me: 'Limited' },
  {
    feature: 'Driver Mobile App',
    logisbase: 'Source-accessible (Navigator)',
    route4me: 'Proprietary (extra cost)',
  },
  { feature: 'Proof of Delivery (POD)', logisbase: true, route4me: true },
  {
    feature: 'Customer Notifications',
    logisbase: true,
    route4me: 'Paid add-on',
  },
  {
    feature: 'Fleet Management',
    logisbase: 'Full FleetOps module',
    route4me: 'Basic',
  },
  { feature: 'Driver Management', logisbase: true, route4me: 'Limited' },
  { feature: 'Vehicle Management', logisbase: true, route4me: 'Limited' },
  { feature: 'Full REST API', logisbase: true, route4me: 'Limited' },
  { feature: 'Webhooks', logisbase: true, route4me: 'Limited' },
  { feature: 'White-Label Branding', logisbase: true, route4me: false },
  {
    feature: 'Warehouse Management (WMS)',
    logisbase: 'Pallet WMS included',
    route4me: false,
  },
  { feature: 'Storefront / Online Ordering', logisbase: true, route4me: false },
  { feature: 'Accounting / Ledger', logisbase: true, route4me: false },
  {
    feature: 'Multi-Tenant / Multi-Org',
    logisbase: true,
    route4me: 'Enterprise only',
  },
  { feature: 'Custom Extensions / SDK', logisbase: true, route4me: false },
  {
    feature: 'Data Ownership',
    logisbase: 'Full — self-host or export',
    route4me: 'Vendor-controlled',
  },
  {
    feature: 'Community Support',
    logisbase: 'Discord + GitHub',
    route4me: 'Email only',
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return <CheckCircle2 className="mx-auto h-5 w-5 text-green-500" />;
  if (value === false)
    return <XCircle className="mx-auto h-5 w-5 text-red-400" />;
  return <span className="block text-center text-sm">{value}</span>;
}

export default function VsRoute4MePage() {
  return (
    <div className="min-h-screen">
      <SoftwareApplicationSchema
        name="Route4Me"
        url="https://route4me.com"
        description="Route planning and optimization software focused on last-mile delivery routing — closed-source SaaS."
      />

      {/* Hero */}
      <section className="section-padding from-muted/30 to-background border-b bg-gradient-to-b">
        <div className="container max-w-5xl space-y-6 text-center">
          <Breadcrumbs
            className="justify-center [&_ol]:justify-center"
            items={[
              { label: 'Compare', href: '/compare' },
              { label: 'LogisBase vs Route4Me', href: '/compare/vs-route4me' },
            ]}
          />
          <div className="text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            Comparison
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            LogisBase vs Route4Me
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
            Route4Me is a route planning tool. LogisBase is a complete
            source-accessible fleet management and TMS platform — with route
            optimization built in, plus dispatch, driver management, WMS,
            storefront, and accounting.
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
            Why teams choose LogisBase over Route4Me
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'More than route planning',
                description:
                  'Route4Me optimizes routes. LogisBase does that and much more — full dispatch, real-time tracking, driver management, POD capture, WMS, and storefront all in one platform.',
              },
              {
                title: 'Source-accessible & self-hostable',
                description:
                  'Route4Me is closed-source and cloud-only. LogisBase is fully source-accessible. Deploy on your own infrastructure and keep full control of your data.',
              },
              {
                title: 'No per-route fees',
                description:
                  'Route4Me charges per route and per driver. LogisBase uses resource units — one predictable pool that covers everything. No surprise bills as you scale.',
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
                    Route4Me
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
                      <Cell value={row.route4me} />
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
            Ready to switch from Route4Me?
          </h2>
          <p className="text-muted-foreground text-lg">
            Get route optimization plus a complete fleet management platform.
            Our team provides free onboarding for teams migrating from Route4Me.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://console.logisbase.com/onboard">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
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
