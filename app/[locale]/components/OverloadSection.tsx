import PhoneMockup from './PhoneMockup';
import ScrollReveal from './ScrollReveal';

interface OverloadSectionProps {
  overline: string;
  headline: string;
  body: string;
}

export default function OverloadSection({ overline, headline, body }: OverloadSectionProps) {
  return (
    <section
      id="overload"
      className="py-32 px-6"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text side */}
        <ScrollReveal className="flex-1 text-center lg:text-left">
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#FF6B35' }}
          >
            {overline}
          </span>
          <h2
            className="font-semibold tracking-tight mt-4"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.08,
              color: '#1d1d1f',
            }}
          >
            {headline}
          </h2>
          <p
            className="mt-6 leading-relaxed"
            style={{ fontSize: '1.125rem', color: '#86868b', maxWidth: '28rem' }}
          >
            {body}
          </p>

          {/* Stat callouts */}
          <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
            {[
              { value: '280+', label: 'Exercises' },
              { value: '100%', label: 'Your data' },
              { value: '∞', label: 'History' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="brand-gradient-text font-semibold tabular-nums"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1 font-medium"
                  style={{ fontSize: '0.875rem', color: '#86868b' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Phone side */}
        <ScrollReveal delay={150} className="flex-shrink-0">
          <PhoneMockup variant="dark" size="md" />
        </ScrollReveal>
      </div>
    </section>
  );
}
