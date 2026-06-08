import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Truck,
  Utensils,
  Package,
  ShoppingCart,
  Heart,
  Recycle,
  Ship,
  Shield,
  MapPin,
  Navigation,
  ClipboardList,
  BarChart3,
  Zap,
  UserCog,
  Briefcase,
  Code,
  Users,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/solutions' },
  title: 'Logistics Solutions by Industry, Use Case & Role | LogisBase',
  description:
    'Source-available logistics platform for every operation — trucking, food delivery, healthcare, container logistics, government, and more. Explore solutions by industry, use case, and role.',
  keywords: [
    'logistics software solutions',
    'fleet management platform',
    'delivery management software',
    'source-available logistics',
    'logistics by industry',
  ],
  openGraph: {
    title: 'Logistics Solutions by Industry, Use Case & Role | LogisBase',
    description:
      'The source-available logistics platform that adapts to your operation — not the other way around.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Logistics Solutions by Industry, Use Case & Role | LogisBase`,
    description: `The source-available logistics platform that adapts to your operation — not the other way around.`,
  },
};

const BY_INDUSTRY = [
  {
    label: 'Trucking & Haulage',
    href: '/solutions/trucking',
    description:
      'Cut deadhead miles, automate POD capture, and give your customers real-time freight visibility without carrier dependency.',
    icon: Truck,
  },
  {
    label: 'Food & Grocery Delivery',
    href: '/solutions/food-delivery',
    description:
      'Deliver hot, fresh, and on time. Smart dispatch, live customer tracking, and temperature monitoring for every run.',
    icon: Utensils,
  },
  {
    label: 'Courier & Parcel Services',
    href: '/solutions/courier-services',
    description:
      'Handle any volume, any parcel type. Automated dispatch, multi-carrier support, and same-day delivery capability built in.',
    icon: Package,
  },
  {
    label: 'E-commerce & Retail',
    href: '/solutions/ecommerce',
    description:
      'Own your last mile. Branded tracking, same-day dispatch, and returns management — without paying carrier fees on every order.',
    icon: ShoppingCart,
  },
  {
    label: 'Healthcare & Pharmacy',
    href: '/solutions/healthcare',
    description:
      'Chain-of-custody for every delivery, priority dispatch for urgent items, and patient data that stays in your infrastructure.',
    icon: Heart,
  },
  {
    label: 'Waste & Recycling',
    href: '/solutions/waste-management',
    description:
      'Collect more, drive less. Route optimization, compliance reporting, and container tracking for waste operators.',
    icon: Recycle,
  },
  {
    label: 'Container Operations',
    href: '/solutions/container-operations',
    description:
      'Full container visibility from port to door — tracking, documentation, yard management, and demurrage prevention.',
    icon: Ship,
  },
  {
    label: 'Military & Government',
    href: '/solutions/government',
    description:
      'Self-hosted, air-gap capable, and fully auditable. Data sovereignty and RBAC by design — not as an afterthought.',
    icon: Shield,
  },
];

const BY_USE_CASE = [
  {
    label: 'Last-Mile Delivery',
    href: '/solutions/use-cases/last-mile-delivery',
    description:
      'Raise your first-attempt delivery rate, automate dispatch, and give customers the live tracking that stops support calls.',
    icon: MapPin,
  },
  {
    label: 'Route Optimization',
    href: '/solutions/use-cases/route-optimization',
    description:
      'Cut fuel spend by 28% and deliver more stops per shift with multi-constraint routing that works in real time.',
    icon: Navigation,
  },
  {
    label: 'Fleet Management',
    href: '/solutions/use-cases/fleet-management',
    description:
      'Every vehicle tracked, every compliance deadline met, every breakdown caught before it happens.',
    icon: Truck,
  },
  {
    label: 'Order Management',
    href: '/solutions/use-cases/order-management',
    description:
      'Custom order types, custom workflows, custom SLAs — one platform flexible enough for every operation.',
    icon: ClipboardList,
  },
  {
    label: 'Analytics & Reporting',
    href: '/solutions/use-cases/analytics',
    description:
      'Stop managing your logistics operation by feel. Live dashboards, cost analysis, and SLA reporting from your own data.',
    icon: BarChart3,
  },
  {
    label: 'API & Integrations',
    href: '/solutions/use-cases/integrations',
    description:
      'API-first from the ground up. Connect any OMS, WMS, or ERP — or build custom workflows with the Extensions SDK.',
    icon: Zap,
  },
];

