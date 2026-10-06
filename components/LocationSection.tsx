'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Navigation } from 'lucide-react';
import Link from 'next/link';
import { CONTACT_INFO, WHATSAPP_URL, PHONE_URL, EMAIL_URL } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function LocationSection() {
  const mapsQuery = encodeURIComponent(CONTACT_INFO.address.full);
  const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center"
      >
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-gold-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Visit Us
          </span>
        </div>
        <h2 className="font-serif text-3xl font-semibold text-navy-900">Our Location</h2>
        <p className="mt-4 text-slatey">
          Tasneem Dental &amp; Aesthetic Care is conveniently located in DHA Phase 1, Lahore.
        </p>

        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
            <div>
              <p className="font-medium text-navy-900">Address</p>
              <p className="text-sm text-slatey">
                {CONTACT_INFO.address.line1}<br />
                {CONTACT_INFO.address.line2}<br />
                {CONTACT_INFO.address.line3}, {CONTACT_INFO.address.city}<br />
                {CONTACT_INFO.address.country}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 shrink-0 text-gold-600" />
            <a href={PHONE_URL} className="text-sm font-medium text-navy-900 hover:text-gold-600">
              {CONTACT_INFO.phone}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 shrink-0 text-gold-600" />
            <a href={EMAIL_URL} className="text-sm font-medium text-navy-900 hover:text-gold-600">
              {CONTACT_INFO.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MessageCircle className="h-5 w-5 shrink-0 text-gold-600" />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-navy-900 hover:text-gold-600"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-navy-900 text-white hover:bg-navy-800">
              <Navigation className="mr-2 h-4 w-4" />
              Get Directions
            </Button>
          </a>
          <Link href="/appointment">
            <Button variant="outline" className="border-navy-300 text-navy-700 hover:bg-navy-50">
              Request Appointment
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-lg border border-navy-100 shadow-navy-card"
      >
        <iframe
          src={mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ minHeight: '400px', border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Tasneem Dental & Aesthetic Care location map"
        />
      </motion.div>
    </div>
  );
}
