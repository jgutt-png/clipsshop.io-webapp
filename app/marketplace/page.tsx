import { Metadata } from 'next'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import MarketplaceSection from './components/MarketplaceSection'

export const metadata: Metadata = {
  title: 'Reel Packs Marketplace',
  description: 'Discover and purchase high-quality reel packs for your creative projects',
}

export default function MarketplacePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <FeatureSection />
      <MarketplaceSection />
    </main>
  )
}
