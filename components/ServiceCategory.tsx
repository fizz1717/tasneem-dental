'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/ServiceCard';
import type { ServiceItem } from '@/lib/constants';

interface ServiceCategoryProps {
  title: string;
  services: ServiceItem[];
}

export function ServiceCategory({ title, services }: ServiceCategoryProps) {
  return (
    <div className="mt-14">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-6 flex items-center gap-4"
      >
        <span className="font-serif text-2xl font-semibold text-navy-900">{title}</span>
        <span className="h-px flex-1 bg-navy-100" />
      </motion.h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
