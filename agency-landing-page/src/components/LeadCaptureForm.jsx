import React, { useState } from 'react'

const INITIAL = { name: '', phone: '', email: '', business: '', package: '', note: '' }

const PACKAGES = [
  { value: 'setup',    label: 'Gói Tái Thiết Số (35–50 triệu)' },
  { value: 'retainer', label: 'Gói Nuôi Web Tự Động (7 triệu/tháng)' },
  { value: 'bundle',   label: 'Combo Toàn Diện' },
  { value: 'consult',  label: 'Chỉ muốn tư vấn trước' },
]

export default function LeadCaptureForm() {
  const [form, setForm]     = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim())  errs.name  = 'Vui lòng nhập họ tên'
    if (!form.phone.trim()) errs.phone = 'Vui lòng nhập số điện thoại'
    if (!form.package)      errs.package = 'Vui lòng chọn gói dịch vụ'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: null }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('loading')
    try {
      // Formspree endpoint — replace YOUR_FORM_ID with actual ID
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-[0.06] blur-3xl"
             style={{ background: 'radial-gradient(ellipse, #ff6b00, transparent)' }} />
        <div className="absolute inset-0"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255,255,255,0.025)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Value props */}
          <div>
            <span className="section-tag mb-5">Bắt đầu ngay hôm nay</span>
            <h2 className="text-3xl md:text-4xl font-black mb-5 leading-tight">
              <span className="gradient-text-white">Nhận tư vấn</span>
              <br />
              <span className="gradient-text">miễn phí 100%</span>
            </h2>
            <p className="text-text-muted text-base mb-8 leading-relaxed">
              Đội ngũ chuyên gia sẽ phân tích website hiện tại của bạn và đề xuất giải pháp phù hợp trong vòng{' '}
              <span className="text-white font-medium">24 giờ</span>.
            </p>

            <div className="space-y-4">
              {[
                { icon: '🎯', title: 'Phân tích website miễn phí', desc: 'Chúng tôi audit kỹ thuật và chỉ ra điểm yếu cụ thể' },
                { icon: '📊', title: 'Báo giá chi tiết, không ẩn phí', desc: 'Minh bạch 100% từ đầu đến cuối dự án' },
                { icon: '⚡', title: 'Phản hồi trong 24 giờ', desc: 'Đội ngũ sẵn sàng làm việc vào giờ hành chính' },
                { icon: '🤝', title: 'Không có áp lực mua hàng', desc: 'Tư vấn thật sự, không hard-sell' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-text-muted text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="mt-8 p-4 glass-card rounded-2xl border border-white/5">
              <div className="flex items-center gap-3 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#ff6b00">
                    <path d="M8 1l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 10.7l-3.8 2.1.7-4.3-3.1-3 4.3-.6L8 1z"/>
                  </svg>
                ))}
                <span className="text-white text-sm font-semibold">5.0</span>
              </div>
              <p className="text-text-muted text-sm italic">
                "Website của chúng tôi từ 4 giây còn 0.28 giây. Organic traffic tăng 280% sau 4 tháng."
              </p>
              <div className="mt-2 text-xs text-text-muted">— Nguyễn Văn A, CEO Công ty XYZ</div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-card gradient-border rounded-3xl p-7">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                <h3 className="text-white font-bold text-xl mb-2">Gửi thành công!</h3>
                <p className="text-text-muted text-sm">
                  Chúng tôi sẽ liên hệ với bạn trong vòng <span className="text-accent font-semibold">24 giờ</span>.
                </p>
                <button
                  className="btn-ghost mt-6 text-sm"
                  onClick={() => setStatus('idle')}
                >
                  Gửi thêm yêu cầu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-white font-bold text-lg mb-1">Điền thông tin tư vấn</h3>
                <p className="text-text-muted text-xs mb-4">* Bắt buộc</p>

                {/* Name */}
                <div>
                  <label className="text-sm text-text-muted mb-1.5 block">Họ và tên *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder:text-text-muted/50 outline-none transition-all duration-200 focus:border-accent/50 focus:bg-white/8 ${errors.name ? 'border-red-500/50' : 'border-white/10'}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Phone + Email row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-text-muted mb-1.5 block">Số điện thoại *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="0912 345 678"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder:text-text-muted/50 outline-none transition-all duration-200 focus:border-accent/50 ${errors.phone ? 'border-red-500/50' : 'border-white/10'}`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="text-sm text-text-muted mb-1.5 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@cty.vn"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-text-muted/50 outline-none transition-all duration-200 focus:border-accent/50"
                    />
                  </div>
                </div>

                {/* Business */}
                <div>
                  <label className="text-sm text-text-muted mb-1.5 block">Tên công ty / lĩnh vực</label>
                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="VD: Công ty BĐS ABC / Phòng khám nha khoa"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-text-muted/50 outline-none transition-all duration-200 focus:border-accent/50"
                  />
                </div>

                {/* Package select */}
                <div>
                  <label className="text-sm text-text-muted mb-1.5 block">Gói quan tâm *</label>
                  <select
                    name="package"
                    value={form.package}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[#09090b] border text-sm outline-none transition-all duration-200 focus:border-accent/50 ${!form.package ? 'text-text-muted/50' : 'text-white'} ${errors.package ? 'border-red-500/50' : 'border-white/10'}`}
                  >
                    <option value="" disabled>Chọn gói dịch vụ...</option>
                    {PACKAGES.map(p => (
                      <option key={p.value} value={p.value} className="bg-[#09090b] text-white">{p.label}</option>
                    ))}
                  </select>
                  {errors.package && <p className="text-red-400 text-xs mt-1">{errors.package}</p>}
                </div>

                {/* Note */}
                <div>
                  <label className="text-sm text-text-muted mb-1.5 block">Ghi chú thêm</label>
                  <textarea
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Mô tả ngắn về website hiện tại, mục tiêu, hoặc câu hỏi cụ thể..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-text-muted/50 outline-none transition-all duration-200 focus:border-accent/50 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center py-4 rounded-xl text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/>
                      </svg>
                      Đang gửi...
                    </>
                  ) : (
                    <>Gửi yêu cầu tư vấn miễn phí →</>
                  )}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-sm text-center">
                    Có lỗi xảy ra. Vui lòng liên hệ trực tiếp qua Zalo/phone.
                  </p>
                )}

                <p className="text-text-muted text-xs text-center">
                  🔒 Thông tin của bạn được bảo mật tuyệt đối. Không spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
