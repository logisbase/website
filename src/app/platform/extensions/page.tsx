import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import ExtensionsMarketplacePageContent from './extensions-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/platform/extensions' },
  title: 'Extensions Marketplace — Build, Install & Monetize | LogisBase',
  description:
    'Browse and install extensions from LogisBase and the source-accessiblee community, or publish your own and monetize it to reach thousands of logistics operators worldwide.',
  keywords: [
    'LogisBase extensions',
    'logistics platform extensions',
    'fleet management plugins',
    'extensions marketplace',
    'LogisBase developer platform',
    'build LogisBase extension',
    'logistics integrations',
  ],
  openGraph: {
    title: 'Extensions Marketplace — Build, Install & Monetize | LogisBase',
    description:
      'Install first-party and community extensions into LogisBase in one click, or publish your own and earn from thousands of logistics operators.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extensions Marketplace | LogisBase',
    description:
      'Browse, install, and monetize LogisBase extensions. Open publisher platform with built-in Stripe payouts.',
  },
};

export default function ExtensionsMarketplacePage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="LogisBase Extensions Marketplace"
        url="https://logisbase.com/platform/extensions"
        description="Browse and install LogisBase extensions in one click, or publish your own and earn from thousands of logistics operators."
      />
      <ExtensionsMarketplacePageContent />
    </>
  );
}
