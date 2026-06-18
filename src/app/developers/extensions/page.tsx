import type { Metadata } from 'next';

import DeveloperExtensionsPageContent from './extensions-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/developers/extensions' },
  title:
    'Build Extensions — Custom Modules for the LogisBase Platform | LogisBase',
  description:
    'Build, publish, and distribute LogisBase extensions using Ember.js and Laravel. Scaffold full-stack modules, backend integrations, and UI components with the LogisBase CLI.',
  keywords: [
    'LogisBase extensions',
    'build LogisBase extension',
    'logistics platform plugin',
    'Ember.js extension',
    'Laravel extension',
    'fleet management module',
    'LogisBase CLI',
    'extension registry',
    'source-accessible logistics',
  ],
  openGraph: {
    title: 'Build Extensions | LogisBase Developer Platform',
    description:
      'Build custom modules for LogisBase using Ember.js and Laravel. Scaffold, develop, and publish extensions to the marketplace.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Extensions | LogisBase',
    description:
      'Build and publish custom LogisBase extensions. Full-stack modules, backend integrations, and UI components.',
  },
};

export default function DeveloperExtensionsPage() {
  return <DeveloperExtensionsPageContent />;
}
