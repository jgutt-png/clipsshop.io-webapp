'use client'

import { useState, useEffect } from "react"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-clipshop-purple-light/20 via-transparent to-clipshop-purple/10 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-clipshop-purple/10 rounded-full filter blur-3xl opacity-70 animate-float"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-clipshop-purple-light/10 rounded-full filter blur-3xl opacity-60 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-clipshop-purple/10 rounded-full filter blur-3xl opacity-70 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`max-w-3xl transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-clipshop-purple-subtle text-clipshop-purple-dark font-medium text-sm">
              The Ultimate Reel Pack Marketplace
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover and Sell <span className="text-gradient">Stunning Reel Packs</span> for Any Niche
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Save time creating content or monetize your creativity. ClipsShop connects creators with 
              high-quality, niche-specific reel packs for social media success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/browse">
                <Button className="bg-clipshop-purple hover:bg-clipshop-purple-dark text-white px-8 py-6 rounded-full text-lg shadow-lg shadow-clipshop-purple/20 hover:shadow-xl hover:shadow-clipshop-purple/30 transition-all">
                  Browse Marketplace <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="outline" className="px-8 py-6 rounded-full border-2 text-lg">
                  How it Works <Play className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                <Image src="https://i.pravatar.cc/100?img=1" alt="User" width={40} height={40} className="rounded-full border-2 border-white" />
                <Image src="https://i.pravatar.cc/100?img=2" alt="User" width={40} height={40} className="rounded-full border-2 border-white" />
                <Image src="https://i.pravatar.cc/100?img=3" alt="User" width={40} height={40} className="rounded-full border-2 border-white" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-clipshop-purple flex items-center justify-center text-white font-medium text-xs">
                  50+
                </div>
              </div>
              <p className="text-sm text-gray-600">Joined by 1000+ content creators and buyers</p>
            </div>
          </div>

          <div className={`relative transition-all duration-700 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-2xl shadow-clipshop-purple/20">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Content Creator"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-clipshop-purple/20 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-xs text-center">
                  <h3 className="font-bold text-xl mb-2">Space Reels Pack</h3>
                  <p className="text-gray-600 mb-2">20 stunning reels of outer space</p>
                  <p className="text-clipshop-purple font-bold text-2xl">$49.99</p>
                  <Button className="mt-3 w-full bg-clipshop-purple">View Pack</Button>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 p-3 bg-white rounded-lg shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
              <span className="flex items-center">
                <span className="h-3 w-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-sm font-medium">1200+ Clips Available</span>
              </span>
            </div>
            <div className="absolute -bottom-6 -left-6 p-3 bg-white rounded-lg shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
              <span className="flex items-center">
                <span className="text-sm font-medium">Average Rating</span>
                <div className="flex ml-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
