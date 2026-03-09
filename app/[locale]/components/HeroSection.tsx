import PhoneMockup from './PhoneMockup';
import ScrollReveal from './ScrollReveal';

interface HeroSectionProps {
  overline: string;
  title: string;
  titleHighlight: string;
  description: string;
  cta: string;
  secondaryCta: string;
}

export default function HeroSection({
  overline,
  title,
  titleHighlight,
  description,
  cta,
  secondaryCta,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center px-6 pt-16 pb-0 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-hero">
          <span className="text-sm font-medium text-[#FF6B35]">{overline}</span>
        </div>

        <h1
          className="animate-hero-delay-1 font-semibold text-white tracking-tight mt-4"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            lineHeight: 1.05,
          }}
        >
          {title}
          <br />
          <span className="brand-gradient-text">{titleHighlight}</span>
        </h1>

        <p
          className="animate-hero-delay-2 text-white/50 mx-auto mt-6"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: '36rem' }}
        >
          {description}
        </p>

        <div className="animate-hero-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#download"
            className="bg-white text-black rounded-full px-8 py-3.5 font-medium text-base hover:bg-white/90 transition-colors"
          >
            {cta}
          </a>
          <a
            href="#iphone"
            className="text-white/60 hover:text-white transition-colors text-base flex items-center gap-2"
          >
            {secondaryCta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Phone mockup — overflows into next section */}
      <div className="animate-hero-delay-4 relative z-10 mt-16 w-full flex justify-center">
        <PhoneMockup variant="dark" size="lg" />
      </div>
    </section>
  );
}
