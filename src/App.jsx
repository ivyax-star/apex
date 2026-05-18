import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
