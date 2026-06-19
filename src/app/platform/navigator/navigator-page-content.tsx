'use client';

import {
  ArrowRight,
  Bell,
  Camera,
  CheckCircle2,
  Code2,
  Globe,
  Map,
  MessageSquare,
  Navigation,
  Package,
  PenLine,
  QrCode,
  Radio,
  RefreshCcw,
  Smartphone,
  Star,
  Truck,
  Wifi,
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
      className={`border-border bg-background relative mx-auto flex shrink-0 flex-col overflow-hidden rounded-[1.75rem] border-2 shadow-2xl ${className} h-[280px] w-[140px] max-w-full md:h-[520px] md:w-[260px]`}
    >
      <div className="bg-border/60 absolute top-3 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full" />
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="h-auto w-full object-contain object-top"
          sizes="(max-width: 768px) 140px, 260px"
        />
      </div>
    </div>
  );
}

export default function NavigatorPageContent() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary text-primary-foreground relative w-full overflow-x-hidden">
        <div className="container grid grid-cols-4 items-center gap-x-4 gap-y-12 py-20 sm:grid-cols-12 sm:gap-x-6 lg:gap-x-16 lg:gap-y-16 lg:py-28 xl:py-32">
          <div className="col-span-full row-start-1 sm:col-span-8 sm:col-start-3 lg:col-span-6 lg:col-start-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              <span className="text-[10px] tracking-[0.7px] uppercase">
                Navigator · Driver App for Real-World Logistics
              </span>
            </div>
            <h1 className="mt-6 text-center text-[40px] leading-[44px] font-[680] tracking-[-0.6px] text-balance text-white lg:text-left lg:text-[60px] lg:leading-[64px] lg:tracking-[-1px] xl:text-[68px] xl:leading-[70px] xl:tracking-[-1.2px]">
              The Driver App Built for Real-World Logistics
            </h1>
            <p className="mt-5 text-center text-[18px] leading-[26px] font-[460] tracking-[0.15px] text-white/85 lg:mt-7 lg:text-left lg:text-[21px] lg:leading-[30px] lg:tracking-[0.12px]">
              Navigator is LogisBase’s mobile application for drivers and field
              agents, designed to execute logistics at scale in dynamic,
              real-world conditions. Jobs are automatically dispatched from
              Fleet-Ops, routes are optimized in real time, and proof of
              delivery is captured instantly at the point of completion — even
              in low or no connectivity environments.
            </p>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start lg:mt-10">
              <Button
                asChild
                size="lg"
                className="text-primary h-[52px] bg-white px-6 text-base font-[600] hover:bg-white/90"
              >
                <Link href="https://play.google.com/store/apps/details?id=io.logisbase.navigator">
                  <FaGooglePlay className="mr-2 size-4" />
                  Google Play
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-[52px] border-white/40 bg-white/5 px-6 text-base font-[600] text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              >
                <Link href="https://apps.apple.com/us/app/logisbase-navigator/id1554208255">
                  <FaApple className="mr-2 size-4" />
                  App Store
                </Link>
              </Button>
            </div>
            <p className="mt-5 text-center text-[13px] font-[460] tracking-[0.25px] text-white/70 lg:text-left">
              iOS & Android · Offline-first · Source-accessible
            </p>
          </div>
          <div className="col-span-full flex w-full min-w-0 flex-col items-center justify-center gap-6 sm:flex-row lg:col-span-6 lg:col-start-7">
            <PhoneFrame
              src="/images/screenshots/navigator-app/navigator-app-order-activity-update.webp"
              alt="Navigator app — order activity update"
              className="mb-8 scale-90 opacity-70"
            />
            <PhoneFrame
              src="/images/screenshots/navigator-app/navigator-app-order-screen.webp"
              alt="Navigator app — order detail"
            />
            <PhoneFrame
              src="/images/screenshots/navigator-app/navigator-app-order-change-destination.webp"
              alt="Navigator app — change destination"
              className="mb-8 scale-90 opacity-70"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-20">
        <div className="container w-full min-w-0">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: Navigation,
                title: 'Smart Navigation',
                body: 'Turn-by-turn GPS with offline maps, live traffic rerouting, and multi-stop route optimisation so drivers always take the fastest path.',
              },
              {
                icon: Camera,
                title: 'Proof of Delivery',
                body: 'Capture photos, QR codes, and digital signatures at the doorstep. Every delivery is timestamped and synced to the dispatch console instantly.',
              },
              {
                icon: MessageSquare,
                title: 'In-App Comms',
                body: 'Real-time chat with dispatch, customers, and teammates — no switching apps, no personal numbers shared, no dead air.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-card rounded-xl border p-8">
                <div className="bg-primary/10 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg">
                  <Icon className="text-primary h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container w-full min-w-0">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Radio className="text-primary mr-2 h-3 w-3" />
                Live Job Dispatch
              </div>
              <h2 className="text-4xl leading-tight font-bold tracking-tight break-words">
                Orders from Fleet-Ops land in the app the moment they're
                assigned
              </h2>
              <p className="text-muted-foreground leading-relaxed break-words">
                Dispatchers assign jobs in the Fleet-Ops console and Navigator
                alerts the driver immediately via push notification. No phone
                calls, no WhatsApp chains — the full order brief is already on
                the driver's screen.
              </p>
              <ul className="space-y-3">
                {[
                  'Push-notification on assignment with full order details',
                  'Accept or reject jobs directly from the lock screen',
                  'Priority and scheduling visible at a glance',
                  'Automatic status updates back to Fleet-Ops on every action',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-full min-w-0 flex-col items-center justify-center gap-6 sm:flex-row">
              <PhoneFrame
                src="/images/screenshots/navigator-app/navigator-app-order-activity-update.webp"
                alt="Navigator — incoming job activity update"
                className="mb-6 scale-95 opacity-80 sm:mb-0"
              />
              <PhoneFrame
                src="/images/screenshots/navigator-app/navigator-app-order-screen.webp"
                alt="Navigator — job detail view"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/20">
        <div className="container w-full min-w-0">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 flex w-full min-w-0 flex-col items-center justify-center gap-6 sm:flex-row lg:order-1">
              <PhoneFrame
                src="/images/screenshots/navigator-app/navigator-app-start-route-navigation.webp"
                alt="Navigator — turn-by-turn route navigation"
              />
              <PhoneFrame
                src="/images/screenshots/navigator-app/navigator-app-order-screen-route-details.webp"
                alt="Navigator — route waypoint details"
                className="mt-6 scale-95 opacity-80 sm:mt-0"
              />
            </div>
            <div className="order-1 flex flex-col gap-6 lg:order-2">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Map className="text-primary mr-2 h-3 w-3" />
                Turn-by-Turn Navigation
              </div>
              <h2 className="text-4xl leading-tight font-bold tracking-tight break-words">
                Gets drivers there — with or without a signal
              </h2>
              <p className="text-muted-foreground leading-relaxed break-words">
                Navigator downloads map tiles for the route automatically so
                drivers never get stuck when coverage drops in a warehouse
                district, basement car park, or rural area. When connectivity
                returns, position and status sync instantly.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: WifiOff,
                    label: 'Offline maps',
                    desc: 'Pre-cached route tiles',
                  },
                  {
                    icon: Zap,
                    label: 'Live rerouting',
                    desc: 'Real-time traffic data',
                  },
                  {
                    icon: Globe,
                    label: 'Multi-stop routes',
                    desc: 'Optimised stop order',
                  },
                  {
                    icon: RefreshCcw,
                    label: 'ETA updates',
                    desc: 'Pushed to dispatch',
                  },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-card rounded-lg border p-4">
                    <Icon className="text-primary mb-2 h-4 w-4" />
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-muted-foreground text-xs">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Camera className="text-primary mr-2 h-3 w-3" />
                Proof of Delivery
              </div>
              <h2 className="text-4xl leading-tight font-bold tracking-tight break-words">
                Every delivery is verified, timestamped, and dispute-proof
              </h2>
              <p className="text-muted-foreground leading-relaxed break-words">
                Configure exactly what proof each order type requires. Photo of
                the parcel, recipient signature, QR scan of a label — or all
                three. Evidence is attached to the order record in Fleet-Ops and
                available for download immediately.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Camera, label: 'Photo capture' },
                  { icon: PenLine, label: 'Digital signature' },
                  { icon: QrCode, label: 'QR code scan' },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="bg-card flex flex-col items-center gap-2 rounded-lg border p-4 text-center"
                  >
                    <div className="bg-primary/10 flex h-9 w-9 items-center justify-center rounded-full">
                      <Icon className="text-primary h-4 w-4" />
                    </div>
                    <p className="text-xs font-medium">{label}</p>
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {[
                  'GPS-stamped coordinates at time of capture',
                  'Stored on the order record — no manual upload',
                  'Per-order-type configuration in Fleet-Ops',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center gap-6">
              <PhoneFrame
                src="/images/screenshots/navigator-app/navigator-app-waypoint-activity-updated.webp"
                alt="Navigator — waypoint completion with activity update"
              />
              <PhoneFrame
                src="/images/screenshots/navigator-app/navigator-app-order-screen-customer-items-details.webp"
                alt="Navigator — customer & items details for verification"
                className="mt-6 scale-95 opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 flex justify-center gap-6 lg:order-1">
              <PhoneFrame
                src="/images/screenshots/navigator-app/navigator-app-chats-screen.webp"
                alt="Navigator — chat channels list"
                className="mb-6 scale-95 opacity-80"
              />
              <PhoneFrame
                src="/images/screenshots/navigator-app/navigator-app-chat-conversation-screen.webp"
                alt="Navigator — chat conversation"
              />
            </div>
            <div className="order-1 flex flex-col gap-6 lg:order-2">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <MessageSquare className="text-primary mr-2 h-3 w-3" />
                In-App Communication
              </div>
              <h2 className="text-4xl leading-tight font-bold tracking-tight break-words">
                Dispatch and drivers stay in sync without leaving the app
              </h2>
              <p className="text-muted-foreground leading-relaxed break-words">
                Navigator includes built-in real-time messaging so drivers can
                flag issues, request clarification, or confirm delivery details
                without switching to WhatsApp or SMS. Threads are attached to
                the order so context is never lost.
              </p>
              <ul className="space-y-3">
                {[
                  'Direct messages between driver and dispatcher',
                  'Order-scoped threads keep conversations in context',
                  'Push notifications for new messages even when app is backgrounded',
                  'Customer-facing channels for ETA updates and access instructions',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              Complete driver toolkit
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Everything drivers need to execute deliveries professionally in
              one fully controlled, white-label mobile application.
            </p>
          </div>

          <div className="bg-border grid grid-cols-1 gap-px overflow-hidden rounded-xl border sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Radio,
                label: 'Live Location Tracking',
                desc: 'Real-time GPS breadcrumbs visible to dispatch and customers throughout the job.',
              },
              {
                icon: Package,
                label: 'Order Management',
                desc: 'Full order details, special instructions, and multi-waypoint manifests at a glance.',
              },
              {
                icon: Bell,
                label: 'Push Notifications',
                desc: 'Instant alerts for new assignments, status changes, and customer messages.',
              },
              {
                icon: WifiOff,
                label: 'Offline-First',
                desc: 'All core features work without internet — data syncs the moment connectivity returns.',
              },
              {
                icon: Star,
                label: 'Performance Stats',
                desc: 'Drivers can track their own delivery count, ratings, and on-time performance.',
              },
              {
                icon: Truck,
                label: 'Multi-Vehicle Support',
                desc: 'Drivers can switch between assigned vehicles; capacity and type carried on the job.',
              },
              {
                icon: Smartphone,
                label: 'iOS & Android',
                desc: 'One codebase, two platforms — same feature set on both app stores.',
              },
              {
                icon: Wifi,
                label: 'Real-Time Sync',
                desc: 'Every status tap reflects in Fleet-Ops immediately — zero polling delays.',
              },
              {
                icon: Code2,
                label: 'Extensible via SDK',
                desc: 'Add custom screens, scan-and-confirm flows, or third-party integrations using the extension SDK.',
              },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="bg-background flex flex-col gap-3 p-6"
              >
                <div className="bg-primary/10 flex h-9 w-9 items-center justify-center rounded-lg">
                  <Icon className="text-primary h-4 w-4" />
                </div>
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs">
                <Globe className="text-primary mr-2 h-3 w-3" />
                White-Label & Custom Builds
              </div>
              <h2 className="text-4xl leading-tight font-bold tracking-tight break-words">
                Ship it under your own brand — not ours
              </h2>
              <p className="text-muted-foreground leading-relaxed break-words">
                Navigator is built for full white-label deployment, allowing
                organizations to launch a fully branded driver application
                connected to their LogisBase environment. Configure, customize,
                and distribute it as your own product with complete operational
                control.
              </p>
              <ul className="space-y-3">
                {[
                  'Replace name, logo, and colours in a single config file',
                  'Point at any self-hosted or cloud LogisBase instance',
                  'Extend with custom screens via the extension SDK',
                  'Enterprise License available for proprietary forks',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/services/navigator-publishing">
                  <Button>
                    Publishing Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href="https://github.com/logisbase/navigator-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <FaGithub className="mr-2 h-4 w-4" />
                    Request source access
                  </Button>
                </Link>
                <Link href="/docs/fleet-ops/navigator-app/theming">
                  <Button variant="outline">Customization guide</Button>
                </Link>
                <Link href="/licensing/commercial">
                  <Button variant="ghost">
                    Enterprise License <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-muted-foreground mt-1 text-sm">
                Don't want to manage the publishing process?{' '}
                <Link
                  href="/services/navigator-publishing"
                  className="text-primary underline underline-offset-4"
                >
                  Our team can publish a fully branded Navigator app to the App
                  Store and Google Play in ~2 weeks →
                </Link>
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-xl border">
                <Image
                  src="/images/screenshots/admin/admin-branding.webp"
                  alt="White-label Navigator configuration — custom branding controls in the admin console"
                  width={1280}
                  height={720}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              One system, from dispatch to doorstep
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Navigator and Fleet-Ops are designed together. Every driver action
              updates the console in real time — no webhooks to configure, no
              middleware to maintain.
            </p>
          </div>

          <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                icon: Package,
                step: '1',
                label: 'Order created',
                sub: 'Fleet-Ops console or API',
              },
              {
                icon: Radio,
                step: '2',
                label: 'Job dispatched',
                sub: 'Navigator notified instantly',
              },
              {
                icon: Navigation,
                step: '3',
                label: 'Driver en route',
                sub: 'Live map in Fleet-Ops',
              },
              {
                icon: Camera,
                step: '4',
                label: 'POD captured',
                sub: 'Attached to order record',
              },
            ].map(({ icon: Icon, step, label, sub }, i) => (
              <div
                key={label}
                className="bg-card relative flex flex-col items-center gap-3 rounded-xl border p-6 text-center"
              >
                {i < 3 && (
                  <ArrowRight className="text-muted-foreground absolute top-1/2 -right-2 hidden h-4 w-4 -translate-y-1/2 md:block" />
                )}
                <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold">
                  {step}
                </div>
                <Icon className="text-muted-foreground h-5 w-5" />
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-muted-foreground text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-xl border">
            <Image
              src="/images/screenshots/fleet-ops/fleet-ops-driver-position-playback.webp"
              alt="Fleet-Ops console showing live driver position playback from Navigator"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">
              Get Navigator
            </h2>
            <p className="text-muted-foreground mx-auto max-w-xl">
              Available on mobile with full integration to LogisBase Cloud or
              any self-hosted instance.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
            <div className="bg-card flex flex-col gap-4 rounded-xl border p-8 text-center">
              <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-xl">
                <FaGooglePlay className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-semibold">Google Play</h3>
              <p className="text-muted-foreground text-sm">
                Download Navigator for Android and connect it to your LogisBase
                environment.
              </p>
              <Link
                href="https://play.google.com/store/apps/details?id=io.logisbase.navigator"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <FaGooglePlay className="h-3.5 w-3.5" />
                  Google Play
                </Button>
              </Link>
            </div>

            <div className="bg-card flex flex-col gap-4 rounded-xl border p-8 text-center">
              <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-xl">
                <FaApple className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-semibold">App Store</h3>
              <p className="text-muted-foreground text-sm">
                Native iOS application with the same full feature set for iPhone
                and iPad.
              </p>
              <Link
                href="https://apps.apple.com/us/app/logisbase-navigator/id1554208255"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <FaApple className="h-3.5 w-3.5" />
                  App Store
                </Button>
              </Link>
            </div>

            <div className="bg-card flex flex-col gap-4 rounded-xl border p-8 text-center">
              <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-xl">
                <FaGithub className="text-primary h-6 w-6" />
              </div>
              <h3 className="font-semibold">Build Your Own</h3>
              <p className="text-muted-foreground text-sm">
                Fork, customize, and extend Navigator to launch under your own
                brand with full white-label control.
              </p>
              <Link
                href="https://github.com/logisbase/navigator-app"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <FaGithub className="h-3.5 w-3.5" />
                  Request source access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-4xl font-bold tracking-tight">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: 'Does Navigator work without an internet connection?',
                  a: 'Yes. Navigator is offline-first. Map tiles for the active route are pre-cached, and drivers can capture proof of delivery, update job statuses, and send messages. Everything syncs to Fleet-Ops the moment connectivity is restored.',
                },
                {
                  q: 'Is Navigator available on iOS as well as Android?',
                  a: 'Yes — Navigator is available on both the Google Play Store and the Apple App Store. Both apps share the same feature set and are maintained in the same source-accessible repository.',
                },
                {
                  q: 'Can I white-label Navigator as my own app?',
                  a: 'Absolutely. Navigator is Source-accessible, so you can fork the repo, replace the name, logo, and colours, and publish it to the app stores as your own product at no cost. If you need to keep your modifications private, an Enterprise License is available — contact us to discuss.',
                },
                {
                  q: 'Does Navigator require LogisBase Cloud, or can I self-host?',
                  a: 'Navigator connects to any LogisBase instance — cloud or self-hosted. Set your instance URL in the app during login. There is no lock-in to LogisBase-managed infrastructure.',
                },
                {
                  q: 'What proof-of-delivery options does Navigator support?',
                  a: 'Navigator supports photo capture, freehand digital signature, and QR code scanning. You configure which proof types are required per order type in the Fleet-Ops console. All evidence is GPS-stamped and attached to the order record.',
                },
                {
                  q: 'How does Navigator communicate with Fleet-Ops?',
                  a: 'Navigator uses the LogisBase REST API and a persistent WebSocket connection for real-time events. Driver location is broadcast every few seconds while a job is active. No additional configuration or third-party services are required.',
                },
                {
                  q: 'Can drivers see and manage multiple stops on a single job?',
                  a: 'Yes. Navigator displays the full waypoint manifest for multi-stop orders and guides drivers through each stop in sequence. Completion of each waypoint updates Fleet-Ops in real time.',
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

      <section className="section-padding">
        <div className="container">
          <div className="bg-card relative overflow-hidden rounded-2xl border px-8 py-16 text-center">
            <div className="from-primary/5 to-primary/10 absolute inset-0 bg-gradient-to-br via-transparent" />
            <div className="relative flex flex-col items-center gap-6">
              <h2 className="text-4xl font-bold tracking-tight text-balance">
                Equip Your Drivers With a Professional Toolkit
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Navigator is source-accessible, production-ready, and designed
                for immediate deployment. Connect it to your LogisBase instance
                in minutes and provide drivers with a fully integrated
                operational mobile experience.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="https://play.google.com/store/apps/details?id=io.logisbase.navigator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg">
                    <FaGooglePlay className="mr-2 h-4 w-4" />
                    Google Play
                  </Button>
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/logisbase-navigator/id1554208255"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline">
                    <FaApple className="mr-2 h-4 w-4" />
                    App Store
                  </Button>
                </Link>
                <Link
                  href="https://cal.com/logisbase/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="ghost">
                    Book a demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-muted-foreground text-xs">
                Source Access Available · iOS & Android · Ready to Deploy
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
