'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Lock, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError('Invalid email or password. Please try again.');
        setLoading(false);
        return;
      }

      router.push('/admin/dashboard');
      router.refresh();
    } catch {
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-900 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-lg border border-navy-700 bg-navy-800 p-8 shadow-xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-navy-900">
              <Lock className="h-7 w-7" />
            </div>
            <h1 className="font-serif text-2xl font-semibold text-white">Admin Login</h1>
            <p className="mt-2 text-sm text-white/60">
              Sign in to manage appointment requests
            </p>
          </div>

          {error && (
            <div className="mb-4 flex items-start gap-3 rounded-md border border-red-500/30 bg-red-500/10 p-4">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
              <p className="text-sm text-red-200">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@tasneemdental.com"
                required
                className="border-navy-600 bg-navy-700 text-white placeholder:text-white/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="border-navy-600 bg-navy-700 text-white placeholder:text-white/40"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gold-500 text-navy-900 hover:bg-gold-400"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </div>
        <p className="mt-4 text-center text-xs text-white/40">
          Tasneem Dental &amp; Aesthetic Care &mdash; Admin Portal
        </p>
      </div>
    </div>
  );
}
