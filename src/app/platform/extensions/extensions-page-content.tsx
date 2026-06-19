'use client';

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Box,
  CheckCircle2,
  Code2,
  CreditCard,
  DollarSign,
  Map,
  MessageSquare,
  Package,
  Plug,
  PuzzleIcon,
  Search,
  Shield,
  ShoppingBag,
  Star,
  Truck,
  Upload,
  Users,
  Warehouse,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaStripe } from 'react-icons/fa';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/ui/code-block';

const categories = [
  { icon: Truck, name: 'Fleet & Dispatch', count: 12 },
  { icon: Map, name: 'Mapping & Routing', count: 8 },
  { icon: CreditCard, name: 'Payments & Billing', count: 9 },
  { icon: Warehouse, name: 'Inventory & WMS', count: 6 },
  { icon: Plug, name: 'Integrations', count: 15 },
  { icon: BarChart3, name: 'Analytics & Reports', count: 7 },
  { icon: MessageSquare, name: 'Communication', count: 5 },
  { icon: Shield, name: 'Security & Auth', count: 4 },
];

// First-party + community-built integrations available natively or through
// extensions. Logos: simpleicons CDN where available, otherwise self-hosted
// under /public/images/integrations/.
const INTEGRATIONS: { name: string; category: string; logo: string }[] = [
  // Maps & Location
  {
    name: 'Google Maps',
    category: 'Maps & Location',
    logo: 'https://cdn.simpleicons.org/googlemaps/4285F4',
  },
  {
    name: 'OpenStreetMap',
    category: 'Maps & Location',
    logo: 'https://cdn.simpleicons.org/openstreetmap/7EBC6F',
  },
  // Routing & Optimization
  {
    name: 'OSRM',
    category: 'Routing & Optimization',
    logo: '/images/integrations/osrm.svg',
  },
  {
    name: 'Valhalla',
    category: 'Routing & Optimization',
    logo: '/images/integrations/valhalla.svg',
  },
  {
    name: 'VROOM',
    category: 'Routing & Optimization',
    logo: '/images/integrations/vroom.png',
  },
  // Telematics & Fleet Hardware
  {
    name: 'Flespi',
    category: 'Telematics & Fleet Hardware',
    logo: '/images/integrations/flespi.svg',
  },
  {
    name: 'Samsara',
    category: 'Telematics & Fleet Hardware',
    logo: '/images/integrations/samsara.svg',
  },
  {
    name: 'Geotab',
    category: 'Telematics & Fleet Hardware',
    logo: '/images/integrations/geotab.svg',
  },
  // Payments
  {
    name: 'Stripe',
    category: 'Payments',
    logo: 'https://cdn.simpleicons.org/stripe/635BFF',
  },
  // Communication
  {
    name: 'Twilio',
    category: 'Communication',
    logo: 'https://cdn.simpleicons.org/twilio',
  },
  {
    name: 'SendGrid',
    category: 'Communication',
    logo: '/images/integrations/sendgrid.svg',
  },
  {
    name: 'Mailgun',
    category: 'Communication',
    logo: 'https://cdn.simpleicons.org/mailgun/F06B66',
  },
  // Cloud & Infrastructure
  {
    name: 'AWS',
    category: 'Cloud & Infrastructure',
    logo: 'https://cdn.simpleicons.org/amazonaws',
  },
  {
    name: 'Google Cloud',
    category: 'Cloud & Infrastructure',
    logo: 'https://cdn.simpleicons.org/googlecloud/4285F4',
  },
  {
    name: 'Microsoft Azure',
    category: 'Cloud & Infrastructure',
    logo: 'https://cdn.simpleicons.org/microsoftazure',
  },
  {
    name: 'DigitalOcean',
    category: 'Cloud & Infrastructure',
    logo: 'https://cdn.simpleicons.org/digitalocean/0080FF',
  },
  {
    name: 'Docker',
    category: 'Cloud & Infrastructure',
    logo: 'https://cdn.simpleicons.org/docker/2496ED',
  },
  {
    name: 'Kubernetes',
    category: 'Cloud & Infrastructure',
    logo: 'https://cdn.simpleicons.org/kubernetes/326CE5',
  },
  // Databases
  {
    name: 'MySQL',
    category: 'Databases',
    logo: 'https://cdn.simpleicons.org/mysql/4479A1',
  },
  {
    name: 'Redis',
    category: 'Databases',
    logo: 'https://cdn.simpleicons.org/redis/DC382D',
  },
  // Developer Tools
  {
    name: 'GitHub',
    category: 'Developer Tools',
    logo: 'https://cdn.simpleicons.org/github/181717',
  },
  {
    name: 'Postman',
    category: 'Developer Tools',
    logo: 'https://cdn.simpleicons.org/postman/FF6C37',
  },
  // Monitoring
  {
    name: 'Sentry',
    category: 'Monitoring',
    logo: 'https://cdn.simpleicons.org/sentry/362D59',
  },
  // E-commerce
  {
    name: 'Shopify',
    category: 'E-commerce',
    logo: 'https://cdn.simpleicons.org/shopify/96BF48',
  },
  {
    name: 'WooCommerce',
    category: 'E-commerce',
    logo: 'https://cdn.simpleicons.org/woocommerce/96588A',
  },
  // Mobile
  {
    name: 'Android',
    category: 'Mobile',
    logo: 'https://cdn.simpleicons.org/android/3DDC84',
  },
  {
    name: 'React Native',
    category: 'Mobile',
    logo: 'https://cdn.simpleicons.org/react/61DAFB',
  },
  {
    name: 'Expo',
    category: 'Mobile',
    logo: 'https://cdn.simpleicons.org/expo/000020',
  },
  // Backend & Framework
  {
    name: 'Laravel',
    category: 'Backend & Framework',
    logo: 'https://cdn.simpleicons.org/laravel/FF2D20',
  },
  {
    name: 'Node.js',
    category: 'Backend & Framework',
    logo: 'https://cdn.simpleicons.org/nodedotjs/339933',
  },
  {
    name: 'Next.js',
    category: 'Backend & Framework',
    logo: 'https://cdn.simpleicons.org/nextdotjs/000000',
  },
  {
    name: 'PHP',
    category: 'Backend & Framework',
    logo: 'https://cdn.simpleicons.org/php/777BB4',
  },
];
const INTEGRATION_CATEGORIES = [
  ...new Set(INTEGRATIONS.map((i) => i.category)),
];

