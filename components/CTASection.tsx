import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = 'Ready to Begin Your Journey?',
  subtitle = 'Book your appointment today and take the first step toward a healthier smile and radiant skin.',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20">
      <div className="absolute inset-0 bg-navy-gradient opacity-90" />
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 gold-divider" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl text-balance">
          {title}
        </h2>
        <p className="mt-4 text-lg text-white/70">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/appointment">
            <Button size="lg" className="bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors">
              <Calendar className="mr-2 h-5 w-5" />
              Request an Appointment
            </Button>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-gold-400"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
