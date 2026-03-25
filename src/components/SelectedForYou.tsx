import SectionHeader from './SectionHeader'

const games = [
  {
    name: 'Gates of Olympus',
    provider: 'Pragmatic Play',
    players: '2.4K',
    bg: 'linear-gradient(135deg, #1e3a5f 0%, #0f2847 50%, #0a1929 100%)',
    accent: '#fbbf24',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#fbbf24" fillOpacity="0.15" />
        <path d="M12 3l1.5 4.5H18l-3.5 2.5 1.5 4.5L12 12l-4 2.5 1.5-4.5L6 7.5h4.5L12 3z" fill="#fbbf24" />
        <circle cx="12" cy="17" r="3" fill="#fbbf24" fillOpacity="0.3" />
        <path d="M10 16l2 2 2-2" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Book of Dead',
    provider: 'Play\'n GO',
    players: '1.8K',
    bg: 'linear-gradient(135deg, #78350f 0%, #451a03 50%, #1c0a00 100%)',
    accent: '#f59e0b',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="3" width="14" height="18" rx="2" fill="#f59e0b" fillOpacity="0.15" />
        <rect x="7" y="5" width="10" height="14" rx="1" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="0.5" />
        <path d="M12 8l1.5 3H16l-2.5 2 1 3L12 14l-2.5 2 1-3L8 11h2.5L12 8z" fill="#f59e0b" />
        <line x1="9" y1="18" x2="15" y2="18" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Big Bass Bonanza',
    provider: 'Pragmatic Play',
    players: '3.1K',
    bg: 'linear-gradient(135deg, #0c4a6e 0%, #082f49 50%, #041e32 100%)',
    accent: '#38bdf8',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="13" rx="8" ry="5" fill="#38bdf8" fillOpacity="0.1" />
        <path d="M5 12c0 0 2-4 7-4s7 4 7 4-2 4-7 4-7-4-7-4z" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1" />
        <circle cx="14" cy="11" r="1" fill="#38bdf8" />
        <path d="M19 12l3-2v4l-3-2z" fill="#38bdf8" fillOpacity="0.6" />
        <path d="M7 15c-1 1-2 3-2 3" stroke="#38bdf8" strokeWidth="1" strokeLinecap="round" />
        <path d="M9 16c-0.5 1-1 2.5-1 2.5" stroke="#38bdf8" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function SelectedForYou() {
  return (
    <div>
      <SectionHeader title="Sizin İçin Seçtiklerimiz" badge="Casino" />
      <div className="space-y-[10px]">
        {games.map((game) => (
          <div
            key={game.name}
            className="w-full rounded-2xl cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform relative overflow-hidden"
            style={{ background: game.bg }}
          >
            {/* Decorative */}
            <div className="absolute -top-8 -right-8 w-[100px] h-[100px] rounded-full bg-white/5" />
            <div className="absolute bottom-0 left-[30%] w-[80px] h-[80px] rounded-full bg-white/3 translate-y-1/2" />

            <div className="relative z-10 flex items-center gap-[14px] px-[18px] py-[16px]">
              {/* Game icon */}
              <div className="w-[60px] h-[60px] rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                {game.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-bold text-white leading-tight">{game.name}</div>
                <div className="text-[11px] text-white/50 font-medium mt-[3px]">{game.provider}</div>
                <div className="flex items-center gap-[6px] mt-[6px]">
                  <div className="flex items-center gap-[3px]">
                    <span className="w-[5px] h-[5px] rounded-full bg-green-400 animate-pulse-dot" />
                    <span className="text-[10px] text-green-400 font-semibold">{game.players} oynuyor</span>
                  </div>
                  <div className="flex items-center gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="9" height="9" viewBox="0 0 24 24" fill={i < 4 ? game.accent : 'rgba(255,255,255,0.15)'}>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Play button */}
              <div className="flex-shrink-0 w-[38px] h-[38px] rounded-full flex items-center justify-center" style={{ background: game.accent }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
