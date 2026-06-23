'use client';

import {
  ArrowRight,
  BarChart3,
  Bell,
  BellRing,
  Camera,
  CheckCircle2,
  ClipboardList,
  Code2,
  LayoutGrid,
  MapPin,
  MessageSquare,
  Navigation,
  Package,
  Plug,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Star,
  Store,
  User,
  WifiOff,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaApple, FaGithub, FaGooglePlay } from 'react-icons/fa';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const navigatorFeatures = [
  {
    icon: Navigation,
    title: 'Turn-by-Turn Navigation',
    desc: 'Integrated maps with optimised routing guide drivers to every stop efficiently.',
  },
  {
    icon: Package,
    title: 'Order Management',
    desc: 'View assigned orders, stop sequences, and delivery details in a driver-friendly interface.',
  },
  {
    icon: Camera,
    title: 'Proof of Delivery',
    desc: 'Capture photo, signature, barcode, and QR code proof of delivery at every stop.',
  },
  {
    icon: Zap,
    title: 'Real-Time Sync',
    desc: 'Live order updates, dispatch notifications, and status changes sync instantly via SocketCluster.',
  },
  {
    icon: WifiOff,
    title: 'Offline Support',
    desc: 'Continue working in areas with poor connectivity. Data syncs automatically when back online.',
  },
  {
    icon: MessageSquare,
    title: 'In-App Messaging',
    desc: 'Communicate with dispatch and customers directly from the app without switching tools.',
  },
  {
    icon: BarChart3,
    title: 'Activity Tracking',
    desc: 'Automatic tracking of driver hours, distance, stops completed, and performance metrics.',
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    desc: 'Instant alerts for new assignments, order changes, and customer messages.',
  },
];

const storefrontFeatures = [
  {
    icon: Store,
    title: 'Multi-Store Browsing',
    desc: 'Customers discover and browse multiple stores within a delivery network from one app.',
  },
  {
    icon: LayoutGrid,
    title: 'Product Catalog',
    desc: 'Rich product listings with images, descriptions, variants, modifiers, and pricing.',
  },
  {
    icon: ShoppingCart,
    title: 'Cart & Checkout',
    desc: 'Smooth cart management and checkout flow with multiple payment method support.',
  },
  {
    icon: MapPin,
    title: 'Live Order Tracking',
    desc: 'Real-time map tracking showing driver location and ETA from dispatch to delivery.',
  },
  {
    icon: ClipboardList,
    title: 'Order History',
    desc: 'Full order history with reorder functionality and detailed receipts.',
  },
  {
    icon: User,
    title: 'Customer Accounts',
    desc: 'Saved addresses, payment methods, and preferences for a seamless repeat experience.',
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    desc: 'Customers can rate deliveries and leave feedback to help improve service quality.',
  },
  {
    icon: BellRing,
    title: 'Status Notifications',
    desc: 'Push notifications at every order milestone keep customers informed and reduce support queries.',
  },
];

const techStack = [
  {
    icon: Smartphone,
    name: 'React Native',
    desc: 'Cross-platform native apps from a single codebase',
  },
  {
    icon: Zap,
    name: 'Expo',
    desc: 'Managed workflow for fast development and deployment',
  },
  {
    icon: Code2,
    name: 'TypeScript',
    desc: 'Type-safe code for reliability and maintainability',
  },
  {
    icon: Plug,
    name: 'LogisBase API',
    desc: 'REST API and SocketCluster channels for all data',
  },
];

