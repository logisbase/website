import type { Metadata } from 'next';

import FleetOpsPageContent from './fleetops-page-content';

const TITLE = 'Fleet-Ops — Fleet Management & Dispatch Software | LogisBase';
const DESCRIPTION =
  'Fleet-Ops by LogisBase is source-available fleet management and dispatch software. Real-time GPS tracking, route optimization, configurable workflows, and automated dispatch — self-hosted or cloud.';
const CANONICAL = 'https://logisbase.com/platform/fleetops';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'fleet management software',
    'dispatch software',
    'route optimization',
    'real time fleet tracking',
    'GPS fleet tracking',
    'driver management software',
    'source-available fleet management',
    'transport management system',
    'TMS software',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: CANONICAL,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

/**
 * JSON-LD schema for Fleet-Ops — emitted into the page as a <script> tag so
 * search engines can render richer results (product name, description,
 * features, pricing model). Schema.org SoftwareApplication is the right
 * type for a SaaS / source-available TMS product page.
 */
const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fleet-Ops',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Fleet Management Software',
  operatingSystem: 'Web, iOS, Android',
  url: CANONICAL,
  description: DESCRIPTION,
  publisher: {
    '@type': 'Organization',
    name: 'LogisBase',
    url: 'https://logisbase.com',
    logo: 'https://logisbase.com/images/icon.png',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description:
      'Free to self-host under SOURCE-AVAILABLE. Cloud SaaS available with resource-unit-based pricing — no per-driver fees.',
    url: 'https://logisbase.com/pricing',
  },
  featureList: [
    'Phase-based Orchestrator Workbench',
    'Live GPS tracking and geofences',
    'Configurable order types and activity flows',
    'Vehicle maintenance scheduling and work orders',
    'Telematics integrations (Samsara, Geotab, Flespi)',
    'REST API, webhooks, and WebSocket event streams',
    'Source-available under SOURCE-AVAILABLE',
    'Self-hostable or managed cloud',
  ],
  softwareVersion: 'Latest',
  // No aggregateRating block — Google requires real review data for ratings.
  // Add this back once a verified review source is wired up.
};

export default function FleetOpsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <FleetOpsPageContent />
    </>
  );
}
