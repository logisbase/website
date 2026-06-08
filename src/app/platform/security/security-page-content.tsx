'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Lock,
  ShieldCheck,
  KeyRound,
  ClipboardList,
  Globe,
  Server,
  Users,
  Smartphone,
  MonitorSmartphone,
  CheckCircle2,
  ShieldAlert,
} from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    desc: 'All data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Sensitive fields receive additional application-layer encryption.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Access Control',
    desc: 'Granular RBAC with custom roles and per-module permissions. Enforce least-privilege access across your entire organisation.',
  },
  {
    icon: KeyRound,
    title: 'Multi-Factor Authentication',
    desc: 'MFA support for all user accounts. Enforce MFA organisation-wide to prevent unauthorised access.',
  },
  {
    icon: ClipboardList,
    title: 'Comprehensive Audit Logs',
    desc: 'Every action taken in the platform is logged with timestamp, user, IP address, and full context for compliance and forensic review.',
  },
  {
    icon: Globe,
    title: 'API Security',
    desc: 'Scoped API keys with expiry dates, HMAC webhook signature verification, and rate limiting on all endpoints.',
  },
  {
    icon: Server,
    title: 'Self-Hosting Option',
    desc: 'Deploy LogisBase on your own infrastructure for complete data sovereignty. No data ever leaves your environment.',
  },
];

const accessControlItems = [
  {
    icon: Users,
    title: 'Custom Roles',
    desc: 'Create unlimited custom roles tailored to your organisational structure and workflows.',
  },
  {
    icon: Lock,
    title: 'Granular Permissions',
    desc: 'Control access at the module, resource, and action level — read, create, update, delete.',
  },
  {
    icon: Smartphone,
    title: 'Multi-Factor Authentication',
    desc: 'Enforce MFA for all users or specific roles to prevent unauthorised account access.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Session Management',
    desc: 'View and revoke active sessions. Set session timeout policies for sensitive environments.',
  },
];

const complianceItems = [
  {
    name: 'GDPR',
    status: 'Compliant',
    desc: 'Full data subject rights, DPAs available, configurable retention policies',
  },
  {
    name: 'SOC 2 Type II',
    status: 'In Progress',
    desc: 'Controls designed to meet Trust Service Criteria; certification in progress',
  },
  {
    name: 'ISO 27001',
    status: 'Infrastructure',
    desc: 'Hosted on ISO 27001-certified infrastructure with certified cloud providers',
  },
  {
    name: 'PCI DSS',
    status: 'Scoped',
    desc: 'Payment processing delegated to PCI-certified payment gateways; no card data stored',
  },
  {
    name: 'CCPA',
    status: 'Compliant',
    desc: 'California Consumer Privacy Act compliance with data access and deletion support',
  },
  {
    name: 'HIPAA',
    status: 'On Request',
    desc: 'BAAs available for healthcare logistics customers on Enterprise plans',
  },
];

const faqs = [
  {
    q: 'Is LogisBase SOC 2 compliant?',
    a: 'LogisBase Cloud is working toward SOC 2 Type II certification. Our infrastructure and operational controls are designed to meet SOC 2 requirements across the Trust Service Criteria of Security, Availability, and Confidentiality. Enterprise customers can request our current security documentation and roadmap.',
  },
  {
    q: 'Where is my data stored?',
    a: 'LogisBase Cloud stores data in ISO 27001-certified data centers. You can choose your preferred region at account setup. For customers with strict data residency requirements, LogisBase can be self-hosted on your own infrastructure in any region or cloud provider of your choice.',
  },
  {
    q: 'How does LogisBase handle data encryption?',
    a: 'All data is encrypted in transit using TLS 1.2 or higher. Data at rest is encrypted using AES-256. Sensitive fields such as API keys, payment credentials, and personal data are encrypted at the application layer in addition to the storage-level encryption.',
  },
  {
    q: 'Can I self-host LogisBase for maximum data control?',
    a: 'Yes. LogisBase is fully source-available and can be self-hosted on your own infrastructure — on-premises, in your private cloud, or on any major cloud provider. Self-hosting gives you complete control over your data, network, and security configuration.',
  },
  {
    q: 'How does LogisBase manage access control?',
    a: 'LogisBase uses role-based access control (RBAC) with granular permission management. Administrators can define custom roles with specific permissions for each module and resource. Multi-factor authentication (MFA) is supported for all user accounts.',
  },
  {
    q: 'Is LogisBase GDPR compliant?',
    a: 'Yes. LogisBase is designed with GDPR compliance in mind. We provide data processing agreements (DPAs) for EU customers, support data subject rights requests (access, deletion, portability), and give you full control over data retention policies. For self-hosted deployments, you are the data controller.',
  },
  {
    q: 'How are security vulnerabilities handled?',
    a: 'LogisBase has a responsible disclosure policy and a dedicated security team that monitors for vulnerabilities. Critical security patches are released within 24 hours of discovery. As an source-available platform, the community also contributes to security reviews. Enterprise customers receive direct security notifications.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'Upon account cancellation, you can export all your data in standard formats before deletion. Data is permanently deleted from our systems within 30 days of account closure. For self-hosted deployments, you retain full control of your data at all times.',
  },
];