const featuredExtensions = [
  {
    icon: Truck,
    name: 'FleetOps',
    tag: 'Free',
    desc: 'Core TMS and fleet management — orders, drivers, routes, and real-time tracking.',
    publisher: 'LogisBase',
  },
  {
    icon: ShoppingBag,
    name: 'Storefront',
    tag: 'Free',
    desc: 'Headless e-commerce and on-demand ordering with native delivery integration.',
    publisher: 'LogisBase',
  },
  {
    icon: Package,
    name: 'Pallet WMS',
    tag: 'Free',
    desc: 'Warehouse management with inventory tracking, pick lists, and fulfilment.',
    publisher: 'LogisBase',
  },
  {
    icon: BookOpen,
    name: 'Ledger',
    tag: 'Free',
    desc: 'Double-entry accounting engine for logistics finance, invoicing, and payouts.',
    publisher: 'LogisBase',
  },
  {
    icon: Map,
    name: 'HERE Maps',
    tag: 'Paid',
    desc: 'Replace the default mapping layer with HERE Maps for enhanced routing.',
    publisher: 'Community',
  },
  {
    icon: MessageSquare,
    name: 'WhatsApp Notifications',
    tag: 'Paid',
    desc: 'Send order status updates and driver alerts via WhatsApp Business API.',
    publisher: 'Community',
  },
];

