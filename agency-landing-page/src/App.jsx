import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import GrowthFormulaSection from './components/GrowthFormulaSection'
import AIReadySection from './components/AIReadySection'
import BeforeAfterSection from './components/BeforeAfterSection'
import SystemFlowChart from './components/SystemFlowChart'
import ROICalculator from './components/ROICalculator'
import PricingSection from './components/PricingSection'
import LeadCaptureForm from './components/LeadCaptureForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <GrowthFormulaSection />
        <AIReadySection />
        <BeforeAfterSection />
        <SystemFlowChart />
        <ROICalculator />
        <PricingSection />
        <LeadCaptureForm />
      </main>
      <Footer />
    </div>
  )
}
