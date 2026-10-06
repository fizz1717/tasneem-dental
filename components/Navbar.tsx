'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/Logo';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled;
  const logoVariant = isTransparent ? 'light' : 'dark';

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          isTransparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-md shadow-md'
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <Link href="/" aria-label="Tasneem Dental & Aesthetic Care home">
            <Logo variant={logoVariant} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors',
                    isTransparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-navy-800 hover:text-gold-600',
                    isActive && (isTransparent ? 'text-gold-400' : 'text-gold-600')
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-gold-500" />
                  )}
                </Link>
              );
            })}
            <Link href="/appointment" className="ml-3">
              <Button
                className="bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors"
                size="sm"
              >
                Request Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {isTransparent ? (
              mobileOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />
            ) : (
              mobileOpen ? <X className="h-6 w-6 text-navy-900" /> : <Menu className="h-6 w-6 text-navy-900" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        )}
      >
        <div className="absolute inset-0 bg-navy-900/95 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
        <div className="relative flex h-full flex-col items-center justify-center gap-2 px-6">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-lg font-medium text-white/90 transition-all hover:text-gold-400',
                mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                pathname === link.href && 'text-gold-400'
              )}
              style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/appointment"
            className={cn(
              'mt-4 rounded-md bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-all hover:bg-gold-400',
              mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
            style={{ transitionDelay: mobileOpen ? `${NAV_LINKS.length * 50}ms` : '0ms' }}
          >
            Request Appointment
          </Link>
        </div>
      </div>
    </>
  );
}
