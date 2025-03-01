'use client'

import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Youtube, Facebook, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Footer() {
  return (
    <footer className="bg-clipshop-purple pt-16 pb-8 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://s3.us-west-1.amazonaws.com/clipshop.assets/clipshop+logo+white+long.png"
                alt="ClipsShop.io"
                width={160}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-white/90 mb-6">
              The ultimate marketplace for high-quality, niche-specific reel packs. 
              Buy and sell pre-curated content for social media success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Marketplace</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/browse" className="text-white/80 hover:text-white transition-colors">
                  Browse All Packs
                </Link>
              </li>
              <li>
                <Link href="/browse/popular" className="text-white/80 hover:text-white transition-colors">
                  Popular Packs
                </Link>
              </li>
              <li>
                <Link href="/browse/categories" className="text-white/80 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/browse/new" className="text-white/80 hover:text-white transition-colors">
                  Newly Added
                </Link>
              </li>
              <li>
                <Link href="/browse/sale" className="text-white/80 hover:text-white transition-colors">
                  On Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-white/80 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/80 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Join Our Newsletter</h4>
            <p className="text-white/90 mb-4">
              Stay updated with the latest reel packs and creator tips.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white"
              />
              <Button className="bg-white hover:bg-white/90 text-clipshop-purple" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-white/70 mt-2">
              By subscribing, you agree to our Privacy Policy and Terms.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} ClipsShop.io. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-white/70 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
