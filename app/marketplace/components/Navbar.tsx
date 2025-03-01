'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ShoppingCart, Search } from "lucide-react"
import { Button } from "./ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={isScrolled ? "https://s3.us-west-1.amazonaws.com/clipshop.assets/Clipshop+logo+long.png" : "https://s3.us-west-1.amazonaws.com/clipshop.assets/clipshop+logo+white+long.png"}
              alt="ClipsShop.io"
              width={160}
              height={40}
              className="h-8 md:h-10 transition-all w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/browse" className="nav-link font-medium">
              Browse Packs
            </Link>
            <Link href="/how-it-works" className="nav-link font-medium">
              How It Works
            </Link>
            <Link href="/pricing" className="nav-link font-medium">
              Pricing
            </Link>
            <Link href="/creators" className="nav-link font-medium">
              For Creators
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <div className="h-6 w-px bg-gray-300 mx-1"></div>
            <Link href="/login">
              <Button variant="outline" className="rounded-full">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-clipshop-purple hover:bg-clipshop-purple-dark text-white rounded-full">
                Sign up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              <Link href="/browse" className="nav-link font-medium py-2">
                Browse Packs
              </Link>
              <Link href="/how-it-works" className="nav-link font-medium py-2">
                How It Works
              </Link>
              <Link href="/pricing" className="nav-link font-medium py-2">
                Pricing
              </Link>
              <Link href="/creators" className="nav-link font-medium py-2">
                For Creators
              </Link>
              <div className="h-px w-full bg-gray-200 my-2"></div>
              <div className="flex items-center justify-between">
                <Link href="/login" className="w-1/2 pr-1">
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" className="w-1/2 pl-1">
                  <Button className="bg-clipshop-purple hover:bg-clipshop-purple-dark text-white w-full">
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
