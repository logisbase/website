import type { Metadata } from 'next';

import { SoftwareApplicationSchema } from '@/components/seo/json-ld';

import NavigatorPageContent from './navigator-page-content';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/platform/navigator' },
  title: 'Navigator — Source-Available Driver App | LogisBase',
  description:
    "Navigator is LogisBase's source-available mobile app for drivers. Real-time dispatch, turn-by-turn navigation, proof of delivery, and offline support — available on iOS and Android.",
  keywords: [
    'driver app',
    'source-available driver app',
    'fleet driver app',
    'proof of delivery app',
    'last mile delivery app',
    'Navigator LogisBase',
    'white-label driver app',
    'iOS Android driver app',
  ],
  openGraph: {
    title: 'Navigator — Source-Available Driver App | LogisBase',
    description:
      'Source-available iOS and Android driver app with live dispatch, turn-by-turn navigation, proof of delivery, and offline-first operation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navigator — Source-Available Driver App | LogisBase',
    description:
      'Free, white-label driver app for iOS and Android. Connects natively to Fleet-Ops dispatch.',
  },
};

export default function NavigatorPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="LogisBase Navigator"
        url="https://logisbase.com/platform/navigator"
        description="Source-available iOS and Android driver app with real-time dispatch, turn-by-turn navigation, proof of delivery, and offline-first operation."
        applicationCategory="MobileApplication"
        operatingSystem="iOS, Android"
      />
      <NavigatorPageContent />
    </>
  );
}
