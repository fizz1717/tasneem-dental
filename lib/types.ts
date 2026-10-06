import type { AppointmentStatus } from './constants';

export interface Appointment {
  id: string;
  patient_name: string;
  phone: string;
  email: string | null;
  service: string;
  preferred_date: string;
  preferred_time: string;
  message: string | null;
  status: AppointmentStatus;
  created_at: string;
  updated_at: string;
}

export interface AppointmentInput {
  patient_name: string;
  phone: string;
  email?: string;
  service: string;
  preferred_date: string;
  preferred_time: string;
  message?: string;
}
