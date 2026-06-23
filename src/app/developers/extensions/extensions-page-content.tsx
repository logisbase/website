'use client';

import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  ExternalLink,
  GitBranch,
  LayoutDashboard,
  Package,
  Palette,
  Plug,
  Server,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from '@/components/ui/code-block';

// ─── Data ─────────────────────────────────────────────────────────────────────

const EXTENSION_TYPES = [
  {
    icon: LayoutDashboard,
    title: 'Full-Stack Extensions',
    desc: 'A complete Ember Engine frontend paired with a Laravel API backend. Adds new screens, navigation items, and data models to the console.',
    examples: ['FleetOps', 'Storefront', 'Ledger', 'Pallet WMS'],
  },
  {
    icon: Server,
    title: 'Backend-Only Extensions',
    desc: 'A Laravel package that adds API endpoints, data models, background jobs, or integrations — without a custom UI.',
    examples: [
      'Payment gateway adapters',
      'ERP sync jobs',
      'Custom notification channels',
    ],
  },
  {
    icon: Palette,
    title: 'UI Component Extensions',
    desc: 'Ember addons that contribute reusable UI components, widgets, or dashboard panels to existing extensions.',
    examples: ['Custom map overlays', 'Analytics widgets', 'Branded themes'],
  },
  {
    icon: Plug,
    title: 'Integration Extensions',
    desc: 'Extensions that bridge LogisBase with third-party platforms — shipping carriers, ERPs, payment processors, and more.',
    examples: ['FedEx / DHL carrier', 'Shopify order sync', 'Stripe billing'],
  },
];

const BUILD_STEPS = [
  {
    step: '01',
    title: 'Install the CLI',
    code: 'npm install -g @logisbase/cli',
    desc: 'The CLI scaffolds new extensions, manages dependencies, and handles publishing to the registry.',
  },
  {
    step: '02',
    title: 'Scaffold an Extension',
    code: 'flb new my-extension',
    desc: 'Generates the full structure: an Ember Engine for the frontend and a Laravel package for the backend, pre-wired together.',
  },
  {
    step: '03',
    title: 'Develop Locally',
    code: 'flb serve',
    desc: 'Start the development server. Your extension hot-reloads inside a local LogisBase instance as you build.',
  },
  {
    step: '04',
    title: 'Publish to the Registry',
    code: 'flb publish',
    desc: 'Package and submit your extension to the LogisBase Extension Registry. Once approved, it appears in the marketplace.',
  },
];

const CORE_FRAMEWORKS = [
  {
    name: 'logisbase/ember-core',
    type: 'Frontend' as const,
    desc: "Provides foundational services, adapters, and utilities for initializing and managing your extension's Ember Engine. Handles authentication, routing integration, and cross-extension communication.",
    link: 'https://tally.so/r/obgQQx',
  },
  {
    name: 'logisbase/ember-ui',
    type: 'Frontend' as const,
    desc: 'A suite of standardized UI components and styles that match the LogisBase console aesthetic. Tables, modals, forms, maps, and more — all pre-built and ready to use.',
    link: 'https://tally.so/r/obgQQx',
  },
  {
    name: 'logisbase/core-api',
    type: 'Backend' as const,
    desc: 'The Laravel package that forms the backbone of every extension backend. Provides the composable REST API framework, shared models, authentication middleware, notifications, and the event system.',
    link: 'https://tally.so/r/obgQQx',
  },
  {
    name: 'logisbase/logisbase-php',
    type: 'Backend' as const,
    desc: 'PHP SDK for interacting with the LogisBase API from server-side applications and extension backends.',
    link: 'https://tally.so/r/obgQQx',
  },
];

const REGISTRY_FEATURES = [
  'Dual Composer + npm package support',
  'extension.json validation on every submission',
  'Versioned releases with semantic versioning',
  'In-console marketplace for one-click installation',
  'Private registry support for self-hosted deployments',
  'Source-accessible — self-host your own registry',
];

const ARCHITECTURE_FEATURES = [
  'Adds new navigation items and screens to the console',
  'Defines its own data models, API endpoints, and business logic',
  'Shares authentication, permissions, and core models with the platform',
  'Can communicate with and extend other installed extensions',
  'Packaged and distributed via the LogisBase Extension Registry',
];

