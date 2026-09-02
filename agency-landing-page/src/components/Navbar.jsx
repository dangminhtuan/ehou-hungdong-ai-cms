import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Công thức G=A²S', href: '#formula' },
  { label: 'Chuẩn AI (GEO)', href: '#ai-ready' },
  { label: 'Vấn đề', href: '#before-after' },
  { label: 'Giải pháp', href: '#flowchart' },
  { label: 'ROI Calculator', href: '#roi' },
  { label: 'Bảng giá', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-card border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo with A²S formula badge - Click to jump to formula explanation */}
        <a
          href="#formula"
          title="Khám phá định luật tăng trưởng G = A²S"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,107,0,0.7)] overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, #ff6b00 0%, #ff8c38 100%)',
                 boxShadow: '0 0 20px rgba(255,107,0,0.45)',
                 border: '1px solid rgba(255,255,255,0.2)'
               }}>
            {/* Orbital glow ring */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
            <span className="font-mono font-black text-xs tracking-tighter text-white z-10 select-none">
              A<sup className="text-[9px] font-bold text-yellow-200">2</sup>S
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight leading-tight group-hover:text-accent-light transition-colors">
              <span className="text-white">AI Auto</span>{' '}
              <span className="gradient-text">Solution</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-400 tracking-wider font-semibold group-hover:underline flex items-center gap-1">
              <span>G = A²S</span>
              <span className="text-[9px] opacity-70 group-hover:translate-x-0.5 transition-transform">↓</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-text-muted hover:text-white rounded-lg transition-all duration-200 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-primary text-sm px-4 py-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 3a2 2 0 110 4 2 2 0 010-4zm0 9.2a5.1 5.1 0 01-4.25-2.28C3.77 9.69 6.07 9 8 9s4.23.69 4.25 1.92A5.1 5.1 0 018 13.2z" fill="currentColor"/>
            </svg>
            Tư vấn miễn phí
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-text-muted hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-card border-t border-white/5 mt-1 px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 text-sm text-text-muted hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm mt-2 justify-center">
            Tư vấn miễn phí
          </a>
        </div>
      )}
    </header>
  )
}
