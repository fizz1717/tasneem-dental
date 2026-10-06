import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { LocationSection } from '@/components/LocationSection';
import { ClinicTimings } from '@/components/ClinicTimings';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Location & Timings',
  description: 'Find Tasneem Dental & Aesthetic Care in DHA Phase 1, Lahore. View our location on the map and check our clinic hours.',
};

export default function LocationPage() {
  return (
    <>
      <section className="bg-navy-900 pb-20 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            light
            eyebrow="Visit Us"
            title="Location & Timings"
            subtitle="Find us in DHA Phase 1, Lahore, and check our clinic hours."
          />
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <LocationSection />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Hours"
            title="Clinic Timings"
            subtitle="Timings shown below are placeholders and will be updated with exact hours once confirmed by the clinic."
          />
          <div className="mt-12">
            <ClinicTimings />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
