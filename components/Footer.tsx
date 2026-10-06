import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Logo } from '@/components/Logo';
import { FOOTER_LINKS, CONTACT_INFO, SOCIAL_LINKS, WHATSAPP_URL, PHONE_URL, EMAIL_URL } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Premium dental and aesthetic care in the heart of DHA Phase 1, Lahore.
              Expert treatments for a healthier smile and radiant skin.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram">
                <FaInstagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={SOCIAL_LINKS.facebook} label="Facebook">
                <FaFacebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={WHATSAPP_URL} label="WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold-400">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold-400">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={PHONE_URL} className="flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-gold-400">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={EMAIL_URL} className="flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-gold-400">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>
                  {CONTACT_INFO.address.line1},<br />
                  {CONTACT_INFO.address.line2}, {CONTACT_INFO.address.line3},<br />
                  {CONTACT_INFO.address.city}, {CONTACT_INFO.address.country}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours + CTA */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gold-400">Clinic Hours</h3>
            <p className="mt-4 text-sm text-white/70">
              <Link href="/location" className="transition-colors hover:text-gold-400">
                View full timings &rarr;
              </Link>
            </p>
            <p className="mt-2 text-sm text-white/60">
              Monday &ndash; Saturday<br />
              Sunday: Closed
            </p>
            <Link
              href="/appointment"
              className="mt-6 inline-block rounded-md border border-gold-500 px-5 py-2.5 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-navy-900"
            >
              Request Appointment
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/50">
            &copy; 2026 Tasneem Dental &amp; Aesthetic Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-gold-500 hover:bg-gold-500 hover:text-navy-900"
    >
      {children}
    </a>
  );
}
