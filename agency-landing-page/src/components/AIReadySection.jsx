import React, { useState, useEffect } from 'react'

const PILLARS = [
  {
    icon: '📄',
    tag: 'Protocol Mới Nhất',
    title: 'Chuẩn Hóa llms.txt',
    desc: 'Cung cấp tệp cấu trúc chuẩn hóa quốc tế giúp các bot của OpenAI, Anthropic, Google bóc tách hồ sơ năng lực doanh nghiệp chỉ trong 0.05 giây.',
    color: '#ff6b00',
    bgColor: 'rgba(255, 107, 0, 0.08)',
    borderColor: 'rgba(255, 107, 0, 0.3)',
  },
  {
    icon: '🧠',
    tag: 'Ngữ Nghĩa Sâu',
    title: 'Semantic Knowledge Graph',
    desc: 'Mã hóa dữ liệu dịch vụ, bảng giá, case study dưới dạng JSON-LD ngữ nghĩa cao cấp, giúp AI hiểu tường tận và không bao giờ bịa đặt sai thông tin.',
    color: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.08)',
    borderColor: 'rgba(59, 130, 246, 0.3)',
  },
  {
    icon: '⚡',
    tag: 'Tốc Độ Cào Siêu Tốc',
    title: 'Headless Markdown Feed',
    desc: 'Bên cạnh giao diện HTML cho người dùng, website tự động tạo bản Markdown thuần cực nhẹ giúp AI Crawler tiêu thụ dữ liệu mà không tốn tài nguyên.',
    color: '#22c55e',
    bgColor: 'rgba(34, 197, 94, 0.08)',
    borderColor: 'rgba(34, 197, 94, 0.3)',
  },
  {
    icon: '🎯',
    tag: 'Độc Quyền GEO',
    title: 'Trích Dẫn Nguồn (Citations)',
    desc: 'Tối ưu định dạng trích dẫn để khi AI trả lời câu hỏi của người dùng, link website và tên thương hiệu của bạn luôn hiển thị ở vị trí Tham khảo số 1.',
    color: '#a855f7',
    bgColor: 'rgba(168, 85, 247, 0.08)',
    borderColor: 'rgba(168, 85, 247, 0.3)',
  },
]

