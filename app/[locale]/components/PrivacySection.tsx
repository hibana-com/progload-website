import ScrollReveal from './ScrollReveal';

interface PrivacySectionProps {
  headline: string;
  privateTitle: string;
  privateBody: string;
  syncTitle: string;
  syncBody: string;
  secureTitle: string;
  secureBody: string;
}

export default function PrivacySection({
  headline,
  privateTitle,
  privateBody,
  syncTitle,
  syncBody,
  secureTitle,
  secureBody,
}: PrivacySectionProps) {
  const items = [
    {
      icon: (
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: privateTitle,
      body: privateBody,
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: syncTitle,
      body: syncBody,
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: secureTitle,
      body: secureBody,
    },
  ];

  return (
    <section
      className="py-32 px-6"
      style={{ background: '#000000' }}
    >
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <h2
            className="font-semibold tracking-tight text-white"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.08,
            }}
          >
            {headline}
          </h2>
        </ScrollReveal>

        <div className="space-y-16">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 120}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3
                    className="font-semibold text-white mb-3"
                    style={{ fontSize: '1.25rem' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
