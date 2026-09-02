import React from "react"

const INPUTS = [
  { icon: "📁", label: "Tài liệu\nNội bộ DN", color: "#ff6b00" },
  { icon: "📋", label: "Báo cáo\n& Case Study", color: "#ff6b00" },
  { icon: "🌐", label: "Website\nHiện tại", color: "#ff6b00" },
]

const ENGINE_TASKS = [
  "• Bóc tách & phân tích chuyên ngành",
  "• Tạo outline SEO & GEO chuẩn quốc tế",
  "• Viết & tối ưu 30 bài/tháng tự động",
  "• Xuất bản llms.txt & JSON-LD Schema",
]

const OUTPUTS = [
  { icon: "📝", label: "30 Bài viết\nSEO & llms.txt", color: "#3b82f6" },
  { icon: "🏷️", label: "Meta Tags\n& Schema", color: "#3b82f6" },
  { icon: "⚡", label: "Next.js\nHeadless CMS", color: "#3b82f6" },
]

const RESULTS = [
  { icon: "🔍", label: "Google Index\n& Xếp hạng Top", color: "#22c55e", bg: "rgba(34,197,94,0.10)", border: "rgba(34,197,94,0.35)" },
  { icon: "🤖", label: "AI Agents\nChatGPT · Perplexity · Gemini", color: "#a855f7", bg: "rgba(168,85,247,0.10)", border: "rgba(168,85,247,0.35)" },
]

const STEPS = [
  { step: "01", title: "Nạp tài liệu", desc: "Upload hồ sơ, báo cáo, case study một lần duy nhất.", icon: "📤", color: "#ff6b00" },
  { step: "02", title: "AI phân tích & viết bài", desc: "AI Engine bóc tách chuyên ngành, tạo 30 bài SEO/tháng.", icon: "🤖", color: "#3b82f6" },
  { step: "03", title: "Xuất bản Next.js", desc: "Đưa lên CMS với llms.txt, JSON-LD Schema, Lighthouse 100/100.", icon: "🚀", color: "#22c55e" },
  { step: "04", title: "Google & AI tiến cử", desc: "Google Top 1-3, ChatGPT & Perplexity trích dẫn thương hiệu bạn.", icon: "🎯", color: "#a855f7" },
]

function Node({ icon, label, color, bg, border, className = "" }) {
  const bgColor = bg || color + "15"
  const borderColor = border || color + "45"
  return (
    <div
      className={"flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl text-center transition-all duration-300 hover:scale-105 " + className}
      style={{ background: bgColor, border: "1px solid " + borderColor }}
    >
      <span className="text-2xl leading-none">{icon}</span>
      <span className="text-xs font-semibold leading-snug whitespace-pre-line" style={{ color }}>
        {label}
      </span>
    </div>
  )
}

function Arrow({ color = "#ff6b00" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 py-1">
      <div className="w-0.5 h-6 rounded-full" style={{ background: "linear-gradient(to bottom," + color + "80," + color + ")" }} />
      <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
        <path d="M5 7L0 0h10L5 7z" fill={color} />
      </svg>
    </div>
  )
}

export default function SystemFlowChart() {
  return (
    <section id="flowchart" className="py-24 px-6 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255,255,255,0.025)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #ff6b00, #3b82f6, transparent)" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="section-tag mb-4">Kiến trúc hệ thống toàn diện</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            <span className="gradient-text-white">Cỗ máy AI hoạt động</span>
            <br />
            <span className="gradient-text">như thế nào?</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            Từ tài liệu nội bộ đến 30 bài SEO trên Google và hệ thống trích dẫn của ChatGPT, Perplexity — quy trình tự động hóa 100%.
          </p>
        </div>

        <div className="glass-card gradient-border rounded-3xl p-6 md:p-10 mb-10 overflow-x-auto">
          <div className="min-w-[560px] flex flex-col items-center">

            <div className="flex items-start justify-center gap-4 w-full">
              {INPUTS.map((n, i) => <Node key={i} icon={n.icon} label={n.label} color={n.color} />)}
            </div>

            <div className="flex items-start justify-center gap-4 w-full">
              {INPUTS.map((_, i) => <Arrow key={i} color="#ff6b00" />)}
            </div>

            <div
              className="w-full max-w-xl rounded-2xl px-6 py-5 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(255,107,0,0.10), rgba(255,140,56,0.06))",
                border: "1.5px solid rgba(255,107,0,0.45)",
                boxShadow: "0 0 40px rgba(255,107,0,0.12)",
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-2xl">🤖</span>
                <span className="text-white font-black text-base md:text-lg tracking-tight">AI Content Engine</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-left">
                {ENGINE_TASKS.map((t, i) => (
                  <div key={i} className="text-xs text-text-muted leading-relaxed px-2 py-1 rounded-lg bg-white/[0.03] border border-white/5">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start justify-center gap-4 w-full">
              {OUTPUTS.map((_, i) => <Arrow key={i} color="#3b82f6" />)}
            </div>

            <div className="flex items-start justify-center gap-4 w-full">
              {OUTPUTS.map((n, i) => <Node key={i} icon={n.icon} label={n.label} color={n.color} />)}
            </div>

            <div className="flex items-start justify-center gap-12 w-full mt-1">
              <Arrow color="#22c55e" />
              <Arrow color="#a855f7" />
            </div>

            <div className="flex items-start justify-center gap-4 w-full">
              {RESULTS.map((n, i) => (
                <Node key={i} icon={n.icon} label={n.label} color={n.color} bg={n.bg} border={n.border} className="flex-1 max-w-[260px]" />
              ))}
            </div>

            <Arrow color="#22c55e" />

            <div
              className="w-full max-w-sm rounded-2xl px-6 py-4 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.12), rgba(34,197,94,0.05))",
                border: "1.5px solid rgba(34,197,94,0.45)",
                boxShadow: "0 0 30px rgba(34,197,94,0.15)",
              }}
            >
              <div className="text-2xl mb-1">💰</div>
              <div className="text-white font-black text-sm md:text-base">Khách Hàng & Doanh Thu</div>
              <div className="text-emerald-400 text-xs mt-0.5 font-mono">(Tự động tư vấn 24/7)</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {STEPS.map((item) => (
            <div key={item.step} className="glass-card rounded-2xl p-5 hover-lift group flex flex-col justify-between">
              <div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: item.color + "18", border: "1px solid " + item.color + "30" }}
                >
                  {item.icon}
                </div>
                <div className="text-[10px] font-bold tracking-widest mb-1" style={{ color: item.color }}>
                  BƯỚC {item.step}
                </div>
                <div className="text-white font-semibold text-sm mb-1.5">{item.title}</div>
                <div className="text-text-muted text-xs leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