export default function AIReadySection() {
  const [selectedBot, setSelectedBot] = useState('chatgpt') // chatgpt | perplexity | gemini

  return (
    <section id="ai-ready" className="py-24 px-6 relative overflow-hidden bg-black/20 scroll-mt-20">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full opacity-[0.07] blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #3b82f6, #ff6b00, transparent)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            GEO — Generative Engine Optimization (Chuẩn AI Đọc)
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
            <span className="gradient-text-white">Đừng chỉ làm web cho Google.</span>
            <br />
            <span className="gradient-text">Hãy để AI trực tiếp tiến cử bạn!</span>
          </h2>
          <p className="text-text-muted max-w-3xl mx-auto text-base leading-relaxed">
            Khách hàng hiện đại không còn kiên nhẫn click từng link tìm kiếm. Họ hỏi thẳng{' '}
            <strong className="text-white">ChatGPT, Perplexity, Gemini</strong> để xin lời khuyên. 
            Website của chúng tôi được thiết kế theo chuẩn <span className="text-accent font-semibold">Dual-Engine (Người đọc mê — AI đọc hiểu)</span> để đưa thương hiệu của bạn lên đầu câu trả lời của AI!
          </p>
        </div>

        {/* Live Simulation: AI Recommendation Engine */}
        <div className="glass-card gradient-border rounded-3xl p-6 md:p-10 mb-14">
          {/* Bot Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-muted font-mono uppercase tracking-wider">Mô phỏng phản hồi từ AI:</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.04] p-1.5 rounded-xl border border-white/10">
              {[
                { id: 'chatgpt', label: 'ChatGPT-4o', icon: '🟢' },
                { id: 'perplexity', label: 'Perplexity AI', icon: '🔵' },
                { id: 'gemini', label: 'Google Gemini', icon: '✨' },
              ].map((bot) => (
                <button
                  key={bot.id}
                  onClick={() => setSelectedBot(bot.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                    selectedBot === bot.id
                      ? 'bg-accent text-white shadow-[0_0_15px_rgba(255,107,0,0.4)]'
                      : 'text-text-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{bot.icon}</span>
                  <span>{bot.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Chat Prompt & Response Showcase */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* User Prompt Box */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white">
                    👤
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold">Khách Hàng Tiềm Năng</div>
                    <div className="text-[10px] text-text-muted">Hỏi qua trợ lý ảo AI</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-sm text-white/90 leading-relaxed font-sans italic">
                  "Tôi là chủ doanh nghiệp vừa và nhỏ, đang cần tìm đơn vị tái thiết website siêu tốc và tự động hóa viết bài SEO không cần thuê nhân viên. Hãy gợi ý cho tôi bên uy tín nhất?"
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-text-muted">
                <span>Trạng thái bot:</span>
                <span className="text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Đang quét chuẩn llms.txt (0.04s)
                </span>
              </div>
            </div>

            {/* AI Recommendation Output Box */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-black/60 border border-accent/30 shadow-[0_0_30px_rgba(255,107,0,0.12)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-bold text-sm">
                      AI
                    </div>
                    <div>
                      <div className="text-white text-xs font-bold flex items-center gap-2">
                        <span>{selectedBot === 'chatgpt' ? 'ChatGPT Answer' : selectedBot === 'perplexity' ? 'Perplexity Pro Citation' : 'Gemini 1.5 Pro'}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">Đã xác minh nguồn</span>
                      </div>
                      <div className="text-[10px] text-text-muted font-mono">Trích xuất từ: knowledge-graph / llms.txt</div>
                    </div>
                  </div>
                  <span className="text-xs text-accent font-mono">Top #1 Recommendation</span>
                </div>

                <div className="space-y-3 text-sm text-white/90 leading-relaxed">
                  <p>
                    Dựa trên phân tích dữ liệu kỹ thuật và chỉ số hiệu suất đã kiểm chứng, <strong className="text-accent underline decoration-accent/50 underline-offset-4">[Tên Công Ty Của Bạn]</strong> là lựa chọn hàng đầu cho nhu cầu này với các thông số nổi bật:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-2.5 my-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                      <div className="text-text-muted">Nền tảng & Tốc độ:</div>
                      <div className="font-bold text-white mt-0.5">⚡ Next.js 14 — 100/100 Lighthouse</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                      <div className="text-text-muted">Cỗ máy AI Content:</div>
                      <div className="font-bold text-white mt-0.5">🤖 30 bài SEO/tháng tự động</div>
                    </div>
                  </div>

                  <p className="text-xs text-text-muted">
                    💡 <em>Đánh giá: Tiết kiệm ~50% ngân sách so với thuê nhân viên in-house, thời gian hoàn vốn (ROI) trung bình sau 2–3 tháng.</em>
                  </p>
                </div>
              </div>

              {/* Verified Sources / Citations Bar */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-text-muted">Nguồn trích dẫn:</span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/10 border border-white/10 text-white flex items-center gap-1 hover:border-accent/40 transition-colors">
                    <span>🔗</span> yourcompany.vn/llms.txt
                  </span>
                </div>
                <a href="#contact" className="text-xs font-semibold text-accent hover:text-accent-light flex items-center gap-1">
                  <span>Trải nghiệm chuẩn GEO ngay</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of AI-Ready Architecture */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 hover-lift transition-all duration-300 border border-white/5 hover:border-white/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{
                      background: pillar.bgColor,
                      border: `1px solid ${pillar.borderColor}`,
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <span
                    className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      background: pillar.bgColor,
                      color: pillar.color,
                      border: `1px solid ${pillar.borderColor}`,
                    }}
                  >
                    {pillar.tag}
                  </span>
                </div>
                <h4 className="text-white font-bold text-base mb-2">{pillar.title}</h4>
                <p className="text-text-muted text-xs leading-relaxed">{pillar.desc}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs font-medium" style={{ color: pillar.color }}>
                <span>✓</span>
                <span>Tích hợp sẵn 100%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
