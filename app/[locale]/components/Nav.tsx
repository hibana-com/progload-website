'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { type Locale, locales } from '@/i18n.config';
import LogoIcon from './LogoIcon';

interface NavProps {
  locale: Locale;
  downloadLabel: string;
}

const localeLabels: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  pt: 'PT',
};

export default function Nav({ locale, downloadLabel }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    if (!langOpen) return;
    const onClick = () => setLangOpen(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [langOpen]);

  const otherLocales = locales.filter((l) => l !== locale);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-black/80 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <LogoIcon className="w-5 h-5 text-[#007AFF]" />
          <span className="text-base font-semibold text-white tracking-tight">ProgLoad</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#iphone" className="text-sm text-white/60 hover:text-white transition-colors">
            iPhone
          </a>
          <a href="#watch" className="text-sm text-white/60 hover:text-white transition-colors">
            Apple Watch
          </a>
          <a href="#overload" className="text-sm text-white/60 hover:text-white transition-colors">
            Progress
          </a>

          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
              className="text-sm text-white/60 hover:text-white transition-colors font-medium flex items-center gap-1"
            >
              {localeLabels[locale]}
              <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute top-full mt-2 right-0 bg-[#1C1C1E] border border-white/10 rounded-lg overflow-hidden min-w-[100px] shadow-xl">
                {otherLocales.map((l) => (
                  <Link
                    key={l}
                    href={`/${l}`}
                    className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {localeLabels[l]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="#download"
            className="bg-[#007AFF] rounded-full px-5 py-2 text-sm text-white font-medium hover:bg-[#0A84FF] transition-colors"
          >
            {downloadLabel}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <a
            href="#iphone"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-white/70 hover:text-white transition-colors py-1"
          >
            iPhone
          </a>
          <a
            href="#watch"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-white/70 hover:text-white transition-colors py-1"
          >
            Apple Watch
          </a>
          <a
            href="#overload"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-white/70 hover:text-white transition-colors py-1"
          >
            Progress
          </a>
          <div className="flex items-center gap-3 py-1">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                className={`text-sm transition-colors ${
                  l === locale
                    ? 'text-[#007AFF] font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {localeLabels[l]}
              </Link>
            ))}
          </div>
          <a
            href="#download"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-white font-medium bg-[#007AFF] rounded-full px-5 py-2 text-center hover:bg-[#0A84FF] transition-colors"
          >
            {downloadLabel}
          </a>
        </div>
      )}
    </nav>
  );
}
