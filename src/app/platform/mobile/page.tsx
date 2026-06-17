import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import MobileAppsPageContent from './mobile-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/platform/mobile' },
  title: 'Mobile Apps — Navigator & Storefront for iOS & Android | LogisBase',
  description:
    'LogisBase ships two source-accessible mobile apps — Navigator for drivers and Storefront for customers. White-label them or build your own on the LogisBase API.',
  keywords: [
    'LogisBase mobile apps',
    'driver app',
    'delivery driver app',
    'Navigator app',
    'Storefront customer app',
    'fleet management mobile',
    'source-accessible driver app',
    'React Native logistics',
    'proof of delivery app',
    'iOS Android logistics',
    'white-label delivery app',
  ],
  openGraph: {
    title: 'Mobile Apps — Navigator & Storefront | LogisBase',
    description:
      'Two source-accessible mobile apps for every delivery — Navigator for drivers, Storefront for customers. Use as-is, white-label, or build your own.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile Apps | LogisBase',
    description:
      'Navigator for drivers, Storefront for customers — source-accessible React Native apps built on the LogisBase platform.',
  },
};

export default function MobileAppsPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="LogisBase Mobile Apps"
        url="https://logisbase.com/platform/mobile"
        description="Two source-accessible mobile apps from LogisBase — Navigator for drivers and Storefront for customers. White-label them or build your own on the LogisBase API."
        applicationCategory="MobileApplication"
        operatingSystem="iOS, Android"
      />
      <MobileAppsPageContent />
    </>
  );
}
