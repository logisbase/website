import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import DeveloperConsolePageContent from './console-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/platform/developer-console' },
  title: 'Developer Console — API Keys, Webhooks & Monitoring | LogisBase',
  description:
    'Manage API keys, configure webhooks, inspect request logs, and monitor real-time socket channels from the LogisBase Developer Console.',
  keywords: [
    'LogisBase developer console',
    'API key management',
    'webhook configuration',
    'request logs',
    'socket channels',
    'API monitoring',
    'LogisBase developer tools',
  ],
  openGraph: {
    title: 'Developer Console — API Keys, Webhooks & Monitoring | LogisBase',
    description:
      'Full developer control built into the platform. API keys, webhooks, request logs, and real-time socket channel monitoring.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Console | LogisBase',
    description:
      'Manage API keys, webhooks, and monitor every request — all from the LogisBase Developer Console.',
  },
};

export default function DeveloperConsolePage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="LogisBase Developer Console"
        url="https://logisbase.com/platform/developer-console"
        description="Manage API keys, configure webhooks, inspect request logs, and monitor real-time socket channels from the LogisBase Developer Console."
        applicationCategory="DeveloperApplication"
      />
      <DeveloperConsolePageContent />
    </>
  );
}
