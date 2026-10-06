'use client';

import { motion } from 'framer-motion';
import { CLINIC_HOURS } from '@/lib/constants';

export function ClinicTimings() {
  return (
    <div className="overflow-hidden rounded-lg border border-navy-100 bg-white shadow-navy-card">
      <div className="border-b border-navy-100 bg-navy-900 px-6 py-4">
        <h3 className="font-serif text-lg font-semibold text-white">Clinic Hours</h3>
        <p className="text-sm text-white/60">Timings may vary &mdash; please confirm when booking</p>
      </div>
      <ul>
        {CLINIC_HOURS.map((entry, i) => (
          <motion.li
            key={entry.day}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.3 }}
            className="flex items-center justify-between border-b border-navy-50 px-6 py-3.5 last:border-b-0 transition-colors hover:bg-cream"
          >
            <span className="text-sm font-medium text-navy-800">{entry.day}</span>
            <span
              className={`text-sm ${entry.hours === 'Closed' ? 'text-red-500' : 'text-slatey'}`}
            >
              {entry.hours}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
