'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

const events = [
  {
    group: 'Orders',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    dot: 'bg-blue-500',
    items: [
      {
        name: 'order.created',
        desc: 'A new order has been placed in the system.',
      },
      {
        name: 'order.dispatched',
        desc: 'An order has been assigned to a driver and dispatched.',
      },
      {
        name: 'order.started',
        desc: 'The driver has started the order journey.',
      },
      {
        name: 'order.completed',
        desc: 'The order has been successfully delivered.',
      },
      { name: 'order.cancelled', desc: 'An order has been cancelled.' },
      { name: 'order.updated', desc: 'Any field on an order has changed.' },
    ],
  },
  {
    group: 'Drivers',
    color: 'bg-green-500/10 text-green-600 dark:text-green-400',
    dot: 'bg-green-500',
    items: [
      {
        name: 'driver.assigned',
        desc: 'A driver has been assigned to an order or fleet.',
      },
      {
        name: 'driver.location_changed',
        desc: "The driver's GPS coordinates have updated.",
      },
      {
        name: 'driver.online',
        desc: 'A driver has gone online and is available.',
      },
      { name: 'driver.offline', desc: 'A driver has gone offline.' },
      {
        name: 'driver.updated',
        desc: "A driver's profile or status has changed.",
      },
    ],
  },
  {
    group: 'Tracking',
    color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    dot: 'bg-purple-500',
    items: [
      {
        name: 'tracking_status.created',
        desc: 'A new tracking status update has been recorded.',
      },
      {
        name: 'tracking_number.created',
        desc: 'A tracking number has been generated for a shipment.',
      },
      {
        name: 'proof_of_delivery.created',
        desc: 'A proof of delivery (signature/photo) has been captured.',
      },
    ],
  },
  {
    group: 'Fleet & Vehicles',
    color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    dot: 'bg-orange-500',
    items: [
      {
        name: 'vehicle.updated',
        desc: "A vehicle's details or status have changed.",
      },
      {
        name: 'vehicle.assigned',
        desc: 'A vehicle has been assigned to a driver or fleet.',
      },
      {
        name: 'issue.created',
        desc: 'A new issue or incident has been reported.',
      },
      { name: 'issue.updated', desc: 'An existing issue has been updated.' },
      { name: 'issue.resolved', desc: 'An issue has been marked as resolved.' },
    ],
  },
];

const useCases = [
  {
    icon: '📱',
    title: 'Customer Order Notifications',
    desc: 'Trigger SMS, push, or email notifications the moment an order is dispatched, out for delivery, or completed — without polling.',
    events: ['order.dispatched', 'tracking_status.created', 'order.completed'],
  },
  {
    icon: '🗺️',
    title: 'Live Tracking Map',
    desc: 'Stream driver GPS coordinates to your own customer-facing tracking page or embedded map widget in real time.',
    events: ['driver.location_changed', 'order.started'],
  },
  {
    icon: '🏢',
    title: 'ERP & WMS Sync',
    desc: 'Keep your ERP, WMS, or inventory system in sync with LogisBase order status changes automatically.',
    events: [
      'order.created',
      'order.updated',
      'order.completed',
      'order.cancelled',
    ],
  },
  {
    icon: '📄',
    title: 'Proof of Delivery Archiving',
    desc: 'Automatically archive signatures and delivery photos into your document management system or S3 bucket.',
    events: ['proof_of_delivery.created'],
  },
  {
    icon: '💰',
    title: 'Billing & Invoicing Triggers',
    desc: 'Fire your billing system to generate and send an invoice the moment a delivery is confirmed complete.',
    events: ['order.completed', 'proof_of_delivery.created'],
  },
  {
    icon: '🔧',
    title: 'Fleet Maintenance Alerts',
    desc: 'Route vehicle issues and driver incidents to your maintenance team or ticketing system instantly.',
    events: ['issue.created', 'vehicle.updated'],
  },
];

