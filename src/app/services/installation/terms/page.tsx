import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Implementation Terms & Conditions | LogisBase',
  description:
    'Terms and Conditions governing the LogisBase Console & Core Implementation service — scope, payment, responsibilities, and legal terms.',
  alternates: {
    canonical: 'https://logisbase.com/services/installation/terms',
  },
  openGraph: {
    title: 'Implementation Terms & Conditions | LogisBase',
    description:
      'Terms and Conditions governing the LogisBase Console & Core Implementation service.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Implementation Terms & Conditions | LogisBase`,
    description: `Terms and Conditions governing the LogisBase Console & Core Implementation service.`,
  },
};

const LAST_UPDATED = 'April 2025';

const TOC_ITEMS = [
  'Introduction',
  'Scope of Services',
  'Deliverables',
  'Service Levels & Timelines',
  'Client Responsibilities',
  'Additional Services',
  'Payment Terms',
  'Confidentiality',
  'License & Source-Available Compliance',
  'Termination',
  'Force Majeure',
  'Data Protection',
  'Limitation of Liability',
  'Dispute Resolution',
  'Governing Law',
  'Entire Agreement',
  'Agreement Acceptance',
];

export default function InstallationTermsPage() {
  return (
    <div className="section-padding">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
            <span className="text-primary">●</span>
            <span>Legal</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Implementation Terms &amp; Conditions
          </h1>
          <p className="text-muted-foreground">Last updated: {LAST_UPDATED}</p>
          <p className="text-muted-foreground mt-2 text-sm">
            These Terms and Conditions (&ldquo;Agreement&rdquo;) are entered
            into between <strong>LogisBase Pte. Ltd.</strong> (&ldquo;Service
            Provider&rdquo;) and the subscribing entity (&ldquo;Client&rdquo;).
            This Agreement governs the implementation, deployment, and optional
            maintenance services for LogisBase Console &amp; Core.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-muted/30 mb-12 rounded-xl border p-6">
          <h2 className="mb-4 font-semibold">Table of Contents</h2>
          <ol className="text-muted-foreground list-inside list-decimal space-y-1.5 text-sm">
            {TOC_ITEMS.map((item, i) => (
              <li key={item}>
                <a
                  href={`#section-${i + 1}`}
                  className="hover:text-primary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-10">
          <section id="section-1">
            <h2 className="mb-4 text-2xl font-bold">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions (&ldquo;Agreement&rdquo;) are entered
              into between LogisBase Pte. Ltd. (&ldquo;Service Provider&rdquo;)
              and the subscribing entity (&ldquo;Client&rdquo;). This Agreement
              governs the implementation, deployment, and optional maintenance
              services for LogisBase Console &amp; Core.
            </p>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              By completing the registration form and accepting these terms
              electronically, the Client acknowledges that this Agreement is
              legally binding.
            </p>
          </section>

          <section id="section-2">
            <h2 className="mb-4 text-2xl font-bold">2. Scope of Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service Provider agrees to provide the following one-time
              deployment services:
            </p>
            <ol className="text-muted-foreground mt-3 list-inside list-decimal space-y-2 text-sm">
              <li>Deployment of LogisBase on Client&apos;s infrastructure</li>
              <li>Setting up CI/CD pipelines for automated code deployment</li>
              <li>SMS configuration for order and fleet notifications</li>
              <li>
                File storage configuration for system-generated data and logs
              </li>
              <li>Pointing to a custom domain (DNS configuration)</li>
              <li>
                Custom order configuration to match Client&apos;s operational
                workflow
              </li>
              <li>Custom branding (logo and visual identity)</li>
            </ol>
            <div className="bg-muted/30 mt-6 space-y-3 rounded-lg border p-5 text-sm">
              <div>
                <span className="font-semibold">Service Timeline:</span>{' '}
                <span className="text-muted-foreground">
                  7 days from the start of implementation.
                </span>
              </div>
              <div>
                <span className="font-semibold">One-Time Service Fee:</span>{' '}
                <span className="text-muted-foreground">
                  USD $2,500, payable upfront.
                </span>
              </div>
              <div className="border-t pt-3">
                <p className="mb-1 font-semibold">
                  Optional Maintenance / Support Package
                </p>
                <ul className="text-muted-foreground space-y-1">
                  <li>
                    Priority support &amp; automatic upgrades:{' '}
                    <strong>USD $200/month</strong>, billed monthly.
                  </li>
                  <li>
                    Includes automatic updates with each new LogisBase release.
                  </li>
                  <li>
                    The Client may opt into the Maintenance Package at any time.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="section-3">
            <h2 className="mb-4 text-2xl font-bold">3. Deliverables</h2>
            <p className="text-muted-foreground leading-relaxed">
              Upon completion of the implementation, the Service Provider will
              deliver:
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-2 text-sm">
              <li>
                Fully deployed and configured LogisBase Console &amp; Core on
                the Client&apos;s infrastructure.
              </li>
              <li>CI/CD pipelines configured for automated code deployment.</li>
              <li>
                Operational SMS &amp; file storage setup for LogisBase
                functions.
              </li>
              <li>Custom branding &amp; order workflow configuration.</li>
              <li>System testing and handover upon completion.</li>
            </ul>
          </section>

          <section id="section-4">
            <h2 className="mb-4 text-2xl font-bold">
              4. Service Levels &amp; Timelines
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service Provider will:
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-2 text-sm">
              <li>
                Deliver and complete the deployment within 7 days after access
                is provided.
              </li>
              <li>
                Use commercially reasonable efforts to meet this timeline,
                subject to third-party delays (e.g., hosting provider issues).
              </li>
              <li>Conduct quality assurance (QA) testing before handover.</li>
            </ul>
          </section>

          <section id="section-5">
            <h2 className="mb-4 text-2xl font-bold">
              5. Client Responsibilities
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Client agrees to:
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-2 text-sm">
              <li>
                Provide necessary system access (server, DNS, SMS provider,
                storage provider).
              </li>
              <li>
                Ensure all third-party services (e.g., SMS gateway, hosting) are
                procured and set up before implementation begins.
              </li>
              <li>
                Assign a point of contact to coordinate project execution.
              </li>
            </ul>
          </section>

          <section id="section-6">
            <h2 className="mb-4 text-2xl font-bold">6. Additional Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any services beyond the scope of this Agreement — including custom
              feature development, integrations, or extended training — require
              a separate written agreement and will be subject to additional
              fees.
            </p>
          </section>

          <section id="section-7">
            <h2 className="mb-4 text-2xl font-bold">7. Payment Terms</h2>
            <ul className="text-muted-foreground list-inside list-disc space-y-2 text-sm">
              <li>
                The one-time service fee of USD $2,500 is due before deployment
                begins.
              </li>
              <li>
                The optional Maintenance / Priority Support fee of USD
                $200/month is billed starting after the first month of service.
              </li>
              <li>All payments are non-refundable.</li>
            </ul>
          </section>

          <section id="section-8">
            <h2 className="mb-4 text-2xl font-bold">8. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              Both parties agree to:
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-2 text-sm">
              <li>
                Maintain strict confidentiality of any proprietary or sensitive
                information disclosed during the engagement.
              </li>
              <li>
                Use confidential information only for fulfilling obligations
                under this Agreement.
              </li>
            </ul>
          </section>

          <section id="section-9">
            <h2 className="mb-4 text-2xl font-bold">
              9. License &amp; Source-Available Compliance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              LogisBase Console &amp; Core are source-available software
              governed by the{' '}
              <a
                href="https://github.com/logisbase/logisbase"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4"
              >
                SOURCE-AVAILABLE license
              </a>
              . The Client agrees to comply with the AGPL license terms. If the
              Client requires a custom license, a separate licensing agreement
              must be executed.
            </p>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              For details on licensing options, see the{' '}
              <Link
                href="/licensing"
                className="text-primary underline underline-offset-4"
              >
                LogisBase Licensing page
              </Link>{' '}
              or contact{' '}
              <a
                href="mailto:hello@logisbase.com"
                className="text-primary underline underline-offset-4"
              >
                hello@logisbase.com
              </a>
              .
            </p>
          </section>

          <section id="section-10">
            <h2 className="mb-4 text-2xl font-bold">10. Termination</h2>
            <h3 className="mt-4 mb-2 text-lg font-semibold">
              Termination by Either Party
            </h3>
            <ul className="text-muted-foreground list-inside list-disc space-y-2 text-sm">
              <li>
                Either party may terminate this Agreement with 14 days&apos;
                written notice.
              </li>
              <li>
                The Client may cancel the Maintenance / Support package at any
                time with 7 days&apos; notice before the next billing cycle.
              </li>
            </ul>
            <h3 className="mt-4 mb-2 text-lg font-semibold">
              Effect of Termination
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Upon termination, all obligations under this Agreement cease,
              except for outstanding payments. The Client retains the deployed
              LogisBase Console &amp; Core system, but support and upgrades will
              stop if the Maintenance Plan is cancelled.
            </p>
          </section>

          <section id="section-11">
            <h2 className="mb-4 text-2xl font-bold">11. Force Majeure</h2>
            <p className="text-muted-foreground leading-relaxed">
              Neither party shall be liable for failure or delays due to causes
              beyond their reasonable control, including but not limited to acts
              of nature, pandemics, cyberattacks, or infrastructure outages.
            </p>
          </section>

          <section id="section-12">
            <h2 className="mb-4 text-2xl font-bold">12. Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Both parties will:
            </p>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-2 text-sm">
              <li>Adhere to applicable data protection laws.</li>
              <li>
                Implement reasonable security measures to protect Client data.
              </li>
            </ul>
          </section>

          <section id="section-13">
            <h2 className="mb-4 text-2xl font-bold">
              13. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              THE TOTAL LIABILITY OF THE SERVICE PROVIDER SHALL NOT EXCEED THE
              FEES PAID BY THE CLIENT UNDER THIS AGREEMENT. THE SERVICE PROVIDER
              IS NOT LIABLE FOR INDIRECT OR CONSEQUENTIAL LOSSES, INCLUDING
              BUSINESS DISRUPTIONS, LOSS OF REVENUE, OR LOSS OF DATA.
            </p>
          </section>

          <section id="section-14">
            <h2 className="mb-4 text-2xl font-bold">14. Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising under this Agreement shall first be resolved
              through good faith negotiations between the parties. If a dispute
              cannot be resolved through negotiation within 30 days, it will be
              referred to mediation or binding arbitration in Singapore under
              the rules of the Singapore International Arbitration Centre
              (SIAC).
            </p>
          </section>

          <section id="section-15">
            <h2 className="mb-4 text-2xl font-bold">15. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Agreement shall be governed by and interpreted under the laws
              of Singapore, without regard to its conflict of law provisions.
            </p>
          </section>

          <section id="section-16">
            <h2 className="mb-4 text-2xl font-bold">16. Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Agreement, together with any separate service orders or
              project statements of work, constitutes the entire agreement
              between the parties with respect to the subject matter hereof, and
              supersedes all prior and contemporaneous agreements,
              understandings, and representations.
            </p>
          </section>

          <section id="section-17">
            <h2 className="mb-4 text-2xl font-bold">
              17. Agreement Acceptance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By submitting the registration form and providing a signature, the
              Client confirms that:
            </p>
            <ol className="text-muted-foreground mt-3 list-inside list-decimal space-y-2 text-sm">
              <li>They have read and understood this Agreement.</li>
              <li>They accept the terms and conditions as legally binding.</li>
              <li>
                They have the authority to enter into this Agreement on behalf
                of their company.
              </li>
            </ol>
          </section>
        </div>

        {/* Footer nav */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t pt-8 sm:flex-row sm:items-center">
          <div className="text-muted-foreground text-sm">
            See also:{' '}
            <Link
              href="/services/installation"
              className="text-primary mr-3 underline underline-offset-4"
            >
              Installation Service
            </Link>
            <Link
              href="/terms"
              className="text-primary mr-3 underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-primary underline underline-offset-4"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} LogisBase Pte. Ltd. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
