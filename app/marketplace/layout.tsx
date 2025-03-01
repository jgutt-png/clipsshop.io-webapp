import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