const faqs: {
  q: string;
  a: string;
  learnMore?: { href: string; label: string };
}[] = [
  {
    q: 'How do I set up a webhook endpoint?',
    a: 'Navigate to Developers → Webhooks in the LogisBase console. Click "Add Webhook", enter your HTTPS endpoint URL, select the events you want to subscribe to, and save. LogisBase will immediately begin delivering events to your endpoint.',
    learnMore: {
      href: '/docs/platform/recipes/connect-your-first-webhook',
      label: 'Recipe: Connect your first webhook →',
    },
  },
  {
    q: 'Does LogisBase retry failed webhook deliveries?',
    a: 'Yes. If your endpoint returns a non-2xx status code or times out, LogisBase retries with exponential back-off: 5 minutes, 30 minutes, 2 hours, and 8 hours. After four failed attempts the event is marked as failed and logged in the console for inspection.',
  },
  {
    q: 'How do I verify that a webhook came from LogisBase?',
    a: 'Every webhook request includes an X-LogisBase-Signature header containing an HMAC-SHA256 signature of the raw request body, signed with your webhook secret. Verify this signature on your server before processing the payload to prevent spoofed requests.',
    learnMore: {
      href: '/docs/platform/developer-console/webhooks',
      label: 'Webhook signing details →',
    },
  },
  {
    q: 'What format does the webhook payload use?',
    a: 'All webhook payloads are JSON objects with a consistent envelope: an event field (e.g. "order.dispatched"), a created_at timestamp, an api_version field, and a data object containing the full updated resource.',
  },
  {
    q: 'Can I subscribe to all events at once?',
    a: 'Yes. When creating a webhook you can select "All events" to receive every event type, or you can cherry-pick specific events. You can also create multiple webhooks pointing to different endpoints with different event subscriptions.',
    learnMore: {
      href: '/docs/platform/developer-console/system-events',
      label: 'Available event types →',
    },
  },
  {
    q: 'How do I test my webhook endpoint locally?',
    a: 'Use a tunnelling tool like ngrok (ngrok http 3000) to expose your local server with a public HTTPS URL. Paste that URL into the LogisBase webhook configuration. You can also use the "Send Test Event" button in the console to fire a sample payload at any time.',
  },
  {
    q: 'Is there a log of all webhook deliveries?',
    a: 'Yes. The Developers → Webhooks panel in the console shows a full delivery log for every webhook, including the event type, timestamp, HTTP status returned by your endpoint, full request/response bodies, and retry history.',
    learnMore: {
      href: '/docs/platform/developer-console/request-logs',
      label: 'Request & delivery logs →',
    },
  },
];