const faqs = [
  {
    q: 'Are the LogisBase mobile apps free to use?',
    a: 'Yes. Both Navigator and Storefront mobile apps are available as source-accessible applications and can be used immediately within your LogisBase deployment. You can install them from the App Store and Google Play, or build and deploy your own branded versions directly from the source code repository.',
  },
  {
    q: 'Can I white-label the Navigator or Storefront app?',
    a: 'Absolutely. Both apps are available for full customization. You can fork the repositories, replace branding, customize the UI, extend functionality, and publish your own branded apps to the App Store and Google Play. If you need to keep your modifications proprietary, an Enterprise License is available.',
  },
  {
    q: 'What technology are the apps built with?',
    a: 'Both apps are built with React Native and Expo, enabling a single codebase to run natively on both iOS and Android. They use the LogisBase REST API and SocketCluster channels for real-time data, and support offline-first operation for areas with poor connectivity.',
  },
  {
    q: 'Can I build my own custom app on top of LogisBase?',
    a: 'Yes. The LogisBase API is fully documented and open. You can build any mobile or web application on top of LogisBase using any technology stack. The Navigator and Storefront apps serve as reference implementations showing exactly how to integrate with the platform.',
  },
  {
    q: 'Does Navigator support offline operation?',
    a: 'Yes. Navigator is designed for drivers who may operate in areas with limited connectivity. The app caches active orders and routes locally and syncs updates when connectivity is restored. Critical actions like completing stops and capturing proof of delivery work offline.',
  },
  {
    q: 'What is the difference between Navigator and the Storefront app?',
    a: 'Navigator is a driver-facing app for completing deliveries — it shows assigned orders, turn-by-turn navigation, stop management, and proof of delivery capture. The Storefront app is a customer-facing app for browsing stores, placing orders, and tracking deliveries in real time.',
  },
];

function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="border-foreground/20 bg-background relative mx-auto scale-90 overflow-hidden rounded-[1.75rem] border-4 shadow-2xl sm:scale-100"
      style={{ width: 220, height: 440 }}
    >
      <div className="bg-foreground/20 absolute top-0 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl" />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="220px"
      />
    </div>
  );
}