const scaffoldCode = `# Install the LogisBase CLI
npm install -g @logisbase/cli

# Register a developer account
flb register

# Verify your email
flb verify

# Scaffold a new extension
flb scaffold --name my-extension --author "Your Name"

# my-extension/
# ├── addon/          Ember.js frontend engine
# │   ├── routes/
# │   ├── components/
# │   └── engine.js
# └── server/         Laravel backend package
#     ├── src/
#     └── composer.json

# Bundle and publish to the registry
flb publish`;

export default function ExtensionsMarketplacePageContent() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Platform</span>
              <span className="px-3">Extensions Marketplace</span>
            </div>

            <h1 className="text-4xxl leading-none tracking-tight text-balance">
              Extend, Customize, and{' '}
              <span className="text-gradient">Build on LogisBase</span>
            </h1>

            <p className="text-foreground/90 dark:text-foreground/95 max-w-3xl leading-snug md:text-lg">
              The Extensions Marketplace expands the capabilities of the
              LogisBase platform. Discover and deploy extensions built by
              LogisBase and trusted partners, create custom solutions for your
              operations, or publish your own extensions to serve logistics
              businesses worldwide.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://tally.so/r/68VqOO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">Browse Extensions</Button>
              </Link>
              <Link href="/developers/extensions">
                <Button size="lg" variant="outline">
                  Publish an Extension
                </Button>
              </Link>
              <Link
                href="https://github.com/logisbase/registry-bridge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="ghost">
                  <FaGithub className="mr-2 h-4 w-4" />
                  Request source access
                </Button>
              </Link>
            </div>

            <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-xl border shadow-2xl">
              <Image
                src="/images/screenshots/extensions/extensions-browse.webp"
                alt="LogisBase Extensions Marketplace console view"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stat strip ──────────────────────────────────────────────── */}
      <section className="bg-muted/10 border-y">
        <div className="container">
          <div className="bg-border grid grid-cols-2 overflow-hidden rounded-xl border md:grid-cols-4">
            {[
              { value: '60+', label: 'Extensions available' },
              { value: '8', label: 'Categories' },
              { value: 'Free', label: 'Core extensions' },
              { value: 'Open', label: 'Publisher platform' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-background border-r border-b p-6 text-center last:border-r-0 md:border-b-0 md:last:border-r-0"
              >
                <p className="text-gradient text-2xl font-bold md:text-3xl">
                  {value}
                </p>
                <p className="text-muted-foreground mt-1 text-xs md:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Operators ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Users className="text-primary mr-2 h-3 w-3" />
                For Operators
              </div>
              <h2 className="text-4xl leading-tight font-bold tracking-tight">
                Extend your platform in minutes, not months
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Installing an extension takes seconds. Browse the marketplace,
                click install, and the new capability is immediately available
                in your LogisBase console — no restarts, no deployments, no
                engineering required.
              </p>
              <ul className="space-y-5">
                {[
                  {
                    icon: Search,
                    title: 'Browse & discover',
                    desc: 'Search by category, keyword, or publisher. Read descriptions, view screenshots, and check ratings before installing.',
                  },
                  {
                    icon: Zap,
                    title: 'One-click install',
                    desc: 'Free extensions install instantly. Paid extensions prompt a secure checkout, then activate immediately on confirmation.',
                  },
                  {
                    icon: Box,
                    title: 'Manage & update',
                    desc: 'View all installed extensions from one dashboard. Receive update notifications and uninstall with one click.',
                  },
                  {
                    icon: Code2,
                    title: 'Self-managed install',
                    desc: 'Running self-hosted? Every extension includes step-by-step instructions for your own infrastructure.',
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <div className="bg-primary/10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                      <Icon className="text-primary h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{title}</p>
                      <p className="text-muted-foreground text-sm">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border shadow-lg">
              <Image
                src="/images/screenshots/extensions/extensions-console-install.webp"
                alt="LogisBase extensions marketplace install flow"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured extension cards ─────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              Featured extensions
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              First-party modules from LogisBase and top community extensions —
              install any of them in one click from the console.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredExtensions.map(
              ({ icon: Icon, name, tag, desc, publisher }) => (
                <div
                  key={name}
                  className="bg-card flex flex-col gap-4 rounded-xl border p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                      <Icon className="text-primary h-5 w-5" />
                    </div>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs font-medium ${
                        tag === 'Free'
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400'
                          : 'border-primary/20 bg-primary/5 text-primary'
                      }`}
                    >
                      {tag}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-muted-foreground mt-1 text-sm">{desc}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">
                      by {publisher}
                    </span>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="https://tally.so/r/68VqOO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                Browse all extensions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Category grid ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              Browse by category
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Find extensions that match your operational needs across every
              area of logistics.
            </p>
          </div>
          <div className="bg-border grid grid-cols-1 overflow-hidden rounded-xl border sm:grid-cols-2 md:grid-cols-4">
            {categories.map(({ icon: Icon, name, count }) => (
              <div
                key={name}
                className="bg-card hover:bg-muted/50 flex cursor-pointer flex-col items-center gap-3 border-r border-b p-8 text-center transition-colors"
              >
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
                  <Icon className="text-primary h-5 w-5" />
                </div>
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-muted-foreground text-xs">
                  {count} extensions
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ────────────────────────────────────────────── */}
      <section id="integrations" className="section-padding scroll-mt-20">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="text-muted-foreground mb-3 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
              Integrations
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              Plug into the tools you already use
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              LogisBase connects natively to {INTEGRATIONS.length}+ services
              across maps, payments, communication, cloud, and developer tooling
              — through first-party extensions, the REST API, and webhooks.
            </p>
          </div>
          {INTEGRATION_CATEGORIES.map((category) => (
            <div key={category} className="mb-10">
              <h3 className="text-muted-foreground mb-4 border-b pb-2 text-sm font-semibold tracking-wider uppercase">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {INTEGRATIONS.filter((i) => i.category === category).map(
                  (integration) => (
                    <div
                      key={integration.name}
                      className="bg-card hover:border-primary/40 flex flex-col items-center gap-2 rounded-lg border p-3 transition-all hover:shadow-sm"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        loading="lazy"
                        className="h-8 w-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.src =
                            '/images/integrations/placeholder.png';
                        }}
                      />
                      <span className="text-muted-foreground text-center text-xs leading-tight">
                        {integration.name}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          ))}
          <p className="text-muted-foreground mt-8 text-center text-sm">
            Don&apos;t see what you need?{' '}
            <Link
              href="/developers/extensions"
              className="text-primary underline underline-offset-4"
            >
              Build your own integration
            </Link>{' '}
            or{' '}
            <Link
              href="https://cal.com/logisbase/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              talk to us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── For Developers / Publishers ──────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-xl border shadow-lg lg:order-1">
              <Image
                src="/images/screenshots/extensions/extensions-installed.webp"
                alt="LogisBase developer dashboard — installed and purchased extensions"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 flex flex-col gap-6 lg:order-2">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Code2 className="text-primary mr-2 h-3 w-3" />
                For Developers &amp; Publishers
              </div>
              <h2 className="text-4xl leading-tight font-bold tracking-tight">
                Build once. Sell to thousands of logistics operators.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The LogisBase developer platform gives you everything you need
                to build, publish, and monetize extensions — without managing
                your own distribution or payment infrastructure.
              </p>
              <ul className="space-y-5">
                {[
                  {
                    icon: Code2,
                    title: 'Developer account & credentials',
                    desc: 'Create a developer account, generate registry credentials, and authenticate your publishing pipeline in minutes.',
                  },
                  {
                    icon: Upload,
                    title: 'Extension builder & bundles',
                    desc: 'Create listings with descriptions and screenshots. Package multiple versions or configs as bundles.',
                  },
                  {
                    icon: DollarSign,
                    title: 'Built-in monetization',
                    desc: 'Connect Stripe and set your own pricing. The marketplace handles payment processing, licensing, and access control.',
                  },
                  {
                    icon: BarChart3,
                    title: 'Analytics & revenue tracking',
                    desc: 'Track installs, active users, revenue, and conversion rates from your developer dashboard in real time.',
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-4">
                    <div className="bg-primary/10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                      <Icon className="text-primary h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{title}</p>
                      <p className="text-muted-foreground text-sm">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/developers/extensions">
                  <Button>Start building</Button>
                </Link>
                <Link href="/docs/extension-development">
                  <Button variant="outline">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read the docs
                  </Button>
                </Link>
                <Link
                  href="https://cal.com/logisbase/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost">
                    Talk to us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Publisher flow ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              From idea to paying customers in four steps
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              The publishing workflow is designed to get your extension listed
              and earning as quickly as possible.
            </p>
          </div>

          <div className="mx-auto mb-16 grid max-w-5xl gap-4 md:grid-cols-4">
            {[
              {
                icon: Code2,
                step: '1',
                label: 'Build',
                desc: 'Scaffold your extension with the CLI, add your frontend and backend logic, and test against a local LogisBase instance.',
              },
              {
                icon: Star,
                step: '2',
                label: 'Review',
                desc: 'Submit for review. Our team checks quality, security, and compatibility. Most extensions are reviewed within 48 hours.',
              },
              {
                icon: Upload,
                step: '3',
                label: 'Publish',
                desc: 'Once approved, your extension goes live in the marketplace and is immediately discoverable by all LogisBase operators.',
              },
              {
                icon: DollarSign,
                step: '4',
                label: 'Monetize',
                desc: 'Connect Stripe, set your price, and start earning. LogisBase takes a small platform fee; the rest goes directly to you.',
              },
            ].map(({ icon: Icon, step, label, desc }, i) => (
              <div
                key={label}
                className="bg-card relative flex flex-col gap-4 rounded-xl border p-6"
              >
                {i < 3 && (
                  <ArrowRight className="text-muted-foreground absolute top-8 -right-2.5 hidden h-5 w-5 md:block" />
                )}
                <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold">
                  {step}
                </div>
                <Icon className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="font-semibold">{label}</p>
                  <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stripe badge */}
          <div className="bg-card mx-auto flex max-w-lg items-center justify-center gap-3 rounded-xl border px-6 py-4">
            <FaStripe className="h-8 w-8 text-[#635bff]" />
            <p className="text-muted-foreground text-sm">
              Payouts powered by Stripe — direct deposits, no invoicing
              back-and-forth.
            </p>
          </div>
        </div>
      </section>

      {/* ── Architecture ─────────────────────────────────────────────── */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
              <PuzzleIcon className="text-primary mr-2 h-3 w-3" />
              Extension Architecture
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              A full-stack extension framework
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl">
              LogisBase extensions are full-stack modules — an Ember.js frontend
              engine and a Laravel backend package — giving complete control
              over both the console UI and server-side logic.
            </p>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="bg-card rounded-xl border p-8">
              <div className="bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                <Code2 className="text-primary h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Frontend: Ember.js Engine
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                The frontend is an Ember.js engine that integrates seamlessly
                into the LogisBase console. Extensions can add new routes,
                components, dashboards, and widgets that feel native to the
                platform.
              </p>
              <ul className="space-y-2">
                {[
                  'Custom routes and navigation',
                  'Reusable UI components',
                  'Dashboard widgets',
                  'Full access to LogisBase UI library',
                ].map((f) => (
                  <li
                    key={f}
                    className="text-muted-foreground flex items-center gap-2 text-sm"
                  >
                    <CheckCircle2 className="text-primary h-3.5 w-3.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl border p-8">
              <div className="bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                <Box className="text-primary h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Backend: Laravel Package
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                The backend is a Laravel package that integrates with the
                LogisBase API layer. Extensions can define new models, API
                endpoints, migrations, jobs, events, and webhooks.
              </p>
              <ul className="space-y-2">
                {[
                  'Custom data models and migrations',
                  'New REST API endpoints',
                  'Background jobs and queues',
                  'Custom events and webhooks',
                ].map((f) => (
                  <li
                    key={f}
                    className="text-muted-foreground flex items-center gap-2 text-sm"
                  >
                    <CheckCircle2 className="text-primary h-3.5 w-3.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <CodeBlock
            code={scaffoldCode}
            language="bash"
            label="LogisBase Extension Scaffold CLI"
          />

          <p className="text-muted-foreground mt-4 text-center text-sm">
            Get started building your extension in minutes with the official
            scaffold CLI.{' '}
            <Link
              href="/developers/extensions"
              className="text-primary underline underline-offset-4"
            >
              Read the docs
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-4xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: 'What is the LogisBase Extensions Marketplace?',
                  a: 'The Extensions Marketplace is the central hub for discovering, installing, and managing extensions that expand your LogisBase platform. Extensions add new modules, integrations, workflows, or UI components. Both free and paid extensions are available, published by LogisBase and the broader developer community.',
                },
                {
                  q: 'Can I install extensions on a self-hosted LogisBase instance?',
                  a: 'Yes. Extensions can be installed on both LogisBase Cloud and self-hosted instances. For self-hosted deployments, the marketplace provides self-managed install instructions so your team can deploy extensions directly to your infrastructure.',
                },
                {
                  q: 'How do I publish my own extension?',
                  a: 'Create a developer account, build your extension using the scaffold CLI and the LogisBase extension framework, then submit it for review. Once approved it becomes available to all LogisBase users. You can choose to offer it free or monetize it through the built-in payment system.',
                },
                {
                  q: 'How does extension monetization work?',
                  a: 'Connect your Stripe account during the developer onboarding flow, set your own price, and the marketplace handles payment processing, licensing, and access control automatically. LogisBase takes a small platform fee; the remainder is deposited directly into your Stripe account.',
                },
                {
                  q: 'What are extension bundles?',
                  a: 'Extension bundles let publishers package multiple versions or configurations together — for example, a lite version and a pro version, or separate builds for different deployment environments. Users select the appropriate bundle when installing.',
                },
                {
                  q: 'Are extensions reviewed before being published?',
                  a: 'Yes. All extensions go through a review process before being listed. This ensures quality, security, and compatibility with the LogisBase platform. The review checks both the frontend Ember.js engine and the backend Laravel package. Most extensions are reviewed within 48 hours.',
                },
                {
                  q: 'Do I need to write both frontend and backend code?',
                  a: "Not necessarily. Some extensions are purely frontend (adding UI components or dashboards) and others are purely backend (adding API endpoints or integrations). You only need to build the parts relevant to what your extension does. The scaffold CLI sets up both layers by default but you can remove whichever you don't need.",
                },
              ].map(({ q, a }, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-xl border px-6"
                >
                  <AccordionTrigger className="text-left font-medium">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container">
          <div className="bg-card relative overflow-hidden rounded-2xl border px-8 py-16 text-center">
            <div className="from-primary/5 to-primary/10 absolute inset-0 bg-gradient-to-br via-transparent" />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="text-4xl font-bold tracking-tight text-balance">
                Ready to extend your LogisBase platform?
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Browse extensions to find what fits your workflow, or start
                building your own and reach thousands of logistics operators.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="https://tally.so/r/68VqOO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">Browse marketplace</Button>
                </Link>
                <Link href="/developers/extensions">
                  <Button size="lg" variant="outline">
                    Start building
                  </Button>
                </Link>
              </div>
              <p className="text-muted-foreground text-xs">
                Free to browse · Open publisher platform · Stripe-powered
                payouts
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
