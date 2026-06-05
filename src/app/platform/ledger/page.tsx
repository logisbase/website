import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import LedgerPageContent from './ledger-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/platform/ledger' },
  title: 'Ledger — Financial Management | LogisBase Platform',
  description:
    'LogisBase Ledger gives logistics operators full financial visibility — invoicing, revenue tracking, payment gateways, and chart of accounts.',
  keywords:
    'logisbase ledger, logistics financial management, fleet invoicing, delivery billing, logistics accounting',
  openGraph: {
    title: 'Ledger — Financial Management | LogisBase Platform',
    description:
      'LogisBase Ledger gives logistics operators full financial visibility — invoicing, revenue tracking, payment gateways, and chart of accounts.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ledger — Financial Management | LogisBase Platform',
    description:
      'LogisBase Ledger gives logistics operators full financial visibility — invoicing, revenue tracking, payment gateways, and chart of accounts.',
  },
};

export default function LedgerPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="LogisBase Ledger"
        url="https://logisbase.com/platform/ledger"
        description="Double-entry financial ledger built for logistics operators — invoicing, revenue tracking, payment gateways, and chart of accounts."
        applicationCategory="FinanceApplication"
      />
      <LedgerPageContent />
    </>
  );
}
