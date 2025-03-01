'use client'

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import PackCard from "./PackCard"
import type { ReelPack } from "../lib/types"

// Sample data for demonstration
const featuredPacks: ReelPack[] = [
  {
    id: "1",
    title: "Space Exploration Ultimate Pack",
    description: "25 stunning space-themed reels with cosmic visuals and ambient music. Perfect for tech, science, and futuristic accounts.",
    price: 49.99,
    thumbnailUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Space",
    tags: ["space", "cosmos", "stars", "planets", "galaxy"],
    numberOfClips: 25,
    totalDuration: "12:30",
    seller: {
      id: "s1",
      name: "Cosmic Studios",
      email: "contact@cosmicstudios.com",
      profileImage: "https://i.pravatar.cc/100?img=11",
      isVerified: true,
      joinedDate: new Date(2022, 5, 15)
    },
    rating: 4.9,
    reviewCount: 128,
    createdAt: new Date(2023, 2, 10)
  },
  {
    id: "2",
    title: "Urban Fashion Collection",
    description: "Modern streetwear outfits in urban settings. Trendy transitions and effects included.",
    price: 39.99,
    thumbnailUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
    tags: ["fashion", "streetwear", "urban", "outfits", "style"],
    numberOfClips: 18,
    totalDuration: "8:45",
    seller: {
      id: "s2",
      name: "Urban Vibes",
      email: "contact@urbanvibes.com",
      profileImage: "https://i.pravatar.cc/100?img=12",
      isVerified: true,
      joinedDate: new Date(2022, 3, 22)
    },
    rating: 4.7,
    reviewCount: 93,
    createdAt: new Date(2023, 1, 5)
  },
  {
    id: "3",
    title: "Travel Wanderlust Bundle",
    description: "Breathtaking landscapes and travel moments from around the world. Drone shots included.",
    price: 59.99,
    thumbnailUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Travel",
    tags: ["travel", "adventure", "landscape", "nature", "wanderlust"],
    numberOfClips: 30,
    totalDuration: "15:20",
    seller: {
      id: "s3",
      name: "Globe Trotters",
      email: "hello@globetrotters.com",
      profileImage: "https://i.pravatar.cc/100?img=13",
      isVerified: true,
      joinedDate: new Date(2022, 1, 10)
    },
    rating: 4.8,
    reviewCount: 156,
    createdAt: new Date(2023, 0, 20)
  },
  {
    id: "4",
    title: "Tech & Coding Essentials",
    description: "Modern workspaces, coding screens, and tech gadgets. Perfect for tech influencers and businesses.",
    price: 44.99,
    thumbnailUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Technology",
    tags: ["tech", "coding", "programming", "developer", "workplace"],
    numberOfClips: 22,
    totalDuration: "10:15",
    seller: {
      id: "s4",
      name: "Code Crafters",
      email: "info@codecrafters.dev",
      profileImage: "https://i.pravatar.cc/100?img=14",
      isVerified: false,
      joinedDate: new Date(2022, 7, 5)
    },
    rating: 4.6,
    reviewCount: 78,
    createdAt: new Date(2023, 3, 15)
  },
]

const categories = [
  "All",
  "Fashion",
  "Travel",
  "Food",
  "Fitness",
  "Beauty",
  "Tech",
  "Space",
  "Nature"
]

export default function MarketplaceSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trending <span className="text-gradient">Reel Packs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our top-selling reel packs that creators and businesses love. 
              High-quality content ready for your social media growth.
            </p>
          </div>
          <Link href="/browse" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              View All Packs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-clipshop-purple text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPacks.map((pack, index) => (
            <PackCard 
              key={pack.id} 
              pack={pack} 
              featured={index === 0}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/browse">
            <Button size="lg" className="bg-clipshop-purple hover:bg-clipshop-purple-dark">
              Explore All Reel Packs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
