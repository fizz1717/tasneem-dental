'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Smile,
  Stethoscope,
  Syringe,
  Bone,
  Crown,
  Gem,
  Wrench,
  AlignHorizontalJustifyCenter,
  Baby,
  Droplets,
  FlaskConical,
  Scan,
  Zap,
  Pill,
  Shield,
  Heart,
  Flower2,
  Hand,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { ServiceItem } from '@/lib/constants';

const iconMap = {
  Sparkles,
  Smile,
  Stethoscope,
  Syringe,
  Bone,
  Crown,
  Gem,
  Wrench,
  AlignHorizontalJustifyCenter,
  Baby,
  Droplets,
  FlaskConical,
  Scan,
  Zap,
  Pill,
  Shield,
  Heart,
  Flower2,
  Hand,
} as const;

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className="group h-full border-navy-100/60 bg-white p-6 shadow-navy-card transition-all duration-300 hover:border-gold-400 hover:shadow-gold-glow">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-900">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-serif text-lg font-semibold text-navy-900 transition-colors group-hover:text-gold-700">
          {service.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slatey">
          {service.description}
        </p>
        <Link
          href="/appointment"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold-600 transition-colors hover:text-gold-700"
        >
          Book Now
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </Card>
    </motion.div>
  );
}
