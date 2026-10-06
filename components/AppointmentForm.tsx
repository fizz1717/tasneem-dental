'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { appointmentSchema, type AppointmentFormData } from '@/lib/validation';
import { ALL_SERVICES, TIME_SLOTS } from '@/lib/constants';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SubmitState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string };

export function AppointmentForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: 'idle' });

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      patient_name: '',
      phone: '',
      email: '',
      service: '',
      preferred_date: '',
      preferred_time: '',
      message: '',
    },
  });

  async function onSubmit(data: AppointmentFormData) {
    setSubmitState({ status: 'submitting' });
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) {
        setSubmitState({
          status: 'error',
          message: result.error || 'Something went wrong. Please try again or call us.',
        });
        return;
      }

      setSubmitState({
        status: 'success',
        message:
          'Your appointment request has been received. Our team will contact you shortly to confirm your appointment.',
      });
      form.reset();
    } catch {
      setSubmitState({
        status: 'error',
        message: 'A network error occurred. Please check your connection and try again.',
      });
    }
  }

  if (submitState.status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-lg border border-green-200 bg-green-50 p-12 text-center"
      >
        <CheckCircle2 className="h-16 w-16 text-green-600" />
        <h3 className="mt-6 font-serif text-2xl font-semibold text-navy-900">
          Request Received
        </h3>
        <p className="mt-3 max-w-md text-slatey">{submitState.message}</p>
        <Button
          className="mt-6 bg-navy-900 text-white hover:bg-navy-800"
          onClick={() => setSubmitState({ status: 'idle' })}
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="rounded-lg border border-navy-100 bg-white p-6 shadow-navy-card md:p-8">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-semibold text-navy-900">Request an Appointment</h2>
        <p className="mt-1 text-sm text-slatey">
          Fill out the form below and our team will contact you to confirm your appointment.
        </p>
      </div>

      <AnimatePresence>
        {submitState.status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
            <p className="text-sm text-red-800">{submitState.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              control={form.control}
              name="patient_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="+92 3XX XXXXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email (optional)</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Service *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a treatment" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-72">
                    {ALL_SERVICES.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid gap-5 md:grid-cols-2">
            <FormField
              control={form.control}
              name="preferred_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Date *</FormLabel>
                  <FormControl>
                    <Input type="date" min={today} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferred_time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Time *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-72">
                      {TIME_SLOTS.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Message (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your concern or any specific requests..."
                    className="resize-none"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-xs">
                  Max 1000 characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors"
            disabled={submitState.status === 'submitting'}
          >
            {submitState.status === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Appointment Request'
            )}
          </Button>

          <p className="text-center text-xs text-slatey">
            This is a request, not a confirmed appointment. Our team will contact you to confirm.
          </p>
        </form>
      </Form>
    </div>
  );
}
