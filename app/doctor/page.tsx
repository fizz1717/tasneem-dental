import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Stethoscope, Award, Heart, CheckCircle2, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "Doctor's Profile",
  description: 'Meet the dental and aesthetic care professional at Tasneem Dental & Aesthetic Care in Lahore.',
};

const DOCTOR_IMAGE = 'https://images.pexels.com/photos/19879741/pexels-photo-19879741.jpeg?auto=compress&cs=tinysrgb&w=800';

export default function DoctorPage() {
  return (
    <>
      <section className="bg-navy-900 pb-20 pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            light
            eyebrow="Our Doctor"
            title="Meet Your Care Provider"
            subtitle="Dedicated to providing expert dental and aesthetic care with a personal touch."
          />
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-lg border-4 border-white shadow-navy-card">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={DOCTOR_IMAGE}
                    alt="Doctor at Tasneem Dental & Aesthetic Care"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-gold-200 bg-gold-50 p-6">
                <p className="text-sm text-gold-800">
                  <strong>Note:</strong> Doctor's photograph and detailed information will be
                  updated once provided by the clinic.
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-3">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                  Doctor's Profile
                </span>
              </div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 md:text-4xl">
                [Doctor's Name]
              </h2>
              <p className="mt-2 text-lg text-gold-600">Dental &amp; Aesthetic Specialist</p>

              <div className="mt-8 space-y-6">
                <InfoBlock icon={Stethoscope} title="Qualifications">
                  <p className="text-slatey">
                    [Doctor's qualifications and degrees will be listed here once provided by the clinic.]
                  </p>
                </InfoBlock>

                <InfoBlock icon={Award} title="Specialization">
                  <p className="text-slatey">
                    [Areas of specialization and expertise will be detailed here.]
                  </p>
                </InfoBlock>

                <InfoBlock icon={Calendar} title="Experience">
                  <p className="text-slatey">
                    [Years of experience and professional background will be added here.]
                  </p>
                </InfoBlock>

                <InfoBlock icon={Heart} title="Biography">
                  <p className="text-slatey">
                    [A brief biography of the doctor, including their journey in dentistry and
                    aesthetic care, will be shared here once provided.]
                  </p>
                </InfoBlock>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-navy-900">Areas of Expertise</h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {[
                      'General Dentistry',
                      'Cosmetic Dentistry',
                      'Aesthetic Treatments',
                      'Preventive Care',
                      'Smile Design',
                      'Skin Care',
                    ].map((area) => (
                      <li key={area} className="flex items-center gap-2 text-sm text-navy-800">
                        <CheckCircle2 className="h-4 w-4 text-gold-500" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link href="/appointment">
                <Button className="mt-8 bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors">
                  <Calendar className="mr-2 h-5 w-5" />
                  Request an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function InfoBlock({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-gold-500 pl-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-gold-600" />
        <h3 className="font-serif text-lg font-semibold text-navy-900">{title}</h3>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
