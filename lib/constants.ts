

export const CLINIC_NAME = 'Tasneem Dental & Aesthetic Care';
export const CLINIC_SHORT_NAME = 'TDA';

export const CONTACT_INFO = {
  phone: '+92 336 9777702',
  phoneRaw: '+923369777702',
  email: 'tdacare1@gmail.com',
  whatsapp: '923369777702',
  address: {
    line1: 'Plaza No 108, K Commercial',
    line2: 'First Floor',
    line3: 'DHA Phase 1',
    city: 'Lahore',
    country: 'Pakistan',
    full: 'Plaza No 108, K Commercial, First Floor, DHA Phase 1, Lahore, Pakistan',
  },
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.whatsapp}`;
export const PHONE_URL = `tel:${CONTACT_INFO.phoneRaw}`;
export const EMAIL_URL = `mailto:${CONTACT_INFO.email}`;

export const SOCIAL_LINKS = {
  instagram: '#',
  facebook: '#',
  tiktok: '#',
  whatsapp: WHATSAPP_URL,
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Doctor', href: '/doctor' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Doctor', href: '/doctor' },
  { label: 'Contact', href: '/contact' },
  { label: 'Appointment', href: '/appointment' },
  { label: 'Location', href: '/location' },
];

export const CLINIC_HOURS = [
  { day: 'Monday', hours: 'Clinic timings' },
  { day: 'Tuesday', hours: 'Clinic timings' },
  { day: 'Wednesday', hours: 'Clinic timings' },
  { day: 'Thursday', hours: 'Clinic timings' },
  { day: 'Friday', hours: 'Clinic timings' },
  { day: 'Saturday', hours: 'Clinic timings' },
  { day: 'Sunday', hours: 'Closed' },
];

export const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
  '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM',
];

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const DENTAL_SERVICES: ServiceItem[] = [
  {
    id: 'tooth-cleaning',
    name: 'Tooth Cleaning (Scaling & Polishing)',
    description:
      'Professional scaling and polishing to remove plaque and tartar for healthier gums.',
    icon: 'Sparkles',
  },
  {
    id: 'tooth-whitening',
    name: 'Tooth Whitening',
    description:
      'Brighten your smile with safe, professional-grade whitening treatments.',
    icon: 'Smile',
  },
  {
    id: 'dental-fillings',
    name: 'Dental Fillings',
    description:
      'Tooth-colored fillings that restore function and blend naturally.',
    icon: 'Stethoscope',
  },
  {
    id: 'root-canal',
    name: 'Root Canal Treatment',
    description:
      'Painless root canal therapy to save damaged or infected teeth.',
    icon: 'Syringe',
  },
  {
    id: 'dental-implants',
    name: 'Dental Implants',
    description:
      'Permanent tooth replacement that looks and functions like natural teeth.',
    icon: 'Bone',
  },
  {
    id: 'crown-bridge',
    name: 'Crown & Bridge',
    description:
      'Custom crowns and bridges to restore strength and aesthetics.',
    icon: 'Crown',
  },
  {
    id: 'smile-makeover',
    name: 'Smile Makeover',
    description:
      'Comprehensive smile design combining multiple aesthetic procedures.',
    icon: 'Gem',
  },
  {
    id: 'tooth-extraction',
    name: 'Tooth Extraction',
    description:
      'Safe and comfortable removal of damaged or problematic teeth.',
    icon: 'Wrench',
  },
  {
    id: 'orthodontic-aligners',
    name: 'Orthodontic Aligners',
    description:
      'Clear aligners to straighten teeth discreetly and comfortably.',
    icon: 'AlignHorizontalJustifyCenter',
  },
  {
    id: 'kids-dental-care',
    name: "Kids' Dental Care",
    description:
      'Gentle, friendly dental care designed for children.',
    icon: 'Baby',
  },
];

export const AESTHETIC_SERVICES: ServiceItem[] = [
  {
    id: 'hydrafacial',
    name: 'Hydrafacial',
    description:
      'Deep cleansing and hydration for a radiant, refreshed complexion.',
    icon: 'Droplets',
  },
  {
    id: 'chemical-peels',
    name: 'Chemical Peels',
    description:
      'Exfoliating treatments that reveal smoother, brighter skin.',
    icon: 'FlaskConical',
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    description:
      'Collagen-stimulating treatment for improved skin texture.',
    icon: 'Scan',
  },
  {
    id: 'laser-hair-reduction',
    name: 'Laser Hair Reduction',
    description:
      'Long-lasting hair reduction with advanced laser technology.',
    icon: 'Zap',
  },
  {
    id: 'mesotherapy',
    name: 'Mesotherapy',
    description:
      'Targeted nutrient delivery to rejuvenate and revitalize skin.',
    icon: 'Pill',
  },
  {
    id: 'acne-treatment',
    name: 'Acne Treatment',
    description:
      'Personalized protocols to treat active acne and prevent scarring.',
    icon: 'Shield',
  },
  {
    id: 'anti-aging-treatment',
    name: 'Anti-Aging Treatment',
    description:
      'Advanced therapies to reduce fine lines and restore youthful skin.',
    icon: 'Heart',
  },
  {
    id: 'prp-skin-hair',
    name: 'PRP (Skin & Hair)',
    description:
      'Platelet-rich plasma therapy for skin rejuvenation and hair restoration.',
    icon: 'Flower2',
  },
  {
    id: 'dermaplaning',
    name: 'Dermaplaning',
    description:
      'Gentle exfoliation for instantly smoother, brighter skin.',
    icon: 'Hand',
  },
  {
    id: 'glow-booster',
    name: 'Glow Booster',
    description:
      'Intensive treatments designed to give your skin a luminous glow.',
    icon: 'Gem',
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'dental',
    title: 'Dental Treatments',
    subtitle: 'Comprehensive dental care for a healthy, beautiful smile',
    services: DENTAL_SERVICES,
  },
  {
    id: 'aesthetic',
    title: 'Aesthetic Treatments',
    subtitle: 'Advanced skincare and beauty treatments for radiant results',
    services: AESTHETIC_SERVICES,
  },
];

export const ALL_SERVICES = [...DENTAL_SERVICES, ...AESTHETIC_SERVICES];

export const APPOINTMENT_STATUSES = ['pending', 'confirmed', 'cancelled', 'completed'] as const;
export type AppointmentStatus = (typeof APPOINTMENT_STATUSES)[number];

export const STATUS_LABELS: Record<AppointmentStatus, string> = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  cancelled: 'Cancelled',
  completed: 'Completed',
};

export const STATUS_COLORS: Record<AppointmentStatus, string> = {
  pending: 'bg-amber-100 text-amber-800 border-amber-300',
  confirmed: 'bg-green-100 text-green-800 border-green-300',
  cancelled: 'bg-red-100 text-red-800 border-red-300',
  completed: 'bg-blue-100 text-blue-800 border-blue-300',
};
