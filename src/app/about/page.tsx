import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Junk Be Gone LLC",
  description: "Learn about Junk Be Gone LLC, a local, family-run junk removal business proudly serving Indiana.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-[var(--spacing-container)]">
        <h1 className="text-4xl font-bold mb-8 text-center">About Junk Be Gone LLC</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg mb-6">
              Junk Be Gone LLC is a local, family-run business proudly serving Indiana. 
              We specialize in junk removal services for residential and commercial properties, 
              helping our customers reclaim their space and peace of mind.
            </p>
            <p className="text-lg mb-6">
              Founded with a commitment to exceptional service, reliability, and environmental 
              responsibility, we've quickly become a trusted name in junk removal throughout the region.
            </p>
            <p className="text-lg mb-6">
              Our team is dedicated to making the junk removal process as simple and stress-free 
              as possible. We arrive on time, work efficiently, and always leave your property 
              clean and tidy.
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="/services" className="bg-[var(--color-jbg-dark)] hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Our Services
              </Link>
              <Link href="/contact" className="bg-[var(--color-jbg-red)] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            {/* Placeholder for truck image */}
            <div className="text-center p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
              <p className="text-gray-500">Image of Junk-Hauling Truck</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Junk Be Gone LLC?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                We're fully licensed and insured, giving you peace of mind when we're working on your property.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Team</h3>
              <p className="text-gray-600">
                As a local business, we take pride in serving our community with friendly, personalized service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prompt & Reliable</h3>
              <p className="text-gray-600">
                We show up on time and get the job done efficiently, respecting your schedule and property.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Ready to work with us?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:3179935240" className="bg-[var(--color-jbg-red)] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-colors">
              Call Collan: 317-993-5240
            </a>
            <a href="tel:3176541715" className="bg-[var(--color-jbg-red)] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-colors">
              Call Paul: 317-654-1715
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
