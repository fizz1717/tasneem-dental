'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { Appointment } from '@/lib/types';
import { APPOINTMENT_STATUSES, STATUS_LABELS, STATUS_COLORS, ALL_SERVICES } from '@/lib/constants';
import type { AppointmentStatus } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { LogOut, CalendarClock, Clock, CheckCircle, XCircle, Loader2, Phone, Mail, Calendar } from 'lucide-react';

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<AppointmentStatus | 'all'>('all');
  const [selected, setSelected] = useState<Appointment | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const fetchAppointments = useCallback(async () => {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching appointments:', error);
      setLoading(false);
      return;
    }

    setAppointments((data as Appointment[]) || []);
    setLoading(false);
  }, [supabase]);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  async function updateStatus(id: string, status: AppointmentStatus) {
    setUpdating(id);
    const { error } = await supabase
      .from('appointments')
      .update({ status })
      .eq('id', id);

    if (error) {
      console.error('Error updating status:', error);
      setUpdating(null);
      return;
    }

    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status } : apt))
    );
    setSelected((prev) => (prev?.id === id ? { ...prev, status } : prev));
    setUpdating(null);
  }

  const counts = {
    total: appointments.length,
    pending: appointments.filter((a) => a.status === 'pending').length,
    confirmed: appointments.filter((a) => a.status === 'confirmed').length,
    cancelled: appointments.filter((a) => a.status === 'cancelled').length,
    completed: appointments.filter((a) => a.status === 'completed').length,
  };

  const filtered = filter === 'all' ? appointments : appointments.filter((a) => a.status === filter);

  function getServiceName(id: string) {
    const service = ALL_SERVICES.find((s) => s.id === id);
    return service ? service.name : id;
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-navy-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <div>
            <h1 className="font-serif text-xl font-semibold text-navy-900">Admin Dashboard</h1>
            <p className="text-sm text-slatey">Tasneem Dental &amp; Aesthetic Care</p>
          </div>
          <Button variant="outline" onClick={handleLogout} size="sm">
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard icon={CalendarClock} label="Total" value={counts.total} color="text-navy-700" />
          <StatCard icon={Clock} label="Pending" value={counts.pending} color="text-amber-600" />
          <StatCard icon={CheckCircle} label="Confirmed" value={counts.confirmed} color="text-green-600" />
          <StatCard icon={XCircle} label="Cancelled" value={counts.cancelled} color="text-red-600" />
          <StatCard icon={CheckCircle} label="Completed" value={counts.completed} color="text-blue-600" />
        </div>

        {/* Filter */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-sm font-medium text-navy-900">Filter by status:</span>
          <Select value={filter} onValueChange={(v) => setFilter(v as AppointmentStatus | 'all')}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {APPOINTMENT_STATUSES.map((status) => (
                <SelectItem key={status} value={status}>
                  {STATUS_LABELS[status]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-hidden rounded-lg border border-navy-100 bg-white shadow-navy-card">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-navy-400" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-slatey">No appointments found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-navy-100 bg-navy-50/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-navy-800">Patient</th>
                    <th className="px-4 py-3 text-left font-medium text-navy-800">Phone</th>
                    <th className="hidden px-4 py-3 text-left font-medium text-navy-800 lg:table-cell">Service</th>
                    <th className="hidden px-4 py-3 text-left font-medium text-navy-800 md:table-cell">Date</th>
                    <th className="hidden px-4 py-3 text-left font-medium text-navy-800 md:table-cell">Time</th>
                    <th className="px-4 py-3 text-left font-medium text-navy-800">Status</th>
                    <th className="px-4 py-3 text-left font-medium text-navy-800">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((apt) => (
                    <tr
                      key={apt.id}
                      className="border-b border-navy-50 transition-colors hover:bg-cream/50 cursor-pointer"
                      onClick={() => setSelected(apt)}
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-navy-900">{apt.patient_name}</div>
                        {apt.email && <div className="text-xs text-slatey">{apt.email}</div>}
                      </td>
                      <td className="px-4 py-3 text-slatey">{apt.phone}</td>
                      <td className="hidden px-4 py-3 text-slatey lg:table-cell">
                        {getServiceName(apt.service)}
                      </td>
                      <td className="hidden px-4 py-3 text-slatey md:table-cell">
                        {new Date(apt.preferred_date).toLocaleDateString()}
                      </td>
                      <td className="hidden px-4 py-3 text-slatey md:table-cell">{apt.preferred_time}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-semibold ${STATUS_COLORS[apt.status]}`}>
                          {STATUS_LABELS[apt.status]}
                        </span>
                      </td>
                      <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                        <Select
                          value={apt.status}
                          onValueChange={(v) => updateStatus(apt.id, v as AppointmentStatus)}
                          disabled={updating === apt.id}
                        >
                          <SelectTrigger className="h-8 w-32 text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {APPOINTMENT_STATUSES.map((status) => (
                              <SelectItem key={status} value={status}>
                                {STATUS_LABELS[status]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Detail dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Appointment Details</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <DetailField label="Patient Name" value={selected.patient_name} />
                <DetailField label="Phone" value={selected.phone} />
                <DetailField label="Email" value={selected.email || 'N/A'} />
                <DetailField label="Service" value={getServiceName(selected.service)} />
                <DetailField label="Preferred Date" value={new Date(selected.preferred_date).toLocaleDateString()} />
                <DetailField label="Preferred Time" value={selected.preferred_time} />
                <DetailField label="Status" value={STATUS_LABELS[selected.status]} />
                <DetailField label="Submitted" value={new Date(selected.created_at).toLocaleString()} />
              </div>
              {selected.message && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slatey">Message</p>
                  <p className="mt-1 text-sm text-navy-800">{selected.message}</p>
                </div>
              )}
              <div className="flex flex-wrap gap-2 border-t border-navy-100 pt-4">
                <Button
                  size="sm"
                  className="bg-green-600 text-white hover:bg-green-700"
                  onClick={() => updateStatus(selected.id, 'confirmed')}
                  disabled={updating === selected.id}
                >
                  Confirm
                </Button>
                <Button
                  size="sm"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => updateStatus(selected.id, 'completed')}
                  disabled={updating === selected.id}
                >
                  Mark Completed
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50"
                  onClick={() => updateStatus(selected.id, 'cancelled')}
                  disabled={updating === selected.id}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  color: string;
}) {
  return (
    <Card className="border-navy-100">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slatey">{label}</CardTitle>
        <Icon className={`h-4 w-4 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-navy-900">{value}</div>
      </CardContent>
    </Card>
  );
}

function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slatey">{label}</p>
      <p className="mt-1 text-sm text-navy-800">{value}</p>
    </div>
  );
}
