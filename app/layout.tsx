import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CLINIC_NAME, CONTACT_INFO } from '@/lib/constants';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${CLINIC_NAME} | Dental & Aesthetic Clinic in Lahore`,
    template: `%s | ${CLINIC_NAME}`,
  },
  description: `Premium dental and aesthetic care in DHA Phase 1, Lahore. Expert dental treatments, aesthetic procedures, and personalized care. Book your appointment today.`,
  keywords: [
    'dental clinic Lahore',
    'aesthetic clinic Lahore',
    'DHA Phase 1 dental',
    'teeth whitening Lahore',
    'hydrafacial Lahore',
    'dental implants Lahore',
    'smile makeover Lahore',
    'skin care Lahore',
  ],
  openGraph: {
    title: `${CLINIC_NAME} | Dental & Aesthetic Clinic in Lahore`,
    description: 'Expert Care. Beautiful Results. Premium dental and aesthetic treatments in DHA Phase 1, Lahore.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CLINIC_NAME} | Dental & Aesthetic Clinic in Lahore`,
    description: 'Expert Care. Beautiful Results. Premium dental and aesthetic treatments in DHA Phase 1, Lahore.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: CLINIC_NAME,
  description: 'Premium dental and aesthetic care clinic in DHA Phase 1, Lahore.',
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${CONTACT_INFO.address.line1}, ${CONTACT_INFO.address.line2}`,
    addressLocality: CONTACT_INFO.address.line3,
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  areaServed: 'Lahore, Pakistan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
