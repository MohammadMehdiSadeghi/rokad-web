import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsSection from './components/StatsSection'
import SchoolsSection from './components/SchoolsSection'
import WhyDifferentSection from './components/WhyDifferentSection'
import FamilyTrustSection from './components/FamilyTrustSection'
import EcosystemSection from './components/EcosystemSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <SchoolsSection />
        <WhyDifferentSection />
        <FamilyTrustSection />
        <EcosystemSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
