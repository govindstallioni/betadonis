import SectionHeader from './SectionHeader'

const spotlightGames = [
  {
    name: 'Mega Roulette',
    provider: 'Pragmatic Play',
    tag: 'CANLI',
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #c0392b 100%)',
    accent: '#e74c3c',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.1)" />
        <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1" fill="rgba(255,255,255,0.05)" />
        <circle cx="12" cy="12" r="2" fill="white" />
        <line x1="12" y1="2" x2="12" y2="5" stroke="white" strokeWidth="1.5" />
        <line x1="12" y1="19" x2="12" y2="22" stroke="white" strokeWidth="1.5" />
        <line x1="2" y1="12" x2="5" y2="12" stroke="white" strokeWidth="1.5" />
        <line x1="19" y1="12" x2="22" y2="12" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'Sweet Bonanza',
    provider: 'Pragmatic Play',
    tag: 'HİT',
    bg: 'linear-gradient(135deg, #ec4899 0%, #9333ea 100%)',
    accent: '#f472b6',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="10" r="3.5" fill="#fbbf24" fillOpacity="0.8" />
        <circle cx="15" cy="8" r="3" fill="#ef4444" fillOpacity="0.8" />
        <circle cx="12" cy="14" r="4" fill="#22c55e" fillOpacity="0.8" />
        <circle cx="17" cy="14" r="2.5" fill="#a855f7" fillOpacity="0.8" />
        <circle cx="6" cy="15" r="2" fill="#3b82f6" fillOpacity="0.8" />
        <path d="M10 6l1-3.5M14 5l1-3" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Aviator',
    provider: 'Spribe',
    tag: 'TREND',
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    accent: '#ef4444',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <path d="M3 18L12 4l9 14" stroke="#ef4444" strokeWidth="2" fill="none" />
        <path d="M5 16L12 6l7 10" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" fill="none" />
        <circle cx="12" cy="6" r="2" fill="#ef4444" />
        <path d="M4 20h16" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: 'Lightning Dice',
    provider: 'Evolution',
    tag: 'CANLI',
    bg: 'linear-gradient(135deg, #fbbf24 0%, #b45309 60%, #78350f 100%)',
    accent: '#fbbf24',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="10" height="10" rx="2" fill="white" fillOpacity="0.2" transform="rotate(-10 9 11)" />
        <rect x="10" y="8" width="10" height="10" rx="2" fill="white" fillOpacity="0.3" transform="rotate(5 15 13)" />
        <circle cx="7" cy="9" r="1" fill="white" />
        <circle cx="11" cy="13" r="1" fill="white" />
        <circle cx="9" cy="11" r="1" fill="white" />
        <path d="M13 3l-2 5h4l-3 6" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
]

export default function InTheSpotlight() {
  return (
    <div>
      <SectionHeader title="Günün Öne Çıkanları" badge="Casino" gamesCount={spotlightGames.length} />
      <div className="flex gap-[10px] overflow-x-auto scrollbar-hide -mx-4 px-4">
        {spotlightGames.map((game) => (
          <div
            key={game.name}
            className="flex-shrink-0 w-[70%] rounded-2xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform relative overflow-hidden"
            style={{ background: game.bg }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-[80px] h-[80px] rounded-full bg-white/5" />
            <div className="absolute bottom-0 -left-4 w-[60px] h-[60px] rounded-full bg-white/5" />
            <div className="absolute top-[50%] right-[10%] w-[40px] h-[40px] rounded-full bg-white/3" />

            {/* Tag */}
            <div className="absolute top-[12px] right-[12px] z-10">
              <span
                className="text-[8px] font-bold text-white px-[8px] py-[3px] rounded-full uppercase tracking-wider"
                style={{ background: game.accent }}
              >
                {game.tag}
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10 px-[16px] pt-[16px] pb-[14px]">
              <div className="flex items-center gap-[14px]">
                <div className="w-[56px] h-[56px] rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/10">
                  {game.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[16px] font-bold text-white leading-tight">{game.name}</div>
                  <div className="text-[11px] text-white/50 font-medium mt-[3px]">{game.provider}</div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="flex items-center justify-between mt-[14px] pt-[10px] border-t border-white/10">
                <div className="flex items-center gap-[4px]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={i < 4 ? '#fbbf24' : 'rgba(255,255,255,0.2)'}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <span className="text-[9px] text-white/40 font-medium ml-[2px]">4.0</span>
                </div>
                <div className="flex items-center gap-[4px] bg-white/10 rounded-full px-[10px] py-[5px]">
                  <span className="text-[10px] text-white font-semibold">Hemen Oyna</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