const FAQS = [
  {
    q: 'What is a LogisBase extension?',
    a: 'A LogisBase extension is a modular package that adds new features, integrations, or complete modules to the LogisBase platform. Each extension is a combination of an Ember Engine (frontend) and a Laravel package (API backend). Extensions are installed via the LogisBase CLI and appear as first-class modules inside the console — indistinguishable from core platform features.',
  },
  {
    q: 'Do I need to know Ember.js to build an extension?',
    a: 'The LogisBase frontend is built with Ember.js and Ember Engines. You will need familiarity with Ember to build a full-stack extension with a custom UI. However, if you only need to add backend logic, API endpoints, or data models, you can build a backend-only Laravel package extension without any Ember knowledge.',
  },
  {
    q: 'How do I publish an extension to the marketplace?',
    a: 'Use the LogisBase CLI: run `flb publish` from your extension directory. The CLI packages your extension and submits it to the LogisBase Extension Registry at registry.logisbase.com. Once reviewed, your extension appears in the in-console marketplace and can be installed by any LogisBase user.',
  },
  {
    q: 'Can I build a private extension for my own deployment?',
    a: 'Yes. You can build and install extensions locally without publishing them to the public registry. Self-hosted LogisBase deployments can point to a private registry or install extensions directly from a local path or private npm/Composer repository.',
  },
  {
    q: 'What is the extension.json file?',
    a: 'Every LogisBase extension must include an extension.json manifest file at its root. This file declares the extension name, version, description, author, required LogisBase version, and any dependencies. The registry validates this file before accepting a submission.',
  },
  {
    q: 'How does the extension backend integrate with LogisBase core?',
    a: 'The Laravel package backend uses the LogisBase Core API as its foundation. This gives your extension access to the composable REST API framework, shared data models (orders, drivers, places, contacts), authentication, middleware, notifications, and the event system — all without reimplementing them.',
  },
  {
    q: 'Can extensions communicate with each other?',
    a: 'Yes. The Ember Core framework (@logisbase/ember-core) provides integration capabilities that allow extensions to register services, share state, and expose APIs to other extensions. On the backend, Laravel service providers allow extensions to bind shared services into the container.',
  },
  {
    q: 'Is there an Enterprise License requirement for publishing extensions?',
    a: 'Extensions you build for your own use are covered by the Source-accessible licence that governs LogisBase. If you want to sell or distribute extensions commercially — or keep your extension source code proprietary — you will need a LogisBase Enterprise License. Contact hello@logisbase.com to discuss extension licensing.',
  },
];

// ─── Code Samples ─────────────────────────────────────────────────────────────

const manifestCode = `{
  "name": "my-logistics-module",
  "version": "1.0.0",
  "description": "Custom logistics module for LogisBase",
  "author": "Your Company",
  "logisbase": {
    "requires": ">=1.0.0",
    "engine": "my-logistics-module",
    "backend": "your-company/my-logistics-module"
  },
  "dependencies": {
    "@logisbase/ember-core": "^1.0.0",
    "@logisbase/ember-ui": "^1.0.0"
  }
}`;

const cliCode = `# Install the LogisBase CLI
npm install -g @logisbase/cli

# Scaffold a new extension
flb new my-extension

# Develop with hot reload
flb serve

# Publish to the registry
flb publish

# Install any extension from the registry
flb install my-extension`;

// ─── Component ────────────────────────────────────────────────────────────────

export default function DeveloperExtensionsPageContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
            <Code2 className="text-primary h-3 w-3" />
            <span>Developer Platform</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance md:text-6xl">
            Extend LogisBase with{' '}
            <span className="text-primary">Custom Modules</span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-10 max-w-3xl text-xl">
            LogisBase is built as an extensible operating system for logistics.
            Every core feature — FleetOps, Storefront, Ledger — is itself an
            extension. Build your own modules, publish them to the marketplace,
            or keep them private for your own deployment.
          </p>
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/docs/extension-development">
                Read the Extension Guide <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://tally.so/r/obgQQx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2 h-4 w-4" />
                Request source access
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="/platform/extensions">Browse Marketplace</Link>
            </Button>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl border shadow-2xl">
            <Image
              src="/images/screenshots/extensions/extensions-browse.webp"
              alt="LogisBase Extensions Marketplace in the console"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-muted/10 border-y py-10">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-1 text-2xl font-bold">Ember.js</div>
              <div className="text-muted-foreground text-sm">
                Frontend Framework
              </div>
            </div>
            <div>
              <div className="mb-1 text-2xl font-bold">Laravel</div>
              <div className="text-muted-foreground text-sm">
                Backend Framework
              </div>
            </div>
            <div>
              <div className="mb-1 text-2xl font-bold">1 CLI</div>
              <div className="text-muted-foreground text-sm">
                Scaffold, Dev &amp; Publish
              </div>
            </div>
            <div>
              <div className="mb-1 text-2xl font-bold">Source-accessible</div>
              <div className="text-muted-foreground text-sm">
                Source-accessible Licence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <span className="text-primary">●</span>
                <span>Architecture</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Every Feature is an Extension
              </h2>
              <p className="text-muted-foreground mb-4">
                LogisBase is not a monolith — it is an operating system for
                logistics built from composable extensions. FleetOps,
                Storefront, Ledger, and Pallet are all extensions that ship with
                LogisBase. Your custom extension is a first-class citizen with
                exactly the same capabilities.
              </p>
              <p className="text-muted-foreground mb-8">
                Each extension is a combination of an{' '}
                <strong>Ember Engine</strong> (the frontend module) and a{' '}
                <strong>Laravel package</strong> (the API backend). The two
                halves are developed independently and communicate through the
                LogisBase Core API.
              </p>
              <div className="space-y-3">
                {ARCHITECTURE_FEATURES.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <CodeBlock
              code={manifestCode}
              language="json"
              label="extension.json"
            />
          </div>
        </div>
      </section>

      {/* Extension Types */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">Types of Extensions</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              Extensions range from full-stack modules with custom UIs to
              lightweight backend integrations.
            </p>
          </div>
          <div
            className="bg-border mx-auto max-w-4xl overflow-hidden rounded-xl"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 1,
            }}
          >
            {EXTENSION_TYPES.map((type) => (
              <div key={type.title} className="bg-card p-6">
                <type.icon className="text-primary mb-4 h-7 w-7" />
                <h3 className="mb-2 text-base font-semibold">{type.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {type.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {type.examples.map((ex) => (
                    <span
                      key={ex}
                      className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Steps */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              From Zero to Published in Four Steps
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              The LogisBase CLI handles scaffolding, local development, and
              publishing so you can focus on building.
            </p>
          </div>
          <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {BUILD_STEPS.map((step) => (
              <Card key={step.step} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="text-primary/25 mb-2 text-3xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                  <div className="bg-muted/50 text-muted-foreground rounded-md px-3 py-2 font-mono text-xs">
                    {step.code}
                  </div>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/docs/extension-development/getting-started">
                <BookOpen className="mr-2 h-4 w-4" />
                Full Getting Started Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Frameworks */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              Core Development Frameworks
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              LogisBase provides dedicated libraries for both the frontend and
              backend halves of your extension.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
            {CORE_FRAMEWORKS.map((fw) => (
              <Card key={fw.name} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="mb-1 flex items-center gap-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        fw.type === 'Frontend'
                          ? 'bg-blue-500/10 text-blue-500'
                          : 'bg-orange-500/10 text-orange-500'
                      }`}
                    >
                      {fw.type}
                    </span>
                    <code className="text-muted-foreground font-mono text-sm">
                      {fw.name}
                    </code>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-muted-foreground text-sm">{fw.desc}</p>
                  <Link
                    href={fw.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary inline-flex items-center gap-1.5 text-sm underline-offset-4 hover:underline"
                  >
                    <FaGithub className="h-3.5 w-3.5" />
                    Request source access
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extension Registry */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <span className="text-primary">●</span>
                <span>Registry</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                The LogisBase Extension Registry
              </h2>
              <p className="text-muted-foreground mb-6">
                The LogisBase Extension Registry at{' '}
                <strong>registry.logisbase.com</strong> is the official package
                repository for LogisBase extensions. It supports both Composer
                (PHP) and npm (JavaScript) packages, with built-in validation to
                ensure every extension meets platform standards.
              </p>
              <div className="mb-8 space-y-2.5">
                {REGISTRY_FEATURES.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href="https://tally.so/r/obgQQx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-1.5 h-3.5 w-3.5" />
                    Registry Source
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/platform/extensions">
                    <Package className="mr-1.5 h-3.5 w-3.5" />
                    Browse Marketplace
                  </Link>
                </Button>
              </div>
            </div>
            <CodeBlock code={cliCode} language="bash" label="LogisBase CLI" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/20">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-lg border px-4"
              >
                <AccordionTrigger className="py-4 text-left font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-card relative overflow-hidden rounded-2xl border p-12 text-center">
            <div className="from-primary/5 to-primary/10 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />
            <div className="relative">
              <h2 className="mb-4 text-4xl font-bold">Ready to Build?</h2>
              <p className="text-muted-foreground mb-8">
                Start with the official extension development guide, scaffold
                your first extension with the CLI, and join the LogisBase
                developer community on Discord.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/docs/extension-development">
                    Start Building <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link
                    href="https://discord.gg/7xPbDryKDH"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join the Discord
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <Link
                    href="https://tally.so/r/obgQQx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
