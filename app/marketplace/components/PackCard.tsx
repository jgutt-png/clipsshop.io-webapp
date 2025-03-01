'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Play, Pause, Eye } from "lucide-react"
import { Button } from "./ui/button"
import type { ReelPack } from "../lib/types"

interface PackCardProps {
  pack: ReelPack
  featured?: boolean
}

export default function PackCard({ pack, featured = false }: PackCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handlePlayToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsPlaying(!isPlaying)
  }

  return (
    <Link
      href={`/browse/${pack.id}`}
      className={`group relative overflow-hidden rounded-xl ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      } hover-lift bg-white`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video relative overflow-hidden rounded-t-xl">
        <Image
          src={pack.thumbnailUrl}
          alt={pack.title}
          width={800}
          height={450}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Video play button overlay */}
        <div 
          className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={handlePlayToggle}
            className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-white" />
            ) : (
              <Play className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
        
        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
            {pack.category}
          </span>
        </div>
        
        {/* Pack details overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs rounded-full font-medium">
            {pack.numberOfClips} clips • {pack.totalDuration}
          </span>
          <div className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-yellow-500 text-xs rounded-full font-medium">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            <span>{pack.rating.toFixed(1)}</span>
            <span className="text-gray-500">({pack.reviewCount})</span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg transition-colors group-hover:text-clipshop-purple">
              {pack.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">{pack.description}</p>
          </div>
          <div className="text-clipshop-purple font-bold text-xl">${pack.price}</div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={pack.seller.profileImage || "https://i.pravatar.cc/100?img=33"}
              alt={pack.seller.name}
              width={32}
              height={32}
              className="h-8 w-8 rounded-full mr-2 border border-gray-200"
            />
            <span className="text-sm text-gray-700">{pack.seller.name}</span>
            {pack.seller.isVerified && (
              <svg
                className="h-4 w-4 ml-1 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" className="bg-clipshop-purple">
              <ShoppingCart className="h-4 w-4 mr-1" /> Buy Now
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
