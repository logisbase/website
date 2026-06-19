'use client';

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers,
  MapPin,
  Navigation,
  Package,
  ShoppingCart,
  Truck,
  User,
  Webhook,
} from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaJs, FaPhp } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CodeBlock } from '@/components/ui/code-block';

// ─── Data ─────────────────────────────────────────────────────────────────────

const CAPABILITIES = [
  { icon: Package, label: 'Orders' },
  { icon: User, label: 'Drivers' },
  { icon: Truck, label: 'Vehicles' },
  { icon: Layers, label: 'Fleets' },
  { icon: MapPin, label: 'Places' },
  { icon: Navigation, label: 'Routes' },
  { icon: Activity, label: 'Tracking' },
  { icon: Webhook, label: 'Webhooks' },
];

const REPOS = [
  {
    name: 'logisbase/logisbase-js',
    href: 'https://github.com/logisbase/logisbase-js',
  },
  {
    name: 'logisbase/logisbase-php',
    href: 'https://github.com/logisbase/logisbase-php',
  },
  {
    name: 'logisbase/storefront-js',
    href: 'https://github.com/logisbase/storefront-js',
  },
];

// ─── Code Samples ─────────────────────────────────────────────────────────────

const jsCode = `import LogisBase from '@logisbase/sdk';

const logisbase = new LogisBase('flb_live_xxxx');

// Create an order
const order = await logisbase.orders.create({
  payload: {
    pickup: 'place_abc123',
    dropoff: 'place_xyz789',
    entities: [{ name: 'Package', weight: 2.5 }],
  },
  type: 'delivery',
  scheduled_at: '2026-05-01T09:00:00Z',
});

// Track a driver's live location
const location = await logisbase.drivers.getLocation('driver_xxx');
console.log(location.coordinates); // [lng, lat]`;

const phpCode = `use LogisBase\\LogisBaseSDK;

$logisbase = new LogisBaseSDK('flb_live_xxxx');

// Create an order
$order = $logisbase->orders->create([
    'payload' => [
        'pickup'  => 'place_abc123',
        'dropoff' => 'place_xyz789',
    ],
    'type' => 'delivery',
]);

echo $order->tracking_number; // FB-000001

// List all active drivers
$drivers = $logisbase->drivers->findAll(['status' => 'active']);`;

