import React, { useState, useMemo } from 'react'

function Slider({ label, min, max, step, value, onChange, unit, color }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="mb-6">
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-sm text-text-muted font-medium">{label}</label>
        <span className="font-bold text-white">
          {value.toLocaleString('vi-VN')}{unit}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${color} 0%, ${color} ${pct}%, rgba(255,255,255,0.1) ${pct}%, rgba(255,255,255,0.1) 100%)`
          }}
        />
      </div>
      <div className="flex justify-between text-xs text-text-muted mt-1">
        <span>{min.toLocaleString('vi-VN')}{unit}</span>
        <span>{max.toLocaleString('vi-VN')}{unit}</span>
      </div>
    </div>
  )
}

function MetricCard({ label, value, suffix, color, highlight, sub }) {
  return (
    <div
      className={`glass-card rounded-2xl p-5 text-center transition-all duration-300 hover-lift ${highlight ? 'border-accent/30' : ''}`}
      style={highlight ? { boxShadow: '0 0 30px rgba(255,107,0,0.12)' } : {}}
    >
      <div className="text-2xl md:text-3xl font-black mb-1" style={{ color }}>
        {value}{suffix}
      </div>
      <div className="text-white text-sm font-semibold">{label}</div>
      {sub && <div className="text-text-muted text-xs mt-1">{sub}</div>}
    </div>
  )
}

export default function ROICalculator() {
  // Inputs
  const [numArticles, setNumArticles]     = useState(30)
  const [currentSalary, setCurrentSalary] = useState(14)    // triệu
  const [numStaff, setNumStaff]           = useState(1)
  const [adBudget, setAdBudget]           = useState(5)     // triệu/tháng

  // Calculations
  const results = useMemo(() => {
    const currentContentCost = currentSalary * numStaff          // triệu
    const agencyCost         = 7                                  // triệu/tháng
    const monthlySaving      = currentContentCost - agencyCost    // triệu
    const yearlySaving       = monthlySaving * 12
    const articleCostOld     = currentContentCost / 4            // ~4 bài/tháng thủ công
    const articleCostNew     = agencyCost / numArticles
    const setupCost          = 40                                 // triệu (one-time)
    const breakEvenMonths    = monthlySaving > 0 ? Math.ceil(setupCost / monthlySaving) : '—'
    const roiPercent         = monthlySaving > 0
      ? Math.round((monthlySaving / agencyCost) * 100)
      : 0

    return {
      currentContentCost,
      agencyCost,
      monthlySaving,
      yearlySaving,
      articleCostOld: articleCostOld.toFixed(1),
      articleCostNew: articleCostNew.toFixed(2),
      breakEvenMonths,
      roiPercent,
    }
  }, [numArticles, currentSalary, numStaff, adBudget])

  const isProfit = results.monthlySaving > 0

  return (
    <section id="roi" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-[0.05] blur-3xl"
             style={{ background: 'radial-gradient(ellipse, #ff6b00, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag mb-4">ROI Calculator</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            <span className="gradient-text-white">Bạn tiết kiệm được</span>
            <br />
            <span className="gradient-text">bao nhiêu mỗi tháng?</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-base">
            Kéo các thanh trượt để tính toán chính xác lợi tức đầu tư của bạn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Controls */}
          <div className="glass-card gradient-border rounded-3xl p-7">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="text-xl">🎛️</span> Thông số doanh nghiệp bạn
            </h3>

            <Slider
              label="Số nhân viên Content hiện tại"
              min={1} max={5} step={1}
              value={numStaff}
              onChange={setNumStaff}
              unit=" người"
              color="#ef4444"
            />
            <Slider
              label="Lương trung bình/nhân viên Content"
              min={8} max={25} step={1}
              value={currentSalary}
              onChange={setCurrentSalary}
              unit=" tr/tháng"
              color="#ef4444"
            />
            <Slider
              label="Mục tiêu bài viết SEO/tháng"
              min={10} max={60} step={5}
              value={numArticles}
              onChange={setNumArticles}
              unit=" bài"
              color="#ff6b00"
            />
            <Slider
              label="Ngân sách quảng cáo hiện tại"
              min={0} max={50} step={1}
              value={adBudget}
              onChange={setAdBudget}
              unit=" tr/tháng"
              color="#3b82f6"
            />

            <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-text-muted">
              <span className="text-white font-medium">💡 Ghi chú:</span> Chi phí gói AI Auto Solution luôn cố định{' '}
              <span className="text-accent font-bold">7 triệu/tháng</span> cho đến 30 bài SEO chất lượng cao.
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-5">
            {/* Savings highlight */}
            <div
              className={`rounded-3xl p-7 text-center relative overflow-hidden ${isProfit ? 'border border-emerald-500/20' : 'border border-red-500/20'}`}
              style={{
                background: isProfit
                  ? 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.03))'
                  : 'linear-gradient(135deg, rgba(239,68,68,0.08), rgba(239,68,68,0.03))'
              }}
            >
              <div className="text-text-muted text-sm mb-2">Tiết kiệm mỗi tháng</div>
              <div
                className="text-5xl md:text-6xl font-black mb-2"
                style={{
                  color: isProfit ? '#22c55e' : '#ef4444',
                  textShadow: `0 0 30px ${isProfit ? '#22c55e' : '#ef4444'}60`,
                }}
              >
                {isProfit ? '+' : ''}{results.monthlySaving.toLocaleString('vi-VN')} tr
              </div>
              <div className="text-text-muted text-sm">
                = {isProfit ? '+' : ''}{results.yearlySaving.toLocaleString('vi-VN')} triệu/năm
              </div>
              {isProfit && (
                <div className="mt-3 inline-flex items-center gap-1 text-emerald-400 text-sm font-semibold">
                  <span>✓</span> Hoàn vốn sau ~{results.breakEvenMonths} tháng
                </div>
              )}
            </div>

            {/* Metric grid */}
            <div className="grid grid-cols-2 gap-4">
              <MetricCard
                label="Chi phí hiện tại"
                value={results.currentContentCost}
                suffix=" tr/tháng"
                color="#ef4444"
                sub="Lương nhân viên Content"
              />
              <MetricCard
                label="Chi phí AI Auto Solution"
                value={results.agencyCost}
                suffix=" tr/tháng"
                color="#ff6b00"
                highlight
                sub={`${numArticles} bài SEO/tháng`}
              />
              <MetricCard
                label="Giá/bài (cũ)"
                value={results.articleCostOld}
                suffix=" tr/bài"
                color="#71717a"
                sub="~4 bài thủ công/tháng"
              />
              <MetricCard
                label="Giá/bài (AI)"
                value={results.articleCostNew}
                suffix=" tr/bài"
                color="#22c55e"
                sub={`${numArticles} bài tự động/tháng`}
              />
            </div>

            {/* ROI bar */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex justify-between mb-2 text-sm">
                <span className="text-text-muted">Tỷ suất ROI hàng tháng</span>
                <span className="font-bold text-accent">{results.roiPercent}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.min(results.roiPercent, 300) / 3}%`,
                    background: 'linear-gradient(to right, #ff6b00, #22c55e)',
                    boxShadow: '0 0 10px rgba(255,107,0,0.4)',
                  }}
                />
              </div>
            </div>

            <a href="#contact" className="btn-primary text-base py-4 rounded-xl text-center justify-center">
              Bắt đầu tiết kiệm ngay hôm nay →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
