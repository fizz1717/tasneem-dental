import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { validateAppointment } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validateAppointment(body);

    if (!result.success) {
      const firstError = result.error.errors[0];
      return NextResponse.json(
        { error: firstError?.message || 'Invalid input' },
        { status: 400 }
      );
    }

    const data = result.data;
    const supabase = await createClient();

    const { error } = await supabase.from('appointments').insert({
      patient_name: data.patient_name,
      phone: data.phone,
      email: data.email || null,
      service: data.service,
      preferred_date: data.preferred_date,
      preferred_time: data.preferred_time,
      message: data.message || null,
      status: 'pending',
    });

    if (error) {
      console.error('Database error:', error.message);
      return NextResponse.json(
        { error: 'We could not save your request. Please try again or call us directly.' },
        { status: 500 }
      );
    }

    // Email notification to clinic (prepared for Resend integration)
    // When RESEND_API_KEY and CLINIC_EMAIL are configured, uncomment and use:
    //
    // try {
    //   await fetch('https://api.resend.com/emails', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       from: 'appointments@tasneemdental.com',
    //       to: process.env.CLINIC_EMAIL,
    //       subject: 'New Appointment Request',
    //       text: `New appointment request from ${data.patient_name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.service}\nDate: ${data.preferred_date}\nTime: ${data.preferred_time}\nMessage: ${data.message}`,
    //     }),
    //   });
    // } catch (emailError) {
    //   console.error('Email notification failed:', emailError);
    // }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
