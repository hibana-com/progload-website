export default function WatchMockup() {
  return (
    <div className="relative mx-auto" style={{ width: 200 }}>
      {/* Watch frame */}
      <div
        style={{
          borderRadius: '28% / 24%',
          background: 'linear-gradient(180deg, #3A3A3C 0%, #2C2C2E 100%)',
          padding: 6,
          boxShadow: '0 30px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.12)',
          aspectRatio: '0.83',
        }}
      >
        {/* Side button */}
        <div
          style={{
            position: 'absolute',
            right: -6,
            top: '30%',
            width: 5,
            height: 28,
            borderRadius: 3,
            background: 'linear-gradient(180deg, #4A4A4C 0%, #2C2C2E 100%)',
          }}
        />
        {/* Digital Crown */}
        <div
          style={{
            position: 'absolute',
            right: -8,
            top: '18%',
            width: 8,
            height: 20,
            borderRadius: 4,
            background: 'linear-gradient(180deg, #5A5A5C 0%, #3A3A3C 100%)',
          }}
        />

        {/* Screen */}
        <div
          className="w-full h-full overflow-hidden flex flex-col"
          style={{
            borderRadius: '24% / 20%',
            background: '#000000',
          }}
        >
          {/* Time */}
          <div className="text-center pt-4 pb-2">
            <div style={{ fontSize: '28px', color: '#FFFFFF', fontWeight: 700, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
              9:41
            </div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginTop: 2 }}>
              MON, MAR 9
            </div>
          </div>

          {/* Workout card */}
          <div
            style={{
              margin: '0 8px',
              borderRadius: 10,
              background: 'rgba(255,255,255,0.08)',
              padding: '8px 10px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
              EXERCISE 2/3
            </div>
            <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 700, marginBottom: 6 }}>
              Bench Press
            </div>

            {/* Set indicators */}
            <div className="flex gap-1.5 mb-4">
              {[true, true, false, false].map((done, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: 20,
                    borderRadius: 5,
                    background: done ? 'linear-gradient(135deg, #FF6B35, #E8192C)' : 'rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '9px', color: '#fff', fontWeight: 700 }}>{i + 1}</span>
                </div>
              ))}
            </div>

            {/* Weight / reps */}
            <div className="flex gap-2">
              <div
                style={{
                  flex: 1,
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.06)',
                  padding: '6px 0',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>185</div>
                <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>LB</div>
              </div>
              <div
                style={{
                  flex: 1,
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.06)',
                  padding: '6px 0',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>8</div>
                <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>REPS</div>
              </div>
            </div>
          </div>

          {/* Done button */}
          <div
            style={{
              margin: '6px 8px 8px',
              borderRadius: 8,
              background: 'linear-gradient(135deg, #FF6B35, #E8192C)',
              padding: '7px',
              textAlign: 'center',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 600,
            }}
          >
            Log Set 3
          </div>
        </div>
      </div>
    </div>
  );
}
