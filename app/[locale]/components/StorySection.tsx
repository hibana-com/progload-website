import LogoIcon from './LogoIcon';
import ScrollReveal from './ScrollReveal';

interface StorySectionProps {
  headline: string;
  quote: string;
}

export default function StorySection({ headline, quote }: StorySectionProps) {
  return (
    <section
      className="py-32 px-6"
      style={{ background: '#111111' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          {/* Logo */}
          <div
            className="w-20 h-20 mx-auto mb-8 brand-gradient rounded-[22px] flex items-center justify-center"
            style={{ boxShadow: '0 8px 32px rgba(0,122,255,0.3)' }}
          >
            <LogoIcon className="w-10 h-10 text-white" />
          </div>

          <h2
            className="font-semibold tracking-tight mb-8"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
              lineHeight: 1.1,
              color: '#F5F5F7',
            }}
          >
            {headline}
          </h2>

          <p
            className="italic leading-relaxed"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
            }}
          >
            &ldquo;{quote}&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
