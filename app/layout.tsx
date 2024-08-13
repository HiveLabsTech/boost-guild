import '@/styles/global.css'
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '@/app/config';
import { Provider } from "jotai";

export const metadata: Metadata = {
  title: 'Boost Guild',
  description: 'The Community Powering Boost Protocol',
  // icons: {
  //   icon: '/images/boostguild.png', 
  // },
  openGraph: {
    title: 'Boost Guild',
    description: 'Boost Guild Website',
    images: [`${NEXT_PUBLIC_URL}/images/boostguild.png`],
  },
  other: {
    // ...frameMetadata,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><Provider>{children}</Provider></body>
    </html>
  );
}
