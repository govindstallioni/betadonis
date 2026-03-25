import SectionHeader from './SectionHeader'

const providers = [
  {
    name: 'Pragmatic Play',
    games: 285,
    bg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#e94560',
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="3" fill="#e94560" />
        <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Evolution',
    games: 192,
    bg: 'linear-gradient(135deg, #0c0c1d 0%, #1b1b3a 50%, #2d2d5e 100%)',
    accent: '#f5a623',
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#f5a623" />
        <path d="M12 6v6l4 2" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" fill="white" />
      </svg>
    ),
  },
  {
    name: 'NetEnt',
    games: 214,
    bg: 'linear-gradient(135deg, #004d40 0%, #00695c 50%, #00897b 100%)',
    accent: '#76ff03',
    logo: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#76ff03" />
        <path d="M12 6l6 3v6l-6 3-6-3V9l6-3z" fill="white" fillOpacity="0.3" />
        <path d="M12 9v6" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 10.5l3 1.5 3-1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function TopProviders() {
  return (
    <div>
      <SectionHeader title="Bu Ayın En İyi Sağlayıcısı" badge="Casino" />
      <div className="flex gap-[10px] overflow-x-auto scrollbar-hide -mx-4 px-4">
        {providers.map((p) => (
          <div
            key={p.name}
            className="flex-shrink-0 w-[75%] rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform"
            style={{ background: p.bg }}
          >
            {/* Top section with logo and decorations */}
            <div className="relative px-[16px] pt-[20px] pb-[16px]">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-[80px] h-[80px] rounded-full opacity-10" style={{ background: p.accent, transform: 'translate(30%, -30%)' }} />
              <div className="absolute bottom-0 left-[40%] w-[60px] h-[60px] rounded-full opacity-5" style={{ background: p.accent, transform: 'translateY(50%)' }} />

              <div className="flex items-center gap-[12px] relative z-10">
                <div className="w-[52px] h-[52px] rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  {p.logo}
                </div>
                <div>
                  <div className="text-[16px] font-bold text-white leading-tight">{p.name}</div>
                  <div className="text-[11px] font-medium mt-[4px]" style={{ color: p.accent }}>{p.games} oyun</div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="px-[16px] py-[10px] bg-white/5 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-[6px]">
                <div className="flex -space-x-[6px]">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-[20px] h-[20px] rounded-full bg-white/15 border border-white/20" />
                  ))}
                </div>
                <span className="text-[10px] text-white/50 font-medium">Popüler oyunlar</span>
              </div>
              <div className="flex items-center gap-[4px] bg-white/10 rounded-full px-[10px] py-[4px]">
                <span className="text-[10px] text-white font-semibold">Oyna</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
