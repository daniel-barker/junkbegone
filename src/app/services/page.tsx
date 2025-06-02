import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Junk Be Gone LLC",
  description:
    "Professional junk removal services including furniture removal, yard debris, appliances, and construction debris.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 bg-[#222] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#e94e3f]" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>Our Services</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-300">
          Junk Be Gone LLC offers a wide range of junk removal services to meet
          your needs. We handle everything from furniture and appliances to yard
          debris and construction waste.
        </p>

        <div className="bg-[#2b2b2b] border-2 border-[#e94e3f] p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-3 text-[#e94e3f]" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
            Important Pricing Factors
          </h2>
          <p className="text-gray-300 mb-4">
            To provide you with the most accurate quote, we consider several
            factors:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Presence and number of stairs</li>
            <li>Item location (upstairs, basement, backyard, etc.)</li>
            <li>Extra heavy items (pianos, safes, concrete, etc.)</li>
            <li>Whether items are bagged/separated or need sorting</li>
            <li>
              Special disposal fees (e.g., items containing freon cost $160
              each)
            </li>
          </ul>
          <p className="text-gray-300 italic">
            Photos of the items help us provide more accurate quotes!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Service 1 */}
          <div className="bg-[#191919] p-8 rounded-lg shadow-md border-2 border-[#e94e3f]">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#e94e3f] text-white rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-[#e94e3f]" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>Furniture Removal</h2>
            <p className="text-gray-300 mb-4">
              We remove all types of furniture including sofas, mattresses,
              tables, chairs, entertainment centers, and more. Whether
              you&apos;re replacing old furniture or clearing out an entire
              house, we&apos;ve got you covered.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Sofas and couches</li>
              <li>Mattresses and box springs</li>
              <li>Tables and chairs</li>
              <li>Dressers and wardrobes</li>
              <li>Entertainment centers</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-[#191919] p-8 rounded-lg shadow-md border-2 border-[#e94e3f]">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#e94e3f] text-white rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-[#e94e3f]" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>Yard Debris Removal</h2>
            <p className="text-gray-300 mb-4">
              We help clear your yard of debris, including branches, leaves, old
              fencing, landscaping materials, and more. Let us handle the heavy
              lifting so you can enjoy your outdoor space.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Tree branches and stumps</li>
              <li>Leaves and grass clippings</li>
              <li>Old fencing and decking</li>
              <li>Landscaping materials</li>
              <li>Outdoor furniture</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-[#191919] p-8 rounded-lg shadow-md border-2 border-[#e94e3f]">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#e94e3f] text-white rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-[#e94e3f]" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>Appliance Removal</h2>
            <p className="text-gray-300 mb-4">
              We remove all types of appliances, large and small. From
              refrigerators and washing machines to microwaves and toasters,
              we&apos;ll take care of it all.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Refrigerators and freezers</li>
              <li>Washers and dryers</li>
              <li>Stoves and ovens</li>
              <li>Dishwashers</li>
              <li>Small appliances</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-[#191919] p-8 rounded-lg shadow-md border-2 border-[#e94e3f]">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#e94e3f] text-white rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-[#e94e3f]" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>Construction Debris</h2>
            <p className="text-gray-300 mb-4">
              After a renovation or construction project, let us handle the
              cleanup. We remove drywall, lumber, tiles, and other construction
              materials.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Drywall and plaster</li>
              <li>Lumber and wood scraps</li>
              <li>Tiles and flooring</li>
              <li>Cabinets and countertops</li>
              <li>Metal and pipes</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Service 5 */}
          <div className="bg-[#191919] p-8 rounded-lg shadow-md border-2 border-[#e94e3f]">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#e94e3f] text-white rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-[#e94e3f]" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>Electronics Removal</h2>
            <p className="text-gray-300 mb-4">
              We safely dispose of all types of electronics, ensuring they are
              recycled properly when possible.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>TVs and monitors</li>
              <li>Computers and laptops</li>
              <li>Printers and office equipment</li>
              <li>Entertainment systems</li>
              <li>Other electronic devices</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-[#191919] p-8 rounded-lg shadow-md border-2 border-[#e94e3f]">
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#e94e3f] text-white rounded-full shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-[#e94e3f]" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>Specialty Items</h2>
            <p className="text-gray-300 mb-4">
              We handle various specialty items that require specific disposal
              methods.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Tires</li>
              <li>Items containing freon (additional fee applies)</li>
              <li>Heavy equipment</li>
              <li>Pianos and safes</li>
              <li>Concrete and heavy materials</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#232323] p-8 rounded-lg shadow-md mb-12 border-2 border-[#e94e3f]">
          <h2 className="text-2xl font-semibold mb-4 text-center text-[#e94e3f]" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#2b2b2b] p-6 rounded-lg border border-[#e94e3f]">
              <h3 className="text-xl font-semibold mb-3 text-[#e94e3f]">Property Cleanouts</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Garage cleanouts</li>
                <li>Basement cleanouts</li>
                <li>Attic cleanouts</li>
                <li>Storage unit cleanouts</li>
              </ul>
            </div>
            <div className="bg-[#2b2b2b] p-6 rounded-lg border border-[#e94e3f]">
              <h3 className="text-xl font-semibold mb-3 text-[#e94e3f]">
                Specialized Services
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Hoarding situation cleanouts</li>
                <li>Estate cleanouts</li>
                <li>Foreclosure cleanouts</li>
                <li>Moving debris removal</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-[#191919] p-8 rounded-lg shadow-md border-2 border-[#e94e3f]">
          <h2 className="text-2xl font-semibold mb-6 text-[#e94e3f]" style={{ fontFamily: "Impact, Arial Black, sans-serif" }}>
            Ready to get rid of your junk?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:3179935240"
              className="bg-[#e94e3f] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors"
            >
              Call Now: 317-993-5240
            </a>
            <Link
              href="/contact"
              className="bg-[#333] hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full shadow-lg border border-[#e94e3f] transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
