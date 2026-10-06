'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { ServiceCategory } from '@/components/ServiceCategory';
import { DENTAL_SERVICES, AESTHETIC_SERVICES } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const ABOUT_IMAGE = 'https://images.pexels.com/photos/6502543/pexels-photo-6502543.jpeg?auto=compress&cs=tinysrgb&w=1200';
const AESTHETIC_IMAGE = 'https://images.pexels.com/photos/7446659/pexels-photo-7446659.jpeg?auto=compress&cs=tinysrgb&w=1200';

const WHY_CHOOSE = [
  {
    icon: Shield,
    title: 'Professional Expertise',
    description: 'Experienced dental and aesthetic professionals using modern techniques and equipment.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every treatment plan is tailored to your individual needs and goals.',
  },
  {
    icon: Sparkles,
    title: 'Premium Environment',
    description: 'A clean, comfortable, and welcoming clinic designed for your comfort.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services preview */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive Dental & Aesthetic Care"
            subtitle="From routine dental treatments to advanced aesthetic procedures, we offer a full range of services to enhance your smile and skin."
          />

          <ServiceCategory
            title="Dental Treatments"
            services={DENTAL_SERVICES.slice(0, 6)}
          />

          <ServiceCategory
            title="Aesthetic Treatments"
            services={AESTHETIC_SERVICES.slice(0, 6)}
          />

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button className="border-navy-300 text-navy-700 hover:bg-navy-50">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-lg shadow-navy-card">
                <Image
                  src={ABOUT_IMAGE}
                  alt="Modern dental clinic equipment at Tasneem Dental & Aesthetic Care"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-lg border-2 border-gold-500 bg-cream md:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                  About Us
                </span>
              </div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 md:text-4xl text-balance">
                Where Dental Excellence Meets Aesthetic Beauty
              </h2>
              <p className="mt-4 text-slatey">
                Tasneem Dental &amp; Aesthetic Care brings together comprehensive dental treatments
                and advanced aesthetic procedures under one roof. Our commitment is to provide
                personalized, professional care in a modern and comfortable environment.
              </p>
              <p className="mt-4 text-slatey">
                Whether you need routine dental care or are looking to enhance your natural beauty,
                our team is here to help you achieve your goals.
              </p>
              <Link href="/about">
                <Button className="mt-6 bg-navy-900 text-white hover:bg-navy-800">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-navy-900 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            light
            eyebrow="Why Choose Us"
            title="The Tasneem Difference"
            subtitle="We combine expertise, personalized attention, and a premium environment to deliver exceptional care."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-colors hover:border-gold-500/50"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-navy-900">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetic preview */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                  Aesthetic Care
                </span>
              </div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 md:text-4xl text-balance">
                Reveal Your Natural Glow
              </h2>
              <p className="mt-4 text-slatey">
                Our aesthetic treatments are designed to enhance your natural beauty.
                From rejuvenating facials to advanced skin treatments, we use proven
                techniques to help you look and feel your best.
              </p>
              <ul className="mt-6 space-y-2">
                {AESTHETIC_SERVICES.slice(0, 5).map((s) => (
                  <li key={s.id} className="flex items-center gap-2 text-sm text-navy-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                    {s.name}
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <Button className="mt-6 bg-navy-900 text-white hover:bg-navy-800">
                  Explore Aesthetic Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-1 lg:order-2"
            >
              <div className="overflow-hidden rounded-lg shadow-navy-card">
                <Image
                  src={AESTHETIC_IMAGE}
                  alt="Aesthetic facial treatment at Tasneem Dental & Aesthetic Care"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
