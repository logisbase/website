import './true-vegan.css';

import {
  ArrowRight,
  CheckCircle2,
  ChefHat,
  CreditCard,
  ExternalLink,
  Leaf,
  MapPin,
  Navigation,
  Repeat,
  ShoppingBag,
  Store,
  Truck,
  UtensilsCrossed,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'True Vegan × LogisBase — Plant-Based Dining, Delivered on Storefront',
  description:
    'True Vegan, by Chef Rahein, brings plant-based dining to Delray Beach with a branded Storefront customer app — pickup, delivery, and Stripe checkout, all powered by LogisBase.',
  keywords: [
    'True Vegan',
    'Chef Rahein',
    'Storefront app restaurant',
    'LogisBase Storefront case study',
    'vegan restaurant delivery app',
    'plant-based delivery Delray Beach',
  ],
  openGraph: {
    title: 'True Vegan × LogisBase',
    description:
      'How a plant-based restaurant in Delray Beach runs its pickup and delivery operation on a branded LogisBase Storefront app.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `True Vegan × LogisBase`,
    description: `How a plant-based restaurant in Delray Beach runs its pickup and delivery operation on a branded LogisBase Storefront app.`,
  },
  alternates: { canonical: 'https://logisbase.com/true-vegan' },
};

function PhoneFrame({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-[1.75rem] border-4 border-[var(--tv-navy)] bg-[var(--tv-navy)] shadow-[0_30px_80px_-20px_rgba(36,55,71,0.45)] ${className}`}
      style={{ width: 240, height: 480 }}
    >
      <div className="absolute top-0 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-[var(--tv-navy-deep)]" />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="240px"
      />
    </div>
  );
}

const dishes = [
  { icon: UtensilsCrossed, label: 'Falafel & plant burgers' },
  { icon: Leaf, label: 'Quinoa pasta dishes' },
  { icon: ChefHat, label: 'Chef-driven menu' },
  { icon: Store, label: 'Pickup, delivery & in-store' },
];

const stats = [
  { value: 'Daily', label: 'Active orders' },
  { value: 'Stripe', label: 'In-app payments' },
  { value: 'Delray', label: 'Delivery range' },
  { value: '100%', label: 'Plant-based' },
];

const stackParts = [
  {
    icon: Store,
    title: 'Storefront — branded customer app',
    description:
      'A white-label Storefront fork shipped as the True Vegan iOS and Android apps. Catalog, cart, account, and ordering all driven by the Storefront API.',
    docs: '/docs/storefront/app/overview',
  },
  {
    icon: Truck,
    title: 'FleetOps — delivery dispatch',
    description:
      'Every delivery order placed in the app creates a job in FleetOps. The kitchen sees orders the moment they hit; drivers handle delivery via Navigator.',
    docs: '/docs/fleet-ops',
  },
  {
    icon: CreditCard,
    title: 'Stripe — in-app checkout',
    description:
      "Stripe is wired through the LogisBase Ledger payment gateway driver. Customers pay in-app with saved cards; tips and order totals flow into the kitchen's Stripe dashboard.",
    docs: '/docs/ledger/payments/gateways',
  },
  {
    icon: Navigation,
    title: 'Pickup or delivery — same app',
    description:
      'A built-in toggle on the checkout flow lets repeat customers order for pickup or delivery without switching apps or filling forms again.',
    docs: '/docs/storefront',
  },
];

export default function TrueVeganPage() {
  return (
    <div className="true-vegan-page flex flex-col text-[var(--tv-fg)]">
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="tv-hero-bg relative overflow-hidden">
        <div className="relative container pt-24 pb-20 md:pt-28 md:pb-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
            <div className="flex max-w-2xl flex-col gap-7 text-[var(--tv-fg-light)]">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-[var(--tv-blue-soft)]" />
                Customer Story · Delray Beach, FL · Restaurant
              </div>
              <h1 className="text-5xl leading-[0.95] font-semibold tracking-tight text-balance md:text-6xl lg:text-7xl">
                True Vegan brings plant-based dining to your door —{' '}
                <span className="text-[var(--tv-blue-soft)]">
                  on LogisBase Storefront.
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--tv-fg-light-muted)] md:text-xl">
                Chef Rahein&apos;s Delray Beach restaurant runs its pickup and
                delivery operation on a branded Storefront app. Repeat customers
                order in two taps; payments clear through Stripe; every delivery
                dispatches automatically into FleetOps.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-[var(--tv-blue)] font-semibold text-white shadow-lg hover:bg-[var(--tv-blue-soft)]"
                >
                  <Link
                    href="https://true-vegan.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit True Vegan <ExternalLink className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <Link href="/platform/storefront">
                    Explore Storefront <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Phone cluster */}
            <div className="relative hidden h-[520px] lg:block">
              <div className="absolute top-0 right-0 rotate-[5deg]">
                <PhoneFrame
                  src="/images/screenshots/storefront-app/true-vegan/true-vegan-checkout-screen.webp"
                  alt="True Vegan — checkout with delivery map and pickup/delivery toggle"
                />
              </div>
              <div className="absolute top-12 left-0 -rotate-[7deg]">
                <PhoneFrame
                  src="/images/screenshots/storefront-app/true-vegan/true-vegan-home-screen.webp"
                  alt="True Vegan — branded home with chef-driven menu"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About True Vegan ───────────────────────────────────────── */}
      <section className="tv-light-bg py-20 md:py-28">
        <div className="container">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--tv-blue)]/30 bg-[var(--tv-blue)]/10 px-3 py-1 text-xs font-medium text-[var(--tv-navy)]">
                <ChefHat className="size-3.5" />
                By Chef Rahein
              </div>
              <h2 className="text-4xl leading-tight font-semibold tracking-tight text-[var(--tv-navy)] md:text-5xl">
                Plant-based food.{' '}
                <span className="text-[var(--tv-blue)]">
                  Refined and ready.
                </span>
              </h2>
              <p className="text-lg leading-relaxed text-[var(--tv-fg-muted)]">
                True Vegan is a chef-driven plant-based restaurant in Delray
                Beach, Florida. Every dish is built from whole ingredients —
                quinoa pasta, fresh greens, house-made sauces, and
                locally-sourced produce — by Chef Rahein and his kitchen team.
              </p>
              <p className="text-lg leading-relaxed text-[var(--tv-fg-muted)]">
                The restaurant serves three modes through one app: in-store
                dining for walk-ins, pickup for the lunch rush, and direct
                delivery for repeat customers across South Florida. The
                Storefront app makes it fast for someone to reorder their usual
                on the way home from work.
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                {dishes.map((d) => (
                  <div
                    key={d.label}
                    className="flex min-w-0 items-center gap-3 rounded-xl border border-[var(--tv-border-light)] bg-[var(--tv-card)] p-4"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[var(--tv-blue)]/10">
                      <d.icon className="size-4 text-[var(--tv-blue)]" />
                    </div>
                    <span className="truncate text-sm font-medium text-[var(--tv-navy)]">
                      {d.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: products + cart */}
            <div className="grid grid-cols-2 justify-items-center gap-6">
              <PhoneFrame
                src="/images/screenshots/storefront-app/true-vegan/true-vegan-products-screen.webp"
                alt="True Vegan — chef's menu with appetizers, salads, mains"
                className="mt-12"
              />
              <PhoneFrame
                src="/images/screenshots/storefront-app/true-vegan/true-vegan-cart-screen.webp"
                alt="True Vegan — cart with order items and subtotal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Customer experience walkthrough ────────────────────────── */}
      <section className="tv-mid-bg py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--tv-navy)]/20 bg-[var(--tv-navy)]/5 px-3 py-1 text-xs font-medium text-[var(--tv-navy)]">
              <Repeat className="size-3.5" />
              Built for repeat customers
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--tv-navy)] md:text-5xl">
              An app that makes ordering trivial.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--tv-fg-muted)]">
              The Storefront app is tuned for high-frequency reordering. Three
              taps from open to confirmed — even faster for repeat customers
              with saved cards and addresses.
            </p>
          </div>

          <div className="grid justify-items-center gap-6 md:grid-cols-3 lg:gap-8">
            <div className="flex flex-col items-center gap-4">
              <PhoneFrame
                src="/images/screenshots/storefront-app/true-vegan/true-vegan-store-search.webp"
                alt="True Vegan — search and discovery"
              />
              <div className="max-w-[240px] text-center">
                <p className="text-base font-semibold text-[var(--tv-fg-light)]">
                  Search &amp; discover
                </p>
                <p className="mt-1 text-sm leading-snug text-[var(--tv-fg-light-muted)]">
                  Find dishes by name, browse by category, or open a curated
                  chef&apos;s pick straight from the home screen.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <PhoneFrame
                src="/images/screenshots/storefront-app/true-vegan/true-vegan-checkout-screen.webp"
                alt="True Vegan — pickup or delivery toggle on checkout"
              />
              <div className="max-w-[240px] text-center">
                <p className="text-base font-semibold text-[var(--tv-fg-light)]">
                  Pickup or delivery
                </p>
                <p className="mt-1 text-sm leading-snug text-[var(--tv-fg-light-muted)]">
                  One toggle on the checkout flow. Customers pick up or have it
                  delivered without leaving the cart.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <PhoneFrame
                src="/images/screenshots/storefront-app/true-vegan/true-vegan-checkout-tip-payment-2.webp"
                alt="True Vegan — Stripe payment with tip selection"
              />
              <div className="max-w-[240px] text-center">
                <p className="text-base font-semibold text-[var(--tv-fg-light)]">
                  Pay &amp; tip
                </p>
                <p className="mt-1 text-sm leading-snug text-[var(--tv-fg-light-muted)]">
                  Stripe checkout with saved cards, tip selection, and a single
                  confirmation tap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pickup vs Delivery ─────────────────────────────────────── */}
      <section className="bg-[var(--tv-navy)] py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
            <div className="order-2 grid grid-cols-2 justify-items-center gap-6 lg:order-1">
              <PhoneFrame
                src="/images/screenshots/storefront-app/true-vegan/true-vegan-checkout-screen-2.webp"
                alt="True Vegan — checkout map with delivery address"
              />
              <PhoneFrame
                src="/images/screenshots/storefront-app/true-vegan/true-vegan-account-screen.webp"
                alt="True Vegan — customer account with saved addresses"
                className="mt-10"
              />
            </div>

            <div className="order-1 flex flex-col gap-6 text-[var(--tv-fg-light)] lg:order-2">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3 py-1 text-xs font-medium">
                <Truck className="size-3.5" />
                One app · Three modes
              </div>
              <h2 className="text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
                Pickup, delivery, or in-store —{' '}
                <span className="text-[var(--tv-blue-soft)]">same flow.</span>
              </h2>
              <p className="text-lg leading-relaxed text-[var(--tv-fg-light-muted)]">
                Most restaurant apps force customers to choose between pickup
                and delivery upfront, or push delivery into a third-party app
                entirely. True Vegan keeps both modes in a single flow — and the
                in-store experience is just an order placed at the counter by
                the staff.
              </p>
              <ul className="space-y-3">
                {[
                  'Pickup for the lunch rush — order ahead, walk in, walk out',
                  'Delivery via FleetOps — drivers dispatched to repeat customers',
                  'In-store ordering at the counter — same Storefront, staff-side',
                  'Saved addresses + cards make reorder a two-tap action',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--tv-blue-soft)]" />
                    <span className="text-[var(--tv-fg-light-muted)]">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's powering it ─────────────────────────────────────── */}
      <section className="tv-light-bg py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-[var(--tv-navy)] md:text-5xl">
              What&apos;s under the hood.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--tv-fg-muted)]">
              True Vegan didn&apos;t build a delivery platform from scratch.
              They forked LogisBase, wired Stripe in, branded it under their
              kitchen, and shipped to the App Store.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {stackParts.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[var(--tv-border-light)] bg-[var(--tv-card)] p-7 transition-colors hover:border-[var(--tv-blue)]/40"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-[var(--tv-blue)]/10">
                  <p.icon className="size-5 text-[var(--tv-blue)]" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[var(--tv-navy)]">
                  {p.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--tv-fg-muted)]">
                  {p.description}
                </p>
                <Link
                  href={p.docs}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--tv-blue)] hover:underline"
                >
                  Read the docs <ArrowRight className="size-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────────── */}
      <section className="bg-[var(--tv-navy-deep)] py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-semibold text-[var(--tv-blue-soft)] md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-[var(--tv-fg-light-muted)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-[var(--tv-fg-light-muted)]">
            True Vegan operates in Delray Beach, Florida. Independent
            restaurant; not affiliated with LogisBase other than as a Storefront
            customer.
          </p>
        </div>
      </section>

      {/* ── Location ───────────────────────────────────────────────── */}
      <section className="tv-light-bg py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col items-center gap-6">
              <PhoneFrame
                src="/images/screenshots/storefront-app/true-vegan/true-vegan-location-map.webp"
                alt="True Vegan — restaurant location map and details"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--tv-blue)]/30 bg-[var(--tv-blue)]/10 px-3 py-1 text-xs font-medium text-[var(--tv-navy)]">
                <MapPin className="size-3.5" />
                Delray Beach, Florida
              </div>
              <h2 className="text-4xl leading-tight font-semibold tracking-tight text-[var(--tv-navy)] md:text-5xl">
                A restaurant app, not a marketplace.
              </h2>
              <p className="text-lg leading-relaxed text-[var(--tv-fg-muted)]">
                The app focuses on a single restaurant&apos;s menu and a single
                delivery footprint. No third-party menus, no commissions to a
                delivery aggregator, no algorithm pushing competitors. Customers
                download True Vegan because they want True Vegan — and the
                restaurant keeps the relationship.
              </p>
              <p className="text-lg leading-relaxed text-[var(--tv-fg-muted)]">
                The same architecture works for any single-location or
                small-chain restaurant. Storefront supports multi-store and
                network configurations natively if a restaurant expands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="tv-cta-bg relative overflow-hidden py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-[var(--tv-fg-light)]">
            <h2 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance md:text-5xl">
              Want a restaurant app like this?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[var(--tv-fg-light-muted)] md:text-xl">
              Storefront is accessible. Fork it, brand it, ship it — or work
              with our team to set up, configure, and publish a branded customer
              app for your restaurant.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-[var(--tv-blue)] font-semibold text-white shadow-lg hover:bg-[var(--tv-blue-soft)]"
              >
                <Link href="/services/storefront-publishing">
                  Storefront Publishing Service{' '}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href="/platform/storefront">Explore Storefront</Link>
              </Button>
            </div>
            <p className="mt-8 text-xs text-[var(--tv-fg-light-muted)]">
              True Vegan is operated by Chef Rahein in Delray Beach, Florida.
              Independent deployment of the source-accessible LogisBase
              Storefront app.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
