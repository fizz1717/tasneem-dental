import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { SERVICE_CATEGORIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services | Dental & Aesthetic Treatments',
  description: 'Comprehensive dental treatments including cleaning, whitening, implants, root canals, and aesthetic treatments including hydrafacial, microneedling, laser hair reduction, and more in Lahore.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-900 pb-20 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            light
            eyebrow="Our Services"
            title="Dental & Aesthetic Treatments"
            subtitle="Expert care for your smile and skin, delivered with precision and personalized attention."
          />
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category.id} className={category.id === 'aesthetic' ? 'mt-20' : ''}>
              <SectionHeading
                center={false}
                eyebrow={category.id === 'dental' ? 'Dental' : 'Aesthetic'}
                title={category.title}
                subtitle={category.subtitle}
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
