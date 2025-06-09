import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junk Be Gone LLC | Junkouts, Hauling, and more!",
  description:
    "Licensed and insured junk removal services in Indiana. Furniture removal, yard debris, appliances, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-[var(--color-jbg-dark)] text-white shadow-md">
          <div className="max-w-7xl mx-auto px-[var(--spacing-container)] py-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="hover:opacity-90 transition-opacity">
                <Image
                  src="/images/logo2.png"
                  alt="Junk Be Gone LLC"
                  width={180}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <nav className="flex items-center">
              <ul className="flex space-x-6 mr-4">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-[var(--color-jbg-red)] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white hover:text-[var(--color-jbg-red)] transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white hover:text-[var(--color-jbg-red)] transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-[var(--color-jbg-red)] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <Link
                href="/contact"
                className="hidden md:flex items-center bg-[var(--color-jbg-red)] hover:bg-[#c72e1c] text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-[var(--color-jbg-dark)] text-white py-8">
          <Analytics />
          <div className="max-w-7xl mx-auto px-[var(--spacing-container)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Link href="/" className="block mb-4">
                  <Image
                    src="/images/logo2.png"
                    alt="Junk Be Gone LLC"
                    width={150}
                    height={42}
                    className="h-10 w-auto"
                  />
                </Link>
                <p className="mb-2">Licensed and Insured.</p>
                <p className="mb-2">Junkouts, Hauling, and more!</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="mb-2">
                  <a
                    href="tel:3179935240"
                    className="hover:text-[var(--color-jbg-red)] transition-colors"
                  >
                    Collan: 317-993-5240
                  </a>
                </p>
                <p className="mb-4">
                  <a
                    href="tel:3176541715"
                    className="hover:text-[var(--color-jbg-red)] transition-colors"
                  >
                    Paul: 317-654-1715
                  </a>
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[var(--color-jbg-red)] hover:bg-[#c72e1c] text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-[var(--color-jbg-red)] transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-[var(--color-jbg-red)] transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-[var(--color-jbg-red)] transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-[var(--color-jbg-red)] transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/people/Junk-Be-Gone-LLC/61559612661609/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-jbg-red)] transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-700 text-center">
              <p className="mb-2">
                &copy; {new Date().getFullYear()} Junk Be Gone LLC. All rights
                reserved.
              </p>
              <p className="text-sm text-gray-400">
                We don&apos;t sell or share your data. Your info is only used to
                provide junk removal services.
              </p>
            </div>
          </div>
        </footer>

        {/* Sticky quote button for mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--color-jbg-dark)] text-white py-3 px-4 flex justify-center z-50">
          <a
            href="/contact"
            className="bg-[var(--color-jbg-red)] text-white px-6 py-3 rounded-md font-medium text-center w-full max-w-xs flex items-center justify-center"
          >
            Get a Free Quote
          </a>
        </div>
      </body>
    </html>
  );
}
