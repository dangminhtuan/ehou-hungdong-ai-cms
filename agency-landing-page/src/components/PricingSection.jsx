import React, { useState } from 'react'

const PLANS = [
  {
    id: 'setup',
    badge: 'One-time',
    name: 'Tái Thiết Số',
    nameEn: 'Digital Rebuild',
    price: '35–50',
    unit: 'triệu',
    sub: 'Thanh toán một lần duy nhất',
    description: 'Nền tảng vĩnh viễn cho sự tăng trưởng dài hạn',
    color: '#3b82f6',
    colorBg: 'rgba(59,130,246,0.08)',
    colorBorder: 'rgba(59,130,246,0.2)',
    popular: false,
    cta: 'Tư vấn báo giá chính xác',
    features: [
      { text: 'Thiết kế UI/UX premium từ đầu', included: true },
      { text: 'Phát triển Next.js Headless', included: true },
      { text: 'Tối ưu Lighthouse 95–100/100', included: true },
      { text: 'Chuẩn hóa GEO & llms.txt cho AI', included: true },
      { text: 'Cài đặt CMS & workflow', included: true },
      { text: 'Tích hợp AI Content Engine', included: true },
      { text: 'SEO Technical audit & fix', included: true },
      { text: 'Chuyển dữ liệu từ web cũ', included: true },
      { text: 'Training sử dụng hệ thống', included: true },
      { text: '30 bài SEO/tháng', included: false, note: 'Cần thêm gói Retainer' },
    ],
  },
  {
    id: 'retainer',
    badge: '🔥 Phổ biến nhất',
    name: 'Nuôi Web Tự Động',
    nameEn: 'AI Content Retainer',
    price: '7',
    unit: 'triệu/tháng',
    sub: 'Rẻ hơn 50% so với thuê nhân viên',
    description: 'Cỗ máy nội dung chạy liên tục 24/7 không nghỉ',
    color: '#ff6b00',
    colorBg: 'rgba(255,107,0,0.08)',
    colorBorder: 'rgba(255,107,0,0.3)',
    popular: true,
    cta: 'Bắt đầu dùng thử 1 tháng',
    features: [
      { text: '30 bài viết SEO chất lượng cao/tháng', included: true },
      { text: 'Tối ưu GEO & trích dẫn AI liên tục', included: true },
      { text: 'Nghiên cứu từ khóa chuyên ngành', included: true },
      { text: 'Tự động publish lên CMS', included: true },
      { text: 'Meta tags & Schema tự động', included: true },
      { text: 'Internal linking thông minh', included: true },
      { text: 'Monthly SEO & GEO report', included: true },
      { text: 'A/B test tiêu đề & meta', included: true },
      { text: 'Không cần ký hợp đồng dài hạn', included: true },
      { text: 'Thiết kế lại giao diện', included: false, note: 'Cần thêm gói Tái thiết' },
    ],
  },
  {
    id: 'bundle',
    badge: 'Tiết kiệm nhất',
    name: 'Combo Toàn Diện',
    nameEn: 'Full Stack Bundle',
    price: '40–57',
    unit: 'triệu + 7tr/tháng',
    sub: 'Tiết kiệm lên đến 5 triệu so với mua lẻ',
    description: 'Giải pháp trọn gói: nền tảng + nội dung + tăng trưởng',
    color: '#a855f7',
    colorBg: 'rgba(168,85,247,0.08)',
    colorBorder: 'rgba(168,85,247,0.2)',
    popular: false,
    cta: 'Nhận tư vấn combo',
    features: [
      { text: 'Tất cả tính năng gói Tái Thiết Số', included: true },
      { text: 'Tất cả tính năng gói Nuôi Web', included: true },
      { text: 'Gói tối ưu GEO toàn diện cho AI', included: true },
      { text: 'Ưu tiên triển khai (trong 3 tuần)', included: true },
      { text: 'Onboarding 1-on-1 với chuyên gia', included: true },
      { text: 'Chiến lược nội dung 6 tháng', included: true },
      { text: 'Tích hợp analytics nâng cao', included: true },
      { text: 'Miễn phí 1 tháng retainer đầu tiên', included: true },
      { text: 'SLA cam kết uptime 99.9%', included: true },
      { text: 'Review & tối ưu hàng quý', included: true },
    ],
  },
]

