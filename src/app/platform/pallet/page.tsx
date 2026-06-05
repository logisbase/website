import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import PalletPageContent from './pallet-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/platform/pallet' },
  title: 'Pallet — Source-Available Warehouse Management System | LogisBase',
  description:
    'Pallet by LogisBase is an source-available WMS for inventory management, pick lists, cycle counts, and fulfilment — natively connected to Fleet-Ops dispatch and Storefront orders.',
  keywords: [
    'source-available warehouse management system',
    'WMS software',
    'inventory management',
    'pick list software',
    'cycle counting',
    'stock transfers',
    'warehouse fulfilment',
    'LogisBase Pallet',
  ],
  openGraph: {
    title: 'Pallet — Source-Available Warehouse Management System | LogisBase',
    description:
      'Pallet by LogisBase is an source-available WMS for inventory management, pick lists, cycle counts, and fulfilment — natively connected to Fleet-Ops and Storefront.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pallet — Source-Available Warehouse Management System | LogisBase',
    description:
      'Source-available WMS with pick lists, cycle counts, stock transfers, and native Fleet-Ops integration.',
  },
};

export default function PalletPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="LogisBase Pallet"
        url="https://logisbase.com/platform/pallet"
        description="Source-available warehouse management system for inventory tracking, pick lists, cycle counts, and fulfilment — natively connected to Fleet-Ops dispatch and Storefront orders."
      />
      <PalletPageContent />
    </>
  );
}
