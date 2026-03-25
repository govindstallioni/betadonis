import SectionHeader from './SectionHeader'

const virtualSports = [
  {
    name: 'Sanal Futbol',
    league: 'Premier Lig, Şampiyonlar Ligi',
    matches: 24,
    bg: 'linear-gradient(135deg, #064e3b 0%, #0f766e 50%, #14b8a6 100%)',
    accent: '#34d399',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1" />
        <path d="M12 2v20" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" />
        <path d="M2 12h20" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" />
        <path d="M12 7l2.5 1.5v3L12 13l-2.5-1.5v-3L12 7z" fill="white" fillOpacity="0.6" stroke="white" strokeWidth="0.8" />
        <circle cx="12" cy="12" r="3" fill="white" fillOpacity="0.15" />
      </svg>
    ),
  },
  {
    name: 'Sanal Basketbol',
    league: 'NBA, Euroleague',
    matches: 18,
    bg: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #f97316 100%)',
    accent: '#fb923c',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1" />
        <path d="M12 2c0 5.5-4 10-10 10" stroke="white" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
        <path d="M12 22c0-5.5 4-10 10-10" stroke="white" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
        <path d="M2 12h20" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" />
        <path d="M12 2v20" stroke="white" strokeWidth="0.8" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    name: 'Sanal Tenis',
    league: 'Grand Slam, ATP',
    matches: 12,
    bg: 'linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #3b82f6 100%)',
    accent: '#60a5fa',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" fill="#c4f026" fillOpacity="0.3" stroke="#c4f026" strokeWidth="1" />
        <path d="M8.5 8c2 2 3 4 3 4s1-2 3-4" stroke="white" strokeWidth="0.8" strokeOpacity="0.6" fill="none" />
        <path d="M8.5 16c2-2 3-4 3-4s1 2 3 4" stroke="white" strokeWidth="0.8" strokeOpacity="0.6" fill="none" />
        <line x1="4" y1="20" x2="10" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
        <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
      </svg>
    ),
  },
]

export default function Tournaments() {
  return (
    <div>
      <SectionHeader title="Sanal Bahisler" badge="Spor" showAll />
      <div className="flex gap-[10px] overflow-x-auto scrollbar-hide -mx-4 px-4">
        {virtualSports.map((sport) => (
          <div
            key={sport.name}
            className="flex-shrink-0 w-[75%] rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform relative"
            style={{ background: sport.bg }}
          >
            {/* Decoratives */}
            <div className="absolute -top-8 -right-8 w-[90px] h-[90px] rounded-full bg-white/5" />
            <div className="absolute bottom-0 -left-6 w-[70px] h-[70px] rounded-full bg-white/5" />

            <div className="relative z-10 px-[16px] pt-[16px] pb-[14px]">
              <div className="flex items-center gap-[14px]">
                {/* Sport icon */}
                <div className="w-[56px] h-[56px] rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                  {sport.icon}
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="text-[15px] font-bold text-white leading-tight">{sport.name}</div>
                  <div className="text-[10px] text-white/50 font-medium mt-[3px]">{sport.league}</div>
                  <div className="flex items-center gap-[8px] mt-[6px]">
                    <div className="flex items-center gap-[3px]">
                      <span className="w-[5px] h-[5px] rounded-full animate-pulse-dot" style={{ background: sport.accent }} />
                      <span className="text-[10px] font-semibold" style={{ color: sport.accent }}>{sport.matches} maç canlı</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick odds preview */}
              <div className="flex gap-[6px] mt-[12px]">
                <div className="flex-1 bg-white/10 rounded-xl py-[6px] text-center border border-white/10">
                  <div className="text-[8px] text-white/40 font-semibold leading-none mb-[3px]">EV</div>
                  <div className="text-[13px] font-bold text-white leading-none">1.85</div>
                </div>
                <div className="flex-1 bg-white/10 rounded-xl py-[6px] text-center border border-white/10">
                  <div className="text-[8px] text-white/40 font-semibold leading-none mb-[3px]">X</div>
                  <div className="text-[13px] font-bold text-white leading-none">3.40</div>
                </div>
                <div className="flex-1 bg-white/10 rounded-xl py-[6px] text-center border border-white/10">
                  <div className="text-[8px] text-white/40 font-semibold leading-none mb-[3px]">DEP</div>
                  <div className="text-[13px] font-bold text-white leading-none">4.20</div>
                </div>
                <div className="flex items-center justify-center bg-white/15 rounded-xl px-[10px] border border-white/10">
                  <span className="text-[10px] text-white font-semibold">+{sport.matches}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
