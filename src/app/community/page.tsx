import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Github,
  MessageSquare,
  BookOpen,
  Users,
  Code2,
  Rss,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/community' },
  title: 'Community | LogisBase',
  description:
    'Join the LogisBase community — thousands of logistics operators, developers, and contributors on Discord, GitHub, and our developer forums. Get help, share ideas, and shape the platform.',
  keywords: [
    'logisbase community',
    'logistics software community',
    'logisbase discord',
    'source-available logistics community',
  ],
  openGraph: {
    title: 'Community | LogisBase',
    description:
      'Join thousands of logistics operators and developers in the LogisBase community.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Community | LogisBase`,
    description: `Join thousands of logistics operators and developers in the LogisBase community.`,
  },
};

const channels = [
  {
    icon: MessageSquare,
    title: 'Discord',
    description:
      'The most active LogisBase community hub. Get help with your deployment, discuss features, share your extensions, and connect with other operators and developers in real-time.',
    cta: 'Join Discord',
    href: 'https://discord.com/invite/HnTqQ6zAVn',
    badge: '5,000+ members',
  },
  {
    icon: Github,
    title: 'GitHub',
    description:
      'Browse the source code, report bugs, submit pull requests, and follow the development roadmap. All LogisBase development happens in the open on GitHub.',
    cta: 'Request source access',
    href: 'https://github.com/logisbase/logisbase',
    badge: 'Source-available',
  },
  {
    icon: BookOpen,
    title: 'Developer Forums',
    description:
      'Long-form technical discussions, architecture questions, integration guides, and extension development help. Searchable and indexed — your question may already be answered.',
    cta: 'Browse forums',
    href: '/developers',
    badge: 'Technical discussions',
  },
  {
    icon: Rss,
    title: 'Blog & Updates',
    description:
      "Product updates, engineering deep-dives, logistics industry insights, and community spotlights. Stay up to date with what's happening in the LogisBase ecosystem.",
    cta: 'Read the blog',
    href: '/blog',
    badge: 'Latest updates',
  },
];

const contributions = [
  {
    icon: Code2,
    title: 'Contribute code',
    description:
      'Fix bugs, build features, and improve the platform. All skill levels welcome — from first-time contributors to experienced engineers.',
  },
  {
    icon: BookOpen,
    title: 'Improve documentation',
    description:
      'Help other operators and developers by improving guides, adding examples, and fixing unclear documentation.',
  },
  {
    icon: Users,
    title: 'Help in Discord',
    description:
      'Answer questions from other community members, share your deployment experience, and help newcomers get started.',
  },
  {
    icon: Github,
    title: 'Build extensions',
    description:
      'Create and publish extensions to the LogisBase marketplace. Add new integrations, order types, and capabilities that benefit the whole community.',
  },
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-muted-foreground mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
            Community
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Built by the community,{' '}
            <span className="text-primary">for the community.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
            LogisBase is shaped by thousands of logistics operators, developers,
            and contributors worldwide. Join the conversation, get help with
            your deployment, and help build the future of source-available
            logistics.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link
                href="https://discord.com/invite/HnTqQ6zAVn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 size-4" />
                Join Discord
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="https://github.com/logisbase/logisbase"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 size-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Where to find us
            </h2>
            <p className="text-muted-foreground mt-3 text-lg">
              Multiple channels for different types of conversations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {channels.map((channel) => (
              <div
                key={channel.title}
                className="group bg-card rounded-xl border p-8"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="bg-background flex size-10 items-center justify-center rounded-lg border">
                    <channel.icon className="text-primary size-5" />
                  </div>
                  <span className="bg-muted/40 text-muted-foreground rounded-full border px-3 py-1 text-xs">
                    {channel.badge}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-semibold">{channel.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {channel.description}
                </p>
                <Button variant="outline" asChild>
                  <Link
                    href={channel.href}
                    target={
                      channel.href.startsWith('http') ? '_blank' : undefined
                    }
                    rel={
                      channel.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    {channel.cta} <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Contribute */}
      <section className="border-t py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              How to contribute
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-lg">
              There are many ways to contribute to LogisBase — you don&apos;t
              need to be a developer.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contributions.map((item) => (
              <div key={item.title} className="bg-card rounded-xl border p-6">
                <div className="bg-background mb-4 flex size-10 items-center justify-center rounded-lg border">
                  <item.icon className="text-primary size-5" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link
                href="https://github.com/logisbase/logisbase/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the contribution guide{' '}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="bg-card relative overflow-hidden rounded-2xl border px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="bg-primary/5 absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl" />
            </div>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Join 5,000+ community members
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Get help with your deployment, share your experience, and help
                shape the future of source-available logistics.
              </p>
              <Button size="lg" asChild>
                <Link
                  href="https://discord.com/invite/HnTqQ6zAVn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 size-4" />
                  Join Discord now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
