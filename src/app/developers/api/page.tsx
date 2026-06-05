import type { Metadata } from 'next';
import ApiIntegrationsPageContent from './api-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/developers/api' },
  title: 'API & Integrations — REST, WebSocket & Webhooks | LogisBase',
  description:
    'A complete REST API, real-time SocketCluster channels, and event-driven webhooks to integrate LogisBase with your systems or build new logistics-powered applications.',
  keywords: [
    'LogisBase API',
    'logistics REST API',
    'fleet management API',
    'WebSocket real-time tracking',
    'webhook integration',
    'LogisBase integrations',
    'SocketCluster',
    'Storefront API',
  ],
  openGraph: {
    title: 'API & Integrations | LogisBase',
    description:
      'REST API, SocketCluster channels, and webhooks — everything you need to build on top of LogisBase.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'API & Integrations | LogisBase',
    description:
      'Full REST API, real-time SocketCluster channels, and event-driven webhooks for logistics integration.',
  },
};

export default function ApiIntegrationsPage() {
  return <ApiIntegrationsPageContent />;
}
