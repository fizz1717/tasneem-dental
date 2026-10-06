import { MessageCircle } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { SOCIAL_LINKS } from '@/lib/constants';

export function SocialLinks({ light = false }: { light?: boolean }) {
  const baseColor = light ? 'text-white/70 hover:text-gold-400' : 'text-navy-700 hover:text-gold-600';

  return (
    <div className="flex items-center gap-4">
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`transition-colors ${baseColor}`}
      >
        <FaInstagram className="h-5 w-5" />
      </a>
      <a
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={`transition-colors ${baseColor}`}
      >
        <FaFacebook className="h-5 w-5" />
      </a>
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`transition-colors ${baseColor}`}
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
