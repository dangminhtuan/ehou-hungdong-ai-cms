import React, { useState } from 'react'

const FORMULA_PARTS = [
  {
    symbol: 'G',
    sub: 'Growth',
    title: 'Tăng Trưởng',
    badge: 'Đầu ra (Output)',
    color: '#22c55e',
    glow: 'rgba(34, 197, 94, 0.3)',
    borderColor: 'rgba(34, 197, 94, 0.4)',
    bgColor: 'rgba(34, 197, 94, 0.06)',
    desc: 'Doanh số, khách hàng tiềm năng (Leads) và lưu lượng truy cập tự nhiên (Organic Traffic) tăng vọt mà không phụ thuộc vào tiền đốt quảng cáo.',
    metrics: ['+300% Traffic/năm', 'Top 1-3 Google', '0đ phụ thuộc Ads'],
    icon: '📈',
  },
  {
    symbol: 'A²',
    sub: 'AI × Auto',
    title: 'AI tạo Nội Dung Tự Động',
    badge: 'Hàm số nhân (Multiplier)',
    color: '#ff6b00',
    glow: 'rgba(255, 107, 0, 0.4)',
    borderColor: 'rgba(255, 107, 0, 0.5)',
    bgColor: 'rgba(255, 107, 0, 0.08)',
    desc: 'Nhân đôi sức mạnh: Bóc tách tài liệu doanh nghiệp bằng AI kết hợp Tự động hóa xuất bản 30 bài viết SEO chuẩn chỉ mỗi tháng.',
    metrics: ['30 bài viết/tháng', 'Tự động 100%', 'Tiết kiệm 50% chi phí'],
    icon: '🤖',
  },
  {
    symbol: 'S',
    sub: 'Speed & Solution',
    title: 'Giải pháp tăng tốc',
    badge: 'Gia tốc nền (Foundation)',
    color: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.3)',
    borderColor: 'rgba(59, 130, 246, 0.4)',
    bgColor: 'rgba(59, 130, 246, 0.06)',
    desc: 'Nền tảng Next.js Headless siêu tốc đạt điểm số tuyệt đối Lighthouse 100/100, giữ chân người dùng và được Google ưu tiên xếp hạng hàng đầu.',
    metrics: ['100/100 Lighthouse', '<0.3s Load Time', 'Next.js 14 Headless'],
    icon: '⚡',
  },
]

