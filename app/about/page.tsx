import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { Shield, Heart, Sparkles, Award, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Tasneem Dental & Aesthetic Care — our philosophy, our commitment to personalized care, and our modern clinic in DHA Phase 1, Lahore.',
};

const ABOUT_IMAGE = 'https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&w=1200';
const INTERIOR_IMAGE = 'https://images.pexels.com/photos/5355863/pexels-photo-5355863.jpeg?auto=compress&cs=tinysrgb&w=1200';

const VALUES = [
  { icon: Shield, title: 'Professional Service', description: 'Our team upholds the highest standards of dental and aesthetic care.' },
  { icon: Heart, title: 'Personalized Care', description: 'Every patient receives individualized attention and treatment plans.' },
  { icon: Sparkles, title: 'Modern Environment', description: 'A clean, comfortable clinic equipped with modern technology.' },
  { icon: Award, title: 'Quality Treatments', description: 'We use proven techniques and quality materials for all procedures.' },
  { icon: Users, title: 'Patient-Centered', description: 'Your comfort and satisfaction are at the heart of everything we do.' },
  { icon: Clock, title: 'Convenient Scheduling', description: 'Flexible appointment times to accommodate your busy schedule.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 pb-20 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            light
            eyebrow="About Us"
            title="Tasneem Dental & Aesthetic Care"
            subtitle="A premier dental and aesthetic clinic dedicated to enhancing your smile and natural beauty."
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-lg shadow-navy-card">
                <Image
                  src={ABOUT_IMAGE}
                  alt="Modern dental clinic at Tasneem Dental & Aesthetic Care"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-lg border-2 border-gold-500 bg-cream md:block" />
            </div>
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                  Our Story
                </span>
              </div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 md:text-4xl text-balance">
                A Commitment to Excellence in Care
              </h2>
              <p className="mt-4 text-slatey">
                Tasneem Dental &amp; Aesthetic Care was founded with a simple vision: to provide
                comprehensive dental and aesthetic treatments in a warm, welcoming, and professional
                environment. We believe that everyone deserves to feel confident in their smile and skin.
              </p>
              <p className="mt-4 text-slatey">
                Our clinic combines modern dental care with advanced aesthetic treatments, offering
                patients a complete approach to oral health and beauty under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Care That Puts You First"
            subtitle="We believe in a holistic approach to dental and aesthetic care — treating each patient as an individual with unique needs and goals."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-lg border border-navy-100 bg-white p-8 shadow-navy-card transition-all hover:border-gold-400 hover:shadow-gold-glow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy-900">{value.title}</h3>
                <p className="mt-2 text-sm text-slatey">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                  Our Environment
                </span>
              </div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 md:text-4xl text-balance">
                A Space Designed for Comfort
              </h2>
              <p className="mt-4 text-slatey">
                Our clinic has been thoughtfully designed to create a calming and comfortable
                atmosphere. From the moment you walk in, you will feel at ease in our modern,
                clean, and welcoming space.
              </p>
              <p className="mt-4 text-slatey">
                We maintain the highest standards of hygiene and use modern equipment to ensure
                safe, effective treatments for every patient.
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="overflow-hidden rounded-lg shadow-navy-card">
                <Image
                  src={INTERIOR_IMAGE}
                  alt="Clinic interior at Tasneem Dental & Aesthetic Care"
                  width={600}
                  height={450}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
