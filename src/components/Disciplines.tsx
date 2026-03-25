export default function Disciplines() {
  return (
    <div>
      <div className="relative w-full rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-transform"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0E8FCF 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-10 -left-10 w-[120px] h-[120px] rounded-full bg-[#0E8FCF]/10" />
        <div className="absolute top-[20%] right-[5%] w-[80px] h-[80px] rounded-full bg-[#fbbf24]/10" />
        <div className="absolute -bottom-6 left-[40%] w-[90px] h-[90px] rounded-full bg-[#ef4444]/10" />
        <div className="absolute top-[60%] -right-4 w-[60px] h-[60px] rounded-full bg-white/5" />

        <div className="relative z-10 flex items-center gap-[16px] px-[20px] py-[20px]">
          {/* Wheel visual */}
          <div className="flex-shrink-0 w-[80px] h-[80px] relative">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#fbbf24]/40 animate-[spin_12s_linear_infinite]" />
            {/* Wheel body */}
            <div className="absolute inset-[6px] rounded-full overflow-hidden"
              style={{ background: 'conic-gradient(#ef4444 0deg, #ef4444 45deg, #fbbf24 45deg, #fbbf24 90deg, #22c55e 90deg, #22c55e 135deg, #3b82f6 135deg, #3b82f6 180deg, #a855f7 180deg, #a855f7 225deg, #ec4899 225deg, #ec4899 270deg, #f97316 270deg, #f97316 315deg, #0E8FCF 315deg, #0E8FCF 360deg)' }}
            >
              {/* Center circle */}
              <div className="absolute inset-[14px] rounded-full bg-[#0f172a] flex items-center justify-center border-2 border-[#fbbf24]">
                <span className="text-[10px] font-black text-[#fbbf24] leading-none">SPIN</span>
              </div>
            </div>
            {/* Pointer */}
            <div className="absolute -top-[2px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#fbbf24] z-10 drop-shadow-lg" />
          </div>

          {/* Text content */}
          <div className="flex-1">
            <div className="flex items-center gap-[6px] mb-[4px]">
              <span className="text-[9px] font-bold text-[#fbbf24] bg-[#fbbf24]/15 rounded-full px-[8px] py-[3px] uppercase tracking-wider">Bonus</span>
            </div>
            <h3 className="text-[17px] font-black text-white leading-tight">
              Şans Çarkı
            </h3>
            <p className="text-[12px] font-bold text-[#0E8FCF] mt-[2px]">
              Çevir & Kazan
            </p>
            <div className="flex items-center gap-[8px] mt-[8px]">
              <div className="flex items-center gap-[4px]">
                <span className="text-[10px] text-white/60">🔥</span>
                <span className="text-[9px] text-white/60 font-medium">Gerçek para</span>
              </div>
              <div className="flex items-center gap-[4px]">
                <span className="text-[10px] text-white/60">💰</span>
                <span className="text-[9px] text-white/60 font-medium">Çevrimsiz</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <div className="w-[42px] h-[42px] rounded-full bg-[#fbbf24] flex items-center justify-center shadow-[0_2px_12px_rgba(251,191,36,0.4)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#0f172a">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 px-[20px] pb-[14px]">
          <div className="flex items-center gap-[6px] bg-white/5 rounded-xl px-[12px] py-[8px] border border-white/10">
            <span className="text-[10px] text-[#fbbf24] font-bold">🎡</span>
            <span className="text-[10px] text-white/70 font-medium">Her gün ücretsiz çevirme hakkı kazanın!</span>
          </div>
        </div>
      </div>
    </div>
  )
}