export default function SecurityCompliancePageContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section-padding relative">
        <div className="relative container">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <div className="flex items-center rounded-full border p-1 text-xs">
              <span className="bg-muted rounded-full px-3 py-1">Platform</span>
              <span className="px-3">Security & Compliance</span>
            </div>
            <h1 className="text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl">
              Enterprise-Grade Security,{' '}
              <span className="text-gradient">Built Into Every Layer</span>
            </h1>
            <p className="text-foreground/90 dark:text-foreground/95 max-w-3xl leading-snug md:text-lg lg:text-xl">
              LogisBase is designed with security and compliance at its core.
              From end-to-end encryption and granular access control to full
              audit logging and self-hosting options, your data is protected at
              every layer — and you remain in full control.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Link href="https://cal.com/logisbase/demo">
                <Button size="lg">Talk to Our Security Team</Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline">
                  View Enterprise Plans
                </Button>
              </Link>
              <Link
                href="https://github.com/logisbase"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="ghost">
                  Review Source Code
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-muted/10 border-y py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-1 text-2xl font-bold">AES-256</div>
              <div className="text-muted-foreground text-sm">
                Encryption at Rest
              </div>
            </div>
            <div>
              <div className="mb-1 text-2xl font-bold">TLS 1.2+</div>
              <div className="text-muted-foreground text-sm">
                Encryption in Transit
              </div>
            </div>
            <div>
              <div className="mb-1 text-2xl font-bold">RBAC</div>
              <div className="text-muted-foreground text-sm">
                Granular Access Control
              </div>
            </div>
            <div>
              <div className="mb-1 text-2xl font-bold">100%</div>
              <div className="text-muted-foreground text-sm">
                Source-Available Auditable
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Mosaic */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Security at Every Layer
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              LogisBase implements defense-in-depth security across
              infrastructure, application, and data layers to protect your
              operations and your customers.
            </p>
          </div>
          <div
            className="bg-border overflow-hidden rounded-xl"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
            }}
          >
            {securityFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className="bg-card p-6">
                  <div className="bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                    <Icon className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold">{feat.title}</h3>
                  <p className="text-muted-foreground text-sm">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
                <span className="text-primary">●</span>
                <span className="ml-2">Data Protection</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Your Data is Yours. Always.
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                LogisBase gives you complete control over your data. Whether you
                choose LogisBase Cloud or self-host on your own infrastructure,
                you decide where your data lives, how long it is retained, and
                who can access it. We never sell or share your data with third
                parties.
              </p>
              <div className="space-y-3">
                {[
                  'All data encrypted at rest with AES-256',
                  'All data encrypted in transit with TLS 1.2+',
                  'Sensitive fields encrypted at the application layer',
                  'Configurable data retention policies per organisation',
                  'Full data export in standard formats at any time',
                  'Permanent deletion within 30 days of account closure',
                  'Self-hosting option for complete data sovereignty',
                  'No data sharing or selling to third parties — ever',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="text-primary h-4 w-4 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[460px] w-full overflow-hidden rounded-xl border shadow-lg">
              <Image
                src="/images/screenshots/iam/iam-users-management.webp"
                alt="LogisBase IAM — users management screen"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Access Control */}
      <section className="section-padding">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative order-last h-[460px] w-full overflow-hidden rounded-xl border shadow-lg md:order-first">
              <Image
                src="/images/screenshots/iam/iam-policy-management.webp"
                alt="LogisBase IAM — policy management with granular permissions"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
                <span className="text-primary">●</span>
                <span className="ml-2">Access Control</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Granular Access Control for Every Team
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                LogisBase&apos;s role-based access control system lets you
                define exactly what each team member can see and do. Create
                custom roles with per-module, per-resource permissions and
                enforce least-privilege access across your entire organisation.
              </p>
              <div className="space-y-6">
                {accessControlItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                        <Icon className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-semibold">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Trail */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
                <span className="text-primary">●</span>
                <span className="ml-2">Audit & Compliance</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Complete Audit Trail for Every Action
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Every action taken in LogisBase is logged with a full audit
                trail — who did what, when, from where, and what changed. This
                gives you the visibility needed for compliance audits, security
                investigations, and operational accountability.
              </p>
              <div className="space-y-3">
                {[
                  'Every user action logged with timestamp and IP address',
                  'Full before/after state captured for data changes',
                  'API request logs with authentication details',
                  'Export audit logs for compliance reporting',
                  'Configurable log retention periods',
                  'Tamper-evident log storage',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="text-primary h-4 w-4 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[460px] w-full overflow-hidden rounded-xl border shadow-lg">
              <Image
                src="/images/screenshots/developers/developers-request-logs.webp"
                alt="LogisBase audit log dashboard — request log entries with timestamps and IP addresses"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Coverage */}
      <section className="section-padding">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Compliance Coverage
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              LogisBase is designed to help you meet your regulatory and
              compliance obligations across major frameworks.
            </p>
          </div>
          <div
            className="bg-border overflow-hidden rounded-xl"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
            }}
          >
            {complianceItems.map((item, i) => (
              <div key={i} className="bg-card p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-base font-bold">{item.name}</h3>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      item.status === 'Compliant'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : item.status === 'In Progress'
                          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 text-center text-sm">
            Enterprise customers can request detailed compliance documentation
            and security questionnaire responses.
          </p>
        </div>
      </section>

      {/* Self-Hosting */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative order-last h-[400px] w-full overflow-hidden rounded-xl border shadow-lg md:order-first">
              <Image
                src="/images/screenshots/admin/admin-services.webp"
                alt="LogisBase admin — self-hosted services configuration"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs">
                <span className="text-primary">●</span>
                <span className="ml-2">Self-Hosting</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Maximum Security Through Self-Hosting
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                For organisations with strict data residency, regulatory, or
                security requirements, LogisBase can be deployed entirely on
                your own infrastructure. As a fully source-available platform,
                you can audit every line of code and ensure your data never
                leaves your environment.
              </p>
              <div className="mb-6 space-y-3">
                {[
                  'Deploy on any cloud provider or on-premises hardware',
                  'Full control over network, firewall, and access policies',
                  'Data never leaves your infrastructure',
                  'Audit the complete source code on GitHub',
                  'Configure your own backup and disaster recovery',
                  'Integrate with your existing security tooling and SIEM',
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="text-primary h-4 w-4 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/docs/platform/system-setup">
                <Button variant="outline">Self-Hosting Guide</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="section-padding">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-xl">
                <ShieldAlert className="text-primary h-7 w-7" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Responsible Disclosure
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We take security seriously and welcome responsible disclosure of
              vulnerabilities. If you discover a security issue in LogisBase,
              please report it to our security team. We commit to acknowledging
              reports within 24 hours and providing regular updates on
              remediation progress.
            </p>
            <div className="bg-card mb-8 rounded-2xl border p-6 text-left">
              <h3 className="mb-4 font-semibold">
                Our Security Response Process
              </h3>
              <div className="space-y-3">
                {[
                  {
                    step: '01',
                    text: 'Report received and acknowledged within 24 hours',
                  },
                  {
                    step: '02',
                    text: 'Severity assessment and initial investigation within 48 hours',
                  },
                  {
                    step: '03',
                    text: 'Critical patches released within 24 hours of confirmation',
                  },
                  {
                    step: '04',
                    text: 'Public disclosure coordinated with reporter after fix is deployed',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary flex-shrink-0 font-mono text-sm font-bold">
                      {item.step}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Link href="mailto:security@logisbase.com">
              <Button variant="outline">Report a Vulnerability</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Common questions about LogisBase security and compliance.
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
                Have Security or Compliance Requirements?
              </h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                Our security team is available to discuss your specific
                requirements, provide compliance documentation, and help you
                evaluate LogisBase for your environment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="https://cal.com/logisbase/demo">
                  <Button size="lg">Talk to Our Security Team</Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline">
                    View Enterprise Plans
                  </Button>
                </Link>
              </div>
              <p className="text-muted-foreground mt-6 text-sm">
                Security questionnaires · DPAs · BAAs · Custom compliance
                reviews available on Enterprise plans
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
