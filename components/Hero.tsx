'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HERO_IMAGE = 'https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Modern dental clinic interior at Tasneem Dental & Aesthetic Care"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 navy-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-gold-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Dental &amp; Aesthetic Care
          </span>
          <span className="h-px w-10 bg-gold-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl text-balance"
        >
          Expert Dental &amp; Aesthetic Care
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg text-white/80 md:text-xl"
        >
          Expert Care. Beautiful Results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/appointment">
            <Button
              size="lg"
              className="bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Request an Appointment
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-1.5 w-1 rounded-full bg-gold-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
