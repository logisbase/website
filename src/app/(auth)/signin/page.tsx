import type { Metadata } from 'next';

import SignInPageContent from './signin-page-content';

export const metadata: Metadata = {
  title: 'Sign In | LogisBase',
  description:
    'Sign in to your LogisBase account to manage your logistics operations.',
  keywords:
    'logisbase sign in, logistics platform login, fleet management login',
  openGraph: {
    title: 'Sign In | LogisBase',
    description:
      'Sign in to your LogisBase account to manage your logistics operations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign In | LogisBase',
    description:
      'Sign in to your LogisBase account to manage your logistics operations.',
  },
};

export default function SignInPage() {
  return <SignInPageContent />;
}