export default function MobileAppsPageContent() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Platform</span>
              <span className="px-3">Mobile Apps</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Production-Ready Mobile Apps,{' '}
              <span className="text-gradient">Ready to Deploy</span>
            </h1>
            <p className="text-foreground/90 dark:text-foreground/95 max-w-3xl leading-snug md:text-lg lg:text-xl">
              LogisBase includes production-ready mobile applications for every
              side of your logistics network — Navigator for drivers and
              Storefront for customers. Deploy them immediately, customize them
              with your brand, or build tailored experiences on top of the
              LogisBase API.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="https://tally.so/r/obgQQx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">
                  <FaGithub className="mr-2 h-4 w-4" />
                  Navigator on GitHub
                </Button>
              </Link>
              <Link
                href="https://tally.so/r/obgQQx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  <FaGithub className="mr-2 h-4 w-4" />
                  Storefront on GitHub
                </Button>
              </Link>
              <Link href="/developers/api">
                <Button size="lg" variant="ghost">
                  Build Your Own App
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex justify-center gap-12">
              <PhoneFrame
                src="/images/screenshots/navigator-app/navigator-app-home-screen.webp"
                alt="Navigator app — driver dashboard home"
              />
              <PhoneFrame
                src="/images/screenshots/storefront-app/true-vegan/true-vegan-home-screen.webp"
                alt="Storefront app — customer home (True Vegan deployment)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two Apps Overview */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Two Apps. One Platform.
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Dedicated mobile experiences for both sides of every delivery —
              the driver completing it and the customer receiving it.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-card relative overflow-hidden rounded-2xl border p-8">
              <div className="from-primary/5 to-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    <Navigation className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">Navigator</h3>
                </div>
                <p className="text-muted-foreground mb-3 font-medium">
                  The driver app. Built for the field.
                </p>
                <p className="text-muted-foreground mb-6 text-sm">
                  Navigator gives drivers everything they need to complete
                  deliveries efficiently — assigned orders, optimised routing,
                  proof of delivery capture, real-time dispatch communication,
                  and offline support for areas with poor connectivity.
                </p>
                <div className="mb-4 flex flex-wrap gap-3">
                  <Link href="/services/navigator-publishing">
                    <Button size="sm">
                      Publish Branded Navigator{' '}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="https://tally.so/r/obgQQx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline">
                      <FaGithub className="mr-1.5 h-3.5 w-3.5" />
                      Source
                    </Button>
                  </Link>
                  <Link href="/docs/fleet-ops/navigator-app/quickstart">
                    <Button size="sm" variant="outline">
                      Docs
                    </Button>
                  </Link>
                  <Button size="sm" variant="outline">
                    <FaApple className="mr-1.5 h-3.5 w-3.5" />
                    App Store
                  </Button>
                  <Button size="sm" variant="outline">
                    <FaGooglePlay className="mr-1.5 h-3.5 w-3.5" />
                    Google Play
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-card relative overflow-hidden rounded-2xl border p-8">
              <div className="from-primary/5 to-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    <ShoppingBag className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">Storefront</h3>
                </div>
                <p className="text-muted-foreground mb-3 font-medium">
                  The customer app. Built for conversion.
                </p>
                <p className="text-muted-foreground mb-6 text-sm">
                  The Storefront customer app lets shoppers browse stores, place
                  orders, track deliveries in real time, and manage their
                  account — all under your brand. It connects directly to your
                  LogisBase Storefront instance with zero additional backend
                  work.
                </p>
                <div className="mb-4 flex flex-wrap gap-3">
                  <Link href="/services/storefront-publishing">
                    <Button size="sm">
                      Publish Branded Storefront{' '}
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="https://tally.so/r/obgQQx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline">
                      <FaGithub className="mr-1.5 h-3.5 w-3.5" />
                      Source
                    </Button>
                  </Link>
                  <Link href="/docs/storefront/app/overview">
                    <Button size="sm" variant="outline">
                      Docs
                    </Button>
                  </Link>
                  <Button size="sm" variant="outline">
                    <FaApple className="mr-1.5 h-3.5 w-3.5" />
                    App Store
                  </Button>
                  <Button size="sm" variant="outline">
                    <FaGooglePlay className="mr-1.5 h-3.5 w-3.5" />
                    Google Play
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigator Deep Dive */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
                <span className="text-primary">●</span>
                <span className="ml-2">Navigator App</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Give Your Drivers the Tools They Need to Succeed
              </h2>
              <p className="text-muted-foreground text-lg">
                Navigator is a purpose-built driver app that integrates directly
                with FleetOps. From the moment a driver is dispatched to the
                moment a delivery is confirmed, Navigator handles the entire
                workflow — on iOS, Android, and even in areas with no signal.
              </p>
            </div>
            <div className="flex justify-center">
              <PhoneFrame
                src="/images/screenshots/navigator-app/navigator-app-orders-screen.webp"
                alt="Navigator app — driver orders queue"
              />
            </div>
          </div>
          <div className="bg-border grid grid-cols-1 gap-px overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-4">
            {navigatorFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="bg-card p-5">
                  <Icon className="text-primary mb-3 h-5 w-5" />
                  <h4 className="mb-2 text-sm font-semibold">{feat.title}</h4>
                  <p className="text-muted-foreground text-xs">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Storefront App Deep Dive */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-16 grid items-center gap-12 md:grid-cols-2">
            <div className="order-last flex justify-center md:order-first">
              <PhoneFrame
                src="/images/screenshots/storefront-app/true-vegan/true-vegan-products-screen.webp"
                alt="Storefront app — product catalog (True Vegan deployment)"
              />
            </div>
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
                <span className="text-primary">●</span>
                <span className="ml-2">Storefront App</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                A Customer App That Drives Repeat Business
              </h2>
              <p className="text-muted-foreground text-lg">
                The Storefront customer app delivers a polished, branded
                shopping and delivery experience that keeps customers coming
                back. Real-time order tracking, seamless checkout, and push
                notifications at every step create the kind of experience
                customers expect from leading delivery platforms — but under
                your brand, not theirs.
              </p>
            </div>
          </div>
          <div className="bg-border grid grid-cols-1 gap-px overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-4">
            {storefrontFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="bg-card p-5">
                  <Icon className="text-primary mb-3 h-5 w-5" />
                  <h4 className="mb-2 text-sm font-semibold">{feat.title}</h4>
                  <p className="text-muted-foreground text-xs">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Customers */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
              <span className="text-primary">●</span>
              <span className="ml-2">Real Customers</span>
            </div>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Branded apps live in the App Store today
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Two production deployments of the source-accessible Storefront app
              — one a Mongolian bulk-supply marketplace, the other a vegan
              restaurant in Florida. Same codebase, different brands, different
              markets.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {/* Oli Max */}
            <Link
              href="/oli-max"
              className="group bg-card relative overflow-hidden rounded-2xl border transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-orange-500 to-red-700">
                <Image
                  src="/images/screenshots/storefront-app/oli-max/oli-max-home-screen.webp"
                  alt="Oli Max — branded Storefront app for Mongolian bulk supply"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-top p-8 transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-muted-foreground mb-2 flex items-center gap-2 text-xs font-medium">
                  <MapPin className="size-3.5" />
                  <span>Ulaanbaatar, Mongolia</span>
                  <span className="text-border">·</span>
                  <span>Bulk Supply Marketplace</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Oli Max</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Restaurants, vendors, and households across Ulaanbaatar order
                  rice, flour, oil, and bulk meat directly from distributors —
                  through a branded Storefront app with food-truck mode and QPay
                  checkout.
                </p>
                <span className="text-primary inline-flex items-center gap-1.5 text-sm font-semibold group-hover:underline">
                  Read the case study{' '}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            {/* True Vegan */}
            <Link
              href="/true-vegan"
              className="group bg-card relative overflow-hidden rounded-2xl border transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900">
                <Image
                  src="/images/screenshots/storefront-app/true-vegan/true-vegan-home-screen.webp"
                  alt="True Vegan — branded Storefront app for plant-based restaurant"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-top p-8 transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-muted-foreground mb-2 flex items-center gap-2 text-xs font-medium">
                  <MapPin className="size-3.5" />
                  <span>Delray Beach, FL</span>
                  <span className="text-border">·</span>
                  <span>Restaurant</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">True Vegan</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Chef Rahein&apos;s plant-based restaurant runs pickup,
                  delivery, and in-store ordering through a branded Storefront
                  app with Stripe checkout and FleetOps delivery dispatch.
                </p>
                <span className="text-primary inline-flex items-center gap-1.5 text-sm font-semibold group-hover:underline">
                  Read the case study{' '}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services/storefront-publishing"
              className="text-muted-foreground hover:text-primary text-sm"
            >
              Want a branded Storefront app like these?{' '}
              <span className="text-primary underline underline-offset-4">
                Storefront Publishing Service →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Build Your Own */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="min-w-0">
              <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
                <span className="text-primary">●</span>
                <span className="ml-2">Custom App Development</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Build Your Own App on the LogisBase API
              </h2>
              <p className="text-muted-foreground mb-8 text-lg break-words">
                Navigator and Storefront are just the beginning. The LogisBase
                API is fully documented, enabling you to build any mobile
                experience you can imagine — custom driver apps, field service
                apps, customer portals, or entirely new logistics products. The
                existing apps are your reference implementation.
              </p>
              <div className="mb-8 space-y-3">
                {[
                  'Full REST API with 50+ endpoints across all resources',
                  'Real-time SocketCluster channels for live data',
                  'Webhook events for every platform action',
                  'React Native reference apps to accelerate development',
                  'Comprehensive API documentation and Postman collection',
                  'Active developer community and source-accessible codebase',
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="break-words">{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/developers/api">
                  <Button className="w-full sm:w-auto">
                    View API Reference
                  </Button>
                </Link>
                <Link href="/platform/developer-console">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Developer Console
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <PhoneFrame
                src="/images/screenshots/storefront-app/oli-max/oli-max-food-truck-screen.webp"
                alt="Storefront app — custom food-truck mode (Oli Max deployment in Mongolia)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Built on Modern, Technology Stack
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Both apps share the same technology stack, making it easy for any
              React Native developer to customise, extend, or build from
              scratch.
            </p>
          </div>
          <div className="bg-border grid grid-cols-1 gap-px overflow-hidden rounded-xl sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div key={i} className="bg-card p-6 text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                      <Icon className="text-primary h-5 w-5" />
                    </div>
                  </div>
                  <h4 className="mb-2 font-semibold">{tech.name}</h4>
                  <p className="text-muted-foreground text-sm">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Common questions about LogisBase mobile apps.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-lg border px-6"
                >
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div className="bg-card relative overflow-hidden rounded-2xl border p-12 text-center">
            <div className="from-primary/5 to-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Get Your Drivers and Customers on Mobile Today
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                Deploy Navigator and Storefront as-is, white-label them as your
                own, or build a completely custom app on the LogisBase API.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="https://tally.so/r/obgQQx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    <FaGithub className="mr-2 h-4 w-4" />
                    Get Navigator
                  </Button>
                </Link>
                <Link
                  href="https://tally.so/r/obgQQx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline">
                    <FaGithub className="mr-2 h-4 w-4" />
                    Get Storefront App
                  </Button>
                </Link>
                <Link href="/developers/api">
                  <Button size="lg" variant="ghost">
                    Build Custom App
                  </Button>
                </Link>
              </div>
              <p className="text-muted-foreground mt-6 text-sm">
                100% accessible codebase · iOS & Android · Fully customizable
                and white-label ready
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
