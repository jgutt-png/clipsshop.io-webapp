'use client'

import Image from "next/image"
import { Check, Upload, ShoppingBag, Clock, BarChart3, Repeat, CreditCard, Shield } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <Upload className="h-6 w-6 text-clipshop-purple" />,
      title: "Upload Your Content",
      description: "Package your best clips into packs and upload them to our marketplace."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-clipshop-purple" />,
      title: "Set Your Price",
      description: "You decide how much your reel packs are worth. Full control over your pricing."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-clipshop-purple" />,
      title: "Earn Passive Income",
      description: "Get paid every time someone purchases your reel packs. Scale your income."
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-clipshop-purple" />,
      title: "Browse Niche Packs",
      description: "Find the perfect content packs for your specific niche and audience."
    },
    {
      icon: <Clock className="h-6 w-6 text-clipshop-purple" />,
      title: "Save Creation Time",
      description: "Skip the hours of filming and editing. Post ready-made professional content."
    },
    {
      icon: <Repeat className="h-6 w-6 text-clipshop-purple" />,
      title: "Consistent Posting",
      description: "Maintain a regular posting schedule with our vast library of content."
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-clipshop-purple/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How ClipsShop <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're a content creator looking to monetize your work or a business needing quality content, 
            ClipsShop makes it simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover-lift border border-gray-100"
            >
              <div className="h-12 w-12 rounded-full bg-clipshop-purple/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-clipshop-purple/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Content Creators Love ClipsShop
              </h2>
              <p className="text-gray-700 mb-6">
                Join thousands of content creators who've discovered a new revenue stream by selling 
                their reel packs on ClipsShop.
              </p>
              <ul className="space-y-3">
                {[
                  "No monthly fees - only pay when you sell",
                  "Keep 85% of every sale you make",
                  "Reach thousands of potential customers",
                  "Detailed analytics to track your sales",
                  "Get paid directly to your bank account"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1 bg-clipshop-purple rounded-full p-1">
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Content Creators" 
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-clipshop-purple mr-2" />
                  <span className="font-medium text-sm">Secure Payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
