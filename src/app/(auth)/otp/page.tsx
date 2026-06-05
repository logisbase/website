import type { Metadata } from 'next';

import OTPPageContent from './otp-page-content';

export const metadata: Metadata = {
  title: 'Verify Your Account | LogisBase',
  description: 'Enter your one-time passcode to verify your LogisBase account.',
  keywords: 'logisbase login, otp verification, account access',
  openGraph: {
    title: 'Verify Your Account | LogisBase',
    description:
      'Enter your one-time passcode to verify your LogisBase account.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verify Your Account | LogisBase',
    description:
      'Enter your one-time passcode to verify your LogisBase account.',
  },
};

export default function OTPPage() {
  return <OTPPageContent />;
}
