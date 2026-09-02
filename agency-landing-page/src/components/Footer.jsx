import React from 'react'

const FOOTER_LINKS = [
  {
    title: 'Dịch vụ',
    links: [
      { label: 'Tái Thiết Website', href: '#pricing' },
      { label: 'AI Content Engine', href: '#flowchart' },
      { label: 'SEO Retainer', href: '#pricing' },
      { label: 'Tư vấn miễn phí', href: '#contact' },
    ],
  },
  {
    title: 'Về chúng tôi',
    links: [
      { label: 'Câu chuyện', href: '#' },
      { label: 'Đội ngũ', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Hỗ trợ',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Chính sách bảo mật', href: '#' },
      { label: 'Điều khoản dịch vụ', href: '#' },
      { label: 'Liên hệ', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/30 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#formula" title="Khám phá công thức G = A²S" className="flex items-center gap-2.5 mb-4 group w-fit cursor-pointer">
              <div
                className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #ff6b00 0%, #ff8c38 100%)',
                  boxShadow: '0 0 20px rgba(255,107,0,0.45)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
                <span className="font-mono font-black text-xs tracking-tighter text-white z-10 select-none">
                  A<sup className="text-[9px] font-bold text-yellow-200">2</sup>S
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base leading-tight">
                  <span className="text-white">AI Auto</span>{' '}
                  <span className="gradient-text">Solution</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 tracking-wider font-semibold">
                  G = A²S
                </span>
              </div>
            </a>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Chuyên gia tái thiết website và tự động hóa nội dung AI cho doanh nghiệp vừa và nhỏ Việt Nam.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: 'Z', label: 'Zalo', href: '#' },
                { icon: 'fb', label: 'Facebook', href: '#' },
                { icon: 'li', label: 'LinkedIn', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-8 h-8 rounded-lg glass-card border border-white/8 flex items-center justify-center text-xs font-bold text-text-muted hover:text-white hover:border-accent/30 transition-all duration-200"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-text-muted text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">
            © 2025 AI Auto Solution. Mọi quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-text-muted text-xs">Hệ thống đang hoạt động bình thường</span>
          </div>
          <p className="text-text-muted text-xs">
            Thiết kế bởi{' '}
            <span className="text-accent">AI Auto Solution Team</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
