import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Junk Be Gone LLC",
  description: "Contact Junk Be Gone LLC for junk removal services in Indiana. Get a free estimate or call us directly.",
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-[var(--spacing-container)]">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Have junk that needs to be removed? Contact us today for a free estimate or to schedule a pickup.
          We're ready to help you reclaim your space!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Get a Free Estimate</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-jbg-red)]"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-jbg-red)]"
                  placeholder="Your phone number"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-jbg-red)]"
                  placeholder="Where the junk is located"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description of Items
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-jbg-red)]"
                  placeholder="Please describe the items you need removed"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-[var(--color-jbg-red)] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-jbg-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium">Phone</p>
                    <p className="text-gray-600">
                      <a href="tel:3179935240" className="hover:text-[var(--color-jbg-red)]">Collan: 317-993-5240</a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:3176541715" className="hover:text-[var(--color-jbg-red)]">Paul: 317-654-1715</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-jbg-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium">Business Hours</p>
                    <p className="text-gray-600">Monday - Friday: 8am - 6pm</p>
                    <p className="text-gray-600">Saturday: 9am - 4pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-jbg-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium">Service Area</p>
                    <p className="text-gray-600">Indianapolis and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Map Placeholder */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-500">Google Map Embed</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg mb-6">Call us directly for same-day service when available.</p>
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
