import type { Metadata } from 'next';

import { getGitHubStars } from '@/lib/github-stars';

import PlatformPageContent from './platform-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/platform' },
  title: 'Platform Overview — Source-Accessible Logistics OS | LogisBase',
  description:
    'Explore the full LogisBase platform — Fleet-Ops, Storefront, Ledger, Pallet, Navigator, and more. One modular, source-available logistics OS. Self-host or cloud.',
  keywords: [
    'logisbase platform',
    'source-available logistics platform',
    'fleet management software',
    'logistics operating system',
    'transport management system',
    'source-available TMS',
    'delivery management platform',
    'warehouse management software',
  ],
  openGraph: {
    title: 'Platform Overview — Source-Available Logistics OS | LogisBase',
    description:
      'Modular, source-available logistics OS. Fleet-Ops, Storefront, Ledger, Pallet, Navigator — deploy what you need, own your stack.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform Overview — Source-Available Logistics OS | LogisBase',
    description:
      'Modular, source-available logistics OS. Fleet-Ops, Storefront, Ledger, Pallet, Navigator — deploy what you need, own your stack.',
  },
};

export default async function PlatformOverviewPage() {
  const stars = await getGitHubStars();
  return <PlatformPageContent stars={stars} />;
}
