import Workflow from "./components/Workflow"
import './App.css'
import FeatureSection from './components/FeatureSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Pricing from "./components/Pricing"
function App() {
  return (
    <>
      <Navbar />
      <div className = "max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
      </div>
  
    </>
  )
}

export default App
