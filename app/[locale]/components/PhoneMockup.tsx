import LogoIcon from './LogoIcon';

interface PhoneMockupProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export default function PhoneMockup({ variant = 'dark', size = 'md' }: PhoneMockupProps) {
  const widthClass = size === 'sm' ? 'w-[220px]' : size === 'lg' ? 'w-[320px]' : 'w-[270px]';
  const isDark = variant === 'dark';

  const frameBg = isDark ? '#1C1C1E' : '#2C2C2E';
  const screenBg = isDark ? '#000000' : '#111111';
  const cardBg = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.08)';
  const textColor = '#FFFFFF';
  const mutedColor = 'rgba(255,255,255,0.45)';
  const borderColor = 'rgba(255,255,255,0.08)';
  const dividerColor = 'rgba(255,255,255,0.08)';

  return (
    <div className={`relative mx-auto ${widthClass}`}>
      {/* Phone frame */}
      <div
        className="w-full"
        style={{
          aspectRatio: '9 / 19.5',
          borderRadius: '2.5rem',
          background: frameBg,
          padding: '10px',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)',
        }}
      >
        {/* Screen */}
        <div
          className="w-full h-full overflow-hidden flex flex-col"
          style={{
            borderRadius: '2rem',
            background: screenBg,
          }}
        >
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-2" style={{ flexShrink: 0 }}>
            <span style={{ fontSize: '10px', color: textColor, fontWeight: 600 }}>9:41</span>
            {/* Dynamic Island */}
            <div style={{ width: 80, height: 18, borderRadius: 12, background: '#000' }} />
            <div className="flex items-center gap-1">
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                <rect x="0" y="3" width="2" height="6" rx="0.5" fill={textColor} opacity="0.4" />
                <rect x="3" y="2" width="2" height="7" rx="0.5" fill={textColor} opacity="0.6" />
                <rect x="6" y="1" width="2" height="8" rx="0.5" fill={textColor} opacity="0.8" />
                <rect x="9" y="0" width="2" height="9" rx="0.5" fill={textColor} />
              </svg>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M5 1.5C3.2 1.5 1.6 2.3 0.5 3.6L1.6 4.7C2.4 3.7 3.6 3 5 3C6.4 3 7.6 3.7 8.4 4.7L9.5 3.6C8.4 2.3 6.8 1.5 5 1.5Z" fill={textColor} opacity="0.6"/>
                <path d="M5 4.5C4 4.5 3.2 5 2.6 5.7L3.7 6.8C4.1 6.3 4.5 6 5 6C5.5 6 5.9 6.3 6.3 6.8L7.4 5.7C6.8 5 6 4.5 5 4.5Z" fill={textColor} opacity="0.8"/>
                <circle cx="5" cy="8" r="1" fill={textColor} />
              </svg>
              <span style={{ fontSize: '10px', color: textColor, fontWeight: 600 }}>100</span>
            </div>
          </div>

          {/* App content */}
          <div className="flex-1 px-4 py-2 flex flex-col gap-3 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <div style={{ fontSize: '10px', color: mutedColor, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>TODAY</div>
                <div style={{ fontSize: '17px', color: textColor, fontWeight: 700, lineHeight: 1.2 }}>Push Day A</div>
              </div>
              <div
                className="flex items-center justify-center"
                style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #FF6B35, #E8192C)' }}
              >
                <LogoIcon className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            {/* Exercise card */}
            <div
              style={{
                borderRadius: 12,
                background: cardBg,
                border: `1px solid ${borderColor}`,
                padding: '12px',
              }}
            >
              <div style={{ fontSize: '10px', color: mutedColor, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>EXERCISES</div>
              <div className="flex flex-col" style={{ gap: 8 }}>
                {[
                  { name: 'Bench Press', sets: '4 × 8', weight: '185 lb', done: true },
                  { name: 'Incline DB Press', sets: '3 × 10', weight: '65 lb', done: true },
                  { name: 'Cable Fly', sets: '3 × 12', weight: '40 lb', done: false },
                ].map((ex, i) => (
                  <div key={i}>
                    {i > 0 && <div style={{ height: 1, background: dividerColor, marginBottom: 8 }} />}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div style={{
                          width: 16,
                          height: 16,
                          borderRadius: '50%',
                          background: ex.done ? 'linear-gradient(135deg, #FF6B35, #E8192C)' : 'transparent',
                          border: ex.done ? 'none' : `1.5px solid ${mutedColor}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          {ex.done && (
                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                              <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                        <span style={{ fontSize: '12px', color: ex.done ? mutedColor : textColor, fontWeight: 500 }}>{ex.name}</span>
                      </div>
                      <div className="text-right">
                        <div style={{ fontSize: '11px', color: textColor, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{ex.sets}</div>
                        <div style={{ fontSize: '10px', color: mutedColor, fontVariantNumeric: 'tabular-nums' }}>{ex.weight}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div
              style={{
                borderRadius: 12,
                background: cardBg,
                border: `1px solid ${borderColor}`,
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {[
                { label: 'Sets', value: '10' },
                { label: 'Volume', value: '4,250' },
                { label: 'PR', value: '+5 lb', highlight: true },
              ].map((stat, i) => (
                <div key={i} className="flex-1 text-center" style={{ borderRight: i < 2 ? `1px solid ${dividerColor}` : 'none' }}>
                  <div style={{ fontSize: '9px', color: mutedColor, fontWeight: 500 }}>{stat.label}</div>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    fontVariantNumeric: 'tabular-nums',
                    color: stat.highlight ? '#30D158' : textColor,
                  }}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              style={{
                borderRadius: 10,
                background: 'linear-gradient(135deg, #FF6B35, #E8192C)',
                padding: '10px',
                textAlign: 'center',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              Start Workout
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-2 pt-1" style={{ flexShrink: 0 }}>
            <div style={{ width: 80, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.25)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