const storefrontCode = `import Storefront from '@logisbase/storefront-sdk';

const store = new Storefront('public_key_xxxx');

// Browse product categories
const categories = await store.categories.query();

// Add to cart and checkout
await store.cart.add('product_xxx', 1);

const order = await store.cart.checkout({
  customer: { name: 'Jane Doe', phone: '+1234567890' },
  delivery_address: 'place_xyz789',
  payment_method: 'cash',
});`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function SdksPageContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
            <Code2 className="text-primary h-3 w-3" />
            <span>Official Client Libraries</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance md:text-6xl">
            SDKs &amp; <span className="text-primary">Libraries</span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
            Official client libraries for the LogisBase API. Available for
            JavaScript and PHP, with a dedicated Storefront SDK for custom
            commerce experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link
                href="https://github.com/logisbase"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2 h-4 w-4" />
                Request source access
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/docs">
                Browse Docs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SDK Cards */}
      <section className="section-padding pt-0">
        <div className="container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            {/* JavaScript SDK */}
            <Card className="flex flex-col">
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10">
                  <FaJs className="h-5 w-5 text-yellow-500" />
                </div>
                <CardTitle className="text-base">JavaScript SDK</CardTitle>
                <CardDescription className="font-mono text-xs">
                  @logisbase/sdk
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <div className="bg-muted/40 text-muted-foreground rounded-md px-3 py-2 font-mono text-xs">
                  npm install @logisbase/sdk
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Runtime:</span>{' '}
                  <span className="font-medium">Node.js · Browser</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Official JavaScript SDK for the LogisBase API. Works in
                  Node.js and modern browser environments with full TypeScript
                  support.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <Link
                    href="https://github.com/logisbase/logisbase-js"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-1.5 h-3.5 w-3.5" />
                    GitHub
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" className="flex-1" asChild>
                  <Link
                    href="https://www.npmjs.com/package/@logisbase/sdk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                    npm
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* PHP SDK */}
            <Card className="flex flex-col">
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
                  <FaPhp className="h-5 w-5 text-indigo-400" />
                </div>
                <CardTitle className="text-base">PHP SDK</CardTitle>
                <CardDescription className="font-mono text-xs">
                  logisbase/logisbase-php
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <div className="bg-muted/40 text-muted-foreground rounded-md px-3 py-2 font-mono text-xs">
                  composer require logisbase/logisbase-php
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Runtime:</span>{' '}
                  <span className="font-medium">PHP 7.4+</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Official PHP SDK for server-side LogisBase API integration.
                  Composer installable and PSR-4 compliant.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <Link
                    href="https://github.com/logisbase/logisbase-php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-1.5 h-3.5 w-3.5" />
                    GitHub
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" className="flex-1" asChild>
                  <Link
                    href="https://packagist.org/packages/logisbase/logisbase-php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                    Packagist
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Storefront SDK */}
            <Card className="flex flex-col">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-lg">
                  <ShoppingCart className="text-primary h-5 w-5" />
                </div>
                <CardTitle className="text-base">Storefront SDK</CardTitle>
                <CardDescription className="font-mono text-xs">
                  @logisbase/storefront-sdk
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <div className="bg-muted/40 text-muted-foreground rounded-md px-3 py-2 font-mono text-xs">
                  npm install @logisbase/storefront-sdk
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Runtime:</span>{' '}
                  <span className="font-medium">Node.js · Browser</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Purpose-built JavaScript SDK for LogisBase Storefront. Browse
                  products, manage carts, place orders, and track deliveries
                  from any custom storefront.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <Link
                    href="https://github.com/logisbase/storefront-js"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-1.5 h-3.5 w-3.5" />
                    GitHub
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" className="flex-1" asChild>
                  <Link
                    href="https://www.npmjs.com/package/@logisbase/storefront-sdk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                    npm
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">Quick Start</h2>
            <p className="text-muted-foreground">
              Authenticate with your API key and make your first call in
              minutes.
            </p>
          </div>

          <div className="mx-auto mb-6 grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="min-w-0 space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <FaJs className="h-4 w-4 text-yellow-500" />
                JavaScript
              </div>
              <CodeBlock
                code={jsCode}
                language="javascript"
                label="orders.js"
              />
            </div>
            <div className="min-w-0 space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <FaPhp className="h-4 w-4 text-indigo-400" />
                PHP
              </div>
              <CodeBlock code={phpCode} language="php" label="orders.php" />
            </div>
          </div>

          <div className="mx-auto max-w-5xl space-y-3">
            <div className="flex min-w-0 items-center gap-2 text-sm font-medium">
              <ShoppingCart className="text-primary h-4 w-4" />
              Storefront SDK
            </div>
            <CodeBlock
              code={storefrontCode}
              language="javascript"
              label="storefront.js"
            />
          </div>
        </div>
      </section>

      {/* API Resources Covered */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">API Resources Covered</h2>
            <p className="text-muted-foreground">
              The JavaScript and PHP SDKs provide typed access to all core
              LogisBase API resources.
            </p>
          </div>
          <div
            className="bg-border mx-auto grid max-w-3xl grid-cols-2 overflow-hidden rounded-xl md:grid-cols-4"
            style={{
              gap: 1,
            }}
          >
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.label}
                className="bg-card flex flex-col items-center gap-2 p-6 text-center"
              >
                <cap.icon className="text-primary h-6 w-6" />
                <span className="text-sm font-medium">{cap.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source-accessible */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold">Code Access Included</h2>
              <p className="text-muted-foreground mb-6">
                All LogisBase SDKs are available with full code access. Inspect
                implementations, submit issues, and contribute improvements
                through the development workflow.
              </p>
              <div className="space-y-2.5">
                {[
                  'Full codebase available on GitHub',
                  'Issues and pull requests welcome',
                  'Enterprise licensing available',
                  'Semantic versioning',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="text-primary h-4 w-4 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-w-0 space-y-3">
              {REPOS.map((repo) => (
                <Link
                  key={repo.name}
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:border-primary group flex items-center justify-between rounded-lg border p-4 transition-colors"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <FaGithub className="text-muted-foreground group-hover:text-foreground h-4 w-4 flex-shrink-0 transition-colors" />
                    <span className="truncate font-mono text-sm font-medium">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary h-3.5 w-3.5 flex-shrink-0 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card relative overflow-hidden rounded-2xl border p-12 text-center">
            <div className="from-primary/5 to-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />
            <div className="relative">
              <h2 className="mb-4 text-4xl font-bold">Start building today</h2>
              <p className="text-muted-foreground mb-8">
                Install an SDK, grab your API key from the Developer Console,
                and make your first API call in minutes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/platform/developer-console">
                    Get API Keys <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs">Browse Documentation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
