import { Metadata } from 'next'
import Hero from './marketplace/components/Hero'
import FeatureSection from './marketplace/components/FeatureSection'
import MarketplaceSection from './marketplace/components/MarketplaceSection'
import Footer from './marketplace/components/Footer'

export const metadata: Metadata = {
  title: 'ClipsShop.io - The Ultimate Reel Pack Marketplace',
  description: 'Discover and purchase high-quality reel packs for your creative projects',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <FeatureSection />
      <MarketplaceSection />
      <Footer />
    </main>
  )
}
