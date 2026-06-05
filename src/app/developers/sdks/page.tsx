import type { Metadata } from 'next';
import SdksPageContent from './sdks-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/developers/sdks' },
  title: 'SDKs & Libraries — JavaScript, PHP & Storefront | LogisBase',
  description:
    'Official LogisBase client libraries for JavaScript and PHP, plus a dedicated Storefront SDK. Integrate fleet management and logistics into your application in minutes.',
  keywords: [
    'LogisBase JavaScript SDK',
    'LogisBase PHP SDK',
    'Storefront SDK',
    'fleet management SDK',
    'logistics API library',
    'logisbase-js',
    'logisbase-php',
    'storefront-js',
    'npm logisbase',
  ],
  openGraph: {
    title: 'SDKs & Libraries | LogisBase',
    description:
      'Official JavaScript and PHP SDKs for the LogisBase API. Get integrated in minutes.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDKs & Libraries | LogisBase',
    description:
      'Official client libraries for the LogisBase platform — JavaScript, PHP, and Storefront.',
  },
};

export default function SdksPage() {
  return <SdksPageContent />;
}
