import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import Hero from '@/components/sections/hero';
import PlatformModules from '@/components/sections/platform-modules';
import StatsBar from '@/components/sections/stats-bar';
import {
  OrganizationSchema,
  SoftwareApplicationSchema,
  WebSiteSchema,
} from '@/components/seo/json-ld';
import { getGitHubStars } from '@/lib/github-stars';

// Below-the-fold sections — split into separate client bundles so the
// initial homepage JS payload stays small. SSR remains on (default) so
// crawlers still receive complete HTML.
const FleetOpsShowcase = dynamic(
  () => import('@/components/sections/fleetops-showcase'),
);
const EnterpriseAdvantage = dynamic(
  () => import('@/components/sections/open-source-advantage'),
);
const FeaturesTabsSection = dynamic(
  () => import('@/components/sections/features-tabs'),
);
const IndustryUseCases = dynamic(
  () => import('@/components/sections/industry-use-cases'),
);
const IntegrationsEcosystem = dynamic(
  () => import('@/components/sections/integrations-ecosystem'),
);
const DeploymentOptions = dynamic(
  () => import('@/components/sections/deployment-options'),
);
const FinalCTA = dynamic(() => import('@/components/sections/final-cta'));

export const metadata: Metadata = {
  title: 'LogisBase | Source-Accessible Logistics & Supply Chain Platform',
  description:
    'LogisBase is the enterprise logistics OS. Fleet management, e-commerce fulfillment, warehouse, and accounting — one platform, no per-driver fees, self-hosted or cloud.',
  keywords:
    'source-accessible logistics platform, fleet management software, TMS software, transportation management system, delivery management, supply chain software, self hosted fleet management, source-accessible logistics, last mile delivery software, route optimization software, warehouse management',
  alternates: {
    canonical: 'https://logisbase.com',
  },
  openGraph: {
    title: 'LogisBase | Enterprise Logistics & Supply Chain Platform',
    description:
      'Fleet management, e-commerce fulfillment, warehouse, and accounting — unified in one enterprise platform. No per-driver fees. Self-hosted or cloud.',
    url: 'https://logisbase.com',
    type: 'website',
    images: [
      {
        url: '/og?title=Enterprise%20Logistics%20%26%20Supply%20Chain%20Platform&eyebrow=LogisBase&subtitle=Fleet%20management%2C%20fulfillment%2C%20warehouse%2C%20and%20accounting%20%E2%80%94%20one%20platform%2C%20no%20per-driver%20fees',
        width: 1200,
        height: 630,
        alt: 'LogisBase — enterprise logistics and supply chain platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LogisBase | Enterprise Logistics Platform',
    description:
      'Fleet management, e-commerce fulfillment, warehouse, and accounting — unified, enterprise, no per-driver fees.',
    images: [
      '/og?title=Enterprise%20Logistics%20%26%20Supply%20Chain%20Platform&eyebrow=LogisBase&subtitle=Fleet%20management%2C%20fulfillment%2C%20warehouse%2C%20and%20accounting%20%E2%80%94%20one%20platform%2C%20no%20per-driver%20fees',
    ],
  },
};

export default async function Home() {
  const stars = await getGitHubStars();
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <SoftwareApplicationSchema />
      <Hero />
      <StatsBar />
      <PlatformModules />
      <FleetOpsShowcase />
      <EnterpriseAdvantage stars={stars} />
      <FeaturesTabsSection />
      <IndustryUseCases />
      <IntegrationsEcosystem />
      <DeploymentOptions />
      <FinalCTA />
    </>
  );
}
