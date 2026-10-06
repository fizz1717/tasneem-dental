import { z } from 'zod';
import { ALL_SERVICES, TIME_SLOTS } from './constants';

const serviceIds = ALL_SERVICES.map((s) => s.id);

export const appointmentSchema = z.object({
  patient_name: z
    .string()
    .min(2, 'Please enter your full name (at least 2 characters)')
    .max(100, 'Name is too long'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long')
    .regex(/^[+]?[\d\s()-]+$/, 'Please enter a valid phone number'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  service: z
    .string()
    .refine((val) => serviceIds.includes(val), 'Please select a valid service'),
  preferred_date: z
    .string()
    .refine((val) => {
      const date = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    }, 'Please select a future date'),
  preferred_time: z
    .string()
    .refine((val) => TIME_SLOTS.includes(val), 'Please select a valid time slot'),
  message: z
    .string()
    .max(1000, 'Message is too long (max 1000 characters)')
    .optional()
    .or(z.literal('')),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

export function validateAppointment(data: unknown) {
  return appointmentSchema.safeParse(data);
}
