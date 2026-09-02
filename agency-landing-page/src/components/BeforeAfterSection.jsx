import React, { useState } from 'react'

const BEFORE = [
  { icon: '🐌', label: 'Tốc độ tải trang',     value: '4–6 giây',                  bad: true },
  { icon: '💸', label: 'Chi phí content/tháng', value: '15–20 tr/tháng (nhân viên)', bad: true },
  { icon: '📉', label: 'Bài SEO/tháng',          value: '2–4 bài (manual)',           bad: true },
  { icon: '🔴', label: 'Lighthouse Score',       value: '35–55 điểm',                bad: true },
  { icon: '😫', label: 'Cập nhật nội dung',      value: 'Tốn 2–3 ngày/bài',          bad: true },
  { icon: '📵', label: 'Mobile experience',      value: 'Kém — bounce rate cao',      bad: true },
]

const AFTER = [
  { icon: '⚡', label: 'Tốc độ tải trang',     value: '< 0.3 giây',         good: true },
  { icon: '🤖', label: 'Chi phí content/tháng', value: '7 tr/tháng (AI Engine)', good: true },
  { icon: '📈', label: 'Bài SEO/tháng',          value: '30 bài tự động',     good: true },
  { icon: '🟢', label: 'Lighthouse Score',       value: '100/100 điểm',       good: true },
  { icon: '✨', label: 'Cập nhật nội dung',      value: 'Tự động 24/7',       good: true },
  { icon: '📱', label: 'Mobile experience',      value: 'PWA-ready, UX chuẩn', good: true },
]

function CompareRow({ icon, label, value, index, side }) {
  const isLeft = side === 'before'
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/5 group
        ${isLeft ? 'flex-row' : 'flex-row-reverse md:flex-row'}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <span className="text-xl flex-shrink-0 w-8 text-center">{icon}</span>
      <div className={`flex-1 min-w-0 ${isLeft ? 'text-left' : 'text-right md:text-left'}`}>
        <div className="text-xs text-text-muted mb-0.5">{label}</div>
        <div className={`text-sm font-semibold ${isLeft ? 'text-red-400' : 'text-emerald-400'}`}>
          {value}
        </div>
      </div>
      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isLeft ? 'bg-red-500/60' : 'bg-emerald-500/60'}`} />
    </div>
  )
}

export default function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState('split') // 'split' | 'before' | 'after'

  return (
    <section id="before-after" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full opacity-[0.04] blur-3xl"
             style={{ background: '#ef4444' }} />
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full opacity-[0.06] blur-3xl"
             style={{ background: '#22c55e' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag mb-4">So sánh thực tế</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            <span className="gradient-text-white">Website của bạn đang</span>{' '}
            <span style={{ color: '#ef4444' }}>chảy máu tiền</span>
            <br />
            <span className="gradient-text-white">mỗi ngày mà bạn không biết</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            Dưới đây là bức tranh thực tế giữa website truyền thống và nền tảng AI-powered của chúng tôi.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-6 relative">
          {/* Divider */}
          <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 flex-col items-center justify-center gap-3 z-10">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 -translate-y-1/2 glass-card rounded-full px-4 py-2 border border-white/10 text-xs font-bold text-text-muted tracking-wider">
              VS
            </div>
          </div>

          {/* BEFORE card */}
          <div className="glass-card rounded-3xl p-6 border border-red-500/15 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/20 flex items-center justify-center text-xl">
                ⚠️
              </div>
              <div>
                <div className="font-bold text-white">Website Hiện Tại</div>
                <div className="text-xs text-red-400">Đang mất tiền mỗi ngày</div>
              </div>
              <div className="ml-auto">
                <span className="text-xs px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-medium">
                  Tốn kém
                </span>
              </div>
            </div>
            <div className="space-y-1">
              {BEFORE.map((item, i) => (
                <CompareRow key={i} {...item} index={i} side="before" />
              ))}
            </div>
            <div className="mt-5 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
              <div className="text-xs text-red-400/80 text-center">
                💰 Tổng chi phí ước tính: <span className="font-bold text-red-400">~20–25 triệu/tháng</span>
              </div>
            </div>
          </div>

          {/* AFTER card */}
          <div className="glass-card rounded-3xl p-6 border border-emerald-500/15 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-xl">
                🚀
              </div>
              <div>
                <div className="font-bold text-white">AI Auto Solution Platform</div>
                <div className="text-xs text-emerald-400">Tăng trưởng tự động</div>
              </div>
              <div className="ml-auto">
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                  Tiết kiệm
                </span>
              </div>
            </div>
            <div className="space-y-1">
              {AFTER.map((item, i) => (
                <CompareRow key={i} {...item} index={i} side="after" />
              ))}
            </div>
            <div className="mt-5 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
              <div className="text-xs text-emerald-400/80 text-center">
                💰 Tổng chi phí: <span className="font-bold text-emerald-400">7 triệu/tháng</span>{' '}
                <span className="text-text-muted">— tiết kiệm ~13–18 triệu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl p-6 border border-accent/20">
            <div className="text-left">
              <div className="text-white font-bold text-lg">Bạn đang lãng phí bao nhiêu?</div>
              <div className="text-text-muted text-sm">Dùng ROI Calculator để tính chính xác</div>
            </div>
            <a href="#roi" className="btn-primary whitespace-nowrap">
              Tính ngay →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