const BY_ROLE = [
  {
    label: 'Operations Managers',
    href: '/solutions/roles/operations-managers',
    description:
      'Live dispatch visibility, automated SLA alerting, and performance reporting — without switching between systems.',
    icon: UserCog,
  },
  {
    label: 'Fleet Managers',
    href: '/solutions/roles/fleet-managers',
    description:
      'Complete fleet visibility with predictive maintenance, compliance tracking, and driver performance management.',
    icon: Truck,
  },
  {
    label: 'Developers & IT',
    href: '/solutions/roles/developers',
    description:
      'Source-available, API-first, self-hostable, and built to be extended. The logistics platform engineers want to work with.',
    icon: Code,
  },
  {
    label: 'Executives & Leadership',
    href: '/solutions/roles/executives',
    description:
      'Lower cost of ownership, data sovereignty, and the ROI visibility that justifies every logistics investment.',
    icon: Briefcase,
  },
  {
    label: 'Warehouse Managers',
    href: '/solutions/roles/warehouse-managers',
    description:
      'From pick list to dispatch — Pallet WMS connects your warehouse directly to your delivery operation.',
    icon: Package,
  },
  {
    label: 'Customer Success Teams',
    href: '/solutions/roles/customer-success',
    description:
      'Resolve every delivery query in under a minute. Live tracking, instant POD retrieval, and proactive notifications.',
    icon: Users,
  },
];

interface SolutionCardProps {
  label: string;
  href: string;
  description: string;
  icon: React.ElementType;
}

function SolutionCard({
  label,
  href,
  description,
  icon: Icon,
}: SolutionCardProps) {
  return (
    <Link
      href={href}
      className="group bg-card hover:border-primary/40 hover:bg-accent/30 flex flex-col gap-3 rounded-xl border p-5 transition-all duration-200 hover:shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="bg-background flex size-9 items-center justify-center rounded-lg border">
          <Icon className="text-foreground size-4.5" />
        </div>
        <span className="text-sm leading-tight font-semibold">{label}</span>
      </div>
      <p className="text-muted-foreground flex-1 text-xs leading-relaxed">
        {description}
      </p>
      <div className="text-primary flex items-center gap-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
        Explore {label} <ArrowRight className="size-3" />
      </div>
    </Link>
  );
}

interface SectionProps {
  title: string;
  subtitle: string;
  description: string;
  items: SolutionCardProps[];
}

function SolutionSection({
  title,
  subtitle,
  description,
  items,
}: SectionProps) {
  return (
    <section className="py-14 md:py-18">
      <div className="container">
        <div className="mb-8 max-w-2xl">
          <div className="text-muted-foreground mb-3 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
            {title}
          </div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
            {subtitle}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <SolutionCard key={item.href} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-muted-foreground mb-6 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
              Solutions
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Built for every{' '}
              <span className="text-gradient">logistics operation</span>
            </h1>
            <p className="text-muted-foreground mx-auto mb-10 max-w-xl text-lg leading-relaxed">
              Whether you run 2 vehicles or 2,000, LogisBase adapts to your
              industry, your workflows, and your team — without per-seat fees or
              vendor lock-in.
            </p>
            {/* Trust bar */}
            <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="bg-primary inline-block size-1.5 rounded-full" />
                8,000+ active operations
              </span>
              <span className="flex items-center gap-1.5">
                <span className="bg-primary inline-block size-1.5 rounded-full" />
                10M+ orders processed
              </span>
              <span className="flex items-center gap-1.5">
                <span className="bg-primary inline-block size-1.5 rounded-full" />
                Source-available · No per-seat pricing
              </span>
              <span className="flex items-center gap-1.5">
                <span className="bg-primary inline-block size-1.5 rounded-full" />
                7-day free trial
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* By Industry */}
      <SolutionSection
        title="By Industry"
        subtitle="Solutions built for how your vertical actually works"
        description="Every industry has different compliance requirements, different operational rhythms, and different customer expectations. Find the solution built for yours."
        items={BY_INDUSTRY}
      />

      {/* Divider */}
      <div className="container">
        <div className="border-t" />
      </div>

      {/* By Use Case */}
      <SolutionSection
        title="By Use Case"
        subtitle="Solve the specific operational challenges costing you most"
        description="From route optimization to compliance reporting — LogisBase solves the individual problems your operation faces, not just the general category."
        items={BY_USE_CASE}
      />

      {/* Divider */}
      <div className="container">
        <div className="border-t" />
      </div>

      {/* By Role */}
      <SolutionSection
        title="By Role"
        subtitle="Designed for the people who run logistics every day"
        description="Operations managers, fleet managers, developers, executives — each role gets the view and tools they need without the noise they don't."
        items={BY_ROLE}
      />

      {/* Bottom CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="from-primary/5 to-primary/10 relative overflow-hidden rounded-2xl border bg-gradient-to-br via-transparent px-8 py-12 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="bg-primary/5 absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl" />
            </div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">
              Not sure where to start?
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-md">
              Talk to our team. We&apos;ll map LogisBase to your exact operation
              — industry, team, and workflows — in 30 minutes.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="https://console.logisbase.com/onboard"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium transition-colors"
              >
                Start Free Trial <ArrowRight className="size-4" />
              </Link>
              <Link
                href="https://cal.com/logisbase/demo"
                className="hover:bg-accent inline-flex items-center justify-center gap-2 rounded-md border px-6 py-2.5 text-sm font-medium transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
