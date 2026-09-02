import React, { useEffect, useRef, useState } from 'react'

// Animated number counter
function CountUp({ end, suffix = '', duration = 2000 }) {
  const [current, setCurrent] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const step = end / (duration / 16)
    let val = 0
    const timer = setInterval(() => {
      val += step
      if (val >= end) { setCurrent(end); clearInterval(timer) }
      else setCurrent(Math.floor(val))
    }, 16)
    return () => clearInterval(timer)
  }, [started, end, duration])

  return <span ref={ref}>{current}{suffix}</span>
}

// Floating particle component
function Particle({ style }) {
  return (
    <div
      className="absolute rounded-full opacity-20 animate-float"
      style={style}
    />
  )
}

const STATS = [
  { value: 100, suffix: '/100', label: 'Lighthouse Score', color: '#22c55e' },
  { value: 30,  suffix: ' bài', label: 'SEO/tháng tự động', color: '#ff6b00' },
  { value: 50,  suffix: '%',   label: 'Tiết kiệm chi phí', color: '#3b82f6' },
  { value: 0.3, suffix: 's',  label: 'Load time trung bình', color: '#a855f7', isFloat: true },
]

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero-bg relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">

      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #ff6b00, transparent)' }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full opacity-[0.06] blur-3xl"
          style={{ background: '#3b82f6' }}
        />
        <Particle style={{ top: '20%', left: '10%', width: 6, height: 6, background: '#ff6b00', animationDelay: '0s', animationDuration: '6s' }} />
        <Particle style={{ top: '60%', left: '85%', width: 4, height: 4, background: '#ff8c38', animationDelay: '2s', animationDuration: '8s' }} />
        <Particle style={{ top: '35%', left: '5%',  width: 3, height: 3, background: '#fff', animationDelay: '1s', animationDuration: '7s' }} />
        <Particle style={{ top: '75%', left: '15%', width: 5, height: 5, background: '#ff6b00', animationDelay: '3s', animationDuration: '9s' }} />
        <Particle style={{ top: '15%', left: '80%', width: 4, height: 4, background: '#fff', animationDelay: '0.5s', animationDuration: '5.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Badges */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0ms' }}
        >
          <span className="section-tag inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Giải pháp AI-Powered Web cho SMB Việt Nam
          </span>

          <a
            href="#formula"
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-white/[0.04] border border-white/10 hover:border-accent/40 text-white/90 hover:text-white transition-all duration-300 hover:scale-105 group shadow-sm"
          >
            <span className="text-accent text-sm">⚛️</span>
            <span>Định luật tăng trưởng:</span>
            <span className="text-emerald-400 font-black">G</span>
            <span className="text-text-muted">=</span>
            <span className="text-accent font-black">A²</span>
            <span className="text-blue-400 font-black">S</span>
            <span className="text-[10px] text-text-muted group-hover:text-accent transition-colors ml-0.5">→</span>
          </a>
        </div>

        {/* Main headline */}
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '150ms' }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="gradient-text-white">Cắt 50% chi phí</span>
            <br />
            <span className="gradient-text">Content.</span>
            <br />
            <span className="gradient-text-white">Tăng tốc Web lên</span>{' '}
            <span className="gradient-text">100/100.</span>
          </h1>
        </div>

        {/* Sub-headline */}
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Chúng tôi chuyển đổi website chậm của bạn sang nền tảng{' '}
            <span className="text-white font-medium">Headless Next.js</span> và triển khai{' '}
            <span className="text-white font-medium">AI Content Engine</span> tự động xuất bản{' '}
            <span className="text-accent font-semibold">30 bài SEO/tháng</span> —{' '}
            không cần thuê thêm nhân viên.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '450ms' }}
        >
          <a href="#contact" className="btn-primary text-base px-8 py-4 rounded-xl">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 11.5a6.1 6.1 0 01-5-2.6C4 11 6.67 10 9 10s5 1 5.01 2.9A6.1 6.1 0 019 15.5z" fill="currentColor"/>
            </svg>
            Nhận tư vấn miễn phí
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#roi" className="btn-ghost text-base px-8 py-4 rounded-xl">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="10" width="3" height="6" rx="1" fill="currentColor" opacity=".5"/>
              <rect x="7" y="6"  width="3" height="10" rx="1" fill="currentColor" opacity=".75"/>
              <rect x="12" y="2" width="3" height="14" rx="1" fill="currentColor"/>
            </svg>
            Tính ROI của tôi
          </a>
        </div>

        {/* Social proof bar */}
        <div
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '550ms' }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#ff6b00">
                <path d="M8 1l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 10.7l-3.8 2.1.7-4.3-3.1-3 4.3-.6L8 1z"/>
              </svg>
            ))}
            <span className="text-text-muted text-sm ml-1">5.0 từ 20+ dự án thực chiến</span>
          </div>
          <p className="text-text-muted text-xs">
            Đã tối ưu cho <span className="text-white">Thương mại điện tử</span> · <span className="text-white">Bất động sản</span> · <span className="text-white">Giáo dục</span> · <span className="text-white">Dịch vụ chuyên nghiệp</span>
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div
        className={`relative z-10 w-full max-w-5xl mx-auto mt-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: '700ms' }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="glass-card gradient-border rounded-2xl p-5 text-center hover-lift"
            >
              <div
                className="text-3xl md:text-4xl font-black mb-1"
                style={{ color: stat.color, textShadow: `0 0 20px ${stat.color}60` }}
              >
                {stat.isFloat ? stat.value + stat.suffix : <CountUp end={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-text-muted text-xs font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-text-muted text-xs">Cuộn xuống</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="#71717a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
