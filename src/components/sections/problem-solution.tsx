'use client';
import { CheckCircle2, XCircle } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const problems = [
  'Manual dispatch and spreadsheet-based planning',
  'No real-time visibility into fleet or order status',
  'Per-seat pricing that punishes growth',
  'Vendor lock-in with no API access or data ownership',
];

const solutions = [
  'Automated dispatch with intelligent route optimization',
  'Live GPS tracking, ETAs, and driver status in real time',
  'Usage-based pricing — scale without cost penalties',
  'Source-available with full REST API and self-hosting option',
];

export default function ProblemSolution() {
  return (
    <section className="from-muted/20 to-background bg-gradient-to-b py-24">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Problem */}
          <div>
            <div className="text-muted-foreground mb-6 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
              The Problem
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Managing logistics is getting harder.{' '}
              <span className="text-muted-foreground font-normal">
                Your software shouldn&apos;t make it worse.
              </span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Most logistics platforms were built a decade ago on rigid,
              monolithic architecture. They&apos;re expensive, inflexible, and
              designed to keep you dependent — not to help you grow.
            </p>
            <ul className="space-y-3">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <XCircle className="text-destructive mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-muted-foreground text-sm">
                    {problem}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Solution */}
          <div className="bg-card rounded-xl border p-8">
            <div className="text-primary mb-6 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
              The LogisBase Way
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Built for the way modern logistics actually works.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              LogisBase is modular, source-available, and designed to flex
              around your operations — not the other way around. Every feature
              is built to give you control, visibility, and the ability to scale
              without limits.
            </p>
            <ul className="mb-8 space-y-3">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium">{solution}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link
                href="https://console.logisbase.com/onboard"
                target="_blank"
                rel="noopener noreferrer"
                data-cta-id="start_free_trial"
                data-cta-location="problem_solution"
                data-cta-variant="primary"
              >
                Start Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
