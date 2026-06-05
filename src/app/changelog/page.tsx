import type { Metadata } from 'next';
import ChangelogPageContent from './changelog-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/changelog' },
  title: 'Changelog | LogisBase',
  description:
    'See the latest updates, new features, and improvements to the LogisBase platform.',
  keywords:
    'logisbase changelog, platform updates, new features, release notes',
  openGraph: {
    title: 'Changelog | LogisBase',
    description:
      'See the latest updates, new features, and improvements to the LogisBase platform.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog | LogisBase',
    description:
      'See the latest updates, new features, and improvements to the LogisBase platform.',
  },
};

export default function ChangelogPage() {
  return <ChangelogPageContent />;
}
