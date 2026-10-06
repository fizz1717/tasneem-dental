import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl', className)}>
      {eyebrow && (
        <div className={cn('mb-3 flex items-center gap-3', center && 'justify-center')}>
          <span className="h-px w-8 bg-gold-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-gold-500" />
        </div>
      )}
      <h2
        className={cn(
          'font-serif text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-navy-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-base leading-relaxed md:text-lg', light ? 'text-white/70' : 'text-slatey')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
