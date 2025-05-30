import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
  description: "Licensed and insured junk removal services in Indiana. Furniture removal, yard debris, appliances, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-[var(--color-jbg-dark)] text-white shadow-md">
          <div className="max-w-7xl mx-auto px-[var(--spacing-container)] py-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-white hover:text-[var(--color-jbg-red)] transition-colors">
                Junk Be Gone LLC
              </Link>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="text-white hover:text-[var(--color-jbg-red)] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white hover:text-[var(--color-jbg-red)] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-[var(--color-jbg-red)] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-[var(--color-jbg-red)] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-[var(--color-jbg-dark)] text-white py-8">
          <div className="max-w-7xl mx-auto px-[var(--spacing-container)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Junk Be Gone LLC</h3>
                <p className="mb-2">Licensed and Insured.</p>
                <p className="mb-2">Junkouts, Hauling, and more!</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="mb-2">
                  <a href="tel:3179935240" className="hover:text-[var(--color-jbg-red)] transition-colors">Collan: 317-993-5240</a>
                </p>
                <p className="mb-2">
                  <a href="tel:3176541715" className="hover:text-[var(--color-jbg-red)] transition-colors">Paul: 317-654-1715</a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="hover:text-[var(--color-jbg-red)] transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-[var(--color-jbg-red)] transition-colors">Services</Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-[var(--color-jbg-red)] transition-colors">About</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[var(--color-jbg-red)] transition-colors">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-700 text-center">
              <p>&copy; {new Date().getFullYear()} Junk Be Gone LLC. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Sticky phone bar for mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--color-jbg-dark)] text-white py-2 px-4 flex justify-around z-50">
          <a href="tel:3179935240" className="bg-[var(--color-jbg-red)] text-white px-4 py-2 rounded-md font-medium">
            Call Collan
          </a>
          <a href="tel:3176541715" className="bg-[var(--color-jbg-red)] text-white px-4 py-2 rounded-md font-medium">
            Call Paul
          </a>
        </div>
      </body>
    </html>
  );
}
