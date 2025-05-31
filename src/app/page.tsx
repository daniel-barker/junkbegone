import Link from "next/link";
import Image from "next/image";

// Add Google Fonts (for brush/dirty font)
import { Roboto } from 'next/font/google';

const brushFont = {
  fontFamily: '"Permanent Marker", "Brush Script MT", cursive',
};

export default function Home() {
  // Placeholder images for the photo grid
  const jobPhotos = [
    '/photos/job1.jpg',
    '/photos/job2.jpg',
    '/photos/job3.jpg',
    '/photos/job4.jpg',
    '/photos/job5.jpg',
    '/photos/job6.jpg',
  ];
  // Stencil-style icons (SVGs)
  const takeList = [
    { icon: '🛋️', label: 'Furniture' },
    { icon: '🛏️', label: 'Mattresses' },
    { icon: '🧱', label: 'Construction Debris' },
    { icon: '🌳', label: 'Yard Waste' },
    { icon: '🚚', label: 'Appliances' },
    { icon: '📦', label: 'Boxes & Junk' },
    { icon: '🖥️', label: 'Electronics' },
    { icon: '🪑', label: 'Office Cleanouts' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#222] text-white font-sans">
      {/* HERO SECTION */}
      <section className="w-full flex flex-col md:flex-row items-center md:items-stretch bg-[#2b2b2b] px-4 md:px-0 py-10 md:py-24 relative border-b-4 border-[#e94e3f]">
        {/* Left: Huge JBG, always far left */}
        <div className="w-full md:w-1/4 flex items-center md:justify-start justify-center mb-8 md:mb-0">
          <div className="text-[18vw] md:text-[9vw] font-extrabold leading-none tracking-tight select-none text-[#e94e3f] drop-shadow-lg md:text-left" style={{fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '-0.05em', lineHeight: '0.85'}}>
            <span className="block">Junk</span>
            <span className="block">Be</span>
            <span className="block">Gone</span>
            <span className="block">LLC</span>
          </div>
        </div>
        {/* Center: Billboard Text + Tagline + CTAs */}
        <div className="w-full md:w-2/4 flex flex-col justify-center items-center text-center gap-4">
          <h1 className="text-[8vw] md:text-[4vw] font-extrabold uppercase leading-tight text-white mb-2" style={{letterSpacing: '-0.04em'}}>Furniture, Appliances, Yard Waste & More</h1>
          <div className="mb-4">
            <span style={{...brushFont, fontSize: '2.2rem', color: '#e94e3f', textShadow: '2px 2px 0 #000, 0 2px 8px #0008'}} className="inline-block uppercase">
              Serving Indianapolis & Surrounding Areas
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
  <a href="mailto:collan@junkbegone317.com?subject=Junk%20Photo%20Quote" className="flex items-center gap-2 bg-white hover:bg-gray-200 text-[#2b2b2b] font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-colors">
    <span role="img" aria-label="photo">📷</span> Send a Photo
  </a>
  <a href="/contact" className="flex items-center gap-2 bg-[#e94e3f] hover:bg-[#c72e1c] text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-colors">
    <span role="img" aria-label="envelope">✉️</span> Contact Us
  </a>
</div>
<div className="text-sm text-gray-300 mt-4">
  <span className="font-bold">Collan:</span> 317-993-5240 &nbsp; <span className="font-bold">Paul:</span> 317-654-1715
</div>
        </div>
        {/* Right: Spacer for balance (optional for future use) */}
        <div className="hidden md:block md:w-1/4"></div>
      </section>

      {/* WHAT WE TAKE SECTION */}
      <section className="w-full py-10 md:py-16 bg-[#232323] border-b-4 border-[#e94e3f]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase mb-6 tracking-tight text-[#e94e3f]" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>Here’s What We’ll Take</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
            {takeList.map(({icon, label}) => (
              <li key={label} className="flex flex-col items-center text-center">
                <span className="text-5xl md:text-6xl mb-2 select-none" style={{filter: 'contrast(1.2) grayscale(0.3) drop-shadow(2px 2px 0 #111)'}}>{icon}</span>
                <span className="text-lg font-mono uppercase tracking-widest bg-[#191919] px-3 py-1 rounded shadow-inner border-2 border-dashed border-[#e94e3f] text-[#e94e3f]" style={{letterSpacing: '0.1em'}}>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PHOTO GRID SECTION */}
      <section className="w-full py-10 md:py-16 bg-[#181818] border-b-4 border-[#e94e3f]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-200 uppercase tracking-wide">Past Jobs</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {jobPhotos.map((src, i) => (
              <div key={i} className="relative aspect-square bg-[#333] rounded-lg overflow-hidden border-2 border-[#e94e3f] shadow-inner">
                <Image
                  src={src}
                  alt={`Job photo ${i+1}`}
                  fill
                  style={{objectFit: 'cover', filter: 'grayscale(0.2) contrast(1.1)'}}
                  className="opacity-90"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="/photos/placeholder.jpg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE SECTION */}
      <section className="w-full py-8 bg-[#191919] border-b-4 border-[#e94e3f]">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
          <blockquote className="italic text-2xl md:text-3xl text-[#e94e3f] text-center mb-4 font-semibold" style={{fontFamily: 'Permanent Marker, cursive'}}>“Send us a photo, we’ll handle the rest.”</blockquote>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#2b2b2b] py-8 px-4 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Fast Links */}
          <nav className="flex gap-6 mb-4 md:mb-0">
            <Link href="/" className="hover:underline text-white">Home</Link>
            <Link href="/services" className="hover:underline text-white">Services</Link>
            <Link href="/about" className="hover:underline text-white">About</Link>
            <Link href="/contact" className="hover:underline text-white">Contact</Link>
          </nav>
          {/* Big Phone Numbers */}
          <div className="flex flex-col items-center">
            <div className="text-lg md:text-xl font-bold text-white">Collan: 317-993-5240</div>
            <div className="text-lg md:text-xl font-bold text-white">Paul: 317-654-1715</div>
          </div>
          {/* Stickers */}
          <div className="flex gap-3">
            <span className="bg-[#e94e3f] text-white font-bold px-4 py-2 rounded-full text-sm shadow-md uppercase tracking-wide">Licensed</span>
            <span className="bg-[#e94e3f] text-white font-bold px-4 py-2 rounded-full text-sm shadow-md uppercase tracking-wide">Locally Owned</span>
            <span className="bg-[#e94e3f] text-white font-bold px-4 py-2 rounded-full text-sm shadow-md uppercase tracking-wide">Hauls Fast</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
