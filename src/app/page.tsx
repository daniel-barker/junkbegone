import PhotoGallery from "../components/PhotoGallery";

// Add Google Fonts (for brush/dirty font)

const brushFont = {
  fontFamily: "Inter, system-ui, sans-serif",
  fontStyle: "italic",
  fontWeight: "600",
};

export default function Home() {
  // Photo gallery with descriptions
  const jobPhotos = [
    {
      src: "/images/jobs/basement-cleanout-after-junk-removal-indianapolis.jpg",
      alt: "Basement after a complete cleanout showing empty, clean space",
      caption: "From Cluttered to Clean: Basement Transformation in Indy",
    },
    {
      src: "/images/jobs/garage-cleanout-before-junk-removal-indianapolis.jpg",
      alt: "Garage filled with various items before cleanup",
      caption: "Before: Packed Garage Ready for Revival",
    },
    {
      src: "/images/jobs/garage-junk-removal-progress-indianapolis.jpg",
      alt: "Garage during the cleanup process",
      caption: "Making Progress: Garage Cleanout in Action",
    },

    {
      src: "/images/jobs/junk-hauling-truck-loaded-junk-be-gone-indianapolis.jpg",
      alt: "Truck loaded with removed items",
      caption: "Another Full Load Headed Out: No Job Too Big!",
    },
    {
      src: "/images/jobs/porch-deck-cleanup-after-junk-removal-indianapolis.jpg",
      alt: "Clean porch after junk removal",
      caption: "Porch Perfection: From Cluttered to Clear",
    },
    {
      src: "/images/jobs/porch-deck-cleanup-after-junk-removal-indianapolis-before.jpg",
      alt: "Porch before cleanup showing accumulated items",
      caption: "Before: Porch Ready for Cleanup",
    },
    {
      src: "/images/jobs/basement-stairwell-area-cleaned-indianapolis-junk-removal.jpg",
      alt: "Clean basement stairwell after junk removal",
      caption: "Clear Path Ahead: Basement Stairwell Transformation",
    },
    {
      src: "/images/jobs/junk-removal-furniture-haul-indianapolis-junk-be-gone.jpg",
      alt: "Large furniture removal in progress",
      caption: "Big Items? No Problem: Furniture Removal Made Easy",
    },
    {
      src: "/images/jobs/junk-be-gone-basement-cleanout-before-junk-removal-indianapolis.jpg",
      alt: "Basement before cleanup showing accumulated items",
      caption: "Before: Basement Ready for a Fresh Start",
    },
    {
      src: "/images/jobs/gravel-bed-cleared-sideyard-indianapolis-1.jpeg",
      alt: "Side yard cleared of gravel and debris",
      caption: "Side Yard Transformation: Heavy Material Removal",
    },
    {
      src: "/images/jobs/gravel-haulaway-junk-removal-indianapolis.jpg.jpg",
      alt: "Gravel removal and hauling project",
      caption: "Heavy Lifting: Gravel Removal Project",
    },
    {
      src: "/images/jobs/porch-cleanout-junk-removal-indianapolis-junk-be-gone.jpg.jpg",
      alt: "Porch during cleanup process",
      caption: "Porch Cleanup: Work in Progress",
    },
  ];
  // Stencil-style icons (SVGs)
  const takeList = [
    { icon: "🛋️", label: "Furniture" },
    { icon: "🛏️", label: "Mattresses" },
    { icon: "🧱", label: "Construction Debris" },
    { icon: "🌳", label: "Yard Waste" },
    { icon: "🚚", label: "Appliances" },
    { icon: "📦", label: "Boxes & Junk" },
    { icon: "🖥️", label: "Electronics" },
    { icon: "🪑", label: "Office Cleanouts" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#222] text-white font-sans">
      {/* HERO SECTION */}
      <section className="w-full flex flex-col md:flex-row items-center md:items-stretch bg-[#2b2b2b] px-4 md:px-0 py-10 md:py-24 relative border-b-4 border-[#e94e3f]">
        {/* Left: Huge JBG, always far left */}
        <div className="w-full md:w-1/4 flex items-center md:justify-start justify-center mb-8 md:mb-0">
          <div
            className="text-[18vw] ml-6 md:text-[9vw] font-extrabold leading-none tracking-tight select-none text-[#e94e3f] drop-shadow-lg md:text-left"
            style={{
              fontFamily: "Impact, Arial Black, sans-serif",
              letterSpacing: "-0.05em",
              lineHeight: "0.85",
            }}
          >
            <span className="block">{""}Junk</span>
            <span className="block">Be</span>
            <span className="block">Gone</span>
            <span className="block">LLC</span>
          </div>
        </div>
        {/* Center: Billboard Text + Tagline + CTAs */}
        <div className="w-full md:w-2/4 flex flex-col justify-center items-center text-center gap-4">
          <h1
            className="text-[8vw] md:text-[4vw] font-extrabold uppercase leading-tight text-white mb-2"
            style={{ letterSpacing: "-0.04em" }}
          >
            Furniture, Appliances, Yard Waste & More
          </h1>
          <div className="mb-4">
            <span
              style={{
                ...brushFont,
                fontSize: "2.2rem",
                color: "#e94e3f",
                textShadow: "2px 2px 0 #000, 0 2px 8px #0008",
              }}
              className="inline-block uppercase"
            >
              Serving Indianapolis & Surrounding Areas
            </span>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="/contact"
              className="flex items-center gap-2 bg-[#e94e3f] hover:bg-[#c72e1c] text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-colors w-full max-w-md"
            >
              <span role="img" aria-label="quote">
                💬
              </span>{" "}
              Get a Free Quote
            </a>
          </div>
        </div>
        {/* Right: Spacer for balance (optional for future use) */}
        <div className="hidden md:block md:w-1/4"></div>
      </section>

      {/* WHAT WE TAKE SECTION */}
      <section className="w-full py-10 md:py-16 bg-[#232323] border-b-4 border-[#e94e3f]">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-extrabold uppercase mb-6 tracking-tight text-[#e94e3f]"
            style={{ fontFamily: "Impact, Arial Black, sans-serif" }}
          >
            Here’s What We’ll Take
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
            {takeList.map(({ icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center text-center"
              >
                <span
                  className="text-5xl md:text-6xl mb-2 select-none"
                  style={{
                    filter:
                      "contrast(1.2) grayscale(0.3) drop-shadow(2px 2px 0 #111)",
                  }}
                >
                  {icon}
                </span>
                <span
                  className="text-lg font-mono uppercase tracking-widest bg-[#191919] px-3 py-1 rounded shadow-inner border-2 border-dashed border-[#e94e3f] text-[#e94e3f]"
                  style={{ letterSpacing: "0.1em" }}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PHOTO GRID SECTION */}
      <section className="w-full py-10 md:py-16 bg-[#181818] border-b-4 border-[#e94e3f]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-200 uppercase tracking-wide">
            Past Jobs
          </h2>
          <PhotoGallery photos={jobPhotos} />
        </div>
      </section>

      {/* PULL QUOTE SECTION */}
      <section className="w-full py-8 bg-[#191919] border-b-4 border-[#e94e3f]">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
          <blockquote
            className="italic text-2xl md:text-3xl text-[#e94e3f] text-center mb-4 font-semibold"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontStyle: "italic",
              fontWeight: "600",
            }}
          >
            “Send us a photo, we’ll handle the rest.”
          </blockquote>
          <a
            href="https://www.facebook.com/people/Junk-Be-Gone-LLC/61559612661609/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#3b5998] hover:bg-[#4267B2] text-white px-5 py-2 rounded-md font-medium transition-all transform hover:scale-105 mt-4 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            Check us out on Facebook!
          </a>
        </div>
      </section>
    </div>
  );
}
