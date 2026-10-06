import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { ClinicTimings } from '@/components/ClinicTimings';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Clinic Timings',
  description: 'Check the operating hours for Tasneem Dental & Aesthetic Care in DHA Phase 1, Lahore.',
};

export default function TimingsPage() {
  return (
    <>
      <section className="bg-navy-900 pb-20 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            light
            eyebrow="Hours of Operation"
            title="Clinic Timings"
            subtitle="Timings shown below are placeholders and will be updated with exact hours once confirmed by the clinic."
          />
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <ClinicTimings />
        </div>
      </section>

      <CTASection />
    </>
  );
}
