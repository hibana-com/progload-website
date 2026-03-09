import Link from 'next/link';
import { type Locale } from '@/i18n.config';
import LogoIcon from './LogoIcon';

interface FooterProps {
  locale: Locale;
  privacy: string;
  terms: string;
  support: string;
  contact: string;
  copyright: string;
}

export default function Footer({ locale, privacy, terms, support, contact, copyright }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="px-6 py-6"
      style={{
        background: '#000000',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <LogoIcon className="w-4 h-4 text-[#FF6B35]" />
          <span
            className="font-semibold"
            style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' }}
          >
            ProgLoad
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            href={`/${locale}/privacy`}
            className="transition-colors"
            style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}
          >
            {privacy}
          </Link>
          <Link
            href={`/${locale}/terms`}
            className="transition-colors"
            style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}
          >
            {terms}
          </Link>
          <Link
            href={`/${locale}/support`}
            className="transition-colors"
            style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}
          >
            {support}
          </Link>
          <a
            href="mailto:support@progload.app"
            className="transition-colors"
            style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}
          >
            {contact}
          </a>
        </div>

        {/* Copyright */}
        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
          {copyright.replace('{year}', currentYear.toString())}
        </div>
      </div>
    </footer>
  );
}
