import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { AppointmentForm } from '@/components/AppointmentForm';

export const metadata: Metadata = {
  title: 'Request an Appointment',
  description: 'Book your dental or aesthetic appointment at Tasneem Dental & Aesthetic Care in DHA Phase 1, Lahore. Submit your request and our team will confirm shortly.',
};

export default function AppointmentPage() {
  return (
    <section className="bg-cream pb-20 pt-32 lg:pt-40">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <SectionHeading
          eyebrow="Book Your Visit"
          title="Request an Appointment"
          subtitle="Fill out the form below and our team will contact you to confirm your appointment."
        />
        <div className="mt-12">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
