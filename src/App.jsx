import { useEffect, useState } from 'react'
import Hero from './components/sections/Hero'
import PrivacyPolicy from './components/pages/PrivacyPolicy'

function getNormalizedPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/'
}

export default function App() {
  const [normalizedPath, setNormalizedPath] = useState(getNormalizedPath)
  const isPrivacyPolicyPage = normalizedPath === '/chinh-sach-bao-mat'

  useEffect(() => {
    const handleLocationChange = () => {
      setNormalizedPath(getNormalizedPath())
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('apex:navigate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('apex:navigate', handleLocationChange)
    }
  }, [])

  return (
    <div className="app-shell">
      {isPrivacyPolicyPage ? (
        <PrivacyPolicy />
      ) : (
        <main>
          <Hero />
        </main>
      )}
    </div>
  )
}