function FeatureItem({ text, included, note }) {
  return (
    <li className="flex items-start gap-3 py-1.5">
      <span
        className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
          included ? 'bg-emerald-500/15 text-emerald-400' : 'bg-white/5 text-text-muted'
        }`}
      >
        {included ? '✓' : '–'}
      </span>
      <span className={`text-sm leading-relaxed ${included ? 'text-white/80' : 'text-text-muted line-through'}`}>
        {text}
        {note && <span className="no-underline not-italic text-xs ml-2 text-text-muted" style={{ textDecoration: 'none' }}>({note})</span>}
      </span>
    </li>
  )
}

export default function PricingSection() {
  const [billingFocus, setBillingFocus] = useState(null)

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] rounded-full opacity-[0.06] blur-3xl"
             style={{ background: 'radial-gradient(ellipse, #a855f7, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag mb-4">Bảng giá minh bạch</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            <span className="gradient-text-white">Đầu tư một lần,</span>
            <br />
            <span className="gradient-text">tăng trưởng mãi mãi</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            Không phí ẩn. Không hợp đồng ràng buộc. Hoàn tiền nếu không đạt chỉ số cam kết.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`glass-card rounded-3xl p-7 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'border-accent/30 scale-[1.02]' : 'border-white/8'
              }`}
              style={{
                background: plan.popular ? plan.colorBg : '',
                boxShadow: plan.popular ? `0 0 50px ${plan.color}25` : '',
                borderColor: plan.popular ? plan.colorBorder : undefined,
              }}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(to right, transparent, ${plan.color}, transparent)` }}
              />

              {/* Badge */}
              <div className="mb-5">
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full tracking-wide"
                  style={{
                    background: `${plan.color}20`,
                    border: `1px solid ${plan.color}40`,
                    color: plan.color,
                  }}
                >
                  {plan.badge}
                </span>
              </div>

              {/* Name */}
              <div className="mb-1">
                <div className="text-white font-black text-xl">{plan.name}</div>
                <div className="text-text-muted text-xs tracking-wider">{plan.nameEn}</div>
              </div>

              {/* Price */}
              <div className="my-5">
                <div className="flex items-baseline gap-1">
                  <span className="text-text-muted text-lg font-medium">₫</span>
                  <span className="text-4xl font-black" style={{ color: plan.color }}>
                    {plan.price}
                  </span>
                  <span className="text-text-muted text-sm ml-1">{plan.unit}</span>
                </div>
                <div
                  className="text-xs mt-1 font-medium"
                  style={{ color: plan.color }}
                >
                  {plan.sub}
                </div>
              </div>

              {/* Description */}
              <p className="text-text-muted text-sm mb-5 leading-relaxed">{plan.description}</p>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 mb-6 block ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-ghost'
                }`}
                style={plan.popular ? {} : { borderColor: `${plan.color}30`, color: plan.color }}
              >
                {plan.cta}
              </a>

              {/* Divider */}
              <div className="h-px bg-white/5 mb-5" />

              {/* Features */}
              <ul className="space-y-0.5 flex-1">
                {plan.features.map((f, i) => (
                  <FeatureItem key={i} {...f} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Guarantee strip */}
        <div className="mt-12 glass-card rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/5">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🛡️</div>
            <div>
              <div className="text-white font-bold">Cam kết hoàn tiền 100%</div>
              <div className="text-text-muted text-sm">Nếu sau 30 ngày chúng tôi không đạt chỉ số Lighthouse cam kết, hoàn toàn bộ chi phí.</div>
            </div>
          </div>
          <div className="flex gap-6 text-center">
            {[
              { icon: '⚡', label: 'Triển khai\n2–4 tuần' },
              { icon: '📞', label: 'Hỗ trợ\ntiếng Việt' },
              { icon: '🔒', label: 'Bảo mật\ndữ liệu' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-text-muted text-xs whitespace-pre-line text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
