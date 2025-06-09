import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Junk Be Gone LLC | Indiana Junk Removal Experts",
  description:
    "Discover Junk Be Gone LLC – your trusted, local junk removal company in Indiana. We offer fast, professional junk hauling, appliance removal, yard waste removal, house cleanouts, and hoarding cleanup services.",
};

export default function AboutPage() {
  return (
    <main
      className="py-16 bg-[#222] text-white"
      aria-label="About Junk Be Gone LLC"
    >
      {/* LocalBusiness Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Junk Be Gone LLC",
            image: "",
            "@id": "https://junkbegone3117.com",
            url: "https://junkbegone3117.com",
            telephone: ["+13179935240", "+13176541715"],
            address: {
              "@type": "PostalAddress",
              addressRegion: "IN",
              addressCountry: "US",
            },
            areaServed: "Indiana",
            founders: [
              { "@type": "Person", name: "Collan" },
              { "@type": "Person", name: "Paul" },
            ],
            description:
              "Junk Be Gone LLC is a locally owned junk removal company serving Indiana. We offer junk hauling, appliance removal, yard waste removal, house cleanouts, and hoarding cleanup. Fast, professional, and friendly service.",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+13179935240",
                contactType: "customer service",
                name: "Collan",
              },
              {
                "@type": "ContactPoint",
                telephone: "+13176541715",
                contactType: "customer service",
                name: "Paul",
              },
            ],
            sameAs: [],
          }),
        }}
      />
      <div className="max-w-4xl mx-auto px-[var(--spacing-container)]">
        {/* Hero Section */}
        <header
          className="mb-12 border-b-4 border-[#e94e3f] pb-8"
          aria-label="Junk Be Gone LLC Introduction"
        >
          <h1
            className="text-4xl font-bold mb-8 text-center text-[#e94e3f]"
            style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
          >
            Meet the Team Behind Junk Be Gone LLC
          </h1>
          <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto">
            We’re Collan and Paul—Indiana locals, lifelong friends, and proud
            co-owners of Junk Be Gone LLC. As your trusted junk removal experts,
            we help our neighbors with fast, professional junk hauling,
            appliance removal, yard waste removal, and house cleanouts across
            Indiana. Our mission: clear out the clutter, reclaim your space, and
            get it done right.
          </p>
        </header>

        {/* Our Story & Values */}
        <section
          className="mb-16 bg-[#2b2b2b] p-8 rounded-lg border-2 border-[#e94e3f]"
          aria-label="Our Story and Values"
        >
          <h2
            className="text-2xl font-semibold mb-4 text-[#e94e3f] text-center"
            style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
          >
            Indiana&#39;s Local Junk Removal Story
          </h2>
          <p className="text-base md:text-lg mb-4 text-gray-300">
            Junk Be Gone LLC was built from the ground up by two friends who
            value honest work, fast turnaround, and treating every customer like
            a neighbor. Whether you need appliance removal, a full house
            cleanout, or hoarding cleanup—we&#39;re here to make the process
            simple, stress-free, and affordable. Our roots are in Indiana, and
            we&#39;re proud to serve our local community with reliable, friendly
            junk removal services.
          </p>
        </section>

        {/* What Sets Us Apart */}
        <section
          className="mb-16 bg-[#232323] p-8 rounded-lg border-2 border-[#e94e3f]"
          aria-label="Why Choose Junk Be Gone LLC"
        >
          <h2
            className="text-2xl font-semibold mb-4 text-[#e94e3f] text-center"
            style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
          >
            What Sets Us Apart
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <li>
              <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center bg-[var(--color-jbg-dark)] text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="block font-bold mb-1 text-white">
                Locally Owned &amp; Operated
              </span>
              <span className="text-gray-300">
                We’re proud to serve Indiana with local junk removal, not big
                franchises—just real people you can trust for junk hauling and
                house cleanouts.
              </span>
            </li>
            <li>
              <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center bg-[var(--color-jbg-dark)] text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1"
                  />
                </svg>
              </div>
              <span className="block font-bold mb-1 text-white">
                Quick &amp; Efficient
              </span>
              <span className="text-gray-300">
                We offer fast junk pickup, same-day junk removal, and efficient
                appliance removal—minimal hassle, maximum results for your
                Indiana home or business.
              </span>
            </li>
            <li>
              <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center bg-[var(--color-jbg-dark)] text-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3"
                  />
                </svg>
              </div>
              <span className="block font-bold mb-1 text-white">
                No Job Too Big (or Small)
              </span>
              <span className="text-gray-300">
                From single-item junk pickups to entire house cleanouts—even
                hoarding cleanup jobs—we&apos;re up for the challenge.
              </span>
            </li>
          </ul>
        </section>

        {/* Meet the Owners */}
        <section className="mb-16 bg-[#191919] p-8 rounded-lg border-2 border-[#e94e3f]">
          <h2
            className="text-2xl font-semibold mb-4 text-[#e94e3f] text-center"
            style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
          >
            Meet Your Indiana Junk Removal Team: Collan &amp; Paul
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center bg-[#2b2b2b] p-6 rounded-lg border border-[#e94e3f]">
              <span className="block font-bold text-lg mb-1 text-white">
                Collan
              </span>
              <span className="block text-gray-300 mb-2">
                Co-Owner &amp; Operator
              </span>
              <span className="block text-gray-400 mb-2 italic">
                &quot;I&#39;m all about getting your junk gone—fast, affordable, and with
                zero stress. If you need junk removal in Indiana, appliance
                pickup, or a house cleanout, I&#39;m your guy.&quot;
              </span>
              <a
                href="tel:3179935240"
                className="inline-block mt-2 bg-[#e94e3f] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
                aria-label="Call Collan for junk removal in Indiana"
              >
                Call Collan: 317-993-5240
              </a>
            </div>
            <div className="text-center bg-[#2b2b2b] p-6 rounded-lg border border-[#e94e3f]">
              <span className="block font-bold text-lg mb-1 text-white">
                Paul
              </span>
              <span className="block text-gray-300 mb-2">
                Co-Owner &amp; Operator
              </span>
              <span className="block text-gray-400 mb-2 italic">
                &quot;We&#39;re proud to be Indiana&#39;s go-to team for local junk hauling,
                yard waste removal, and hoarding cleanup. No call centers, just
                honest, hard work and real results.&quot;
              </span>
              <a
                href="tel:3176541715"
                className="inline-block mt-2 bg-[#e94e3f] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
                aria-label="Call Paul for junk removal in Indiana"
              >
                Call Paul: 317-654-1715
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-[#232323] p-8 rounded-lg border-2 border-[#e94e3f]">
          <h2
            className="text-2xl font-semibold mb-4 text-[#e94e3f]"
            style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
          >
            Ready for Fast, Local Junk Removal in Indiana?
          </h2>
          <p className="mb-6 text-gray-300 max-w-xl mx-auto">
            Whether you need a single appliance removed, yard waste cleaned up,
            or a whole house cleared out, Junk Be Gone LLC is here for you. See
            our{" "}
            <Link
              href="/services"
              className="text-[#e94e3f] underline font-semibold"
            >
              junk removal services
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-white underline font-semibold"
            >
              contact us
            </Link>{" "}
            to get started today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:3179935240"
              className="bg-[#e94e3f] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors"
              aria-label="Call Collan for Indiana junk removal"
            >
              Call Collan
            </a>
            <a
              href="tel:3176541715"
              className="bg-[#e94e3f] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors"
              aria-label="Call Paul for Indiana junk removal"
            >
              Call Paul
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
