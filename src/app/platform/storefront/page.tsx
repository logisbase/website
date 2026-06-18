import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import StorefrontPageContent from './storefront-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/platform/storefront' },
  title: 'Storefront — Headless Commerce & Marketplace Platform | LogisBase',
  description:
    'Storefront by LogisBase is source-accessible headless commerce built for on-demand businesses. Zero commission fees, white-label mobile apps, multi-vendor marketplace, and native Fleet-Ops delivery integration.',
  keywords: [
    'headless commerce platform',
    'online ordering software',
    'white label delivery app',
    'multi vendor marketplace software',
    'on demand commerce platform',
    'source-accessible storefront',
    'delivery management ecommerce',
    'hyperlocal delivery platform',
    'zero commission ordering',
  ],
  openGraph: {
    title: 'Storefront — Headless Commerce & Marketplace Platform | LogisBase',
    description:
      'Source-accessible, logistics-first commerce platform. Zero commission fees, white-label mobile apps, multi-vendor marketplace, and delivery built in.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Storefront — Headless Commerce & Marketplace Platform | LogisBase',
    description:
      'Source-accessible, logistics-first commerce platform. Zero commission fees, white-label mobile apps, multi-vendor marketplace, and delivery built in.',
  },
};

export default function StorefrontPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="LogisBase Storefront"
        url="https://logisbase.com/platform/storefront"
        description="Source-accessible headless commerce and multi-vendor marketplace platform with white-label mobile apps, zero commission fees, and native Fleet-Ops delivery integration."
      />
      <StorefrontPageContent />
    </>
  );
}
