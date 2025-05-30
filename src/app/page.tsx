import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[var(--color-jbg-dark)] text-white py-20">
        <div className="absolute inset-0 z-0 opacity-30">
          {/* Placeholder for background image */}
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 bg-cover bg-center"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-[var(--spacing-container)] text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Junk Be Gone LLC</h1>
          <p className="text-xl md:text-2xl mb-8">Junkouts, Hauling, and more!</p>
          <p className="text-lg mb-10">Licensed and Insured.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:3179935240" className="bg-[var(--color-jbg-red)] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-colors">
              Call Now
            </a>
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-[var(--color-jbg-dark)] font-bold py-3 px-6 rounded-md transition-colors">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-[var(--spacing-container)]">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Furniture Removal</h3>
              <p className="text-gray-600">Old couches, mattresses, tables, and more - we'll take it all away.</p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Yard Debris</h3>
              <p className="text-gray-600">From leaves and branches to old fencing and landscaping materials.</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Appliances</h3>
              <p className="text-gray-600">Refrigerators, washers, dryers, and other heavy appliances.</p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Construction Debris</h3>
              <p className="text-gray-600">Drywall, lumber, tiles, and other renovation waste.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-block bg-[var(--color-jbg-dark)] hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-[var(--spacing-container)]">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">We're fully licensed and insured, so you can trust us to handle your junk removal needs safely and professionally.</p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Friendly</h3>
              <p className="text-gray-600">Our team works efficiently to get your space cleared quickly, with a friendly attitude that makes the process stress-free.</p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable</h3>
              <p className="text-gray-600">We offer competitive pricing with no hidden fees. Get a free estimate and see how we can save you money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-[var(--spacing-container)]">
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[var(--color-jbg-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="ml-2 font-semibold">Licensed</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[var(--color-jbg-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="ml-2 font-semibold">Insured</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[var(--color-jbg-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="ml-2 font-semibold">Fast Service</span>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[var(--color-jbg-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="ml-2 font-semibold">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
