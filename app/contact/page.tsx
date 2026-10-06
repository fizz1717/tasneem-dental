import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { LocationSection } from '@/components/LocationSection';
import { ClinicTimings } from '@/components/ClinicTimings';
import { CTASection } from '@/components/CTASection';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_URL, PHONE_URL, EMAIL_URL } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Tasneem Dental & Aesthetic Care. Call, email, WhatsApp, or visit us in DHA Phase 1, Lahore.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-900 pb-20 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            light
            eyebrow="Get in Touch"
            title="Contact Us"
            subtitle="We're here to help. Reach out to us through any of the following channels."
          />
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ContactCard
              icon={Phone}
              title="Call Us"
              value={CONTACT_INFO.phone}
              href={PHONE_URL}
            />
            <ContactCard
              icon={Mail}
              title="Email"
              value={CONTACT_INFO.email}
              href={EMAIL_URL}
            />
            <ContactCard
              icon={MessageCircle}
              title="WhatsApp"
              value="Chat with us"
              href={WHATSAPP_URL}
              external
            />
            <ContactCard
              icon={MapPin}
              title="Visit"
              value="DHA Phase 1, Lahore"
              href="/location"
            />
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Find Us"
            title="Location & Hours"
            subtitle="Visit our clinic in DHA Phase 1, Lahore, or check our operating hours."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <LocationSection />
            </div>
            <div>
              <ClinicTimings />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  external,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group rounded-lg border border-navy-100 bg-white p-6 text-center shadow-navy-card transition-all hover:border-gold-400 hover:shadow-gold-glow"
    >
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition-colors group-hover:bg-gold-500 group-hover:text-navy-900">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-serif text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-1 text-sm text-slatey">{value}</p>
    </a>
  );
}
