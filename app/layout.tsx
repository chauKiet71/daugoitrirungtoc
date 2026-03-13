import type {Metadata} from 'next';
import { Roboto, Montserrat } from 'next/font/google';
import './globals.css'; // Global styles

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
});

const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-serif', // Using serif variable for headings to minimize changes in page.tsx
});

export const metadata: Metadata = {
  title: 'Nam Nung Vietnam | Herbal Hair Care',
  description: 'Herbal Solution to Stop Hair Loss & Stimulate Rapid Growth',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" className={`${roboto.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
