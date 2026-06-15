'use client';

import {
  Code,
  Database,
  GitBranch,
  Lock,
  Server,
  Workflow,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FEATURES = [
  {
    icon: Database,
    title: 'Your Data',
    description:
      'Keep your operational data in infrastructure you control — not ours.',
  },
  {
    icon: Workflow,
    title: 'Your Workflows',
    description:
      'Model how your team actually operates, not how a vendor decided it should.',
  },
  {
    icon: Code,
    title: 'Your Code',
    description:
      'Extend the platform, fork it, audit it. Every line is readable and modifiable.',
  },
  {
    icon: Server,
    title: 'Your Infrastructure',
    description:
      'Deploy to your cloud, your servers, or our managed hosting — your choice.',
  },
];

function buildGithubStats(stars: string) {
  return [
    { label: 'Organizations', value: stars },
    { label: 'Contributors', value: '50+' },
    { label: 'Forks', value: '200+' },
    { label: 'Active Instances', value: '8,000+' },
  ];
}

const WHY_POINTS = [
  {
    title: 'No hidden behavior',
    description:
      'The code is public. Audit the security model, data handling, and logic yourself.',
  },
  {
    title: 'No migration trap',
    description:
      "Your data is portable. Switch providers or self-host — you're never locked in.",
  },
  {
    title: 'Survives us',
    description:
      'Even if we disappeared tomorrow, your deployment keeps running. Your code, your call.',
  },
];

const SourceAvailableAdvantage = ({ stars = '1.9k+' }: { stars?: string }) => {
  const githubStats = buildGithubStats(stars);
  return (
    <section className="section-padding">
      <div className="container space-y-14">
        {/* Header */}
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-4xxl leading-none tracking-tight text-balance md:text-5xl lg:text-6xl">
            Freedom from Vendor Lock-In
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl">
            Own your data, your code, and your infrastructure. With Logisbase,
            you're not dependent on our roadmap, our pricing, or our servers.
            Audit everything, self-host anywhere, and extend it however you
            need.
          </p>
        </div>

        {/* GitHub proof strip */}
        <div
          className="bg-border grid grid-cols-2 overflow-hidden rounded-xl border md:grid-cols-4"
          style={{ gap: '1px' }}
        >
          {githubStats.map((stat, i) => (
            <div
              key={i}
              className="bg-card flex flex-col items-center justify-center gap-1 px-6 py-8 text-center"
            >
              <span className="text-brand-blue-700 dark:text-brand-blue-400 text-3xl font-bold tracking-tight md:text-4xl">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Two-column split */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: What you own (3 cols) */}
          <div className="lg:col-span-3">
            <p className="text-muted-foreground mb-6 text-xs font-semibold tracking-widest uppercase">
              What ownership actually means
            </p>
            <div className="divide-y">
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex gap-4 py-5">
                    <div className="bg-muted/30 flex size-9 shrink-0 items-center justify-center rounded-md border">
                      <Icon className="size-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-accent-foreground font-semibold">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Why it matters (2 cols) */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            <div className="bg-muted/10 rounded-xl border p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="bg-muted/30 flex size-9 shrink-0 items-center justify-center rounded-md border">
                  <Lock className="size-4" />
                </div>
                <div>
                  <h3 className="text-accent-foreground font-semibold">
                    Source-available, verified.
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    Public code means real transparency.
                  </p>
                </div>
              </div>

              <ul className="mb-6 space-y-4">
                {WHY_POINTS.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                    <div>
                      <p className="text-accent-foreground text-sm font-medium">
                        {item.title}
                      </p>
                      <p className="text-muted-foreground text-xs leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <Button className="w-full" asChild>
                <a
                  href="https://github.com/logisbase/logisbase"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta-id="view_github"
                  data-cta-location="open_source_advantage"
                  data-cta-variant="primary"
                >
                  <GitBranch className="mr-2 h-4 w-4" />
                  Request source access
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SourceAvailableAdvantage;