export default function GrowthFormulaSection() {
  const [activePart, setActivePart] = useState(1) // Mặc định mở card A² (trọng tâm)

  return (
    <section id="formula" className="py-20 px-6 relative overflow-hidden scroll-mt-20">
      {/* Glow Orbs Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #ff6b00, #3b82f6, transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent/10 border border-accent/30 text-accent-light mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            Định Luật Tăng Trưởng Độc Quyền
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="gradient-text-white">Mô Phỏng Phương Trình</span>{' '}
            <span className="gradient-text">E = mc²</span>
            <br />
            <span className="gradient-text-white">Công Thức: </span>
            <span className="font-mono text-white tracking-widest text-4xl md:text-6xl inline-block px-3 py-1 rounded-2xl bg-white/[0.04] border border-white/10 shadow-[0_0_30px_rgba(255,107,0,0.2)]">
              <span className="text-emerald-400">G</span>
              <span className="text-text-muted mx-2">=</span>
              <span className="text-accent">A²</span>
              <span className="text-blue-400">S</span>
            </span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            Giống như thuyết tương đối thay đổi vật lý học, công thức{' '}
            <strong className="text-white font-semibold">G = A²S</strong> là kim chỉ nam giúp doanh nghiệp SMB nhân bản hiệu suất với chi phí tối thiểu.
          </p>
        </div>

        {/* Formula Interactive Banner */}
        <div className="glass-card gradient-border rounded-3xl p-6 md:p-10 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-center">
            {/* G */}
            <button
              onClick={() => setActivePart(0)}
              className={`flex-1 min-w-[140px] md:min-w-[180px] p-5 rounded-2xl transition-all duration-300 cursor-pointer text-center relative group ${
                activePart === 0 ? 'scale-105 border-emerald-500/50 bg-emerald-500/10' : 'bg-white/[0.02] border border-white/5 hover:border-emerald-500/30'
              }`}
              style={activePart === 0 ? { boxShadow: '0 0 25px rgba(34,197,94,0.25)' } : {}}
            >
              <div className="font-mono text-4xl md:text-5xl font-black text-emerald-400 mb-1">G</div>
              <div className="text-xs font-semibold text-emerald-300/90 tracking-wide uppercase">Growth</div>
              <div className="text-[11px] text-text-muted mt-1">Tăng Trưởng</div>
              {activePart === 0 && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-emerald-400" />
              )}
            </button>

            {/* Operator = */}
            <span className="font-mono text-3xl md:text-4xl text-text-muted font-bold">=</span>

            {/* A² */}
            <button
              onClick={() => setActivePart(1)}
              className={`flex-1 min-w-[140px] md:min-w-[180px] p-5 rounded-2xl transition-all duration-300 cursor-pointer text-center relative group ${
                activePart === 1 ? 'scale-105 border-accent/50 bg-accent/15' : 'bg-white/[0.02] border border-white/5 hover:border-accent/30'
              }`}
              style={activePart === 1 ? { boxShadow: '0 0 30px rgba(255,107,0,0.3)' } : {}}
            >
              <div className="font-mono text-4xl md:text-5xl font-black text-accent mb-1">
                A<sup className="text-2xl md:text-3xl text-accent-light">2</sup>
              </div>
              <div className="text-xs font-semibold text-accent-light tracking-wide uppercase">AI × Auto</div>
              <div className="text-[11px] text-text-muted mt-1">AI tạo Nội Dung Tự Động</div>
              {activePart === 1 && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-accent" />
              )}
            </button>

            {/* Operator × */}
            <span className="font-mono text-2xl md:text-3xl text-text-muted font-bold">×</span>

            {/* S */}
            <button
              onClick={() => setActivePart(2)}
              className={`flex-1 min-w-[140px] md:min-w-[180px] p-5 rounded-2xl transition-all duration-300 cursor-pointer text-center relative group ${
                activePart === 2 ? 'scale-105 border-blue-500/50 bg-blue-500/10' : 'bg-white/[0.02] border border-white/5 hover:border-blue-500/30'
              }`}
              style={activePart === 2 ? { boxShadow: '0 0 25px rgba(59,130,246,0.25)' } : {}}
            >
              <div className="font-mono text-4xl md:text-5xl font-black text-blue-400 mb-1">S</div>
              <div className="text-xs font-semibold text-blue-300/90 tracking-wide uppercase">Speed & Solution</div>
              <div className="text-[11px] text-text-muted mt-1">Giải pháp tăng tốc</div>
              {activePart === 2 && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-blue-400" />
              )}
            </button>
          </div>

          {/* Active Detail Breakdown Card */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{FORMULA_PARTS[activePart].icon}</span>
                  <div>
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider"
                      style={{
                        background: FORMULA_PARTS[activePart].bgColor,
                        color: FORMULA_PARTS[activePart].color,
                        border: `1px solid ${FORMULA_PARTS[activePart].borderColor}`,
                      }}
                    >
                      {FORMULA_PARTS[activePart].badge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
                      {FORMULA_PARTS[activePart].symbol} — {FORMULA_PARTS[activePart].title}
                    </h3>
                  </div>
                </div>
                <p className="text-text-muted text-sm md:text-base leading-relaxed">
                  {FORMULA_PARTS[activePart].desc}
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col gap-2.5">
                {FORMULA_PARTS[activePart].metrics.map((m, i) => (
                  <div
                    key={i}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2.5"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <span style={{ color: FORMULA_PARTS[activePart].color }}>✓</span>
                    <span className="text-white">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Summary Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {FORMULA_PARTS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePart(idx)}
              className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover-lift ${
                activePart === idx ? 'border-accent/40 bg-white/[0.06]' : 'border-white/5 hover:border-white/15'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-black text-xl"
                    style={{
                      background: item.bgColor,
                      color: item.color,
                      border: `1px solid ${item.borderColor}`,
                    }}
                  >
                    {item.symbol}
                  </div>
                  <div>
                    <div className="text-xs text-text-muted uppercase font-bold">{item.sub}</div>
                    <div className="text-white font-bold text-sm">{item.title}</div>
                  </div>
                </div>
                <span className="text-xl">{item.icon}</span>
              </div>
              <p className="text-text-muted text-xs leading-relaxed line-clamp-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* GAS Concept: AI Fuel Station Visual Showcase */}
        <div className="glass-card gradient-border rounded-3xl p-6 md:p-10 relative overflow-hidden">
          {/* Ambient glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.08] blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, #ff6b00, #3b82f6, transparent)' }}
          />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: 3D Image of the GAS Fueling Station */}
            <div className="lg:col-span-6 relative group">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,107,0,0.2)] group-hover:border-accent/50 transition-all duration-500">
                <img
                  src="/gas_station.jpg"
                  alt="GAS A2S AI Fueling Station"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badges on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-black/70 backdrop-blur-md border border-accent/40 text-accent flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    GAS A2S FUELING SYSTEM
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300">
                    ⚡ Auto-Pilot 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Storytelling & Metaphor */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 border border-orange-500/20 text-accent">
                <span>⛽</span> Trạm Nạp Nhiên Liệu Số
              </div>

              <h3 className="text-2xl md:text-3xl font-black leading-tight text-white">
                Website của bạn có đang <br />
                <span className="text-red-400">"Hết Xăng"</span> giữa chừng?
              </h3>

              <p className="text-text-muted text-sm md:text-base leading-relaxed">
                Đa số doanh nghiệp SMB lập website xong thì bỏ hoang vì thiếu nhân sự viết bài và tối ưu. Dịch vụ <strong className="text-white">GAS (G = A²S)</strong> hoạt động như một <span className="text-accent font-semibold">Cây xăng AI thế hệ mới</span>:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xl flex-shrink-0">🛢️</div>
                  <div className="text-xs md:text-sm">
                    <strong className="text-white">Nhiên liệu sạch 100%:</strong> Bóc tách chính xác từ tài liệu, hồ sơ của doanh nghiệp để viết 30 bài SEO/tháng mà không cần nhân viên in-house.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-xl flex-shrink-0">🚀</div>
                  <div className="text-xs md:text-sm">
                    <strong className="text-white">Động cơ phản lực Next.js:</strong> Tốc độ 100/100 Lighthouse giúp chuyển hóa 100% nhiên liệu nội dung thành đơn hàng và cuộc gọi tư vấn.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn-primary text-sm px-6 py-3 rounded-xl inline-flex items-center gap-2">
                  <span>Cắm sạc GAS cho doanh nghiệp</span>
                  <span>→</span>
                </a>
                <a href="#roi" className="btn-ghost text-sm px-5 py-3 rounded-xl inline-flex items-center gap-2">
                  <span>Tính chi phí tiết kiệm</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