export default function WebhooksPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">
                Developers
              </span>
              <span className="px-3">Webhooks</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Real-Time Event Notifications for Your{' '}
              <span className="text-gradient">Logistics Stack</span>
            </h1>
            <p className="text-foreground/90 dark:text-foreground/95 max-w-3xl leading-snug md:text-lg lg:text-xl">
              Webhooks let LogisBase push event data directly to your server the
              moment something happens — an order is dispatched, a driver
              updates their location, or a delivery is completed. No polling, no
              delays, no missed updates.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Link href="/docs/platform/developer-console/webhooks">
                <Button size="lg">Read the Docs</Button>
              </Link>
              <Link href="https://tally.so/r/68VqOO">
                <Button size="lg" variant="outline">
                  Set Up a Webhook
                </Button>
              </Link>
              <Link href="/developers/api">
                <Button size="lg" variant="ghost">
                  API Reference
                </Button>
              </Link>
            </div>
            <div className="relative mt-12 aspect-video w-full overflow-hidden rounded-lg border shadow-2xl">
              <Image
                src="/images/screenshots/developers/developers-webhooks-management.webp"
                alt="LogisBase Developer Console — Webhooks management screen with subscriptions, target URLs, and event filters"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/10 border-y py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-1 text-3xl font-bold">20+</div>
              <div className="text-muted-foreground text-sm">Event Types</div>
            </div>
            <div>
              <div className="mb-1 text-3xl font-bold">HTTPS</div>
              <div className="text-muted-foreground text-sm">
                Secure Delivery
              </div>
            </div>
            <div>
              <div className="mb-1 text-3xl font-bold">4×</div>
              <div className="text-muted-foreground text-sm">Auto Retry</div>
            </div>
            <div>
              <div className="mb-1 text-3xl font-bold">HMAC</div>
              <div className="text-muted-foreground text-sm">
                Signature Verification
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="from-background to-muted/20 bg-gradient-to-b py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
                <span className="text-primary">●</span>
                <span className="ml-2">How It Works</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Event-Driven Integration in Three Steps
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                LogisBase webhooks follow a simple publish-subscribe model. You
                tell LogisBase where to send events, and it handles the rest —
                delivery, retries, and logging included.
              </p>
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Register your endpoint',
                    desc: 'Add your HTTPS URL in Developers → Webhooks and choose which events to subscribe to.',
                  },
                  {
                    step: '02',
                    title: 'LogisBase fires the event',
                    desc: 'When a matching event occurs, LogisBase immediately POSTs a signed JSON payload to your endpoint.',
                  },
                  {
                    step: '03',
                    title: 'Your server processes it',
                    desc: 'Verify the signature, acknowledge with a 200 OK, and process the payload asynchronously in your own system.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <div className="mb-1 font-semibold">{item.title}</div>
                      <div className="text-muted-foreground text-sm">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Payload example */}
            <div className="bg-card overflow-hidden rounded-lg border">
              <div className="bg-muted/30 flex items-center gap-2 border-b px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <span className="text-muted-foreground ml-2 text-xs">
                  Webhook Payload — order.dispatched
                </span>
              </div>
              <div className="space-y-1 overflow-x-auto p-6 font-mono text-sm">
                <div className="text-muted-foreground">
                  POST https://your-server.com/webhooks/logisbase
                </div>
                <div className="text-muted-foreground">
                  X-LogisBase-Signature: sha256=abc123...
                </div>
                <div className="text-foreground mt-3">{`{`}</div>
                <div className="ml-4 text-green-400">{`"event": "order.dispatched",`}</div>
                <div className="ml-4 text-green-400">{`"api_version": "1.0",`}</div>
                <div className="ml-4 text-green-400">{`"created_at": "2026-04-15T09:41:00Z",`}</div>
                <div className="text-foreground ml-4">{`"data": {`}</div>
                <div className="ml-8 text-blue-400">{`"id": "order_xxxxxxxx",`}</div>
                <div className="ml-8 text-blue-400">{`"public_id": "ORDER-12345",`}</div>
                <div className="ml-8 text-blue-400">{`"status": "dispatched",`}</div>
                <div className="text-foreground ml-8">{`"driver_assigned": {`}</div>
                <div className="ml-12 text-blue-400">{`"name": "James Okafor",`}</div>
                <div className="ml-12 text-blue-400">{`"id": "driver_xxxxxxxx"`}</div>
                <div className="text-foreground ml-8">{`},`}</div>
                <div className="text-foreground ml-8">{`"payload": {`}</div>
                <div className="ml-12 text-blue-400">{`"pickup": "12 Marina Bay, Singapore",`}</div>
                <div className="ml-12 text-blue-400">{`"dropoff": "88 Orchard Road, Singapore"`}</div>
                <div className="text-foreground ml-8">{`}`}</div>
                <div className="text-foreground ml-4">{`}`}</div>
                <div className="text-foreground">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              All Available Webhook Events
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Subscribe to individual events or all events at once. Every event
              follows the same{' '}
              <code className="bg-muted rounded px-1 py-0.5 text-sm">
                resource.action
              </code>{' '}
              naming convention.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {events.map((group) => (
              <div
                key={group.group}
                className="bg-card min-w-0 rounded-lg border p-6"
              >
                <div
                  className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${group.color}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${group.dot}`}
                  ></span>
                  {group.group}
                </div>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={item.name} className="flex min-w-0 gap-3">
                      <code className="bg-muted mt-0.5 h-fit flex-shrink-0 rounded px-2 py-1 font-mono text-xs break-all">
                        {item.name}
                      </code>
                      <span className="text-muted-foreground min-w-0 text-sm break-words">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-muted/20 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              What Teams Build with Webhooks
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Webhooks are the glue between LogisBase and the rest of your
              logistics technology stack.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {useCases.map((uc, i) => (
              <div key={i} className="bg-card rounded-lg border p-6">
                <div className="mb-4 text-3xl">{uc.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{uc.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{uc.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {uc.events.map((ev) => (
                    <code
                      key={ev}
                      className="bg-muted rounded px-2 py-0.5 font-mono text-xs"
                    >
                      {ev}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
                <span className="text-primary">●</span>
                <span className="ml-2">Security</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Verify Every Delivery with HMAC Signatures
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Every webhook request LogisBase sends includes an{' '}
                <code className="bg-muted rounded px-1 py-0.5 text-sm">
                  X-LogisBase-Signature
                </code>{' '}
                header — an HMAC-SHA256 signature of the raw request body,
                signed with your webhook secret. Always verify this before
                processing the payload.
              </p>
              <div className="space-y-4">
                {[
                  'HMAC-SHA256 signature on every request',
                  'HTTPS-only delivery — no plain HTTP endpoints',
                  'Per-webhook secrets, rotatable at any time',
                  'Timing-safe comparison to prevent timing attacks',
                  'Full delivery log for audit and debugging',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="bg-primary/10 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card overflow-hidden rounded-lg border">
              <div className="bg-muted/30 flex items-center gap-2 border-b px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <span className="text-muted-foreground ml-2 text-xs">
                  Signature Verification — Node.js
                </span>
              </div>
              <div className="space-y-1 overflow-x-auto p-6 font-mono text-sm">
                <div className="text-muted-foreground">
                  const crypto = require(&apos;crypto&apos;);
                </div>
                <div className="text-foreground mt-3">
                  app.post(&apos;/webhooks/logisbase&apos;, (req, res) =&gt;{' '}
                  {'{'}
                </div>
                <div className="text-foreground ml-4">
                  const sig = req.headers[&apos;x-logisbase-signature&apos;];
                </div>
                <div className="text-foreground ml-4">
                  const expected = crypto
                </div>
                <div className="ml-6 text-green-400">
                  .createHmac(&apos;sha256&apos;, process.env.WEBHOOK_SECRET)
                </div>
                <div className="ml-6 text-green-400">.update(req.rawBody)</div>
                <div className="ml-6 text-green-400">
                  .digest(&apos;hex&apos;);
                </div>
                <div className="text-foreground mt-2 ml-4">
                  if (!crypto.timingSafeEqual(
                </div>
                <div className="text-foreground ml-6">Buffer.from(sig),</div>
                <div className="text-foreground ml-6">
                  Buffer.from(expected)
                </div>
                <div className="text-foreground ml-4">)) {'{'}</div>
                <div className="ml-6 text-red-400">
                  return res.status(401).send(&apos;Invalid signature&apos;);
                </div>
                <div className="text-foreground ml-4">{'}'}</div>
                <div className="text-muted-foreground mt-2 ml-4">
                  {/* Process payload safely */}
                </div>
                <div className="text-foreground ml-4">
                  const {'{ event, data }'} = req.body;
                </div>
                <div className="text-foreground ml-4">res.sendStatus(200);</div>
                <div className="text-foreground">{'}'});</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retry policy */}
      <section className="bg-muted/20 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Reliable Delivery with Automatic Retries
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              If your endpoint is temporarily unavailable, LogisBase
              automatically retries delivery with exponential back-off. Every
              attempt is logged so you can inspect and replay failed events.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { attempt: '1st retry', delay: '5 minutes' },
              { attempt: '2nd retry', delay: '30 minutes' },
              { attempt: '3rd retry', delay: '2 hours' },
              { attempt: '4th retry', delay: '8 hours' },
            ].map((r, i) => (
              <div
                key={i}
                className="bg-card rounded-lg border p-5 text-center"
              >
                <div className="text-primary mb-1 text-2xl font-bold">
                  {r.delay}
                </div>
                <div className="text-muted-foreground text-xs">{r.attempt}</div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 text-center text-sm">
            After four failed attempts the event is marked as failed and
            preserved in the delivery log for manual inspection.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-lg border">
                <button
                  className="hover:bg-muted/30 flex w-full items-center justify-between px-6 py-4 text-left font-medium transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="text-muted-foreground ml-4 flex-shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="text-muted-foreground bg-muted/10 border-t px-6 pt-4 pb-5 text-sm leading-relaxed">
                    {faq.a}
                    {faq.learnMore && (
                      <div className="mt-3">
                        <Link
                          href={faq.learnMore.href}
                          className="text-primary inline-flex items-center text-xs font-medium hover:underline"
                        >
                          {faq.learnMore.label}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="from-muted/20 to-background bg-gradient-to-b py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Start Receiving Webhook Events Today
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Set up your first webhook endpoint in under two minutes from the
            LogisBase Developer Console.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://tally.so/r/68VqOO">
              <Button size="lg">Get Started Free</Button>
            </Link>
            <Link href="/docs/platform/developer-console/webhooks">
              <Button size="lg" variant="outline">
                Read the Docs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
