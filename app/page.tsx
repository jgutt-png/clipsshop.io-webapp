"use client";

import { useState } from "react";
import "./../app/app.css";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white">
        <nav className="flex items-center justify-between py-2 px-4 lg:px-6 bg-white shadow-[0_4px_10px_-2px_rgba(0,0,0,0.15)]" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ReUp</span>
              <img 
                className="h-10 w-auto" 
                src="https://reup-main-website.s3.us-east-2.amazonaws.com/Logo_blue_web.png" 
                alt="ReUp Logo" 
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-6">
            <a href="#" className="text-base font-semibold leading-6 text-gray-900 hover:text-primary transition-colors">Product</a>
            <a href="#" className="text-base font-semibold leading-6 text-gray-900 hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-base font-semibold leading-6 text-gray-900 hover:text-primary transition-colors">Marketplace</a>
            <a href="#" className="text-base font-semibold leading-6 text-gray-900 hover:text-primary transition-colors">Company</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a 
              href="#" 
              className="group rounded-full px-5 py-2 text-base font-semibold text-primary hover:border-2 hover:border-primary transition-all duration-300 ease-in-out"
            >
              Get Started
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                <svg className="h-4 w-4 inline-block -mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </div>
        </nav>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">ReUp</span>
                  <img 
                    className="h-10 w-auto" 
                    src="https://reup-main-website.s3.us-east-2.amazonaws.com/Logo_blue_web.png" 
                    alt="ReUp Logo" 
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-primary/10">Product</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-primary/10">Features</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-primary/10">Marketplace</a>
                    <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-primary/10">Company</a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="group flex items-center justify-center rounded-full px-5 py-2 text-base font-semibold text-primary hover:border-2 hover:border-primary transition-all duration-300 ease-in-out"
                    >
                      Get Started
                      <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                        <svg className="h-4 w-4 inline-block -mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  Announcing our next round of funding.{' '}
                  <a href="#" className="font-semibold text-white">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Next-Gen Real Estate Home Customization
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                  fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-lg border border-transparent bg-[#017ca2] px-4 py-3 text-base font-semibold text-white shadow-sm hover:border-white hover:bg-transparent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
                  >
                    Get started
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured section */}
        <div className="featured-section">
          <div className="gradient-blur -top-40 sm:-top-80" aria-hidden="true">
            <div className="gradient-element left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
          
          <h2 className="featured-heading">AS FEATURED IN</h2>
          <div className="featured-logos">
            <div className="logos-container">
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/ccde7660-69ac-4027-beb9-13bd63082194/yahoo.png?format=2500w" alt="yahoo finance" />
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/c730d06b-33e7-40c9-b483-a389971f42c5/Medium.png?format=2500w" alt="Medium" />
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/e5f92043-2fcf-49dd-b8fb-9a40204c0708/realtor.png?format=2500w" alt="Realtor.com" />
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/388ff6c2-6efc-4133-a2e3-25f7ef42a5db/franchise+times.png?format=2500w" alt="Franchise Times" />
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/de94a23d-93d0-42fc-b442-97d83334832c/EIN+Presswire.png?format=2500w" alt="EIN Presswire" />
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/c8efeac8-5b8e-4ecb-a402-77d7854026e3/Crunchbase.png?format=2500w" alt="Crunchbase" />
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/0c5e26f9-cdcc-48fb-b082-418b00e756a1/Authority+Magazine.png?format=500w" alt="Authority Magazine" />
              {/* Duplicate for seamless scrolling */}
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/ccde7660-69ac-4027-beb9-13bd63082194/yahoo.png?format=2500w" alt="yahoo finance" />
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/c730d06b-33e7-40c9-b483-a389971f42c5/Medium.png?format=2500w" alt="Medium" />
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/e5f92043-2fcf-49dd-b8fb-9a40204c0708/realtor.png?format=2500w" alt="Realtor.com" />
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/388ff6c2-6efc-4133-a2e3-25f7ef42a5db/franchise+times.png?format=2500w" alt="Franchise Times" />
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/de94a23d-93d0-42fc-b442-97d83334832c/EIN+Presswire.png?format=2500w" alt="EIN Presswire" />
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/c8efeac8-5b8e-4ecb-a402-77d7854026e3/Crunchbase.png?format=2500w" alt="Crunchbase" />
              <img src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/0c5e26f9-cdcc-48fb-b082-418b00e756a1/Authority+Magazine.png?format=500w" alt="Authority Magazine" />
            </div>
          </div>

          <div className="gradient-blur top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="gradient-element left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
          </div>

          {/* Feature section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="inline-flex">
                <a 
                  href="https://ca.finance.yahoo.com/news/reup-livings-recent-expansion-innovation-140000335.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative rounded-full px-4 py-1.5 text-sm font-semibold text-[#017ca2] ring-1 ring-inset ring-[#017ca2]/20 hover:ring-[#017ca2]/30 transition-all duration-300"
                >
                  <span className="flex items-center gap-x-2">
                    Revolutionizing Home Renovation
                    <span className="font-semibold group-hover:translate-x-0.5 transition-transform duration-300">
                      Read more <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </a>
              </div>
              <p className="mt-6 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Everything you need to transform your home</p>
              <p className="mt-6 text-pretty text-lg/8 text-gray-600 max-w-2xl">Our innovative platform combines AI technology with expert craftsmanship to deliver stunning home renovations that are both cost-effective and value-enhancing.</p>
            </div>

            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/66cdfa77f073ba2e3e560ff6/1705018644729-RQBKQNLWDQRXS1VKXM3P/Reup+Website+Mockup+2.png" 
                  alt="ReUp Platform Screenshot" 
                  width="2432" 
                  height="1442" 
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[#017ca2]">
                      <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75Z" />
                      </svg>
                    </div>
                    AI-Powered Design
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">Advanced AI technology that helps visualize your renovation before it begins, ensuring your vision comes to life exactly as planned.</dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[#017ca2]">
                      <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25Z" />
                      </svg>
                    </div>
                    Verified Contractors
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">Work with our network of thoroughly vetted, professional contractors who deliver exceptional quality and reliability.</dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[#017ca2]">
                      <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    </div>
                    Smart Financing
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">Flexible financing options that make your dream renovation affordable, with transparent terms and competitive rates.</dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-[#017ca2]">
                      <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                      </svg>
                    </div>
                    Project Protection
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">Comprehensive project management and quality assurance to ensure your renovation is completed on time and to your satisfaction.</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
