import { cn } from '@/lib/utils';
import { CLINIC_SHORT_NAME } from '@/lib/constants';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export function Logo({ className, variant = 'dark', showText = true }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy-900';
  const subTextColor = variant === 'light' ? 'text-gold-400' : 'text-gold-600';
  const borderColor = variant === 'light' ? 'border-gold-400' : 'border-gold-500';

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        className={cn(
          'flex h-12 w-12 items-center justify-center rounded-lg border-2 font-serif text-xl font-bold tracking-wider',
          borderColor,
          textColor
        )}
      >
        <span>TDA</span>
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={cn('font-serif text-lg font-semibold tracking-wide', textColor)}>
            TASNEEM
          </span>
          <span className={cn('text-[0.625rem] font-medium uppercase tracking-[0.18em]', subTextColor)}>
            Dental &amp; Aesthetic Care
          </span>
        </div>
      )}
    </div>
  );
}
