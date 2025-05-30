import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Junk Be Gone LLC",
  description: "Professional junk removal services including furniture removal, yard debris, appliances, and construction debris.",
};

export default function ServicesPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-[var(--spacing-container)]">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Junk Be Gone LLC offers a wide range of junk removal services to meet your needs. 
          We handle everything from furniture and appliances to yard debris and construction waste.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3">Furniture Removal</h2>
            <p className="text-gray-600 mb-4">
              We remove all types of furniture including sofas, mattresses, tables, chairs, 
              entertainment centers, and more. Whether you're replacing old furniture or 
              clearing out an entire house, we've got you covered.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Sofas and couches</li>
              <li>Mattresses and box springs</li>
              <li>Tables and chairs</li>
              <li>Dressers and wardrobes</li>
              <li>Entertainment centers</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3">Yard Debris Removal</h2>
            <p className="text-gray-600 mb-4">
              We help clear your yard of debris, including branches, leaves, old fencing, 
              landscaping materials, and more. Let us handle the heavy lifting so you can 
              enjoy your outdoor space.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Tree branches and stumps</li>
              <li>Leaves and grass clippings</li>
              <li>Old fencing and decking</li>
              <li>Landscaping materials</li>
              <li>Outdoor furniture</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3">Appliance Removal</h2>
            <p className="text-gray-600 mb-4">
              We remove all types of appliances, large and small. From refrigerators and 
              washing machines to microwaves and toasters, we'll take care of it all.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Refrigerators and freezers</li>
              <li>Washers and dryers</li>
              <li>Stoves and ovens</li>
              <li>Dishwashers</li>
              <li>Small appliances</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[var(--color-jbg-red)] text-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3">Construction Debris</h2>
            <p className="text-gray-600 mb-4">
              After a renovation or construction project, let us handle the cleanup. 
              We remove drywall, lumber, tiles, and other construction materials.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Drywall and plaster</li>
              <li>Lumber and wood scraps</li>
              <li>Tiles and flooring</li>
              <li>Cabinets and countertops</li>
              <li>Metal and pipes</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside text-gray-600">
              <li>Garage cleanouts</li>
              <li>Basement cleanouts</li>
              <li>Attic cleanouts</li>
              <li>Storage unit cleanouts</li>
            </ul>
            <ul className="list-disc list-inside text-gray-600">
              <li>Office cleanouts</li>
              <li>Estate cleanouts</li>
              <li>Foreclosure cleanouts</li>
              <li>Moving debris removal</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Ready to get rid of your junk?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:3179935240" className="bg-[var(--color-jbg-red)] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-colors">
              Call Now: 317-993-5240
            </a>
            <Link href="/contact" className="bg-[var(--color-jbg-dark)] hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
